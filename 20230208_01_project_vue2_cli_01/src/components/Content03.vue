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
                        <option value="マイホーム">マイホーム</option>
                        <option value="賃貸住宅">賃貸住宅</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">被災住宅の所有等</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHisaijutakuShoyuu">
                        <option value="申込本人が所有している">申込本人が所有している</option>
                        <option value="申込本人が借りている">申込本人が借りている</option>
                        <option value="上記以外">上記以外</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">被害状況</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHigaiJokyo">
                        <option value="01全壊">01全壊</option>
                        <option value="02大規模半壊">02大規模半壊</option>
                        <option value="03半壊">03半壊</option>
                        <option value="04避難指示あり">04避難指示あり</option>
                    </select>
                </div>
            </div>
            <!-- 用于拷贝用
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
             -->

            <div>
                <label class="description">被災住宅の修理が不能又は困難である</label>
                <div class="kiho">
                    <input type="checkbox"  v-model="buildingZhy.dbHigaiJokyoDaikiboHankaiOrHankai" 
                    true-value="困難である"
                    false-value=""
                    />困難である
                </div>
            </div>




        </div>

        <div>
            <h2>敷地状況</h2>
            <div>
                <label class="description">敷地の面積（㎡）</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbBukken_Menseki"/>
                </div>
            </div>
            <div>
                <label class="description">物件_敷地（所在地）_都道府県</label>
                <div class="kiho">
                    <select v-model="buildingZhy.aplBukkenAddressTodofuken">
                        <option :value="code" v-for="(prefecture, code) in prefectures">{{ code }} {{ prefecture }}</option>
                        <!-- <option>{{ index }}</option>
                        <option></option>
                        <option></option> -->
                    </select>
                </div>
            </div>
