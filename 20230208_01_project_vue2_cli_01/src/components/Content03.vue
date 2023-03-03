<template>
    <div>
        <h1>被災住宅金融支援申請</h1>
        <div class="representDiv">
            <span class="represent">*は必須項目です。</span>
        </div>
        <!-- below test -->
        {{ dbShikinDateTochiShikinYearAndMonth }}
        {{ dbShikinDateChukanShikinYearAndMonth }}
        {{ dbShikinDateSaishuShikinYearAndMonth }}
        <!-- above test -->
        <div>
            <h2>被災住宅の状況</h2>
            <div>
                <label class="description">被災住宅の種類</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHisaijutakuShurui">
                        <option value="マイホーム">マイホーム</option>
                        <option value="賃貸住宅">賃貸住宅</option>
                    </select>
                    <!-- 下面是测试用代码 -->
                    <span class="errorMessage" v-if="flagErrorDbHisaijutakuShuruiNotSelected">
                        被災住宅の種類を選択してください
                    </span>
                    <!-- 上面是测试用代码 -->
                </div>
            </div>
            <div>
                <label class="description">被災住宅の所有等</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHisaijutakuShoyuu">
                        <option value="申込本人が所有している">申込本人が所有している</option>
                        <option value="申込本人が借りている" v-if="!flagHideSelectMyHome">申込本人が借りている</option>
                        <option value="上記以外">上記以外</option>
                    </select>

                    <span class="errorMessage" v-if="flagErrorDbHisaijutakuShoyuu">
                        被災住宅の所有等を選択してください
                    </span>
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
                    <span class="errorMessage" v-if="flagErrorDbHigaiJokyo">
                        被害状況を選択してください
                    </span>
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
                    <input type="checkbox" v-model="buildingZhy.dbHigaiJokyoDaikiboHankaiOrHankai" true-value="困難である"
                        false-value="" />困難である
                </div>
            </div>




        </div>

        <div>
            <h2>敷地状況</h2>
            <div>
                <label class="description">敷地の面積（㎡）</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbBukken_Menseki" />
                    <span class="errorMessage" v-if="flagErrorDbBukken_MensekiNotEntered">
                        敷地の面積（㎡）を入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbBukken_MensekiFormat">
                        フォーマットが間違っています、最大5桁までの正整数を入力してください。
                    </span>
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
                    <span class="errorMessage" v-if="flagErrorAplBukkenAddressTodofukenNotSelected">
                        物件_敷地（所在地）_都道府県を選択してください。
                    </span>
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
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbBukkenAddressShigun">
                    <span class="errorMessage" v-if="flagErrorDbBukkenAddressShigunTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
                </div>
            </div>

            <div>
                <label class="description">物件_敷地（所在地）_町村</label>
                <div class="kiho">

                    <input type="text" v-model="buildingZhy.dbBukkenAddressChoson" />
                    <span class="errorMessage" v-if="flagErrorDbBukkenAddressChosonTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
                </div>
            </div>
        </div>

        <div>
            <label class="description">物件_敷地（所在地）_番地</label>
            <div class="kiho">

                <input type="text" v-model="buildingZhy.aplBukkenAddressBanchi" />
                <span class="errorMessage" v-if="flagErrorAplBukkenAddressBanchiTooLong">
                    入力した文字が長すぎます。再入力してください。
                </span>
            </div>

            <div>
                <label class="description">物件_敷地（所在地）_郵便番号</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.aplBukkenAddressPostCode3" />
                    <span class="errorMessage" v-if="flagErrorAplBukkenAddressPostCode3NotEntered">
                        郵便番号を入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorAplBukkenAddressPostCode3TooLong">
                        フォーマットが間違っています、再入力してください。
                    </span>
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
                    <span class="errorMessage" v-if="flagErrorDbBukkenShikichiNoShoyuKankeiNotSelected">
                        敷地の所有関係を選択してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">建物の床面積_住宅部分</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbBukken_Tatemono_Jutaku" />
                </div>
                <span class="errorMessage" v-if="flagErrorDbBukken_Tatemono_JutakuNotEntered">
                    建物の床面積_住宅部分を入力してください。
                </span>
                <span class="errorMessage" v-if="flagErrorDbBukken_Tatemono_JutakuFormat">
                    フォーマットが間違っています、再入力してください。
                </span>
            </div>
            <div>
                <label class="description">建物の床面積_非住宅部分</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbBukken_Tatemono_HiJutaku" />

                    <span class="errorMessage" v-if="flagErrorDbBukken_Tatemono_HiJutakuNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbBukken_Tatemono_HiJutakuFormat">
                        フォーマットが間違っています、再入力してください。
                    </span>
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
                    <span class="errorMessage" v-if="flagErrorDbBukken_KozoNotSelected">
                        選択してください。
                    </span>
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
                    <span class="errorMessage" v-if="flagErrorDbBukken_TatekataKodateKeishikiNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">入居予定年（年）</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbNyukyoYoteiDateYear">
                        <option v-for=" year in dbNyukyoYoteiDateYearCandidatedArray" :value="year">{{ year }}</option>
                        <!-- <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option> -->
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbNyukyoYoteiDateYearNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">入居予定月（月）</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbNyukyoYoteiDateMonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbNyukyoYoteiDateMonthNotSelected">
                        選択してください。
                    </span>
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
                    <span class="errorMessage" v-if="flagErrorDbJutakuYotoNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">物件_工事完了予定年月_年</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbBukken_KojiKanryoDate_Year">
                        <option v-for="year in dbBukken_KojiKanryoDate_YearCandidateArray" :value="year">{{ year }}</option>
                        <!-- <option></option>
                        <option></option>
                        <option></option>
                        <option></option> -->
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbBukken_KojiKanryoDate_YearNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">物件_工事完了予定年月_月</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbBukken_KojiKanryoDate_Month">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbBukken_KojiKanryoDate_MonthNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
        </div>
        <div>
            <h2>資金の受取予定年月</h2>
            <div>
                <label class="description">資金の受取予定年月_土地先行資金_年</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateTochiShikinYear">
                        <option v-for="year in dbShikinDateTochiShikinYearCandidateArray" :value="year">{{ year }}</option>
                        <!-- <option></option>
                        <option></option>
                        <option></option>
                        <option></option> -->
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbShikinDateTochiShikinYear">
                        土地先行資金の受取予定年月は、「中間資金の受取予定年月」「最終資金の受取予定年月」より後の年月を指定できません。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_土地先行資金_月</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateTochiShikinMonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbShikinDateTochiShikinMonth">
                        土地先行資金の受取予定年月は、「中間資金の受取予定年月」「最終資金の受取予定年月」より後の年月を指定できません。
                    </span>
                </div>
            </div>

            <div>
                <label class="description">資金の受取予定年月_中間資金_年</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateChukanShikinYear">
                        <option v-for="year in dbShikinDateChukanShikinYearCandidateArray" :value="year">{{ year }}</option>
                        <!-- <option></option>
                        <option></option>
                        <option></option> -->
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbShikinDateChukanShikinYear">
                        中間資金の受取予定年月は、「最終資金の受取予定年月」より後の年月を指定できません。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_中間資金_月</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateChukanShikinMonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbShikinDateChukanShikinMonth">
                        中間資金の受取予定年月は、「最終資金の受取予定年月」より後の年月を指定できません。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_最終資金_年</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateSaishuShikinYear">
                        <option v-for="year in dbShikinDateSaishuShikinYearCandidateArray" :value="year">{{ year }}</option>
                        <!-- <option></option>
                        <option></option>
                        <option></option>
                        <option></option> -->
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbShikinDateSaishuShikinYearNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">資金の受取予定年月_最終資金_月</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbShikinDateSaishuShikinMonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbShikinDateSaishuShikinMonthNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
        </div>
        <div>
            <h2>工事請負事業者</h2>
            <div>
                <label class="description">会社名称</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbKariireIninKaishaName" />
                    <span class="errorMessage" v-if="flagErrorDbKariireIninKaishaNameNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbKariireIninKaishaNameTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">仲介業者又は販売代理_名称（カナ）</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbChukaiHanbaiNameKana" />
                    <span class="errorMessage" v-if="flagErrorDbChukaiHanbaiNameKanaNotEntered">
                        フォーマットが間違っています、再入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbChukaiHanbaiNameKanaTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
                </div>
            </div>
        </div>
        <div>
            <h2>担当者名</h2>
            <div>
                <label class="description">仲介業者又は販売代理_担当者名_名</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbChukaiHanbaiTantoshaNameMei" />
                    <span class="errorMessage" v-if="flagErrorDbChukaiHanbaiTantoshaNameMeiNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbChukaiHanbaiTantoshaNameMeiTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">仲介業者又は販売代理_担当者名_姓</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbChukaiHanbaiTantoshaNameSei" />
                    <span class="errorMessage" v-if="flagErrorDbChukaiHanbaiTantoshaNameSeiNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbChukaiHanbaiTantoshaNameSeiTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
                </div>
            </div>
        </div>
        <div>
            <h2>建設に要する費用</h2>
            <div>
                <label class="description">建設費</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbHiyouKensetsuHi" />
                    <span class="errorMessage" v-if="flagErrorDbHiyouKensetsuHiNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbHiyouKensetsuHiFormat">
                        フォーマットが間違っています、最大5桁までの正整数を入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">土地取得費</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbHiyouTochiSyotokuHi" />
                    <span class="errorMessage" v-if="flagErrorDbHiyouTochiSyotokuHiNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbHiyouTochiSyotokuHiFormat">
                        フォーマットが間違っています、最大5桁までの正整数を入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">費用合計</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbHiyouTotal" />
                </div>
            </div>
        </div>
        <div>
            <h2>災害融資の借入希望額</h2>
            <div>
                <label class="description">借入希望額_借入金額</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbKariireGakuKingaku" />
                    <span class="errorMessage" v-if="flagErrorDbKariireGakuKingakuNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbKariireGakuKingakuFormat">
                        フォーマットが間違っています、最大5桁までの正整数を入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">借入希望額_金利(不能超过10.00)</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbKariireGakuKinri" />
                    <span class="errorMessage" v-if="flagErrorDbKariireGakuKinriNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDbKariireGakuKinriFormat">
                        フォーマットが間違っています、最大5桁までの整数を入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">借入希望額_返済期間</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbKariireGakuHensaiKikan" />
                    <span class="errorMessage" v-if="flagErrorDbKariireGakuHensaiKikanNotEntered">
                        入力してください。
                    </span>
                    <span class="errorMessage" v-if="flagErrorDBKariireGakuHensaiKikanFormat">
                        フォーマットが間違っています、100未満正整数を入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">借入希望額_年間返済額の1/12</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbKariireGakuNenHensai12No1" />
                </div>
            </div>
            <div>
                <label class="description">返済方法</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHensaiHouhou">
                        <option value="01 元利均等返済">01 元利均等返済</option>
                        <option value="02 元金均等返済">02 元金均等返済</option>
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbHensaiHouhouNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">被災親族同居の有無</label>
                <div class="kiho">
                    <select v-model="buildingZhy.dbHisaiShinzokuDokyoAri">
                        <option value="01有">01有</option>
                        <option value="02無">02無</option>
                    </select>
                    <span class="errorMessage" v-if="flagErrorDbHisaiShinzokuDokyoAriNotSelected">
                        選択してください。
                    </span>
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
                    <span class="errorMessage" v-if="flagErrorDbSueokiKikanNoNensuNotSelected">
                        選択してください。
                    </span>
                </div>
            </div>
        </div>
        <div>
            <h2>その他の借入内容</h2>
            <div>
                <label class="description">その他_借入先名称等</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbSonotaName" />
                    <span class="errorMessage" v-if="flagErrorDbSonotaNameNotEntered">入力してください。</span>
                    <span class="errorMessage" v-if="flagErrorDbSonotaNameTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">その他_借入金額（万円）</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbSonotaKingaku" />
                    <!-- 测试用代码在下面 -->
                    <!-- <div>{{ flagBlankDbSonotaKingaku }}</div> -->
                    <!-- 测试用代码在上面 -->
                    <span class="errorMessage" v-if="flagErrorDbSonotaKingakuNotEntered">入力してください。</span>
                    <span class="errorMessage" v-if="flagErrorDbSonotaKingakuFormat">
                        フォーマットが間違っています、最大5桁までの正整数を入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">その他_返済期間　（年）</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbSonotaHensaiKikan" />
                    <span class="errorMessage" v-if="flagErrorDbSonotaHensaiKikanNotEntered">入力してください。</span>
                    <span class="errorMessage" v-if="flagErrorDbSonotaHensaiKikanFormat">
                        フォーマットが間違っています、100未満正整数を入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">その他_年間返済額の1/12（円）</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbSonotaNenHensai12No1" />
                    <!-- <span class="errorMessage" v-if="flagErrorDbSonotaNenHensai12No1NotEntered">入力してください。</span> -->
                </div>
            </div>
            <div>
                <label class="description">建設に要する費用（再掲）（万円）</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbHiyouTotal" />
                </div>
            </div>
            <div>
                <label class="description">災害融資の借入希望額、その他の借入内容（万円）</label>
                <div class="kiho">
                    <input type="number" v-model="buildingZhy.dbSogoKingaku" />
                    <!-- <span  class="errorMessage" v-if="">

                    </span>
                    <span  class="errorMessage" v-if="">

                    </span> -->
                </div>
            </div>
            <div>
                <label class="description">金融機関名</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbKinyuKikanName" />
                    <span class="errorMessage" v-if="flagErrorDbKinyuKikanNameNotEntered">入力してください。</span>
                    <span class="errorMessage" v-if="flagErrorDbKinyuKikanNameTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
                </div>
            </div>
            <div>
                <label class="description">支店名</label>
                <div class="kiho">
                    <input type="text" v-model="buildingZhy.dbShitemName" />
                    <span class="errorMessage" v-if="flagErrorDbShitemNameNotEntered">入力してください。</span>
                    <span class="errorMessage" v-if="flagErrorDbShitemNameTooLong">
                        入力した文字が長すぎます。再入力してください。
                    </span>
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


            // num: 1


            //各个错误flag
            // flagErrorDbHisaijutakuShuruiNotSelected: false,

            // flag


            prefectures: { "1": "北海道", "2": "青森県", "3": "岩手県", "04": "宮城県", "5": "秋田県", "6": "山形県", "7": "福島県", "8": "茨城県", "9": "栃木県", "10": "群馬県", "11": "埼玉県", "12": "千葉県", "13": "東京都", "14": "神奈川県", "15": "新潟県", "16": "富山県", "17": "石川県", "18": "福井県", "19": "山梨県", "20": "長野県", "21": "岐阜県", "22": "静岡県", "23": "愛知県", "24": "三重県", "25": "滋賀県", "26": "京都府", "27": "大阪府", "28": "兵庫県", "29": "奈良県", "30": "和歌山県", "31": "鳥取県", "32": "島根県", "33": "岡山県", "34": "広島県", "35": "山口県", "36": "徳島県", "37": "香川県", "38": "愛媛県", "39": "高知県", "40": "福岡県", "41": "佐賀県", "42": "長崎県", "43": "熊本県", "44": "大分県", "45": "宮崎県", "46": "鹿児島県", "47": "沖縄県" }
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
        next() {
            axios.post("http://localhost:8813/BuildingZhy/save", this.buildingZhy);
            console.log(this.buildingZhy);
        }, 
        getYearsArray(offset, quantity){
            let array = new Array();
            for(let i = 0; i< quantity;i++){
                array.push(this.currentYear+offset+i);
            }
            return array;
        },
        transDateToNumber(year, month){
            let num;
            // year += '';
            // month += '';
            if(year != '' && month != ''){
                num =(''+year + (month<10? '0' + month: '' + month) ) * 1;
                return num;
            } else{
                return 0;
            }
        },
        dateCompareDate1GreatThanDate2(date1, date2 ){
            date1 = date1 *1;
            date2 = date2 *1;

            if (date1 > 0 && date2 > 0 &&date1 > date2 ){
                return true;
            } else{
                return false;
            }
        }


    },
    watch: {
        // 'listenSonota': function () {

        // }

        'buildingZhy.': function () {

        },
        flagHideSelectMyHome : function(){
            if(this.flagHideSelectMyHome){
                if(this.buildingZhy.dbHisaijutakuShoyuu == "申込本人が借りている"){
                    this.buildingZhy.dbHisaijutakuShoyuu = null;
                    { // for test
                        console.log("test");
                        console.log(this.buildingZhy.dbHisaijutakuShoyuu);
                    }
                }
            }
        },
       

        
    },
    created() {

    },
    computed: {
        listenSonota: function () {
            // let c = [this.buildingZhy.dbSonotaName];
            return [this.buildingZhy.dbSonotaName,
            this.buildingZhy.dbSonotaKingaku,
            this.buildingZhy.dbSonotaHensaiKikan,
            this.buildingZhy.dbSonotaNenHensai12No1,
            this.buildingZhy.dbKinyuKikanName,
            this.buildingZhy.dbShitemName];
        },

        //强制要求填写その他 
        flagObligatorySonota() {
            return !(this.flagBlankDbSonotaName &&
                this.flagBlankDbSonotaKingaku &&
                this.flagBlankDbSonotaHensaiKikan &&
                this.flagBlankDbSonotaNenHensai12No1 &&
                this.flagBlankDbKonyuKikanName &&
                this.flagBlankDbShitemName)
        },

        flagBlankDbSonotaName() {
            return this.buildingZhy.dbSonotaName == "";
        },
        flagBlankDbSonotaKingaku() {
            return this.buildingZhy.dbSonotaKingaku == "";
        },
        flagBlankDbSonotaHensaiKikan() {
            return this.buildingZhy.dbSonotaHensaiKikan == "";
        },
        flagBlankDbSonotaNenHensai12No1() {
            return this.buildingZhy.dbSonotaNenHensai12No1 == "";
        },
        flagBlankDbKonyuKikanName() {
            return this.buildingZhy.dbKinyuKikanName == "";
        },
        flagBlankDbShitemName() {
            return this.buildingZhy.dbShitemName == "";
        },

        // 下面是各个error message
        flagErrorDbHisaijutakuShuruiNotSelected() {
            return this.buildingZhy.dbHisaijutakuShurui == "";
        },
        flagErrorDbHisaijutakuShoyuu() {
            return this.buildingZhy.dbHisaijutakuShoyuu == "" || this.buildingZhy.dbHisaijutakuShoyuu == null;
        },
        flagErrorDbHigaiJokyo() {
            return this.buildingZhy.dbHigaiJokyo == "";
        },

        flagErrorDbBukken_MensekiNotEntered() {
            return this.buildingZhy.dbBukken_Menseki == "";
        },
        flagErrorDbBukken_MensekiFormat() {
            return false;
        },
        flagErrorAplBukkenAddressTodofukenNotSelected() {
            return this.buildingZhy.aplBukkenAddressTodofuken == "";
        },
        flagErrorDbBukkenAddressShigunTooLong() {
            return false;
        },
        flagErrorDbBukkenAddressChosonTooLong() {
            return false;
        },
        flagErrorAplBukkenAddressBanchiTooLong() {
            return false;
        },
        flagErrorAplBukkenAddressPostCode3NotEntered() {
            return this.buildingZhy.aplBukkenAddressPostCode3 == "";
        },
        flagErrorAplBukkenAddressPostCode3TooLong() {
            return false;
        },
        flagErrorDbBukkenShikichiNoShoyuKankeiNotSelected() {
            return this.buildingZhy.dbBukkenShikichiNoShoyuKankei == "";
        },
        flagErrorDbBukken_Tatemono_JutakuNotEntered() {
            return this.buildingZhy.dbBukken_Tatemono_Jutaku == "";
        },
        flagErrorDbBukken_Tatemono_JutakuFormat() {
            return false;
        },
        flagErrorDbBukken_Tatemono_HiJutakuNotEntered() {
            return this.buildingZhy.dbBukken_Tatemono_HiJutaku == "";
        },
        flagErrorDbBukken_Tatemono_HiJutakuFormat() {
            return false;
        },
        flagErrorDbBukken_KozoNotSelected() {
            return this.buildingZhy.dbBukken_Kozo == "";
        },
        flagErrorDbBukken_TatekataKodateKeishikiNotSelected() {
            return this.buildingZhy.dbBukken_TatekataKodateKeishiki == "";
        },
        flagErrorDbNyukyoYoteiDateYearNotSelected() {
            return this.buildingZhy.dbNyukyoYoteiDateYear == "";
        },
        flagErrorDbNyukyoYoteiDateMonthNotSelected() {
            return this.buildingZhy.dbNyukyoYoteiDateMonth == "";
        },
        flagErrorDbJutakuYotoNotSelected() {

            return this.buildingZhy.dbJutakuYoto == "";
        },
        flagErrorDbBukken_KojiKanryoDate_YearNotSelected() {

            return this.buildingZhy.dbBukken_KojiKanryoDate_Year == "";
        },
        flagErrorDbBukken_KojiKanryoDate_MonthNotSelected() {

            return this.buildingZhy.dbBukken_KojiKanryoDate_Month == "";
        },
        flagErrorDbShikinDateTochiShikinYear() {
            return this.dateCompareDate1GreatThanDate2(this.dbShikinDateTochiShikinYearAndMonth, this.dbShikinDateChukanShikinYearAndMonth) || this.dateCompareDate1GreatThanDate2(this.dbShikinDateTochiShikinYearAndMonth,this.dbShikinDateSaishuShikinYearAndMonth);
        },
        flagErrorDbShikinDateTochiShikinMonth() {

            return this.dateCompareDate1GreatThanDate2(this.dbShikinDateTochiShikinYearAndMonth, this.dbShikinDateChukanShikinYearAndMonth) || this.dateCompareDate1GreatThanDate2(this.dbShikinDateTochiShikinYearAndMonth,this.dbShikinDateSaishuShikinYearAndMonth);
        },
        flagErrorDbShikinDateChukanShikinYear() {
            return this.dateCompareDate1GreatThanDate2(this.dbShikinDateChukanShikinYearAndMonth, this.dbShikinDateSaishuShikinYearAndMonth);
        },
        flagErrorDbShikinDateChukanShikinMonth() {

            return this.dateCompareDate1GreatThanDate2(this.dbShikinDateChukanShikinYearAndMonth, this.dbShikinDateSaishuShikinYearAndMonth);
        },
        flagErrorDbShikinDateSaishuShikinYearNotSelected() {

            return this.buildingZhy.dbShikinDateSaishuShikinYear == "";
        },
        flagErrorDbShikinDateSaishuShikinMonthNotSelected() {

            return this.buildingZhy.dbShikinDateSaishuShikinMonth == "";
        },
        flagErrorDbKariireIninKaishaNameNotEntered() {

            return this.buildingZhy.dbKariireIninKaishaName == "";
        },
        flagErrorDbKariireIninKaishaNameTooLong() {

        },
        flagErrorDbChukaiHanbaiNameKanaNotEntered() {

            return this.buildingZhy.dbChukaiHanbaiNameKana == "";
        },
        flagErrorDbChukaiHanbaiNameKanaTooLong() {

        },
        flagErrorDbChukaiHanbaiTantoshaNameMeiNotEntered() {

            return this.buildingZhy.dbChukaiHanbaiTantoshaNameMei == "";
        },

        flagErrorDbChukaiHanbaiTantoshaNameMeiTooLong() {

        },
        flagErrorDbChukaiHanbaiTantoshaNameSeiNotEntered() {

            return this.buildingZhy.dbChukaiHanbaiTantoshaNameSei == "";
        },
        flagErrorDbChukaiHanbaiTantoshaNameSeiTooLong() {

        },
        flagErrorDbHiyouKensetsuHiNotEntered() {

            return this.buildingZhy.dbHiyouKensetsuHi == "";
        },
        flagErrorDbHiyouKensetsuHiFormat() {

        },
        flagErrorDbHiyouTochiSyotokuHiNotEntered() {

            return this.buildingZhy.dbHiyouTochiSyotokuHi == "";
        },
        flagErrorDbHiyouTochiSyotokuHiFormat() {

        },
        flagErrorDbKariireGakuKingakuNotEntered() {

            return this.buildingZhy.dbKariireGakuKingaku == "";
        },
        flagErrorDbKariireGakuKingakuFormat() {

        },
        flagErrorDbKariireGakuKinriNotEntered() {

            return this.buildingZhy.dbKariireGakuKinri == "";
        },
        flagErrorDbKariireGakuKinriFormat() {

        },
        flagErrorDbKariireGakuHensaiKikanNotEntered() {

            return this.buildingZhy.dbKariireGakuHensaiKikan == "";
        },
        flagErrorDBKariireGakuHensaiKikanFormat() {

        },
        flagErrorDbHensaiHouhouNotSelected() {

            return this.buildingZhy.dbHensaiHouhou == "";
        },
        flagErrorDbHisaiShinzokuDokyoAriNotSelected() {

        },
        flagErrorDbSueokiKikanNoNensuNotSelected() {

            return this.buildingZhy.dbSueokiKikanNoNensu == "";
        },


        // その他のエラーメッセージ
        flagErrorDbSonotaNameNotEntered() {
            return this.flagObligatorySonota && (this.flagBlankDbSonotaName)
        },
        flagErrorDbSonotaNameTooLong() {
            return this.buildingZhy.dbSonotaName.length > 100
        },
        flagErrorDbSonotaKingakuNotEntered() {
            return this.flagObligatorySonota && (this.flagBlankDbSonotaKingaku)
        },
        flagErrorDbSonotaKingakuFormat() {
            return false
        },
        flagErrorDbSonotaHensaiKikanNotEntered() {
            return this.flagObligatorySonota && (this.flagBlankDbSonotaHensaiKikan)
        },
        flagErrorDbSonotaHensaiKikanFormat() {
            return false;
        },

        // flagErrorDbSonotaNenHensai12No1NotEntered(){
        //     return this.flagObligatorySonota &&(this.flagBlankDbSonotaNenHensai12No1);
        // },
        // flagErrorDbSonotaNenHensai12No1Format(){
        //     return false;
        // },

        flagErrorDbKinyuKikanNameNotEntered() {
            return this.flagObligatorySonota && (this.flagBlankDbKonyuKikanName);
        },
        flagErrorDbKinyuKikanNameTooLong() {
            return false
        },
        flagErrorDbShitemNameNotEntered() {
            return this.flagObligatorySonota && (this.flagBlankDbShitemName);
        },
        flagErrorDbShitemNameTooLong() {
            return false
        },

        flagHideSelectMyHome(){
            return this.buildingZhy.dbHisaijutakuShurui == "マイホーム";
        },

        currentYear(){
            return new Date().getFullYear();
        },

        dbNyukyoYoteiDateYearCandidatedArray(){
            return this.getYearsArray(-1, 5);
        },
        dbBukken_KojiKanryoDate_YearCandidateArray(){
            return this.getYearsArray(-1, 5);
        },

        dbShikinDateTochiShikinYearCandidateArray(){
            return this.getYearsArray(-1, 5);
        },

        dbShikinDateChukanShikinYearCandidateArray(){
            return this.getYearsArray(0, 5);
        },
        dbShikinDateSaishuShikinYearCandidateArray(){
            return this.getYearsArray(1, 5);
        },
        // dbShikinDateTochiShikinYearAndMonth(){
        //     if(this.buildingZhy.dbShikinDateChukanShikinYear != '' && this.buildingZhy.dbShikinDateChukanShikinMonth != ''){
        //         let array  = new Array();
        //         array.push(this.buildingZhy.dbShikinDateChukanShikinYear);
        //         array.push(this.buildingZhy.dbShikinDateChukanShikinMonth);
        //         return array;
        //     } else{
        //         return null;
        //     }
        // },
        // dbShikinDateTochiShikinYearAndMonth(){
        //     let num;
        //     if(this.buildingZhy.dbShikinDateTochiShikinYear != '' && this.buildingZhy.dbShikinDateTochiShikinMonth != ''){
        //         num = (this.buildingZhy.dbShikinDateTochiShikinYear +(this.buildingZhy.dbShikinDateTochiShikinMonth < 10? '0': '')+ this.buildingZhy.dbShikinDateTochiShikinMonth) * 1;
                
        //         { // 测试代码
        //             console.log(num)
        //         }
        //         return num;
        //     } else{
        //         { // 测试代码
        //             console.log(num)
        //         }
        //         return 0;
        //     }
        // },
        dbShikinDateTochiShikinYearAndMonth(){
            return this.transDateToNumber(this.buildingZhy.dbShikinDateTochiShikinYear, this.buildingZhy.dbShikinDateTochiShikinMonth);
        },
        dbShikinDateChukanShikinYearAndMonth(){
            return this.transDateToNumber(this.buildingZhy.dbShikinDateChukanShikinYear, this.buildingZhy.dbShikinDateChukanShikinMonth);
        },
        dbShikinDateSaishuShikinYearAndMonth(){
            return this.transDateToNumber(this.buildingZhy.dbShikinDateSaishuShikinYear, this.buildingZhy.dbShikinDateSaishuShikinMonth);
        },

     }
}

</script>
<style>
.description {
    display: inline-block;
    width: 300px;
    text-align: right;
}

.errorMessage {
    color: red;
}
</style>