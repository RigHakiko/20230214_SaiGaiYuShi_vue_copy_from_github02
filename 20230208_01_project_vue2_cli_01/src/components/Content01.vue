<template>
    <div>
        <div>基本情報</div>
        <div>
            <label>名前</label>
            <div>姓（漢字）<input type="text" v-model="koJinJoHoZhy.cpNamesei" />
                <span class="errorMessage" id="cpNameseiWarmingTextFormat"
                    v-if="cpNameseiWarmingTextFormatFlag">フォーマットが間違っています。漢字で入力してください。</span>
                <span class="errorMessage" id="cpNameseiWarmingTextTooLong"
                    v-if="cpNameseiWarmingTextTooLongFlag">入力した内容が長すぎます。再入力してください。</span>
            </div>
            <div>名（漢字）<input type="text" v-model="koJinJoHoZhy.cpNamemei" />
                <span class="errorMessage" id="cpNamemeiWarmingTextFormat"
                    v-if="cpNamemeiWarmingTextFormatFlag">フォーマットが間違っています。漢字で入力してください。</span>
                <span class="errorMessage" id="cpNamemeiWarmingTextTooLong"
                    v-if="cpNamemeiWarmingTextTooLongFlag">入力した内容が長すぎます。再入力してください。</span>
            </div>
            <div>セイ<input type="text" v-model="koJinJoHoZhy.cpNameseikana" />
                <span class="errorMessage" id="cpNameseikanaWarmingTextFormat"
                    v-if="cpNameseikanaWarmingTextFormatFlag">フォーマットが間違っています。カタカナで入力してください。</span>
                <span class="errorMessage" id="cpNameseikaneWarmingTextTooLong"
                    v-if="cpNameseikaneWarmingTextTooLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
            <div>メイ<input type="text" v-model="koJinJoHoZhy.cpNamemeikana" />
                <span class="errorMessage" id="cpNamemeikanaWarmingTextFormat"
                    v-if="cpNamemeikanaWarmingTextFormatFlag">フォーマットが間違っています。カタカナで入力してください。</span>
                <span class="errorMessage" id="cpNamemeikanaWarmingTextTooLong"
                    v-if="cpNamemeikanaWarmingTextTooLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
            <div>姓（ローマ字）<input type="text" v-model="koJinJoHoZhy.cuAlphlastname" />
                <span class="errorMessage" id="cuAlphlastnameWarmingTextFormat"
                    v-if="cuAlphlastnameWarmingTextFormatFlag">フォーマットが間違っています。ローマ字で入力してください。</span>
                <span class="errorMessage" id="cuAlphlastnameWarmingTextTooLong"
                    v-if="cuAlphlastnameWarmingTextTooLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
            <div>名（ローマ字）<input type="text" v-model="koJinJoHoZhy.cuAlphfirstname" />
                <span class="errorMessage" id="cuAlphfirstnameWarmingTextFormat"
                    v-if="cuAlphfirstnameWarmingTextFormatFlag">フォーマットが間違っています。ローマ字で入力してください。</span>
                <span class="errorMessage" id="cuAlphfirstnameWarmingTextTooLong"
                    v-if="cuAlphfirstnameWarmingTextTooLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
        </div>
        <div>
            <label>国籍</label>
            <select v-model="koJinJoHoZhy.cpCountry">
                <option disabled value="">選んでください</option>
                <option>中国</option>
                <option>日本</option>
                <option>韓国</option>
                <option>スペイン</option>
            </select>
            <span class="errorMessage" id="cpCountryWarmingTextNotSelected"
                v-if="cpCountryWarmingTextNotSelectedFlag">国籍を選択してください。</span>

        </div>
        <div>
            <label>性別</label>
            <input type="radio" name="sex" id="男" value="男" checked v-model="koJinJoHoZhy.cpSex"
                :checked="koJinJoHoZhy.cpSex" />男
            <input type="radio" name="sex" id="女" value="女" v-model="koJinJoHoZhy.cpSex"
                :checked="koJinJoHoZhy.cpSex" />女
            <input type="radio" name="sex" id="Decline to State" value="Decline to State" v-model="koJinJoHoZhy.cpSex"
                :checked="koJinJoHoZhy.cpSex" />Decline to State（声明拒否）
            <span class="errorMessage" id="cpSexWarmingTextNotSelected"
                v-if="cpSexWarmingTextNotSelectedFlag">性別を選んでください。</span>
        </div>
        <div>
            <label>生年月日</label>
            <div>
                <input type="date" v-model="koJinJoHoZhy.cpBirthdate" />
                <span class="errorMessage" id="cpBirthdateWarmingTextFormat" v-if="cpBirthdateWarmingTextFormatFlag">
                    日付を入力してください。</span>
            </div>
        </div>
        <div>
            <label>電話番号（任意）</label>
            <div>
                <input type="text" v-model="koJinJoHoZhy.cpDenwa" />
            </div>
            <span class="errorMessage" id="cpDenwaWarmingTextFormat"
                v-if="cpDenwaWarmingTextFormatFlag">フォーマットが間違っています。電話番号を入力してください。</span>

        </div>
        <div>
            <label>携帯電話</label>
            <div>
                <input type="text" v-model="koJinJoHoZhy.cpPhone" />
            </div>
            <span class="errorMessage" id="cpPhoneWarmingTextFormat"
                v-if="cpPhoneWarmingTextFormatFlag">フォーマットが間違っています。電話番号を入力してください。</span>
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
            <label>勤務先（任意）</label>
            <div>
                <input type="text" v-model="koJinJoHoZhy.cpKinmusakiname" :disabled=musyokuFlag />
                <span class="errorMessage" id="cpKinmusakinameWarmingTextTooLong"
                    v-if="cpKinmusakinameWarmingTextTooLongFlag">入力した勤務先が長すぎます。再入力してください。</span>
            </div>
        </div>
        <div>
            <input type="button" value="push" @click="add" />
            <input type="button" value="push" @click="add2" />
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            // 数据作为json格式保存
            koJinJoHoZhy: {
                cpNamesei: "",
                cpNamemei: "",
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

            // 各个错误信息的flag, true为显示信息, false表示不显示
            cpNameseiWarmingTextFormatFlag: false,
            cpNameseiWarmingTextTooLongFlag: false,
            cpNamemeiWarmingTextFormatFlag: false,
            cpNamemeiWarmingTextTooLongFlag: false,
            cpNameseikanaWarmingTextFormatFlag: false,
            cpNameseikaneWarmingTextTooLongFlag: false,
            cpNamemeikanaWarmingTextFormatFlag: false,
            cpNamemeikanaWarmingTextTooLongFlag: false,
            cuAlphlastnameWarmingTextFormatFlag: false,
            cuAlphlastnameWarmingTextTooLongFlag: false,
            cuAlphfirstnameWarmingTextFormatFlag: false,
            cuAlphfirstnameWarmingTextTooLongFlag: false,
            cpCountryWarmingTextNotSelectedFlag: false,
            cpSexWarmingTextNotSelectedFlag: false,
            cpBirthdateWarmingTextFormatFlag: false,
            cpDenwaWarmingTextFormatFlag: false,
            cpPhoneWarmingTextFormatFlag: false,
            cpShokugyocodeWarmingTextNotSelectedFLag: false,
            cpKinmusakinameWarmingTextTooLongFlag: false,

            // 無職flag, true为无职
            musyokuFlag: false,

            // 所有信息通过的flag, true为所有信息都没有问题
            checkedAllFlag: false
        }
    },
    methods: {
        // 通过网络保存到数据库
        add() {
            axios.post('http://localhost:8813/ko-jin-jo-ho-zhy/save', this.koJinJoHoZhy).then();
        },
        // 弄第2个add方法
        add2() {
            //在发布时, 去判断是否是无职, 无职的话清空工作地点信息
            if (this.musyokuFlag) {
                this.koJinJoHoZhy.cpKinmusakiname = "";
            }

            // 对所有信息check
            this.cpNameseiCheck();
            this.cpNamemeiCheck();
            this.cpNameseikanaCheck();
            this.cpNamemeikanaCheck();
            this.cuAlphlastnameCheck();
            this.cuAlphfirstnameCheck();
            this.cpCountryCheck();
            this.cpBirthdateCheck();
            this.cpSexCheck();
            this.cpDenwaCheck();
            this.cpPhoneCheck();
            this.cpShokugyocodeCheck();
            this.cpKinmusakinameCheck();

            // 根据各个错误信息的显示与否去得到各个信息是否正确
            this.cpNameseiChecked = ((!(this.cpNameseiWarmingTextFormatFlag)) && (!(this.cpNameseiWarmingTextTooLongFlag)));
            this.cpNamemeiChecked = ((!(this.cpNamemeiWarmingTextFormatFlag)) && (!(this.cpNamemeiWarmingTextTooLongFlag)));
            this.cpNameseikanaChecked = ((!(this.cpNameseikanaWarmingTextFormatFlag)) && (!(this.cpNameseikaneWarmingTextTooLongFlag)));
            this.cpNamemeikanaChecked = ((!(this.cpNamemeikanaWarmingTextFormatFlag)) && (!(this.cpNamemeiWarmingTextTooLongFlag)));
            this.cuAlphlastnameChecked = ((!(this.cuAlphlastnameWarmingTextFormatFlag)) && (!(this.cuAlphlastnameWarmingTextTooLongFlag)));
            this.cuAlphfirstnameChecked = ((!(this.cuAlphfirstnameWarmingTextFormatFlag)) && (!(this.cuAlphfirstnameWarmingTextTooLongFlag)));
            this.cpCountryChecked = !(this.cpCountryWarmingTextNotSelectedFlag);
            this.cpBirthdateChecked = !(this.cpBirthdateWarmingTextFormatFlag);
            this.cpSexChecked = !this.cpSexWarmingTextNotSelectedFlag;
            this.cpDenwaChecked = !this.cpDenwaWarmingTextFormatFlag;
            this.cpPhoneChecked = !(this.cpPhoneWarmingTextFormatFlag);
            this.cpShokugyocodeChecked = ((!(this.musyokuFlag)) && (!(this.cpShokugyocodeWarmingTextNotSelectedFLag)));
            this.cpKinmusakinameChecked = !(this.cpKinmusakinameWarmingTextTooLongFlag);

            // 如果所有信息正确, 则checkedAllFlag为true
            this.checkedAllFlag =
                this.cpNameseiChecked &&
                this.cpNamemeiChecked &&
                this.cpNameseikanaChecked &&
                this.cpNamemeikanaChecked &&
                this.cuAlphlastnameChecked &&
                this.cuAlphfirstnameChecked &&
                this.cpCountryChecked &&
                this.cpBirthdateChecked &&
                this.cpSexChecked &&
                this.cpDenwaChecked &&
                this.cpPhoneChecked &&
                this.cpKinmusakinameChecked;

            // 所有信息都正确的话就去发布
            if (this.checkedAllFlag) {
                axios.post('http://localhost:8813/ko-jin-jo-ho-zhy/save', this.koJinJoHoZhy).then();
            } else {
                alert("输入有误")
            }


        },
        // 英数字的全角转换为半角
        zenkakuAlphNum2hankaku(str) {
            return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });
        },
        // カタカナ的全角转换为半角
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
        convertSeiKana() {
            this.koJinJoHoZhy.cpNameseikana = this.zenkakuAlphNum2hankaku(this.koJinJoHoZhy.cpNameseikana);
            this.koJinJoHoZhy.cpNameseikana = this.zenkakuKana2Hankaku(this.koJinJoHoZhy.cpNameseikana);
        },
        // 将名的カナ全角转换为半角
        convertMeiKana() {
            this.koJinJoHoZhy.cpNamemeikana = this.zenkakuAlphNum2hankaku(this.koJinJoHoZhy.cpNamemeikana);
            this.koJinJoHoZhy.cpNamemeikana = this.zenkakuKana2Hankaku(this.koJinJoHoZhy.cpNamemeikana);
        },

        // 下面是各个信息的check函数
        cpNameseiCheck() {
            this.cpNameseiWarmingTextFormatFlag = !(/^[\u4E00-\u9FA5]+$/g.test(this.koJinJoHoZhy.cpNamesei));
            this.cpNameseiWarmingTextTooLongFlag = !(this.koJinJoHoZhy.cpNamesei.length <= 40);
        },
        cpNamemeiCheck() {
            this.cpNamemeiWarmingTextFormatFlag = !(/^[\u4E00-\u9FA5]+$/g.test(this.koJinJoHoZhy.cpNamemei));
            this.cpNamemeiWarmingTextTooLongFlag = !(this.koJinJoHoZhy.cpNamemei.length <= 40);
        },
        cpNameseikanaCheck() {
            this.cpNameseikanaWarmingTextFormatFlag = !(/^[ｦ-ﾝ]+$/g.test(this.koJinJoHoZhy.cpNameseikana));
            this.cpNameseikaneWarmingTextTooLongFlag = !(this.koJinJoHoZhy.cpNameseikana.length <= 40);
        },
        cpNamemeikanaCheck() {
            this.cpNamemeikanaWarmingTextFormatFlag = !(/^[ｦ-ﾝ]+$/g.test(this.koJinJoHoZhy.cpNamemeikana));
            this.cpNamemeiWarmingTextTooLongFlag = !(this.koJinJoHoZhy.cpNamemeikana.length <= 40);
        },
        cuAlphlastnameCheck() {
            this.cuAlphlastnameWarmingTextFormatFlag = !(/^[a-zA-Z]+$/g.test(this.koJinJoHoZhy.cuAlphlastname))
            this.cuAlphlastnameWarmingTextTooLongFlag = !(this.koJinJoHoZhy.cuAlphlastname.length <= 40);

        },
        cuAlphfirstnameCheck() {
            this.cuAlphfirstnameWarmingTextFormatFlag = !(/^[a-zA-Z]+$/g.test(this.koJinJoHoZhy.cuAlphfirstname))
            this.cuAlphfirstnameWarmingTextTooLongFlag = !(this.koJinJoHoZhy.cuAlphfirstname.length <= 40);
        },
        cpCountryCheck() {
            this.cpCountryWarmingTextNotSelectedFlag = (this.koJinJoHoZhy.cpCountry == "");
        },
        cpBirthdateCheck() {
            this.cpBirthdateWarmingTextFormatFlag = (this.koJinJoHoZhy.cpBirthdate == "")
        },
        cpSexCheck() {
            this.cpSexWarmingTextNotSelectedFlag = (this.koJinJoHoZhy.cpSex == "")
        },
        cpDenwaCheck() {
            this.cpDenwaWarmingTextFormatFlag = (this.koJinJoHoZhy.cpDenwa != "")&&(!(/^0[789]0-[0-9]{4}-[0-9]{4}$/.test(this.koJinJoHoZhy.cpDenwa)));
        },
        cpPhoneCheck() {
            this.cpPhoneWarmingTextFormatFlag = !(/^0[789]0-[0-9]{4}-[0-9]{4}$/.test(this.koJinJoHoZhy.cpPhone));
        },
        cpShokugyocodeCheck() {
            this.musyokuFlag = (this.koJinJoHoZhy.cpShokugyocode == "05");
            this.cpShokugyocodeWarmingTextNotSelectedFLag = ((this.musyokuFlag != "05") && (this.koJinJoHoZhy.cpShokugyocode == ""));
        },
        cpKinmusakinameCheck() {
            this.cpKinmusakinameWarmingTextTooLongFlag = !(this.koJinJoHoZhy.cpKinmusakiname.length <= 40);
        }
    },
    components: {
    },
    watch: {
        // 监视各个信息的变化, 随之去展示或不展示错误提示信息

        'koJinJoHoZhy.cpNamesei': function () {
            this.cpNameseiCheck();
        }
        ,
        'koJinJoHoZhy.cpNamemei': function () {
            this.cpNamemeiCheck();
        },

        'koJinJoHoZhy.cpNameseikana': function () {
            this.convertSeiKana();
            this.cpNameseikanaCheck()
        },
        'koJinJoHoZhy.cpNamemeikana': function () {
            this.convertMeiKana();
            this.cpNamemeikanaCheck();
        },
        'koJinJoHoZhy.cuAlphlastname': function () {
            this.cuAlphlastnameCheck();
        },
        'koJinJoHoZhy.cuAlphfirstname': function () {
            this.cuAlphfirstnameCheck();
        },
        'koJinJoHoZhy.cpCountry': function () {
            this.cpCountryCheck();
        },
        'koJinJoHoZhy.cpBirthdate': function () {
            this.cpBirthdateCheck();
        },
        'koJinJoHoZhy.cpSex': function () {
            this.cpSexCheck()
        },
        'koJinJoHoZhy.cpDenwa': function () {
            this.cpDenwaCheck()
        },
        'koJinJoHoZhy.cpPhone': function () {
            this.cpPhoneCheck()
        },
        'koJinJoHoZhy.cpShokugyocode': function () {
            this.cpShokugyocodeCheck()
        },
        'koJinJoHoZhy.cpKinmusakiname': function () {
            this.cpKinmusakinameCheck()
        }
    }
}
</script>
<style>
.errorMessage {
    color: red;
}
</style>