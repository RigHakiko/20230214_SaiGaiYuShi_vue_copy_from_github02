<template>
    <div>
            <div>姓（漢字）<input type="text" v-model="koJinJoHoZhy.cpNamesei" />
                <span class="errorMessage" id="cpNameseiWarmingTextFormat"
                    v-if="cpNameseiWarmingTextFormatFlag">フォーマットが間違っています。漢字で入力してください。</span>
                <span class="errorMessage" id="cpNameseiWarmingTextToLong"
                    v-if="cpNameseiWarmingTextToLongFlag">入力した漢字が長すぎます。再入力してください。</span>
            </div>
            <div>姓（ローマ字）<input type="text" v-model="koJinJoHoZhy.cuAlphlastname" />
                <span class="errorMessage" id="cuAlphlastnameWarmingTextFormat"
                    v-if="cuAlphlastnameWarmingTextFormatFlag">フォーマットが間違っています。ローマ字で入力してください。</span>
                <span class="errorMessage" id="cuAlphlastnameWarmingTextTooLong"
                    v-if="cuAlphlastnameWarmingTextTooLongFlag">入力したカタカナが長すぎます。再入力してください。</span>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            koJinJoHoZhy: {
                cpNamesei: "",
                cuAlphlastname: ""
            },
            regKanji: /^[\u4E00-\u9FA5]/g,
            cpNameseiWarmingTextFormatFlag: false,
            cpNameseiWarmingTextToLongFlag: false,
            cuAlphlastnameWarmingTextFormatFlag: false,
            cuAlphlastnameWarmingTextTooLongFlag: false,
            regEnglish: /^[a-zA-Z]*$/g,
            
        }
    },
    methods: {
        judgKanji(str) {
            console.log(str.value)
            return this.regKanji.test(str);
        }
    },
    
    watch: {
        'koJinJoHoZhy.cpNamesei': function () {
            // this.cpNameseiWarmingTextFormatFlag = !(this.regKanji.test(this.koJinJoHoZhy.cpNamesei));
            // console.log(this.regKanji);
            // console.log(this.koJinJoHoZhy.cpNamesei);
            console.log(this.regKanji.test(this.koJinJoHoZhy.cpNamesei));
            console.log(/^[\u4E00-\u9FA5]/g.test(this.koJinJoHoZhy.cpNamesei));
            console.log("------------")
        },
        'koJinJoHoZhy.cuAlphlastname': function(){
            console.log(this.regEnglish.test(this.koJinJoHoZhy.cuAlphlastname));
            console.log(/^[a-zA-Z]*$/g.test(this.koJinJoHoZhy.cuAlphlastname));
        }
    }
    ,
    created() {
    }

}
</script>