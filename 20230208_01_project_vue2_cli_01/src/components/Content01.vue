<template>
    <div>
        <div>基本情報</div>
        <div>
            <div>名前</div>
            <div>姓（漢字）<input type="text" v-model="koJinJoHoZhy.cpNamesei" /></div>
            <div>名（漢字）<input type="text" v-model="koJinJoHoZhy.cpNameMei" /></div>
            <div>セイ<input type="text" v-model="koJinJoHoZhy.cpNamemeikana" /></div>
            <div>メイ<input type="text" v-model="koJinJoHoZhy.cpName" /></div>
            <div>姓（ローマ字）<input type="text" v-model="koJinJoHoZhy.cuAlphlastname" /></div>
            <div>名（ローマ字）<input type="text" v-model="koJinJoHoZhy.cuAlphfirstname" /></div>
        </div>
        <div>
            <div>国籍</div>
            <select v-model="koJinJoHoZhy.cpCountry">
                <option disabled value="">please select</option>
                <option>china</option>
                <option>japan</option>
                <option>korean</option>
                <option>spain</option>
            </select>
        </div>
        <div>
            <div>性別</div>
            <select v-model="koJinJoHoZhy.cpSex">
                <option disabled value="">please select</option>
                <option>male</option>
                <option>female</option>
                <option>other</option>
            </select>
        </div>
        <div>
            <div>生年月日</div>
            <div>
                <datepicker v-model="koJinJoHoZhy.cpBirthdate"></datepicker>
            </div>
        </div>
        <div>
            <div>電話番号</div>
            <div>
                <input type="text" v-model="koJinJoHoZhy.cpDenwa" />
            </div>
        </div>
        <div>
            <div>職業</div>
            <div>
                <select v-model="koJinJoHoZhy.cpShokugyocode">
                    <option value="1">1 content</option>
                    <option value="2">2 content</option>
                    <option value="3">3 content</option>
                    <option value="4">4 content</option>
                </select>
            </div>
            <div>

            </div>

        </div>
        <div>
            <div>勤務先</div>
            <div>
                <input type="text" v-model="koJinJoHoZhy.cpKinmusakiname" />
            </div>
        </div>
        <div>
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
            }
        }
    },
    methods: {
        add() {
            axios.post('http://localhost:8813/ko-jin-jo-ho-zhy/save', this.koJinJoHoZhy).then();
        }
    },
    components: {
        datepicker: Datepicker
    },
    watch: {
        'koJinJoHoZhy.cuAlphfirstname': function(){
            console.log("tmp")
        }
    }

}
</script>
<style>

</style>