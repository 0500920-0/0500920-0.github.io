import { useReducer } from 'react';
import { Coords } from './useGeolocation';
import getDistance from './getDistance';

import { RandomItem } from './locationList';

export interface StateItem extends RandomItem {
    weight: number;
    distance?: number;
    // pinLayer?: any; // for OpenLayers, if needed
}

interface State {
    pickedItem: StateItem | null;
    originalList: RandomItem[];
    condition: Condition;
    coords?: Coords;
    randomList: StateItem[];
    pickedList: StateItem[];
    totalWeight: number;
    done: boolean;
}

export type Condition = 'default' | 'nearest' | 'customize';
interface PickAction {
    type: 'pick';
}
interface ResetAction {
    type: 'reset';
    condition?: Condition;
    originalList?: RandomItem[];
    coords?: Coords;
}
type Action = PickAction | ResetAction;

function reducer (state: State, action: Action) {
    switch (action.type) {
        case 'pick':
            if (state.randomList.length === 0) return {
                ...state,
                done: true,
            };
            let randomNumber = Math.random() * state.totalWeight;
            let pickedItem = { weight: 0 } as StateItem;
            for (let item of state.randomList) {
              randomNumber -= item.weight;
              if (randomNumber < 0) {
                pickedItem = item;
                break;
              }
            }
            return {
                ...state,
                pickedItem,
                randomList: state.randomList.filter((item) => item !== pickedItem),
                pickedList: [...state.pickedList, pickedItem],
                totalWeight: state.totalWeight - pickedItem.weight,
                done: false,
            };
        
        case 'reset':
            const originalList = action.originalList ?? state.originalList;
            const condition = action.condition ?? state.condition;
            const coords = action.coords ?? state.coords;
            return init(originalList, condition, coords);
        default:
            throw new TypeError('Wrong action.type!');
    }
}

function init (initialList: RandomItem[], condition: Condition = 'default', coords?: Coords): State {
    const randomList: StateItem[] = initialList.map((item) => ({
            ...item,
            weight: getWeight(condition, item, coords),
        }));
    return {
        pickedItem: null,
        originalList: [...initialList], // shallow copy of initialList
        condition,
        coords,
        randomList,
        pickedList: [],
        totalWeight: randomList.reduce((acc, item) => acc + item.weight, 0),
        done: false,
    };
}

function getWeight (condition: Condition, item: RandomItem, coords?: Coords) {
    switch (condition) {
        case 'nearest':
            if (!coords) throw new TypeError('coords does not exist!');
            const distance = getDistance(item, coords);
            if (distance < 500) return item.defaultWeight*4;
            if (distance < 1000) return item.defaultWeight*3;
            if (distance < 2000) return item.defaultWeight*2;
            else return item.defaultWeight*1;
        case 'customize':
            return item.weight ?? item.defaultWeight;
        default:
            return item.defaultWeight;
    }
}

export default function useRandomizer (initialList: RandomItem[]) {
    return useReducer(reducer, initialList, init);
}