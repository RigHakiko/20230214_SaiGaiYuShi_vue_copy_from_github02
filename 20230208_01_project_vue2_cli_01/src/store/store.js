import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        KoJinJoHoZhyInContent01: {
            cpNamesei: "", //姓（漢字）
            cpNamemei: "",　//名（漢字）
            cpNameseikana: "",　//セイ
            cpNamemeikana: "",　//メイ
            cuAlphlastname: "", //姓（ローマ字）
            cuAlphfirstname: "", //名（ローマ字）
            cpCountry: "", //国籍
            cpBirthdate: "", //生年月日
            cpSex: "", //性別
            cpDenwa: "", //電話番号
            cpPhone: "", //携帯電話
            cpShokugyocode: "", //職業
            cpKinmusakiname: "" //勤務先 
        },
        CollateralProviderZhyInContent02: {
            CpTanpoMono: "",
            CpNameMei: "",
            CpNameMeiKana: "",
            CpNameSei: "",
            CpNameSeiKana: "",
            CpBirthDateYear: "",
            CpBirthDate: null,
            CpMoushikomi: "",
            CpRentaiSaimushaToOnaji: "",
            CpPhone: "",
            CpHonninShokugyoCode: "",
            CpHonninKinmusakiName: "",
            CpReason: "",
            CpSame: ""
        }
    }
});

export default store;