<template>
    <div>
        <div>基本情報</div>
        <div>
            <label>名前</label>
            <div>姓（漢字）<input type="text" v-model="koJinJoHoZhy.cpNamesei" />
                <span class="errorMessage" id="cpNameseiWarmingTextFormat"
                    v-if="cpNameseiWarmingTextFormatFlag">フォーマットが間違っています。漢字で入力してください。</span>
                <span class="errorMessage" id="cpNameserWarmingTextToLong"
                    v-if="cpNameserWarmingTextToLongFlag">入力した漢字が長すぎます。再入力してください。</span>
            </div>
            <div>名（漢字）<input type="text" v-model="koJinJoHoZhy.cpNameMei" />
                <span class="errorMessage" id="cpNameMeiWarmingTextFormat"
                    v-if="cpNameMeiWarmingTextFormatFlag">フォーマットが間違っています。漢字で入力してください。</span>
                <span class="errorMessage" id="cpNameMeiWarmingTextTooLong"
                    v-if="cpNameMeiWarmingTextTooLongFlag">入力した漢字が長すぎます。再入力してください。</span>
            </div>
            <div>セイ<input type="text" v-model="koJinJoHoZhy.cpNameseikana" />
                <span class="errorMessage" id="cpNameseikanaWarmingTextFormat"
                    v-if="cpNameseikanaWarmingTextFormatFlag">フォーマットが間違っています。カタカナで入力してください。</span>
                <span class="errorMessage" id="cpNameserkaneWarmingTextToLong"
                    v-if="cpNameserkaneWarmingTextToLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
            <div>メイ<input type="text" v-model="koJinJoHoZhy.cpNamemeikana" />
                <span class="errorMessage" id="cpNamemeikanaWarmingTextFormat"
                    v-if="cpNamemeikanaWarmingTextFormatFlag">フォーマットが間違っています。カタカナで入力してください。</span>
                <span class="errorMessage" id="cpNamemeikanaWarmingTextToLong"
                    v-if="cpNamemeikanaWarmingTextToLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
            <div>姓（ローマ字）<input type="text" v-model="koJinJoHoZhy.cuAlphlastname" />
                <span class="errorMessage" id="cuAlphlastnameWarmingTextFormat"
                    v-if="cuAlphlastnameWarmingTextFormatFlag">フォーマットが間違っています。ローマ字で入力してください。</span>
                <span class="errorMessage" id="cuAlphlastnameWarmingTextTooLong"
                    v-if="cuAlphlastnameWarmingTextTooLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
            <div>名（ローマ字）<input type="text" v-model="koJinJoHoZhy.cuAlphfirstname" />
                <span class="errorMessage" id="cuAlphlastnameWarmingTextFormat"
                    v-if="cuAlphlastnameWarmingTextFormatFlag">フォーマットが間違っています。ローマ字で入力してください。</span>
                <span class="errorMessage" id="cuAlphlastnameWarmingTextTooLong"
                    v-if="cuAlphlastnameWarmingTextTooLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
        </div>
        <div>
            <label>国籍</label>
            <select v-model="koJinJoHoZhy.cpCountry">
                <option disabled value="">please select</option>
                <option>china</option>
                <option>japan</option>
                <option>korean</option>
                <option>spain</option>
            </select>
            <span class="errorMessage" id="cpCountryWarmingTextNotSelected"
                v-if="cpCountryWarmingTextNotSelectedFlag">国籍を選択してください</span>

        </div>
        <div>
            <label>性別</label>
            <!-- <select v-model="koJinJoHoZhy.cpSex">
                <option disabled value="">please select</option>
                <option>male</option>
                <option>female</option>
                <option>other</option>
            </select> -->
            <input type="radio" name="sex" id="男" value="男" checked v-model="koJinJoHoZhy.cpSex" />男
            <input type="radio" name="sex" id="女" value="女" v-model="koJinJoHoZhy.cpSex" />女
            <input type="radio" name="sex" id="Decline to State" value="Decline to State"
                v-model="koJinJoHoZhy.cpSex" />Decline to State（声明拒否）
            <span class="errorMessage" id="cpSexWarmingTextNotSelected"
                v-if="cpSexWarmingTextNotSelectedFlag">性別を選んでください</span>
        </div>
        <div>
            <label>生年月日</label>
            <div>
                <datepicker v-model="koJinJoHoZhy.cpBirthdate"></datepicker>
                <span class="errorMessage" id="cpBirthdateWarmingTextFormat" v-if="cpBirthdateWarmingTextFormatFlag">
                    フォーマットが間違っています。日付を入力してください。</span>
            </div>
        </div>
        <div>
            <label>電話番号</label>
            <div>
                <input type="text" v-model="koJinJoHoZhy.cpDenwa" />
            </div>
            <span class="errorMessage" id="cpDenwaWarmingTextTooLong"
                v-if="cpDenwaWarmingTextTooLongFlag">入力した電話番号が長すぎます。再入力してください。</span>
            <span class="errorMessage" id="cpDenwaWarmingTextFormat"
                v-if="cpDenwaWarmingTextFormatFlag">フォーマットが間違っています。数字を入力してください。</span>

        </div>
        <div>
            <label>携帯電話</label>
            <div>
                <input type="text" v-model="koJinJoHoZhy.cpPhone" />
            </div>
            <span class="errorMessage" id="cpPhoneWarmingTextTooLong"
                v-if="cpPhoneWarmingTextTooLongFlag">入力した電話番号が長すぎます。再入力してください。</span>
            <span class="errorMessage" id="cpPhoneWarmingTextFormat"
                v-if="cpPhoneWarmingTextFormatFlag">フォーマットが間違っています。数字を入力してください。</span>
        </div>
        <div>
            <label>職業</label>
            <div>
                <select v-model="koJinJoHoZhy.cpShokugyocode">
                    <option value="01">01 自営業</option>
                    <option value="02">02 公務員</option>
                    <option value="03">03 会社員</option>
                    <option value="04">04 その他</option>
                    <option value="05">05 無職</option>
                </select>
                <span class="errorMessage" id="cpShokugyocodeWarmingTextNotSelected"
                    v-if="cpShokugyocodeWarmingTextNotSelectedFLag">職業を選んでください</span>
            </div>

        </div>
        <div>
            <label>勤務先</label>
            <div>
                <input type="text" v-model="koJinJoHoZhy.cpKinmusakiname" />
                <span class="errorMessage" id="cpKinmusakinameWarmingTextTooLong"
                    v-if="cpKinmusakinameWarmingTextTooLongFlag">入力した勤務先が長すぎます。再入力してください。</span>
            </div>
        </div>
        <div>
            <input type="button" value="push" @click="add" />
            <input type="button" value="push" @click="add" />
        </div>
    </div>
