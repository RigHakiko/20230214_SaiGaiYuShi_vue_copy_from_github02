<template>
    <div>
        test
        <!-- <span>fjweofjwei</span> -->
        <!-- <table></table> -->
        <!-- <input type="button" value="tmp" @click="next()" /> -->
        <div>

            <label>担保提供物</label>
            <div class="kiho">

                <select v-model="collateralProviderZhy.cpTanpoMono">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>

        <div>

            <label>姓</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpNameSei" />
            </div>
        </div>
        <div>


            <label>名</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpNameMei" />
            </div>
        </div>

        <div>

            <label>セイ</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpNameSeiKana" />
            </div>
        </div>
        <div>

            <label>メイ</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpNameMeiKana" />
            </div>
        </div>
        <div>

            <label>生年月日</label>
            <div class="kiho">

                <input type="date" v-model="collateralProviderZhy.cpBirthDateYear" />
            </div>
        </div>
        <div>

            <label>年齢</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpBirthDate" />
            </div>
        </div>

        <div>

            <label>担保者となる理由</label>
            <div class="kiho">


                <!-- 应该是多选, 先用text -->
                <input type="text" v-model="collateralProviderZhy.cpMoushikomi" />
                <div>
                    <input type="checkbox" value="01" v-model="reasons" />
                    <input type="checkbox" value="02" v-model="reasons" />
                    <input type="checkbox" value="03" v-model="reasons" />
                    <input type="checkbox" value="04" v-model="reasons" />
                </div>
            </div>
        </div>
        <div>

            <label>申請者との関係</label>

            <div class="kiho">


                <select v-model="collateralProviderZhy.cpRentaiSaimushaToOnaji">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>3</option>
                </select>
            </div>
        </div>
        <div>

            <label>携帯電話</label>
            <div class="kiho">


                <input type="text" v-model="collateralProviderZhy.cpPhone" />
            </div>
        </div>
        <div>

            <label>職業</label>
            <div class="kiho">

                <select v-model="collateralProviderZhy.cpHonninShokugyoCode">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        </div>
        <div>

            <label>勤務先の名称</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpHonninKinmusakiName" />
            </div>
        </div>
        <div>

            <label>担保理由</label>
            <div class="kiho">

                <input type="textarea" v-model="collateralProviderZhy.cpReason" />
            </div>
        </div>

        <div>

            <label>個人申請者と同じ</label>
            <div class="kiho">

                <input type="radio" name="onaji" id="01" value="01" v-model="collateralProviderZhy.cpSame" />
                <input type="radio" name="onaji" id="02" value="01" v-model="collateralProviderZhy.cpSame" />
            </div>

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
            cpSameWarmingTextNotSelectedFlag: false,

            regKanji: new RegExp('^[\\u4E00-\\u9FA5]+$'),
            regKana: new RegExp('^[ｦ-ﾝ]+$'),
            regDenwa: new RegExp('^0[789]0-[0-9]{4}-[0-9]{4}$')
        }

    },
    methods: {
        next() {

            this.cpTanpoMonoCheck();
            this.cpNameMeiCheck();
            this.cpNameMeiKanaCheck();
            this.cpNameSeiCheck();
            this.cpNameSeiKanaCheck();
            this.cpBirthDateYearCheck();
            this.cpBirthDateCheck();
            this.cpMoushikomiCheck();
            this.cpRentaiSaimushaToOnajiCheck();
            this.cpPhoneCheck();
            this.cpHonninShokugyoCodeCheck();
            this.cpHonninKinmusakiNameCheck();
            this.cpReasonCheck();
            this.cpSameCheck();

            this.cpTanpoMonoChecked = ((!this.cpTanpoMonoWarmingTextNotSelectedFlag));
            this.cpNameMeiChecked = ((!this.cpNameMeiWarmingTextFormatFlag) || (!this.cpNameMeiWarmingTextTooLongFlag));
            this.cpNameMeiKanaChecked = ((!this.cpNameMeiKanaWarmingTextFormatFlag) || (!this.cpNameMeiKanaWarmingTextTooLongFlag));
            this.cpNameSeiChecked = ((!this.cpNameSeiWarmingTextFormatFlag) || (!this.cpNameSeiWarmingTextTooLongFlag));
            this.cpNameSeiKanaChecked = ((!this.cpNameSeiKanaWarmingTextFormatFlag) || (!this.cpNameSeiKanaWarmingTextTooLongFlag));
            this.cpBirthDateYearChecked = ((!this.cpBirthDateYearWarmingTextNotSelectedFlag));
            this.cpBirthDateChecked = ((!this.cpBirthDateWarmingTextMinusFlag));
            this.cpMoushikomiChecked = ((!this.cpMoushikomiWarmingTextNotSelectedFlag));
            this.cpRentaiSaimushaToOnajiChecked = ((!this.cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag));
            this.cpPhoneChecked = ((!this.cpPhoneWarmingTextFormatFlag));
            this.cpHonninShokugyoCodeChecked = ((!this.cpPhoneWarmingTextFormatFlag));
            this.cpHonninKinmusakiNameChecked = ((!this.cpHonninKinmusakiNameWarmingTextFormatFlag));
            this.cpReasonChecked = ((!this.cpReasonWarmingTextTooShortFlag) || (!this.cpReasonWarmingTextTooLongFlag));
            this.cpSameChecked = ((!this.cpSameWarmingTextNotSelectedFlag));

            this.checkedAllFlag =
                this.cpTanpoMonoChecked &&
                this.cpNameMeiChecked &&
                this.cpNameMeiKanaChecked &&
                this.cpNameSeiChecked &&
                this.cpNameSeiKanaChecked &&
                this.cpBirthDateYearChecked &&
                this.cpBirthDateChecked &&
                this.cpMoushikomiChecked &&
                this.cpRentaiSaimushaToOnajiChecked &&
                this.cpPhoneChecked &&
                this.cpHonninShokugyoCodeChecked &&
                this.cpHonninKinmusakiNameChecked &&
                this.cpReasonChecked &&
                this.cpSameChecked;

            if (this.checkedAllFlag) {

                axios.post("http://localhost:8813/CollateralProviderZhy/save", this.collateralProviderZhy).then();
                console.log(this.collateralProviderZhy);
            } else {
                alert("输入有误");
            }

        },
        // 各个数据的验证方法
        cpTanpoMonoCheck() {
            this.cpTanpoMonoWarmingTextNotSelectedFlag = this.collateralProviderZhy.cpTanpoMono == "";
        },
        cpNameMeiCheck() {
            this.cpNameMeiWarmingTextFormatFlag = this.regKanji.test(this.collateralProviderZhy.cpNameMei);
            this.cpNameMeiWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameMei.length > 40);
        },
        cpNameMeiKanaCheck() {
            this.cpNameMeiKanaWarmingTextFormatFlag = this.regKana.test(this.collateralProviderZhy.cpNameMeiKana);
            this.cpNameMeiKanaWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameMeiKana.length);
        },
        cpNameSeiCheck() {
            this.cpNameSeiWarmingTextFormatFlag = this.regKanji.test(this.collateralProviderZhy.cpNameSei);
            this.cpNameSeiWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameSei.length > 40);
        },
        cpNameSeiKanaCheck() {
            this.cpNameSeiKanaWarmingTextFormatFlag = this.regKana.test(this.collateralProviderZhy.cpNameSei);
            this.cpNameSeiKanaWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameSei.length > 40);
        },
        cpBirthDateYearCheck() {
            this.cpBirthDateYearWarmingTextNotSelectedFlag = (this.cpBirthDate == "");
        },
        cpBirthDateCheck() {
            this.cpBirthDateWarmingTextMinusFlag = (this.cpBirthDate < 0);
        },
        cpMoushikomiCheck() {
            this.cpMoushikomiWarmingTextNotSelectedFlag = (this.collateralProviderZhy.cpMoushikomi == "");
        },
        cpRentaiSaimushaToOnajiCheck() {
            this.cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag = (this.collateralProviderZhy.cpRentaiSaimushaToOnaji == "");
        },
        cpPhoneCheck() {
            this.cpPhoneWarmingTextFormatFlag = (this.regDenwa.test(this.collateralProviderZhy.cpPhone));
        },
        cpHonninShokugyoCodeCheck() {
            this.cpHonninShokugyoCodeWarmingTextFlag = (this.collateralProviderZhy.cpHonninShokugyoCode == "");
        },
        cpHonninKinmusakiNameCheck() {
            this.cpHonninKinmusakiNameWarmingTextFormatFlag = (this.collateralProviderZhy.cpHonninKinmusakiName.length > 40);
        },
        cpReasonCheck() {
            this.cpReasonWarmingTextTooShortFlag = (this.collateralProviderZhy.cpReason.length < 50);
            this.cpReasonWarmingTextTooLongFlag = (this.collateralProviderZhy.cpReason.length >= 200);
        },
        cpSameCheck() {
            this.cpSameWarmingTextNotSelectedFlag = (this.cpSame == "");
        }
       
    },
    watch: {
            // 'collateralProviderZhy.cpMoushikomi': function () {

            // },
            // 监视数组, 在数据变化时将数组转化为字符串
            'reasons': function () {
                this.collateralProviderZhy.cpMoushikomi = this.reasons.join(",")
            },
            'collateralProviderZhy.cpTanpoMono': function () {
                this.cpTanpoMonoCheck();
            },
            'collateralProviderZhy.cpNameMei': function () {
                this.cpNameMeiCheck();
            },
            'collateralProviderZhy.cpNameMeiKana': function () {

            },
            'collateralProviderZhy.cpNameSei': function () {
                this.cpNameSeiCheck();
            },
            'collateralProviderZhy.cpNameSeiKana': function () {

            },
            'collateralProviderZhy.cpBirthDateYear': function () {
                this.cpBirthDateYearCheck();
            },
            //         'collateralProviderZhy.cpBirthDate': function () {
            // },
            //         'collateralProviderZhy.cpMoushikomi': function () {
            // },
            'collateralProviderZhy.cpRentaiSaimushaToOnaji': function () {
                this.cpRentaiSaimushaToOnajiCheck();
            },
            'collateralProviderZhy.cpPhone': function () {
                this.cpPhoneCheck();
            },
            'collateralProviderZhy.cpHonninShokugyoCode': function () {
                this.cpHonninShokugyoCodeCheck();
            },
            'collateralProviderZhy.cpHonninKinmusakiName': function () {
                this.cpHonninKinmusakiNameCheck();
            },
            'collateralProviderZhy.cpReason': function () {
                this.cpReasonCheck();
            },
            'collateralProviderZhy.cpSame': function () {
                this.cpSameCheck();
            }


        },
        created() {
            // 把字符串转化为数组, 传给数组 这个功能先不去写之
            // trans

        }
}
</script>
<style>
/* *{
    background-color: red;
} */
</style>