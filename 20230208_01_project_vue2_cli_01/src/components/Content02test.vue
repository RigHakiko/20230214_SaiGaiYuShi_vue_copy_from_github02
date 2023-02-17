<template>
    <div>
        test
        <!-- <span>fjweofjwei</span> -->
        <!-- <table></table> -->
        <!-- <input type="button" value="tmp" @click="next()" /> -->
        <div>

            <label>担保提供物</label>
            <select v-model="collateralProviderZhy.CpTanpoMono">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>

        <div>

            <label>姓</label>
            <input type="text" v-model="collateralProviderZhy.CpNameSei" />
        </div>
        <div>

            <label>名</label>
            <input type="text" v-model="collateralProviderZhy.CpNameMei" />
        </div>

        <div>

            <label>セイ</label>
            <input type="text" v-model="collateralProviderZhy.CpNameSeiKana" />
        </div>
        <div>

            <label>メイ</label>
            <input type="text" v-model="collateralProviderZhy.CpNameMeiKana" />
        </div>
        <div>

            <label>生年月日</label>
            <input type="date" v-model="collateralProviderZhy.CpBirthDateYear" />
        </div>
        <div>

            <label>年齢</label>
            <input type="text" v-model="collateralProviderZhy.CpBirthDate" />
        </div>

        <div>

            <label>担保者となる理由</label>
            <!-- 应该是多选, 先用text -->
            <input type="text" v-model="collateralProviderZhy.CpMoushikomi" />
        </div>
        <div>

            <label>申請者との関係</label>

            <select v-model="collateralProviderZhy.CpRentaiSaimushaToOnaji">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>3</option>
            </select>
        </div>
        <div>

            <label>携帯電話</label>
            <input type="text" v-model="collateralProviderZhy.CpPhone" />
        </div>
        <div>

            <label>職業</label>
            <select v-model="collateralProviderZhy.CpHonninShokugyoCode">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div>

            <label>勤務先の名称</label>
            <input type="text" v-model="collateralProviderZhy.CpHonninKinmusakiName" />
        </div>
        <div>

            <label>担保理由</label>
            <input type="textarea" v-model="collateralProviderZhy.CpReason" />
        </div>

        <div>

            <label>個人申請者と同じ</label>
            <input type="radio" name="onaji" id="01" value="01" v-model="collateralProviderZhy.CpSame" />
            <input type="radio" name="onaji" id="02" value="01" v-model="collateralProviderZhy.CpSame" />

        </div>

        <div>
            <input type="button" value="1" />
            <input type="button" value="2" @click="next"/>
        </div>


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
                CpBirthDateYear: "",
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
        next() {
            axios.post("http://localhost:8813/CollateralProviderZhy/save", this.collateralProviderZhy).then();
            console.log(this.collateralProviderZhy);
        }
    }
}
</script>
<style>
/* *{
    background-color: red;
} */
</style>