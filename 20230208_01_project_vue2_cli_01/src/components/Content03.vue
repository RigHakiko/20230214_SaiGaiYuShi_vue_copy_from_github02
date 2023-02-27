<template>
    <div>
        <h1>被災住宅金融支援申請</h1>
        <div class="representDiv">
            <span class="represent">*は必須項目です。</span>
        </div>
        <div>
            <h2>被災住宅の状況</h2>
            <label class="description">被災住宅の種類</label>
            <div class="kiho">

            </div>
        </div>
        <div>
            <h2>敷地状況</h2>
        </div>
        <div>
            <h2>資金の受取予定年月</h2>
        </div>
        <div>
            <h2>工事請負事業者</h2>
        </div>
        <div>
            <h2>担当者名</h2>
        </div>
        <div>
            <h2>建設に要する費用</h2>
        </div>
        <div>
            <h2>災害融資の借入希望額</h2>
        </div>
        <div>
            <h2>その他の借入内容</h2>
        </div>
        <div>{{ num }}</div>
        <button @click="tmp"></button>
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

            num: 1
        }
    },
    methods: {
        tmp: function () {
            this.tmp2(this.num)
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
<style></style>