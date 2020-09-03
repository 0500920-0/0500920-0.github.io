import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import { red, lightBlue, blue, purple, yellow, pink, teal, lightGreen, cyan, indigo, amber, deepPurple, orange } from '@material-ui/core/colors';

import { elementJapaneseNameList } from './element-name-jp';
import { elementChineseNameList } from './element-name-zh';
type Element = import('./PeriodicTableJSON').Element
type categoryType = import('./PeriodicTableJSON').categoryType
// type Element = import('./periodic-table-api').Element

const useStyle = makeStyles((theme) => ({
    cell: ({ xpos, ypos, category, showJPName = false }: Element & { showJPName?: boolean }) => ({
        backgroundColor: getColorByCategory(category, theme.palette.type, xpos),
        transition: `all ${theme.transitions.duration.shortest}ms ease-out`,

        width: 80,
        height: 80,
        padding: theme.spacing(0.5),

        display: 'grid',
        gridTemplateAreas: `
            "number bpmp bpmp"
            "symbol zhname shells"
            "name name shells"
            ${showJPName ? '"jpname jpname shells"' : ''}
            "density density shells"
            "mass mass shells"
            "config config shells"
        `,
        gridTemplateColumns: '2fr 5fr 10px',
        gridTemplateRows: `
            auto
            2fr
            1fr
            ${showJPName ? '1fr' : ''}
            1fr
            1fr
            1fr
        `,
        justifyItems: 'start',
        alignItems: 'center',

        fontSize: 6,
        whiteSpace: 'nowrap',
        textOverflow: 'fade',
    }),
    number: {
        gridArea: 'number',
        alignSelf: 'start',
        fontSize: 10,
    },
    symbol: {
        gridArea: 'symbol',
        fontSize: 12,
        // fontWeight: 'bold',
    },
    zhName: {
        gridArea: 'zhname',
        fontSize: 11,
    },
    bpmp: {
        gridArea: 'bpmp',
        justifySelf: 'end',
        alignSelf: 'start',
        textAlign: 'end',
    },
    boil: {
        color: theme.palette.type === 'dark' ? red[100] : red[500],
    },
    melt: {
        color: theme.palette.type === 'dark' ? lightBlue[100] : lightBlue[500],
    },
    name: {
        gridArea: 'name',
        // fontSize: 10,
    },
    jpName: ({ showJPName = false }: { showJPName?: boolean }) => ({
        gridArea: showJPName ? 'jpname' : undefined,
        display: showJPName ? undefined : 'none',
    }),
    // ruby: {
    //     fontSize: '75%',
    // },
    density: {
        gridArea: 'density',
    },
    config: {
        gridArea: 'config',
    },
    mass: {
        gridArea: 'mass',
    },
    shells: {
        gridArea: 'shells',
        justifySelf: 'end',
        alignSelf: 'end',
        textAlign: 'end',
    },
}));

interface ElementCellProps extends PaperProps {
    data: Element;
}
function ElementCell ({data, ...props}: ElementCellProps) {
    const classes = useStyle({ ...data, showJPName: true });

    return <Paper className={classes.cell} {...props}>
        <div className={classes.number}>{data.number}</div>
        <div className={classes.symbol}>{data.symbol}</div>
        <div className={classes.zhName}>{elementChineseNameList[data.number - 1].name}</div>
        <div className={classes.bpmp}>
            <div className={classes.boil}>{data.boil ? `b.p. ${data.boil} K` : <br/>}</div>
            <div className={classes.melt}>{data.melt ? `m.p. ${data.melt} K` : <br/>}</div>
        </div>
        <div className={classes.name}>{data.name}</div>
        {/* <div className={classes.jpName}>{getJPName(data.number)}</div> */}
        <div className={classes.jpName}>{elementJapaneseNameList[data.number - 1].name}</div>
        <div className={classes.density}>{getDensity(data)}</div>
        <div className={classes.config}>{getSuperscriptedConfig(data.electron_configuration_semantic)}</div>
        <div className={classes.mass}>{data.atomic_mass}</div>
        <div className={classes.shells}>{[...data.shells].reverse().map((shell, idx) => <div key={idx}>{shell}</div>)}</div>
    </Paper>;
}

// export default ElementCell;
export default React.memo(ElementCell);

function getSuperscriptedConfig (config: string) {
    return config.split(' ').map((str) => {
        if (/\d[spdf]\d+/.test(str)) return [str.slice(0, 2), <sup key={str}>{str.slice(2)}</sup>, ' '];
        return str + ' ';
    });
}
function getDensity ({ density, phase }: Element) {
    if (!density) return <br/>;
    if (phase === 'Gas') return `${density} g/L`;
    return <>{density} g/cm<sup>3</sup></>;
}
// function getJPName (number: number) {
//     const jpItem = elementJapaneseNameList[number - 1];
//     if (jpItem.alias) return <ruby className={classes.ruby}>{jpItem.name}<rp>(</rp><rt>{jpItem.alias}</rt><rp>)</rp></ruby>;
//     return <span>{jpItem.name}</span>
// }

const darkTheme: { [key in categoryType | 'halogen']?: string } = {
    'alkali metal': orange[900],
    'alkaline earth metal': yellow[900],
    'transition metal': lightGreen[900],
    'post-transition metal': teal[900],
    'metalloid': cyan[800],
    'diatomic nonmetal': lightBlue[800],
    'polyatomic nonmetal': lightBlue[800],
    'halogen': blue[900],
    'noble gas': deepPurple[800],
    'lanthanide': indigo[800],
    'actinide': pink[800],
};
const lightTheme: { [key in categoryType | 'halogen']?: string } = {
    'alkali metal': amber[100],
    'alkaline earth metal': yellow[100],
    'transition metal': lightGreen[100],
    'post-transition metal': teal[100],
    'metalloid': cyan[100],
    'diatomic nonmetal': blue[100],
    'polyatomic nonmetal': blue[100],
    'halogen': indigo[50],
    'noble gas': deepPurple[50],
    'lanthanide': purple[50],
    'actinide': pink[50],
};
function getColorByCategory (category: categoryType | 'halogen', brightnessType: 'dark' | 'light', xpos: number) {
    if (category === 'diatomic nonmetal' && xpos === 17) category = 'halogen';
    
    return brightnessType === 'dark' ? darkTheme[category] : lightTheme[category];
}