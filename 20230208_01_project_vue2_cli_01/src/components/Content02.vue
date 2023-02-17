<template>
    <div>
        test
        <!-- <span>fjweofjwei</span> -->
        <!-- <table></table> -->
        <!-- <input type="button" value="tmp" @click="next()" /> -->
        <div>

            <label>担保提供物</label>
            <select v-model="collateralProviderZhy.cpTanpoMono">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>

        <div>

            <label>姓</label>
            <input type="text" v-model="collateralProviderZhy.cpNameSei" />
        </div>
        <div>

            <label>名</label>
            <input type="text" v-model="collateralProviderZhy.cpNameMei" />
        </div>

        <div>

            <label>セイ</label>
            <input type="text" v-model="collateralProviderZhy.cpNameSeiKana" />
        </div>
        <div>

            <label>メイ</label>
            <input type="text" v-model="collateralProviderZhy.cpNameMeiKana" />
        </div>
        <div>

            <label>生年月日</label>
            <input type="date" v-model="collateralProviderZhy.cpBirthDateYear" />
        </div>
        <div>

            <label>年齢</label>
            <input type="text" v-model="collateralProviderZhy.cpBirthDate" />
        </div>

        <div>

            <label>担保者となる理由</label>
            <!-- 应该是多选, 先用text -->
            <input type="text" v-model="collateralProviderZhy.cpMoushikomi" />
            <div>
                <input type="checkbox" value="01" v-model="reasons" />
                <input type="checkbox" value="02" v-model="reasons" />
                <input type="checkbox" value="03" v-model="reasons" />
                <input type="checkbox" value="04" v-model="reasons" />
            </div>
        </div>
        <div>

            <label>申請者との関係</label>

            <select v-model="collateralProviderZhy.cpRentaiSaimushaToOnaji">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>3</option>
            </select>
        </div>
        <div>

            <label>携帯電話</label>
            <input type="text" v-model="collateralProviderZhy.cpPhone" />
        </div>
        <div>

            <label>職業</label>
            <select v-model="collateralProviderZhy.cpHonninShokugyoCode">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div>

            <label>勤務先の名称</label>
            <input type="text" v-model="collateralProviderZhy.cpHonninKinmusakiName" />
        </div>
        <div>

            <label>担保理由</label>
            <input type="textarea" v-model="collateralProviderZhy.cpReason" />
        </div>

        <div>

            <label>個人申請者と同じ</label>
            <input type="radio" name="onaji" id="01" value="01" v-model="collateralProviderZhy.cpSame" />
            <input type="radio" name="onaji" id="02" value="01" v-model="collateralProviderZhy.cpSame" />

        </div>

        <div>
            <input type="button" value="1" />
            <input type="button" value="2" @click="next" />
        </div>


</div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            collateralProviderZhy: {
                cpTanpoMono: "",
                cpNameMei: "",
                cpNameMeiKana: "",
                cpNameSei: "",
                cpNameSeiKana: "",
                cpBirthDateYear: "",
                cpBirthDate: "",
                cpMoushikomi: "",
                cpRentaiSaimushaToOnaji: "",
                cpPhone: "",
                cpHonninShokugyoCode: "",
                cpHonninKinmusakiName: "",
                cpReason: "",
                cpSame: ""
            },
            // 担保原因多选项保存为的数组
            reasons: [],

            cpTanpoMonoWarmingTextNotSelectedFlag: false,
            cpNameMeiWarmingTextFormatFlag: false,
            cpNameMeiWarmingTextTooLongFlag: false,
            cpNameMeiKanaWarmingTextFormatFlag: false,
            cpNameMeiKanaWarmingTextTooLongFlag: false,
            cpNameSeiWarmingTextFormatFlag: false,
            cpNameSeiWarmingTextTooLongFlag: false,
            cpNameSeiKanaWarmingTextFormatFlag: false,
            cpNameSeiKanaWarmingTextTooLongFlag: false,
            cpBirthDateYearWarmingTextNotSelectedFlag: false,
            cpBirthDateWarmingTextMinusFlag: false,
            cpMoushikomiWarmingTextNotSelectedFlag: false,
            cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag: false,
            cpPhoneWarmingTextFormatFlag: false,
            cpHonninShokugyoCodeWarmingTextFlag: false,
            cpHonninKinmusakiNameWarmingTextFormatFlag: false,
            cpReasonWarmingTextTooShortFlag: false,
            cpReasonWarmingTextTooLongFlag: false,
            cpSameWarmingTextNotSelectedFlag: false

        }
    },
    methods: {
        next() {
            axios.post("http://localhost:8813/CollateralProviderZhy/save", this.collateralProviderZhy).then();
            console.log(this.collateralProviderZhy);
        }
    },
    watch: {
        // 'collateralProviderZhy.cpMoushikomi': function () {

        // },
        // 监视数组, 在数据变化时将数组转化为字符串
        'reasons': function () {
            this.collateralProviderZhy.cpMoushikomi = this.reasons.join(",")
        },
        'cpTanpoMono.cpTanpoMono': function () {
        },
        'cpTanpoMono.cpNameMei': function () {
        },
        'cpTanpoMono.cpNameMeiKana': function () {
        },
        'cpTanpoMono.cpNameSei': function () {
        },
        'cpTanpoMono.cpNameSeiKana': function () {
        },
        'cpTanpoMono.cpBirthDateYear': function () {
        },
        //         'cpTanpoMono.cpBirthDate': function () {
        // },
        //         'cpTanpoMono.cpMoushikomi': function () {
        // },
        'cpTanpoMono.cpRentaiSaimushaToOnaji': function () {
        },
        'cpTanpoMono.cpPhone': function () {
        },
        'cpTanpoMono.cpHonninShokugyoCode': function () {
        },
        'cpTanpoMono.cpHonninKinmusakiName': function () {
        },
        'cpTanpoMono.cpReason': function () {
        },
        'cpTanpoMono.cpSame': function () {
        }


    },
    created() {
        // 把字符串转化为数组, 传给数组 这个功能先不去写之
        trans
    }
}
</script>
<style>
/* *{
    background-color: red;
} */
</style>