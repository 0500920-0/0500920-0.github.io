import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { blueGrey, grey } from '@material-ui/core/colors';

// import ElementCell from './ElementCell';
// import Paper from '@material-ui/core/Paper';

const ElementCell = React.lazy(() => import('./ElementCell'));

const useStyle = makeStyles((theme) => ({
    table: {
        /**
         * To make the right padding shown normally, display should be inline
         * Ref.: https://stackoverflow.com/questions/50236753/padding-right-or-margin-right-for-content-that-exceeds-page-width-body-viewport
         */
        padding: theme.spacing(2),
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(18, 2fr)',
        justifyItems: 'center',
        gridTemplateRows: `repeat(7, 2fr) 1fr repeat(2, 2fr)`,
        alignItem: 'center',
        gridGap: theme.spacing(2),
    },
    description: {
        // backgroundColor: theme.palette.type === 'dark' ? blueGrey[900] : grey[100],
        // transition: `all ${theme.transitions.duration.shortest}ms ease-in`,

        gridColumnStart: 6,
        gridColumnEnd: 10,
        gridRowStart: 1,
        gridRowEnd: 4,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > div': {
            transform: 'scale(2)',
        },
    },
}));

type Element = import('./PeriodicTableJSON').Element
// type Element = import('./periodic-table-api').Element

export default function PeriodicTable () {
    const classes = useStyle();
    const [descriptionIdx, setIdx] = useState(0);

    const [periodicTable, setTable] = useState([] as Element[]);
    useEffect(() => {
        // fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
        //     .then((res) => res.json())
        //     .then((res) => setTable(res.elements.slice(0, 118) as Element[]));
        import('./PeriodicTableJSON.json')
            .then((res) => res.default.elements.slice(0, 118) as Element[])
            .then((res) => setTable(res))

        // fetch('https://periodic-table-api.herokuapp.com/')
        //     .then((res) => res.json())
        //     .then((res) => setTable(res as Element[]));
        // import('./periodic-table-api.json')
        //     .then((res) => res.default as Element[])
        //     .then((res) => setTable(res))
    }, []);

    function handleHover (idx: number) {
        return function (evt: React.MouseEvent) {
            setIdx(idx);
        }
    }

    function elementCellProps (data: Element, idx: number) {
        return {
            onMouseEnter: handleHover(idx),
            data,
            key: idx,
            style: {
                gridColumnStart: data.xpos,
                gridColumnEnd: data.xpos + 1,
                gridRowStart: data.ypos,
                gridRowEnd: data.ypos + 1,
            },
        };
    }

    return <>
        {/* <NavBar {...NavBarProps} /> */}
        <div className={classes.table}>
            <div className={classes.description}> {/* Paper elevation={0} */}
                {periodicTable[descriptionIdx] && <ElementCell data={periodicTable[descriptionIdx]}/>}
            </div>
            {
                periodicTable
                    .map((item, idx) => <ElementCell {...elementCellProps(item, idx)} />)
            }
        </div>
    </>;
}