</template>
<script>
// import { Datepicker, Timepicker, DatetimePicker, DateRangePicker } from '@livelybone/vue-datepicker';
import Datepicker from 'vuejs-datepicker';


import axios from 'axios'
export default {
    data() {
        return {
            koJinJoHoZhy: {
                cpNamesei: "",
                cpNameMei: "",
                cpNameseikana: "",
                cpNamemeikana: "",
                cuAlphlastname: "",
                cuAlphfirstname: "",
                cpCountry: "",
                cpBirthdate: "",
                cpSex: "",
                cpDenwa: "",
                cpPhone: "",
                cpShokugyocode: "",
                cpKinmusakiname: ""
            },
            // 電話番号の正規表現
            phoneReg: /^0[789]0-[0-9]{4}-[0-9]{4}$/,
            // cuAlphlastnameWarmingText: "",
            // cuAlphlastnameWarmingTextFlag: false,
            // cuAlphlastnameWarmingTextNotAlph: "ローマ字ではありません",
            cpNameseiWarmingTextFormatFlag: false,
            cpNameserWarmingTextToLongFlag: false,
            cpNameMeiWarmingTextFormatFlag: false,
            cpNameMeiWarmingTextTooLongFlag: false,
            cpNameseikanaWarmingTextFormatFlag: false,
            cpNameserkaneWarmingTextToLongFlag: false,
            cpNamemeikanaWarmingTextFormatFlag: false,
            cpNamemeikanaWarmingTextToLongFlag: false,
            cuAlphlastnameWarmingTextFormatFlag: false,
            cuAlphlastnameWarmingTextTooLongFlag: false,
            cuAlphlastnameWarmingTextFormatFlag: false,
            cuAlphlastnameWarmingTextTooLongFlag: false,
            cpCountryWarmingTextNotSelectedFlag: false,
            cpSexWarmingTextNotSelectedFlag: false,
            cpBirthdateWarmingTextFormatFlag: false,
            cpDenwaWarmingTextTooLongFlag: false,
            cpDenwaWarmingTextFormatFlag: false,
            cpPhoneWarmingTextTooLongFlag: false,
            cpPhoneWarmingTextFormatFlag: false,
            cpShokugyocodeWarmingTextNotSelectedFLag: false,
            cpKinmusakinameWarmingTextTooLongFlag: false
        }
    },
    methods: {
        add() {
            axios.post('http://localhost:8813/ko-jin-jo-ho-zhy/save', this.koJinJoHoZhy).then();
        },
        zenkakuAlphNum2hankaku(str) {
            return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });
        },
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
        CtoH(obj) {
            let str = obj.value;
            let result = "";
            result = zenkakuAlphNum2hankaku(str);
            obj.value = result;
            return result;
        },
        CHoH(sss) {
            let str = sss.value;
            let result = "";
            result = zenkakuKana2Hankaku(str);
            obj.value = result;
            return result;
        }
    },
    components: {
        datepicker: Datepicker
    },
    watch: {
        // 'koJinJoHoZhy.cuAlphfirstname': function () {
        //     console.log("tmp");
        // },
        /*
        'koJinJoHoZhy.cpDenwa': function () {
            // console.log("tmp");
            if (this.phoneReg.test(this.koJinJoHoZhy.cpDenwa)) {
                console.log('OK');
                this.cuAlphlastnameWarmingTextFlag = false;

            } else {
                console.log('wrong');
                this.cuAlphlastnameWarmingText = this.cuAlphlastnameWarmingTextNotAlph;
                this.cuAlphlastnameWarmingTextFlag = true;
            }
        }
        */
        'koJinJoHoZhy.cpNameSei': function () {
            
        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
        'koJinJoHoZhy.': function () {

        },
    }

}
</script>
<style>
.errorMessage {
    /* font: red; */
    color: red;
}
</style>