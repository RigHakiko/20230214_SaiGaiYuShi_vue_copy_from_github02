<template>
    <div>
        test
        <span>fjweofjwei</span>
        <!-- <table></table> -->
        <input type="button" value="tmp" @click="" />
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            collateralProviderZhy: {
                CpTanpoMono: "",
                CpNameMei: "",
                CpNameMeiKana: "",
                CpNameSei: "",
                CpNameSeiKana: "",
                CpBirthDateYear: null,
                CpBirthDate: "",
                CpMoushikomi: "",
                CpRentaiSaimushaToOnaji: "",
                CpPhone: "",
                CpHonninShokugyoCode: "",
                CpHonninKinmusakiName: "",
                CpReason: "",
                CpSame: ""
            }
        }
    },
    methods: {
        next(){
            axios.post("http://localhost:8813/CollateralProviderZhy/save", this.collateralProviderZhy)
        }
    }
}
</script>
<style>
/* *{
    background-color: red;
} */
</style>