<!-- 拷贝用的代码
                <div>
                <label class="description"></label>
                <div class="kiho">

                </div>
            </div>
 -->

            
            <div>
                <label class="description">物件_敷地（所在地）_市郡</label>
                <div class="kiho"  >
                    <input type="text" v-model="buildingZhy.dbBukkenAddressShigun" >
                </div>
            </div>

            <div>
                <label class="description">物件_敷地（所在地）_町村</label>
                <div class="kiho">

                    <input type="text" v-model="buildingZhy.dbBukkenAddressChoson"/>
                </div>
                </div>
            </div>

            <div>
                <label class="description">物件_敷地（所在地）_番地</label>
                <div class="kiho">

                    <input type="text" v-model="buildingZhy.aplBukkenAddressBanchi"/>
                </div>

            <div>
                <label class="description">物件_敷地（所在地）_郵便番号</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.aplBukkenAddressPostCode3" />
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
                    <input type="checkbox" true-value="該当" false-value="" v-model="buildingZhy.dbBousaiSyudanItenJigyo" />該当

                </div>
            </div>

            <div>
                <label class="description">敷地の所有関係</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbBukkenShikichiNoShoyuKankei">
                        <option value="01 所有権">01 所有権</option>
                        <option value="02 地上権">02 地上権</option>
                        <option value="03 賃貸借">03 賃貸借</option>
                        <option value="04 使用貸借">04 使用貸借</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">建物の床面積_住宅部分</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbBukken_Tatemono_Jutaku"/>
                </div>
            </div>
            <div>
                <label class="description">建物の床面積_非住宅部分</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbBukken_Tatemono_HiJutaku"/>

                </div>
            </div>
            <div>
                <label class="description">建物の構造（戸建形式）</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbBukken_Kozo">
                        <option value="01木作">01木作</option>
                        <option value="02耐火">02耐火</option>
                        <option value="03準耐火">03準耐火</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">建て方</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbBukken_TatekataKodateKeishiki">
                        <option value="01一戸建て">01一戸建て</option>
                        <option value="02連続建て">02連続建て</option>
                        <option value="03重ね建て">03重ね建て</option>
                        <option value="04共同建て">04共同建て</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">入居予定年（年）</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbNyukyoYoteiDateYear">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">入居予定月（月）</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbNyukyoYoteiDateMonth">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">住宅の用途</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbJutakuYoto">
                        <option value="01自ら居住する">01自ら居住する</option>
                        <option value="02親族が居住する">02親族が居住する</option>
                        <option value="03賃貸住宅">03賃貸住宅</option>
                        <option value="04その他">04その他</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">物件_工事完了予定年月_年</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbBukken_KojiKanryoDate_Year">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">物件_工事完了予定年月_月</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbBukken_KojiKanryoDate_Month">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <h2>資金の受取予定年月</h2>
            <div>
                <label class="description">資金の受取予定年月_土地先行資金_年</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateTochiShikinYear">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_土地先行資金_月</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateTochiShikinMonth">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>

            <div>
                <label class="description">資金の受取予定年月_中間資金_年</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateChukanShikinYear">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_中間資金_月</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateChukanShikinMonth">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_最終資金_年</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateSaishuShikinYear">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_最終資金_月</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateSaishuShikinMonth">
                         <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <h2>工事請負事業者</h2>
            <div>
                <label class="description">会社名称</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbKariireIninKaishaName" />
                </div>
            </div>
            <div>
                <label class="description">仲介業者又は販売代理_名称（カナ）</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbChukaiHanbaiNameKana" />
                </div>
            </div>
        </div>
        <div>
            <h2>担当者名</h2>
            <div>
                <label class="description">仲介業者又は販売代理_担当者名_名</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbChukaiHanbaiTantoshaNameMei" />
                </div>
            </div>
            <div>
                <label class="description">仲介業者又は販売代理_担当者名_姓</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbChukaiHanbaiTantoshaNameSei"/>
                </div>
            </div>
        </div>
        <div>
            <h2>建設に要する費用</h2>
            <div>
                <label class="description">建設費</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbHiyouKensetsuHi" />
                </div>
            </div>
            <div>
                <label class="description">土地取得費</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbHiyouTochiSyotokuHi"  />
                </div>
            </div>
            <div>
                <label class="description">費用合計</label>
                <div class="kiho">
                    <input type="number"  v-model="buildingZhy.dbHiyouTotal" />
                </div>
            </div>
        </div>
        <div>
            <h2>災害融資の借入希望額</h2>
            <div>
                <label class="description">借入希望額_借入金額</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbKariireGakuKingaku"  />
                </div>
            </div>
            <div>
                <label class="description">借入希望額_金利(不能超过10.00)</label>
                <div class="kiho">
                    <input type="number"  v-model="buildingZhy.dbKariireGakuKinri" />
                </div>
            </div>
            <div>
                <label class="description">借入希望額_返済期間</label>
                <div class="kiho">
                    <input type="number"  v-model="buildingZhy.dbKariireGakuHensaiKikan" />
                </div>
            </div>
            <div>
                <label class="description">借入希望額_年間返済額の1/12</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbKariireGakuNenHensai12No1"  />
                </div>
            </div>
            <div>
                <label class="description">返済方法</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHensaiHouhou">
                        <option value="01 元利均等返済">01 元利均等返済</option>
                        <option value="02 元金均等返済">02 元金均等返済</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">被災親族同居の有無</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHisaiShinzokuDokyoAri">
                        <option value="01有">01有</option>
                        <option value="02無">02無</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="description">据置期間の年数</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbSueokiKikanNoNensu">
                        <option value="01">01:1年</option>
                        <option value="02">02:2年</option>
                        <option value="03">03:3年</option>
                        <option value="04">04:4年</option>
                        <option value="05">05:5年以上</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <h2>その他の借入内容</h2>
            <div>
                <label class="description">その他_借入先名称等</label>
                <div class="kiho">
                    <input type="text"  v-model="buildingZhy.dbSonotaName" />
                </div>
            </div>
            <div>
                <label class="description">その他_借入金額（万円）</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbSonotaKingaku"  />
                </div>
            </div>
            <div>
                <label class="description">その他_返済期間　（年）</label>
                <div class="kiho">
                    <input type="number"  v-model="buildingZhy.dbSonotaHensaiKikan" />
                </div>
            </div>
            <div>
                <label class="description">その他_年間返済額の1/12（円）</label>
                <div class="kiho">
                    <input type="number"  v-model="buildingZhy.dbSonotaNenHensai12No1" />
                </div>
            </div>
            <div>
                <label class="description">建設に要する費用（再掲）（万円）</label>
                <div class="kiho">
                    <input type="number"  v-model="buildingZhy.dbHiyouTotal" />
                </div>
            </div>
            <div>
                <label class="description">災害融資の借入希望額、その他の借入内容（万円）</label>
                <div class="kiho">
                    <input type="number"  v-model="buildingZhy.dbSogoKingaku" />
                </div>
            </div>
            <div>
                <label class="description">金融機関名</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbKinyuKikanName"  />
                </div>
            </div>
            <div>
                <label class="description">支店名</label>
                <div class="kiho">
                    <input type="text"  v-model="buildingZhy.dbShitemName" />
                </div>
            </div>
        </div>
        <!-- <div>{{ num }}</div> -->
        <button @click="tmp()">tmp</button>
        <button @click="next()">next</button>
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
                dbKariireGakuNenHensai12No1: '',
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


            prefectures: {"1":"北海道","2":"青森県","3":"岩手県","04":"宮城県","5":"秋田県","6":"山形県","7":"福島県","8":"茨城県","9":"栃木県","10":"群馬県","11":"埼玉県","12":"千葉県","13":"東京都","14":"神奈川県","15":"新潟県","16":"富山県","17":"石川県","18":"福井県","19":"山梨県","20":"長野県","21":"岐阜県","22":"静岡県","23":"愛知県","24":"三重県","25":"滋賀県","26":"京都府","27":"大阪府","28":"兵庫県","29":"奈良県","30":"和歌山県","31":"鳥取県","32":"島根県","33":"岡山県","34":"広島県","35":"山口県","36":"徳島県","37":"香川県","38":"愛媛県","39":"高知県","40":"福岡県","41":"佐賀県","42":"長崎県","43":"熊本県","44":"大分県","45":"宮崎県","46":"鹿児島県","47":"沖縄県"}
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
        },
        next(){
            axios.post("http://localhost:8813/BuildingZhy/save", this.buildingZhy);
            console.log(this.buildingZhy);
        }


    },
    watch: {
        
    },
    created() {

    },
    computed : {
        listenSonota : function(){
            // let c = [this.buildingZhy.dbSonotaName];
            return [this.buildingZhy.dbSonotaName, 
            this.buildingZhy.dbSonotaKingaku, 
            this.buildingZhy.dbSonotaHensaiKikan, 
        this.buildingZhy.dbSonotaNenHensai12No1,
    this.buildingZhy.dbKinyuKikanName,this.buildingZhy.dbShitemName];
        }
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