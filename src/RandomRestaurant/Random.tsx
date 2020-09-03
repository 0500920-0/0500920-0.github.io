import React from 'react';

import RandomTab from './RandomTab';

import RandomFab from './RandomFab';
import ResultCard from './ResultCard';
// import RadioButtonsGroup from './RadioButtonsGroup';
import CheckDialog from './CheckDialog';
import CustomizeDialog from './CustomizeDialog';

import useRandomizer, { Condition } from './useRandomizer';
import useGeolocation from './useGeolocation';

import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from '../hooks/TranslationContext';

import { locationList, RandomItem } from './locationList';

const useStyles = makeStyles(theme => ({
    result: {
        color: theme.palette.grey[100],
        textAlign: 'center',
    },

    gridContainer: {
        flexGrow: 1,
        margin: 0,
        width: '100%',
        padding: theme.spacing(2),
    },

    gridItem: {
        // margin: theme.spacing(1),
    },

    snackbar: {
        [theme.breakpoints.down('xs')]: {
            bottom: 90,
        },
    },

}));

export default function Random() {
    const classes = useStyles();
    const { translation } = useTranslation();
    const [{ pickedItem, totalWeight, randomList, pickedList, originalList, done }, dispatch] = useRandomizer(locationList);
    const [tabIndex, setTabIndex] = React.useState(0);
    const [randomType, setRandomType] = React.useState('default' as Condition);
    const [isCheckDialogOpen, setCheckDialogOpen] = React.useState(false);
    const [isCustomizeDialogOpen, setCustomizeDialogOpen] = React.useState(false);
    const [isSnackBarOpen, setSnackBarOpen] = React.useState(false);
    const { coords, isPending: isDetecting, startGeolocation } = useGeolocation();

    const randomTypeList = [
        { id: 'default' as Condition, name: translation?.random?.randomType?.default },
        { id: 'nearest' as Condition, name: translation?.random?.randomType?.nearest },
        { id: 'customize' as Condition, name: translation?.random?.randomType?.customize }, // , disabled: true
    ];

    React.useEffect(() => {
        if (done) setSnackBarOpen(true);
    }, [done]);

    React.useEffect(() => {
        if (randomType === 'nearest' && !isDetecting) {
            dispatch({ type: 'reset', condition: 'nearest', coords });
        }
    }, [randomType, isDetecting, dispatch, coords]);

    function handleChangeIndex(evt: React.ChangeEvent<{}>, newValue: number) {
        const newRandomType = randomTypeList[newValue].id
        setRandomType(newRandomType);
        setTabIndex(newValue);

        if (newRandomType === 'nearest') {
            startGeolocation();
            return; // handle in second useEffect
        };

        if (newRandomType === 'customize') {
            setCustomizeDialogOpen(true);
            return; // handle in handleCustomizeDialogClose
        };

        dispatch({ type: 'reset', originalList: locationList, condition: newRandomType });
    }

    function handleFabClick() {
        if (done) dispatch({ type: 'reset', condition: randomType, coords });
        else dispatch({ type: 'pick' });
    }

    // will be delete?
    /* function handleLocationChange(evt) {
        setRandomType(evt.target.value);
        dispatch({ type: 'reset', payload: locationList, condition: evt.target.value });
    } */

    function handleCheckClick() {
        setCheckDialogOpen(true);
    }
    function handleResetClick(evt: React.MouseEvent) {
        dispatch({ type: 'reset', /* condition: randomType */ }); // if (done) 
    }

    function handleCustomizeDialogClose (event: React.MouseEvent | {}, submitList: RandomItem[] | null) {
        setCustomizeDialogOpen(false);
        if (submitList == null) {
            setTabIndex(0);
            setRandomType('default');
            dispatch({ type: 'reset', originalList: locationList, condition: 'default' });
            return;
        }
        dispatch({ type: 'reset', condition: 'customize', originalList: submitList });
    }

    function getTitle (title?: string) {
        if (randomType === 'nearest' && isDetecting === true) return translation?.random?.resultCard?.locating;
        return title ?? translation?.random?.resultCard?.defaultTitle;
    }

    return <>
        <RandomTab index={tabIndex} onChangeIndex={handleChangeIndex} list={randomTypeList} />

        <Grid container justify="center" alignItems="center" className={classes.gridContainer}> {/* spacing={3} */}
            {/* <Grid item xs={12} sm={6}>
                    <RadioButtonsGroup
                        value={randomType}
                        onChange={handleLocationChange}
                    />
                </Grid> */}
            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                <ResultCard
                    title={getTitle((translation?.random?.locationList as any)?.[pickedItem?.id ?? '']?.name)}
                    subtitle={(translation?.random?.locationList as any)?.[pickedItem?.id ?? '']?.alias}
                    onResetClick={handleResetClick}
                    onCheckClick={handleCheckClick}
                />
            </Grid>
        </Grid>

        <RandomFab isResetButton={done} onClick={handleFabClick} disabled={isDetecting} />
        <CheckDialog randomList={randomList} pickedList={pickedList} totalWeight={totalWeight} open={isCheckDialogOpen} onClose={() => setCheckDialogOpen(false)} />
        <CustomizeDialog randomList={originalList} open={isCustomizeDialogOpen} onClose={handleCustomizeDialogClose} />
        <Snackbar
            open={isSnackBarOpen}
            autoHideDuration={3000}
            message={translation?.random?.snackbar?.msg}
            onClose={() => setSnackBarOpen(false)}
            action={
                <Button color="inherit" size="small" onClick={handleResetClick}>
                    {translation?.random?.snackbar?.button}
                </Button>
            }
            className={classes.snackbar}
        />
    </>;
}