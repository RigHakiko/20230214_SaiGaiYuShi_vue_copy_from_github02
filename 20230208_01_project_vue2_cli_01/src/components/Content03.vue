<template>
    <div>
        <h1>被災住宅金融支援申請</h1>
        <div class="representDiv">
            <span class="represent">*は必須項目です。</span>
        </div>
        <div>
            <h2>被災住宅の状況</h2>
            <div>
                <label class="description">被災住宅の種類</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHisaijutakuShurui">
                        <option>マイホーム</option>
                        <option>賃貸住宅</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">被災住宅の所有等</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHisaijutakuShoyuu">
                        <option>申込本人が所有している</option>
                        <option>申込本人が借りている</option>
                        <option>上記以外</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">被害状況</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHigaiJokyo">
                        <option>01全壊</option>
                        <option>02大規模半壊</option>
                        <option>03半壊</option>
                        <option>04避難指示あり</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description"></label>
                <div class="kiho">
                    <select v-model="buildingZhy">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">被災住宅の修理が不能又は困難である</label>
                <div class="kiho">
                    <input type="checkbox" value="困難である" v-model="buildingZhy.dbHigaiJokyoDaikiboHankaiOrHankai" />困難である
                </div>
            </div>




        </div>

        <div>
            <h2>敷地状況</h2>
            <div>
                <label class="description">敷地の面積（㎡）</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbBukken_Menseki"/>
                </div>
            </div>
            <div>
                <label class="description">物件_敷地（所在地）_都道府県</label>
                <div class="kiho">
                    <select v-model="buildingZhy.aplBukkenAddressTodofuken">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description"></label>
                <div class="kiho">

                </div>
            </div>

            
            <div>
                <label class="description">物件_敷地（所在地）_市郡</label>
                <div class="kiho">
                    <input type="text" >
                </div>
            </div>

            <div>
                <label class="description">物件_敷地（所在地）_町村</label>
                <div class="kiho">

                    <input type="text" />
                </div>
                </div>
            </div>

            <div>
                <label class="description">物件_敷地（所在地）_番地</label>
                <div class="kiho">

                    <input type="text" />
                </div>

            <div>
                <label class="description">物件_敷地（所在地）_郵便番号</label>
                <div class="kiho">
                    <input type="text" />
                </div>
            </div>


            <!-- <div>
                <label class="description">物件_敷地（所在地）_郵便番号</label>
                <div class="kiho">

                </div>
            </div> -->


            <div>
                <label class="description">防災集団移転事業に係る住宅再建を行う</label>
                <div class="kiho">
                    <input type="checkbox" value="該当" v-model="buildingZhy.dbBousaiSyudanItenJigyo" />困難である

                </div>
            </div>

            <div>
                <label class="description">敷地の所有関係</label>
                <div class="kiho">
                    <select v-model="buildingZhy">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">建物の床面積_住宅部分</label>
                <div class="kiho">
                    <input type="number" />
                </div>
            </div>
            <div>
                <label class="description">建物の床面積_非住宅部分</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">建物の構造（戸建形式）</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">建て方</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">入居予定年（年）</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">入居予定月（月）</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">住宅の用途</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">物件_工事完了予定年月_年</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">物件_工事完了予定年月_月</label>
                <div class="kiho">

                </div>
            </div>
        </div>
        <div>
            <h2>資金の受取予定年月</h2>
            <div>
                <label class="description">資金の受取予定年月_土地先行資金_年</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_土地先行資金_月</label>
                <div class="kiho">

                </div>
            </div>

            <div>
                <label class="description">資金の受取予定年月_中間資金_年</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_中間資金_月</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_最終資金_年</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_最終資金_月</label>
                <div class="kiho">

                </div>
            </div>
        </div>
        <div>
            <h2>工事請負事業者</h2>
            <div>
                <label class="description">会社名称</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">仲介業者又は販売代理_名称（カナ）</label>
                <div class="kiho">

                </div>
            </div>
        </div>
        <div>
            <h2>担当者名</h2>
            <div>
                <label class="description">仲介業者又は販売代理_担当者名_名</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">仲介業者又は販売代理_担当者名_姓</label>
                <div class="kiho">

                </div>
            </div>
        </div>
        <div>
            <h2>建設に要する費用</h2>
            <div>
                <label class="description">建設費</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">土地取得費</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">費用合計</label>
                <div class="kiho">

                </div>
            </div>
        </div>
        <div>
            <h2>災害融資の借入希望額</h2>
            <div>
                <label class="description">借入希望額_借入金額</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">借入希望額_金利(不能超过10.00)</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">借入希望額_返済期間</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">借入希望額_年間返済額の1/12</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">返済方法</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">被災親族同居の有無</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">据置期間の年数</label>
                <div class="kiho">

                </div>
            </div>
        </div>
        <div>
            <h2>その他の借入内容</h2>
            <div>
                <label class="description">その他_借入先名称等</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">その他_借入金額（万円）</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">その他_返済期間　（年）</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">その他_年間返済額の1/12（円）</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">建設に要する費用（再掲）（万円）</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">災害融資の借入希望額、その他の借入内容（万円）</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">金融機関名</label>
                <div class="kiho">

                </div>
            </div>
            <div>
                <label class="description">支店名</label>
                <div class="kiho">

                </div>
            </div>
        </div>
        <!-- <div>{{ num }}</div> -->
        <button @click="tmp()"></button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            buildingZhy: {

                name: '',
                //被災住宅の種類
                dbHisaijutakuShurui: '',

                //被災住宅の所有等
                dbHisaijutakuShoyuu: '',

                //被害状況
                dbHigaiJokyo: '',

                //被災住宅の修理が不能又は困難である
                dbHigaiJokyoDaikiboHankaiOrHankai: '',

                //敷地の面積（㎡）
                dbBukken_Menseki: '',


                aplBukkenAddressTodofuken: '',
                dbBukkenAddressShigun: '',
                dbBukkenAddressChoson: '',
                aplBukkenAddressBanchi: '',
                aplBukkenAddressPostCode3: '',
                dbBousaiSyudanItenJigyo: '',
                dbBukkenShikichiNoShoyuKankei: '',
                dbBukken_Tatemono_Jutaku: '',
                dbBukken_Tatemono_HiJutaku: '',
                dbBukken_Kozo: '',
                dbBukken_TatekataKodateKeishiki: '',
                dbNyukyoYoteiDateYear: '',
                dbNyukyoYoteiDateMonth: '',
                dbJutakuYoto: '',
                dbBukken_KojiKanryoDate_Year: '',
                dbBukken_KojiKanryoDate_Month: '',

                dbShikinDateTochiShikinYear: '',
                dbShikinDateTochiShikinMonth: '',
                dbShikinDateChukanShikinYear: '',
                dbShikinDateChukanShikinMonth: '',
                dbShikinDateSaishuShikinYear: '',
                dbShikinDateSaishuShikinMonth: '',

                dbKariireIninKaishaName: '',
                dbChukaiHanbaiNameKana: '',

                dbChukaiHanbaiTantoshaNameMei: '',
                dbChukaiHanbaiTantoshaNameSei: '',

                dbHiyouKensetsuHi: '',
                dbHiyouTochiSyotokuHi: '',
                dbHiyouTotal: '',

                dbKariireGakuKingaku: '',
                dbKariireGakuKinri: '',
                dbKariireGakuHensaiKikan: '',
                bKariireGakuNenHensai12No1: '',
                dbHensaiHouhou: '',
                dbHisaiShinzokuDokyoAri: '',
                dbSueokiKikanNoNensu: '',

                dbSonotaName: '',
                dbSonotaKingaku: '',
                dbSonotaHensaiKikan: '',
                dbSonotaNenHensai12No1: '',

                dbSogoKingaku: '',
                dbKinyuKikanName: '',
                dbShitemName: ''

            },

            //被災住宅の所有等显示, 默认为不显示, false
            flagShowDBHisaijutakuShoyuu: false,

            //被災住宅の修理が不能又は困難である可选, 默认是可选, true
            flagOptionalityDBHigaiJokyoDaikiboHankaiOrHankai: true,

            //强制要求填写その他, 默认是不强制, 为false
            flagObligatorySonota: false,

            // num: 1


            //各个错误flag
            flagErrorDbHisaijutakuShuruiNotSelected: false,

            // flag
        }
    },
    methods: {
        tmp: function () {
            // this.tmp2(this.num)

        },
        tmp2: function (num) {
            console.log(this.num)
            num = 3;
            console.log(this.num)
        }


    },
    watch: {

    },
    created() {

    }
}

</script>
<style>
.description {
    display: inline-block;
    width: 300px;
    text-align: right;
}
</style>