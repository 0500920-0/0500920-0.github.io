export default {
    loading: 'Load 緊……',
    getTitle (pageTitle?: string) {
        if (!pageTitle || pageTitle === this?.home?.title) return '馮明佑 求其整嘅網頁🤣'
        return `${pageTitle} — 馮明佑 求其整嘅網頁🤣`
    },
    contentCard: {
        external: '網頁',
        internal: '去睇',
    },
    upperRightMenu: {
        lastPage: '上一頁',
        forceReload: '格硬 (?) Reload',
    },
    home: {
        title: '首頁',
        name: '馮明佑',
        department: '國立臺灣大學化學系',
    },
    drawer: {
        name: '馮明佑',
        department: 'NTUCH',
    },
    periodicTable: {
        title: '元素週期表',
        description: '……',
        setting: '設定',
    },
    random: {
        title: '臺大食乜嘢',
        description: '簡單嘅隨機地點產生程式 📍',
        randomType: {
            default: '預設',
            nearest: '距離優先',
            customize: '自訂',
        },
        resultCard: {
            resetButton: '重置產生器',
            checkButton: '各地點機率',
            defaultTitle: '📍請撳右下角',
            locating: '攞緊定位……',
        },
        dialog: {
            checkTitle: '各地點機率',
            customizeTitle: '請修改權重',
            leftList: '剩低嘅地點',
            pickedList: '抽咗嘅地點',
            empty: '冇',
            returnButton: '返回',
            submitButton: '提交',
            cancelButton: '取消',
            weight: '權重',
            defaultWeightTag: '預設權重：',
        },
        snackbar: {
            msg: '🔄請重置產生器',
            button: '重置',
        },
        fab: {
            pick: '隨機產生',
            reset: '重置產生器',
        },
        locationList: {
            'XiaoFu': { name: '小福樓' },
            'ApexBuilding': { name: '卓越聯合中心', alias: '鹿鳴堂隔離' },
            'TsunHsien': { name: '二活 | 尊賢館' },
            'NewMoonPavilion': { name: '新月台' },
            'DrunkenMoonLake': { name: '醉月湖畔', alias: '泊實商號 | 稍飽' },
            'SportsCenter': { name: '綜合體育館', alias: '後台咖啡' },
            'CheeChun': { name: '次震宇宙館', alias: 'JM Cafe & Bistro' },
            'M1': { name: '男一', alias: '我家廚房' },
            'M7': { name: '男七' },
            'M8': { name: '男八' },
            'F9': { name: '女九' },
            'XiaoXiaoFu': { name: '小小福' },
            '118': { name: '118', alias: '和平東路二段' },
            'Wenzhou': { name: '溫州街', alias: '新生南路' },
            'Gongguan': { name: '公館', alias: '臺大校門' },
            'Shuiyuan': { name: '水源市場', alias: '公館夜市' },
        },
    },
    about: {
        title: '關於呢個網頁',
        description: '我用嘅函式庫/框架',
        dependency: {
            title: '我用嘅函式庫/框架',
            external: '網頁',
            react: {
                name: 'React',
                description: '用嚟整使用者界面的 JavaScript 函式庫 ⚛️ (摘自 https://zh-hant.reactjs.org/)',
            },
            materialUI: {
                name: 'Material-UI',
                description: '基於 Material Design 嘅 React Component 設計框架',
            },
            ts: {
                name: 'TypeScript',
                description: '由 Microsoft 開發嘅開源程式語言，可轉譯做 Javascript',
            },
            reactRouter: {
                name: 'React Router',
                description: '管理 Route 嘅 React 工具',
            },
            periodicTableJSON: {
                name: 'Bowserinator/Periodic-Table-JSON',
                description: '元素週期表嘅資料 (JSON 格式)',
            },
        },
    },
    profile: { // external
        title: '關於我',
        description: '履歷 | 前端程式設計堂功課',
    },
};