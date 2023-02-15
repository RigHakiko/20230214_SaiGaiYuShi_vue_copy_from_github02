import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        KoJinJoHoZhyInContent01: {
            
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