export default {
    loading: 'Loading...',
    getTitle (pageTitle?: string) {
        if (!pageTitle || pageTitle === this?.home?.title) return 'Meng Iao Fong 🤣';
        return `${pageTitle} -- Meng Iao Fong 🤣`;
    },
    contentCard: {
        external: 'Link',
        internal: 'Go',
    },
    upperRightMenu: {
        lastPage: 'Last Page',
        forceReload: 'Refresh',
        print: 'Print...',
    },
    home: {
        title: 'Home',
        name: 'Meng Iao Fong',
        department: 'Dept. of Chemistry, National Taiwan University',
    },
    drawer: {
        name: 'Meng Iao Fong',
        department: 'NTUCH',
    },
    periodicTable: {
        title: 'Periodic Table',
        description: '...',
        setting: 'Setting',
    },
    random: {
        title: 'Random Restaurant',
        description: 'Simple program for a random location near NTU 📍.',
        randomType: {
            default: 'Default',
            nearest: 'Nearest',
            customize: 'Customize',
        },
        resultCard: {
            resetButton: 'Reset Generator',
            checkButton: 'Probability List',
            defaultTitle: '📍 Press the Bottom-Right Button',
            locating: 'Getting Current Location...',
        },
        dialog: {
            checkTitle: 'Probability List',
            customizeTitle: 'Customize the Weights...',
            leftList: 'Random Pool',
            pickedList: 'Picked',
            empty: 'None',
            returnButton: 'Return',
            submitButton: 'Submit',
            cancelButton: 'Cancel',
            weight: 'Weight',
            defaultWeightTag: 'Default Weight: ',
        },
        snackbar: {
            msg: '🔄 Please Reset the Generator.',
            button: 'Reset',
        },
        fab: {
            pick: 'Pick!',
            reset: 'Reset Generator',
        },
        locationList: {
            'XiaoFu': { name: 'Xiao Fu Commissary' },
            'ApexBuilding': { name: 'The Apex Building', alias: 'Lu Ming Hall' },
            'TsunHsien': { name: '2nd Student Activity Center | Tsun Hsien Hall' },
            'NewMoonPavilion': { name: 'New Moon Pavilion' },
            'DrunkenMoonLake': { name: 'Drunken Moon Lake', alias: 'THE PROS FOOD LAB | SOULBA' },
            'SportsCenter': { name: 'Sports Center', alias: 'Backstage Café' },
            'CheeChun': { name: 'Chee-Chun Leung Cosmology Hall', alias: 'JM Cafe & Bistro' },
            'M1': { name: '1st Men\'s Dorm' },
            'M7': { name: '7st Men\'s Dorm' },
            'M8': { name: '8st Men\'s Dorm' },
            'F9': { name: '9th Women\'s Dorm' },
            'XiaoXiaoFu': { name: 'Xiao Xiao Fu Commissary' },
            '118': { name: 'Lane 118', alias: 'Sec. 2, Heping E. Rd.' },
            'Wenzhou': { name: 'Wenzhou St.', alias: 'Xinsheng S. Rd.' },
            'Gongguan': { name: 'Gongguan', alias: 'The University Promenade' },
            'Shuiyuan': { name: 'Shuiyuan Market', alias: 'Gongguan Night Market' },
        },
    },
    about: {
        title: 'About',
        description: 'Library / Framework',
        dependency: {
            title: 'Library / Framework',
            external: 'Link',
            react: {
                name: 'React',
                description: 'A JavaScript library for building user interfaces ⚛️. (Quoted from https://reactjs.org/)',
            },
            materialUI: {
                name: 'Material-UI',
                description: 'React component design framework based on Material Design.',
            },
            ts: {
                name: 'TypeScript',
                description: 'An open-sourced script language which can be transpiled to Javascript. Developed by Microsoft.',
            },
            reactRouter: {
                name: 'React Router',
                description: 'A tool for managing routes on React.',
            },
            periodicTableJSON: {
                name: 'Bowserinator/Periodic-Table-JSON',
                description: 'A json of the entire periodic table.',
            },
        },
    },
    profile: { // external
        title: 'Profile',
        description: 'Resume | HW of Frontend Programming',
    },
    github: { // external
        title: 'GitHub',
    },
};