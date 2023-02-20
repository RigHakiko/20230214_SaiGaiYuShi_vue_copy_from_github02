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
                <span class="errorMessage" id="" v-if="cpTanpoMonoWarmingTextNotSelectedFlag">
                    cpTanpoMonoWarmingTextNotSelectedFlag
                </span>
            </div>
        </div>

        <div>

            <label>姓</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpNameSei" />

                <span class="errorMessage" id="" v-if="cpNameSeiWarmingTextFormatFlag">
                    cpNameSeiWarmingTextFormatFlag
                </span>


                <span class="errorMessage" id="" v-if="cpNameSeiWarmingTextTooLongFlag">
                    cpNameSeiWarmingTextTooLongFlag
                </span>
            </div>
        </div>
        <div>


            <label>名</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpNameMei" />

                <span class="errorMessage" id="" v-if="cpNameMeiWarmingTextFormatFlag">
                    cpNameMeiWarmingTextFormatFlag
                </span>


                <span class="errorMessage" id="" v-if="cpNameMeiWarmingTextTooLongFlag">
                    cpNameMeiWarmingTextTooLongFlag
                </span>
            </div>
        </div>

        <div>

            <label>セイ</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpNameSeiKana" />

                <span class="errorMessage" id="" v-if="cpNameSeiKanaWarmingTextFormatFlag">
                    cpNameSeiKanaWarmingTextFormatFlag
                </span>

                <span class="errorMessage" id="" v-if="cpNameSeiKanaWarmingTextTooLongFlag">
                    cpNameSeiKanaWarmingTextTooLongFlag
                </span>
            </div>
        </div>
        <div>

            <label>メイ</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpNameMeiKana" />

                <span class="errorMessage" id="" v-if="cpNameMeiKanaWarmingTextFormatFlag">
                    cpNameMeiKanaWarmingTextFormatFlag
                </span>

                <span class="errorMessage" id="" v-if="cpNameMeiKanaWarmingTextTooLongFlag">
                    cpNameMeiKanaWarmingTextTooLongFlag
                </span>
            </div>
        </div>
        <div>

            <label>生年月日</label>
            <div class="kiho">

                <input type="date" v-model="collateralProviderZhy.cpBirthDateYear" />

                <span class="errorMessage" id="" v-if="cpBirthDateYearWarmingTextNotSelectedFlag">
                    cpBirthDateYearWarmingTextNotSelectedFlag
                </span>
            </div>
        </div>
        <div>

            <label>年齢</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpBirthDate" />
            </div>

            <span class="errorMessage" id="" v-if="cpBirthDateWarmingTextMinusFlag">
                cpBirthDateWarmingTextMinusFlag
            </span>
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

                <span class="errorMessage" id="" v-if="cpMoushikomiWarmingTextNotSelectedFlag">
                    cpMoushikomiWarmingTextNotSelectedFlag
                </span>
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

                <span class="errorMessage" id="" v-if="cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag">
                    cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag
                </span>
            </div>
        </div>
        <div>

            <label>携帯電話</label>
            <div class="kiho">


                <input type="text" v-model="collateralProviderZhy.cpPhone" :disabled="!phoneCanEditFlag"/>

                <span class="errorMessage" id="" v-if="cpPhoneWarmingTextFormatFlag">
                    cpPhoneWarmingTextFormatFlag
                </span>
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

                <span class="errorMessage" id="" v-if="cpHonninShokugyoCodeWarmingTextFlag">
                    cpHonninShokugyoCodeWarmingTextFlag
                </span>
            </div>
        </div>
        <div>

            <label>勤務先の名称</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpHonninKinmusakiName" :disabled="!kinmusakiCanEditFlag" />

                <span class="errorMessage" id="" v-if="cpHonninKinmusakiNameWarmingTextFormatFlag">
                    cpHonninKinmusakiNameWarmingTextFormatFlag
                </span>
            </div>
        </div>
        <div>

            <label>担保理由</label>
            <div class="kiho">

                <input type="textarea" v-model="collateralProviderZhy.cpReason" />

                <span class="errorMessage" id="" v-if="cpReasonWarmingTextTooShortFlag">
                    cpReasonWarmingTextTooShortFlag
                </span>
            </div>

            <span class="errorMessage" id="" v-if="cpReasonWarmingTextTooLongFlag">
                cpReasonWarmingTextTooLongFlag
            </span>
        </div>

        <div>

            <label>個人申請者と同じ</label>
            <div class="kiho">

                <input type="radio" name="onaji" id="01" value="01" v-model="collateralProviderZhy.cpSame" />
                <input type="radio" name="onaji" id="02" value="02" v-model="collateralProviderZhy.cpSame" />

                <span class="errorMessage" id="" v-if="cpSameWarmingTextNotSelectedFlag">
                    cpSameWarmingTextNotSelectedFlag
                </span>
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
            regDenwa: new RegExp('^0[789]0-[0-9]{4}-[0-9]{4}$'),

            kinmusakiCanEditFlag: true,
            phoneCanEditFlag: true
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

            { // 测试用代码
                // 有效
                console.log("cpTanpoMonoWarmingTextNotSelectedFlag");
                console.log(this.cpTanpoMonoWarmingTextNotSelectedFlag);

                // 有效
                console.log("cpNameMeiWarmingTextFormatFlag");
                console.log(this.cpNameMeiWarmingTextFormatFlag);


                // 有效
                console.log("cpNameMeiWarmingTextTooLongFlag");
                console.log(this.cpNameMeiWarmingTextTooLongFlag);



                console.log("cpNameMeiKanaWarmingTextFormatFlag");
                console.log(this.cpNameMeiKanaWarmingTextFormatFlag);


                console.log("cpNameMeiKanaWarmingTextTooLongFlag");
                console.log(this.cpNameMeiKanaWarmingTextTooLongFlag);


                // 有效
                console.log("cpNameSeiWarmingTextFormatFlag");
                console.log(this.cpNameSeiWarmingTextFormatFlag);


                // 有效
                console.log("cpNameSeiWarmingTextTooLongFlag");
                console.log(this.cpNameSeiWarmingTextTooLongFlag);


                console.log("cpNameSeiKanaWarmingTextFormatFlag");
                console.log(this.cpNameSeiKanaWarmingTextFormatFlag);

                console.log("cpNameSeiKanaWarmingTextTooLongFlag");
                console.log(this.cpNameSeiKanaWarmingTextTooLongFlag);

                console.log("cpBirthDateYearWarmingTextNotSelectedFlag");
                console.log(this.cpBirthDateYearWarmingTextNotSelectedFlag);

                console.log("cpBirthDateWarmingTextMinusFlag");
                console.log(this.cpBirthDateWarmingTextMinusFlag);

                console.log("cpMoushikomiWarmingTextNotSelectedFlag");
                console.log(this.cpMoushikomiWarmingTextNotSelectedFlag);

                // 有效
                console.log("cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag");
                console.log(this.cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag);

                console.log("cpPhoneWarmingTextFormatFlag");
                console.log(this.cpPhoneWarmingTextFormatFlag);

                console.log("cpHonninShokugyoCodeWarmingTextFlag");
                console.log(this.cpHonninShokugyoCodeWarmingTextFlag);

                console.log("cpHonninKinmusakiNameWarmingTextFormatFlag");
                console.log(this.cpHonninKinmusakiNameWarmingTextFormatFlag);

                // 有效
                console.log("cpReasonWarmingTextTooShortFlag");
                console.log(this.cpReasonWarmingTextTooShortFlag);

                // 有效
                console.log("cpReasonWarmingTextTooLongFlag");
                console.log(this.cpReasonWarmingTextTooLongFlag);

                console.log("cpSameWarmingTextNotSelectedFlag");
                console.log(this.cpSameWarmingTextNotSelectedFlag);

                console.log("------------");

            }

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
            this.cpNameMeiWarmingTextFormatFlag = !this.regKanji.test(this.collateralProviderZhy.cpNameMei);
            this.cpNameMeiWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameMei.length > 40);
        },
        cpNameMeiKanaCheck() {
            this.cpNameMeiKanaWarmingTextFormatFlag = !this.regKana.test(this.collateralProviderZhy.cpNameMeiKana);
            this.cpNameMeiKanaWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameMeiKana.length);
        },
        cpNameSeiCheck() {
            this.cpNameSeiWarmingTextFormatFlag = !this.regKanji.test(this.collateralProviderZhy.cpNameSei);
            this.cpNameSeiWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameSei.length > 40);
        },
        cpNameSeiKanaCheck() {
            this.cpNameSeiKanaWarmingTextFormatFlag = !this.regKana.test(this.collateralProviderZhy.cpNameSei);
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
 
        },

        // 英数字的全角转换为半角
        // 英数字の全角-半角変換
        zenkakuAlphNum2hankaku(str) {
            return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });
        },
        // カタカナ的全角转换为半角
        // カタカナの全角から半角への変換
        zenkakuKana2Hankaku(str) {
            var kanaMap = {
                "ガ": "ｶﾞ", "ギ": "ｷﾞ", "グ": "ｸﾞ", "ゲ": "ｹﾞ", "ゴ": "ｺﾞ",
                "ザ": "ｻﾞ", "ジ": "ｼﾞ", "ズ": "ｽﾞ", "ゼ": "ｾﾞ", "ゾ": "ｿﾞ",
                "ダ": "ﾀﾞ", "ヂ": "ﾁﾞ", "ヅ": "ﾂﾞ", "デ": "ﾃﾞ", "ド": "ﾄﾞ",
                "バ": "ﾊﾞ", "ビ": "ﾋﾞ", "ブ": "ﾌﾞ", "ベ": "ﾍﾞ", "ボ": "ﾎﾞ",
                "パ": "ﾊﾟ", "ピ": "ﾋﾟ", "プ": "ﾌﾟ", "ペ": "ﾍﾟ", "ポ": "ﾎﾟ",
                "ヴ": "ｳﾞ", "ヷ": "ﾜﾞ", "ヺ": "ｦﾞ",
                "ア": "ｱ", "イ": "ｲ", "ウ": "ｳ", "エ": "ｴ", "オ": "ｵ",
                "カ": "ｶ", "キ": "ｷ", "ク": "ｸ", "ケ": "ｹ", "コ": "ｺ",
                "サ": "ｻ", "シ": "ｼ", "ス": "ｽ", "セ": "ｾ", "ソ": "ｿ",
                "タ": "ﾀ", "チ": "ﾁ", "ツ": "ﾂ", "テ": "ﾃ", "ト": "ﾄ",
                "ナ": "ﾅ", "ニ": "ﾆ", "ヌ": "ﾇ", "ネ": "ﾈ", "ノ": "ﾉ",
                "ハ": "ﾊ", "ヒ": "ﾋ", "フ": "ﾌ", "ヘ": "ﾍ", "ホ": "ﾎ",
                "マ": "ﾏ", "ミ": "ﾐ", "ム": "ﾑ", "メ": "ﾒ", "モ": "ﾓ",
                "ヤ": "ﾔ", "ユ": "ﾕ", "ヨ": "ﾖ",
                "ラ": "ﾗ", "リ": "ﾘ", "ル": "ﾙ", "レ": "ﾚ", "ロ": "ﾛ",
                "ワ": "ﾜ", "ヲ": "ｦ", "ン": "ﾝ",
                "ァ": "ｧ", "ィ": "ｨ", "ゥ": "ｩ", "ェ": "ｪ", "ォ": "ｫ",
                "ッ": "ｯ", "ャ": "ｬ", "ュ": "ｭ", "ョ": "ｮ",
                "。": "｡", "、": "､", "ー": "ｰ", "「": "｢", "」": "｣", "・": "･"
            }
            let reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
            return str
                .replace(reg, function (match) {
                    return kanaMap[match];
                })
                .replace(/゛/g, 'ﾞ')
                .replace(/゜/g, 'ﾟ');
        },
        // 将姓的カナ全角转换为半角
        // 姓のカナ全角を半角に変換する
        convertSeiKana() {
            this.collateralProviderZhy.cpNameSeiKana = this.zenkakuAlphNum2hankaku(this.collateralProviderZhy.cpNameSeiKana);
            this.collateralProviderZhy.cpNameSeiKana = this.zenkakuKana2Hankaku(this.collateralProviderZhy.cpNameSeiKana);
        },
        // 将名的カナ全角转换为半角
        // 名のカナ全角を半角に変換する
        convertMeiKana() {
            this.collateralProviderZhy.cpNameMeiKana = this.zenkakuAlphNum2hankaku(this.collateralProviderZhy.cpNameMeiKana);
            this.collateralProviderZhy.cpNameMeiKana = this.zenkakuKana2Hankaku(this.collateralProviderZhy.cpNameMeiKana);
        },

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
            this.convertMeiKana();
            this.cpNameMeiKanaCheck();
        },
        'collateralProviderZhy.cpNameSei': function () {
            this.cpNameSeiCheck();
        },
        'collateralProviderZhy.cpNameSeiKana': function () {
            this.convertSeiKana();
            this.cpNameSeiKanaCheck();

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
            if(this.collateralProviderZhy.cpSame == "01"){
                this.phoneCanEditFlag = false;
                this.kinmusakiCanEditFlag = false;
                this.cpHonninKinmusakiName == this.$store.state.KoJinJoHoZhyInContent01.cpKinmusakiname;
                this.cpPhone == this.$store.state.KoJinJoHoZhyInContent01.cpPhone;
            } else {
                this.phoneCanEditFlag = true;
                this.kinmusakiCanEditFlag = true;
            }
        }


    },
    created() {
        // 把字符串转化为数组, 传给数组 这个功能先不去写之
        // trans
        console.log("----------");
        console.log(this.$store.state.KoJinJoHoZhyInContent01);

    }
}
</script>
<style>
/* *{
    background-color: red;
} */
</style>