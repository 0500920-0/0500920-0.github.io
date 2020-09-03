export default {
    loading: '載入中……',
    getTitle (pageTitle?: string) {
        if (!pageTitle || pageTitle === this?.home?.title) return '馮明佑 隨便弄的網頁🤣'
        return `${pageTitle} — 馮明佑 隨便弄的網頁🤣`
    },
    contentCard: {
        external: '網頁',
        internal: '前往',
    },
    upperRightMenu: {
        lastPage: '上一頁',
        forceReload: '強制重新整理',
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
        title: '臺大吃什麼',
        description: '簡單ㄉ隨機地點產生程式 📍',
        randomType: {
            default: '預設',
            nearest: '距離優先',
            customize: '自訂',
        },
        resultCard: {
            resetButton: '重置產生器',
            checkButton: '各地點機率',
            defaultTitle: '📍請按右下角',
            locating: '取得定位中……',
        },
        dialog: {
            checkTitle: '各地點機率',
            customizeTitle: '請修改權重',
            leftList: '剩餘地點',
            pickedList: '已抽出',
            empty: '無',
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
            'ApexBuilding': { name: '卓越聯合中心', alias: '鹿鳴堂旁' },
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
        title: '關於本網頁',
        description: '使用的函式庫',
        dependency: {
            title: '使用的函式庫/框架/參考資料',
            external: '網頁',
            react: {
                name: 'React',
                description: '用來實作使用者界面的 JavaScript 函式庫 ⚛️ (摘自 https://zh-hant.reactjs.org/)',
            },
            materialUI: {
                name: 'Material-UI',
                description: '基於 Material Design 的 React Component 設計框架',
            },
            ts: {
                name: 'TypeScript',
                description: '由 Microsoft 開發的開源程式語言，可轉譯為 Javascript',
            },
            reactRouter: {
                name: 'React Router',
                description: '管理 Route 的 React 工具',
            },
            periodicTableJSON: {
                name: 'Bowserinator/Periodic-Table-JSON',
                description: '元素週期表的資料 (JSON 格式)',
            },
        },
    },
    profile: { // external
        title: '關於我',
        description: '履歷 | 前端程式設計課作業',
    },
};