<template>
    <div>
        <h1>担保者情報</h1>
        <div class="representDiv">
            <span class="represent">*は必須項目です。</span>
        </div>
        <!-- test -->
        <!-- <span>fjweofjwei</span> -->
        <!-- <table></table> -->
        <!-- <input type="button" value="tmp" @click="next()" /> -->
        <div>

            <label class="name description">担保提供物 *</label>
            <div class="kiho">

                <select v-model="collateralProviderZhy.cpTanpoMono">
                    <option>01 建物のみ</option>
                    <option>02 土地のみ</option>
                    <option>03 建物・土地</option>
                </select>
                <span class="errorMessage" id="" v-if="cpTanpoMonoWarmingTextNotSelectedFlag">
                    cpTanpoMonoWarmingTextNotSelectedFlag
                </span>
            </div>
        </div>

        <div>

            <label class="name description">姓 *</label>
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


            <label class="name description">名 *</label>
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

            <label class="name description">セイ</label>
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

            <label class="name description">メイ</label>
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

            <label class="name description">生年月日 *</label>
            <div class="kiho">

                <input type="date" v-model="collateralProviderZhy.cpBirthDateYear" />

                <span class="errorMessage" id="" v-if="cpBirthDateYearWarmingTextNotSelectedFlag">
                    cpBirthDateYearWarmingTextNotSelectedFlag
                </span>
            </div>
        </div>
        <div>

            <label class="name description">年齢</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpBirthDate" disabled/>
                <!-- <input type="text" v-model="collateralProviderZhy.cpBirthDate" /> -->
            </div>

            <span class="errorMessage" id="" v-if="cpBirthDateWarmingTextMinusFlag">
                cpBirthDateWarmingTextMinusFlag
            </span>
        </div>

        <div>

            <label class="name description">担保者となる理由 *</label>
            <div class="kiho">


                <!-- 应该是多选, 先用text -->
                <input type="text" v-model="collateralProviderZhy.cpMoushikomi" />
                <div>
                    <input type="checkbox" value="01" v-model="reasons" />01 親子リレー返済
                    <input type="checkbox" value="02" v-model="reasons" />02 収入合算（同居親族）
                    <input type="checkbox" value="03" v-model="reasons" />03 収入合算（非同居直系親族）
                    <input type="checkbox" value="04" v-model="reasons" />04 その他
                </div>

                <span class="errorMessage" id="" v-if="cpMoushikomiWarmingTextNotSelectedFlag">
                    cpMoushikomiWarmingTextNotSelectedFlag
                </span>
            </div>
        </div>
        <div>

            <label class="name description">申請者との関係 *</label>

            <div class="kiho">


                <select v-model="collateralProviderZhy.cpRentaiSaimushaToOnaji">
                    <option>配偶者</option>
                    <option>婚約者</option>
                    <option>親</option>
                    <option>子</option>
                    <option>その他</option>
                </select>

                <span class="errorMessage" id="" v-if="cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag">
                    cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag
                </span>
            </div>
        </div>
        <div>

            <label class="name description">携帯電話 *</label>
            <div class="kiho">


                <input type="text" v-model="collateralProviderZhy.cpPhone" :disabled="!phoneCanEditFlag" />

                <span class="errorMessage" id="" v-if="cpPhoneWarmingTextFormatFlag">
                    cpPhoneWarmingTextFormatFlag
                </span>
            </div>
        </div>
        <div>

            <label class="name description">職業 *</label>
            <div class="kiho">

                <select v-model="collateralProviderZhy.cpHonninShokugyoCode">
                    <option>01 自営業</option>
                    <option>02 パート、アルバイト</option>
                    <option>03 公務員</option>
                    <option>04 会社員</option>
                    <option>05 その他</option>
                    <option>06 無職</option>
                </select>

                <span class="errorMessage" id="" v-if="cpHonninShokugyoCodeWarmingTextNotSelectedFlag">
                    cpHonninShokugyoCodeWarmingTextNotSelectedFlag
                </span>
            </div>
        </div>
        <div>

            <label class="name description">勤務先の名称</label>
            <div class="kiho">

                <input type="text" v-model="collateralProviderZhy.cpHonninKinmusakiName"
                    :disabled="!kinmusakiCanEditFlag" />

                <span class="errorMessage" id="" v-if="cpHonninKinmusakiNameWarmingTooLongFormatFlag">
                    cpHonninKinmusakiNameWarmingTooLongFormatFlag
                </span>
            </div>
        </div>
        <div>

            <label class="name description">担保理由 *</label>
            <div class="kiho">
                <!-- <div> -->

                <textarea type="textarea" id="cpReasonTextArea" v-model="collateralProviderZhy.cpReason" >
                </textarea>
                <!-- </div> -->

                <span class="errorMessage" id="" v-if="cpReasonWarmingTextTooShortFlag">
                    cpReasonWarmingTextTooShortFlag
                </span>
                <span class="errorMessage" id="" v-if="cpReasonWarmingTextTooLongFlag">
                cpReasonWarmingTextTooLongFlag
            </span>
            <span>当前已经输入{{ collateralProviderZhy.cpReason.length }}个字</span>
            <input type="button" value="保存" @click="saveReason()" />
            </div>


        </div>

        <div>

            <label class="name description">個人申請者と同じ *</label>
            <div class="kiho">

                <input type="radio" name="onaji" id="01" value="01" v-model="collateralProviderZhy.cpSame" />
                同じ
                <input type="radio" name="onaji" id="02" value="02" v-model="collateralProviderZhy.cpSame" />
                違う
                <span class="errorMessage" id="" v-if="cpSameWarmingTextNotSelectedFlag">
                    cpSameWarmingTextNotSelectedFlag
                </span>
            </div>


        </div>

        <div class="buttons">
            <input type="button" value="戻る" @click="previous"/>
            <input type="button" value="次へ" @click="next" />
        </div>


    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
             // データはjson形式で保存
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
            // 担保者となる理由多オプション配列
            reasons: [],

            // 各エラーメッセージのフラグ，メッセージを表示する場合はtrue，表示しない場合はfalse
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
            cpHonninShokugyoCodeWarmingTextNotSelectedFlag: false,
            cpHonninKinmusakiNameWarmingTooLongFormatFlag: false,
            cpReasonWarmingTextTooShortFlag: false,
            cpReasonWarmingTextTooLongFlag: false,
            cpSameWarmingTextNotSelectedFlag: false,

            // それぞれの正規表現
            regKanji: new RegExp('^[\\u4E00-\\u9FA5]+$'),
            regKana: new RegExp('^[ｦ-ﾝ]*$'),
            regDenwa: new RegExp('^0[789]0-[0-9]{4}-[0-9]{4}$'),

            // 勤務先と電話番号はが編集できるかどうか
            kinmusakiCanEditFlag: true,
            phoneCanEditFlag: true
        }


    },
    methods: {
        next() {

            { //测试用代码
                console.log(this.collateralProviderZhy.cpBirthDateYear)
            }

            //すべての情報をチェック
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

            // エラーメッセージの表示有無から各情報の正誤を判断する
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
            this.cpHonninKinmusakiNameChecked = ((!this.cpHonninKinmusakiNameWarmingTooLongFormatFlag));
            this.cpReasonChecked = ((!this.cpReasonWarmingTextTooShortFlag) || (!this.cpReasonWarmingTextTooLongFlag));
            this.cpSameChecked = ((!this.cpSameWarmingTextNotSelectedFlag));

            // すべての情報が正しい場合、checkedAllFlagはtrueになる。
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


                // 有效
                console.log("cpNameMeiKanaWarmingTextFormatFlag");
                console.log(this.cpNameMeiKanaWarmingTextFormatFlag);

                // 有效
                console.log("cpNameMeiKanaWarmingTextTooLongFlag");
                console.log(this.cpNameMeiKanaWarmingTextTooLongFlag);


                // 有效
                console.log("cpNameSeiWarmingTextFormatFlag");
                console.log(this.cpNameSeiWarmingTextFormatFlag);


                // 有效
                console.log("cpNameSeiWarmingTextTooLongFlag");
                console.log(this.cpNameSeiWarmingTextTooLongFlag);

                // 有效
                console.log("cpNameSeiKanaWarmingTextFormatFlag");
                console.log(this.cpNameSeiKanaWarmingTextFormatFlag);

                // 有效
                console.log("cpNameSeiKanaWarmingTextTooLongFlag");
                console.log(this.cpNameSeiKanaWarmingTextTooLongFlag);

                // 有效
                console.log("cpBirthDateYearWarmingTextNotSelectedFlag");
                console.log(this.cpBirthDateYearWarmingTextNotSelectedFlag);

                // 有效
                console.log("cpBirthDateWarmingTextMinusFlag");
                console.log(this.cpBirthDateWarmingTextMinusFlag);

                // 有效
                console.log("cpMoushikomiWarmingTextNotSelectedFlag");
                console.log(this.cpMoushikomiWarmingTextNotSelectedFlag);

                // 有效
                console.log("cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag");
                console.log(this.cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag);

                               // 有效
                console.log("cpPhoneWarmingTextFormatFlag");
                console.log(this.cpPhoneWarmingTextFormatFlag);
                // 有效
                console.log("cpHonninShokugyoCodeWarmingTextNotSelectedFlag");
                console.log(this.cpHonninShokugyoCodeWarmingTextNotSelectedFlag);
                // 有效
                console.log("cpHonninKinmusakiNameWarmingTooLongFormatFlag");
                console.log(this.cpHonninKinmusakiNameWarmingTooLongFormatFlag);

                // 有效
                console.log("cpReasonWarmingTextTooShortFlag");
                console.log(this.cpReasonWarmingTextTooShortFlag);

                // 有效
                console.log("cpReasonWarmingTextTooLongFlag");
                console.log(this.cpReasonWarmingTextTooLongFlag);

                // 有效
                console.log("cpSameWarmingTextNotSelectedFlag");
                console.log(this.cpSameWarmingTextNotSelectedFlag);

                console.log("------------");

            }

            // すべての情報が正しい場合は、postする
            if (this.checkedAllFlag) {

                axios.post("http://localhost:8813/CollateralProviderZhy/save", this.collateralProviderZhy).then();
                console.log(this.collateralProviderZhy);
            } else {
                alert("输入有误");
            }

        },
        // 各个数据的验证方法
        // 各情報のチェック
        cpTanpoMonoCheck() {
            this.cpTanpoMonoWarmingTextNotSelectedFlag = this.collateralProviderZhy.cpTanpoMono == "";
        },
        cpNameMeiCheck() {
            this.cpNameMeiWarmingTextFormatFlag = !this.regKanji.test(this.collateralProviderZhy.cpNameMei);
            this.cpNameMeiWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameMei.length > 40);
        },
        cpNameMeiKanaCheck() {
            this.cpNameMeiKanaWarmingTextFormatFlag = !this.regKana.test(this.collateralProviderZhy.cpNameMeiKana);
            this.cpNameMeiKanaWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameMeiKana.length > 40);
        },
        cpNameSeiCheck() {
            this.cpNameSeiWarmingTextFormatFlag = !this.regKanji.test(this.collateralProviderZhy.cpNameSei);
            this.cpNameSeiWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameSei.length > 40);
        },
        cpNameSeiKanaCheck() {
            this.cpNameSeiKanaWarmingTextFormatFlag = !this.regKana.test(this.collateralProviderZhy.cpNameSeiKana);
            this.cpNameSeiKanaWarmingTextTooLongFlag = (this.collateralProviderZhy.cpNameSeiKana.length > 40);
        },
        cpBirthDateYearCheck() {
            this.cpBirthDateYearWarmingTextNotSelectedFlag = (this.collateralProviderZhy.cpBirthDateYear == "");
        },
        cpBirthDateCheck() {
            this.cpBirthDateWarmingTextMinusFlag = (this.collateralProviderZhy.cpBirthDate < 0);
            {
                // 测试用
                console.log(this.cpBirthDateWarmingTextMinusFlag)
            }
        },

        cpMoushikomiCheck() {
            this.cpMoushikomiWarmingTextNotSelectedFlag = (this.collateralProviderZhy.cpMoushikomi == "");
        },
        cpRentaiSaimushaToOnajiCheck() {
            this.cpRentaiSaimushaToOnajiWarmingTextNotSelectedFlag = (this.collateralProviderZhy.cpRentaiSaimushaToOnaji == "");
        },
        cpPhoneCheck() {
            this.cpPhoneWarmingTextFormatFlag = (!this.regDenwa.test(this.collateralProviderZhy.cpPhone));
        },
        cpHonninShokugyoCodeCheck() {
            this.cpHonninShokugyoCodeWarmingTextNotSelectedFlag = (this.collateralProviderZhy.cpHonninShokugyoCode == "");
        },
        cpHonninKinmusakiNameCheck() {
            this.cpHonninKinmusakiNameWarmingTooLongFormatFlag = (this.collateralProviderZhy.cpHonninKinmusakiName.length > 40);
        },
        cpReasonCheck() {
            this.cpReasonWarmingTextTooShortFlag = (this.collateralProviderZhy.cpReason.length < 50);
            this.cpReasonWarmingTextTooLongFlag = (this.collateralProviderZhy.cpReason.length >= 200);
        },
        cpSameCheck() {
            this.cpSameWarmingTextNotSelectedFlag = (this.collateralProviderZhy.cpSame == "");

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
        // 選択した生年月日に基づいて年齢を計算
        calculateAge() {
            let today = new Date();
            let todayYear = today.getFullYear();
            let todayMonth = today.getMonth() + 1;
            let todayDate = today.getDate();
            // let birthday = this.collateralProviderZhy.cpBirthDateYear;
            { // 测试用
                // console.log(this.collateralProviderZhy.cpBirthDateYear.getFullYear);
            }
            // let birthdayFullYear = birthday.getFullYear();
            // let birthdayMonth = birthday.getMonth();
            // let birthdayDate = birthday.getDate();

            let birthdayString = this.collateralProviderZhy.cpBirthDateYear;
            let birthdayYear = Number(birthdayString.substring(0, 4));
            let birthdayMonth = Number(birthdayString.substring(5, 7));
            let birthdayDate = Number(birthdayString.substring(8));
            { //测试用
                console.log(todayYear);
                console.log(todayMonth);
                console.log(todayDate);
                console.log(birthdayYear);
                console.log(birthdayMonth);
                console.log(birthdayDate);
            }

            let age = todayYear - birthdayYear;
            let monthDifference = todayMonth - birthdayMonth;

            if (monthDifference < 0 || (monthDifference === 0 && todayDate < birthdayDate)) {
                age--;
            }
            return age;
        },
        // 担保理由は一時保存機能
        saveReason(){
            this.$store.state.CollateralProviderZhyInContent02.cpReason = this.collateralProviderZhy.cpReason;
        },
        // 「戻る」機能
        previous(){
            this.$router.go(-1);
        }

    },
    watch: {
        // 'collateralProviderZhy.cpMoushikomi': function () {

        // },
        // 监视数组, 在数据变化时将数组转化为字符串
        // 配列を監視し、データが変わる時に配列を文字列に変換する
        'reasons': function () {
            this.collateralProviderZhy.cpMoushikomi = this.reasons.join(",")
        },
        // 個々の情報の変化を監視し、それに応じてエラーメッセージの表示/非表示を切り替える
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
            this.collateralProviderZhy.cpBirthDate = this.calculateAge();
        },
        'collateralProviderZhy.cpBirthDate': function () {
            { //
                console.log("--")
            }
            this.cpBirthDateCheck();
        },
                'collateralProviderZhy.cpMoushikomi': function () {
                    this.cpMoushikomiCheck();
        },
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
            if (this.collateralProviderZhy.cpSame == "01") {
                this.phoneCanEditFlag = false;
                this.kinmusakiCanEditFlag = false;
                this.collateralProviderZhy.cpHonninKinmusakiName = this.$store.state.KoJinJoHoZhyInContent01.cpKinmusakiname;
                this.collateralProviderZhy.cpPhone = this.$store.state.KoJinJoHoZhyInContent01.cpPhone;
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

        // vuexから一時保存された担保理由を読み取る
        this.collateralProviderZhy.cpReason = this.$store.state.CollateralProviderZhyInContent02.cpReason;

    }
}
</script>
<style>
/* *{
    background-color: red;
} */

h1 {
    text-align: center;
    color: gray;
}
.representDiv{
    text-align: center;
}
#cpReasonTextArea{
    height: 200px;
    width: 400px;
}
textarea{

    height: 200px;
    width: 400px;
}
.kiho {
    display: inline;
    width: 300px;
    position: relative;
}
.buttons{
    text-align: center;
}
.description {
    display: inline-block;
    width: 300px;
    text-align: right;
}
.buttons{
    text-align: center;
}
</style>