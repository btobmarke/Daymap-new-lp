<template>
  <div class="section_7">
    <div class="heading">
      <h3>よくある質問</h3>
    </div>
    <div class="contents">
      <div class="qa_area" v-for="(qa, index) in visibleQAs" :key="index">
        <div class="above">
          <span class="question">{{ qa.question }}</span>
        </div>
        <div class="under">
          <span class="answer">{{ qa.answer }}</span>
        </div>
      </div>
      <div v-if="hasMoreQAs" class="show_more_button" @click="showMore">
        <p>続きを見る</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const qaList = [
  {
    question: '複数の事業所があります。ある事業所から出発して、別の事業所へ送り届ける計画を作成することはできますか？',
    answer: '可能です。送迎計画で、車の出発施設と到着施設を指定することができます。'
  },
  {
    question: '複数の事業所があります。ある事業所のお客さまを、別の事業所にある送迎車で送迎する計画を作ることはできますか？',
    answer: '可能です。'
  },
  {
    question: 'お客さまによっては、お迎えの時間を指定される方がいます。お迎えの時間を指定しての計画立案は可能ですか？',
    answer: '可能です。ただし、調整が必要になります。'
  },
  {
    question: 'あるお客さまを、日によって別の施設へ送迎する計画を作成することはできますか？',
    answer: '可能です。'
  },
  {
    question: 'お客さまの情報を、他のシステムから一括で取り込むことはできますか？',
    answer: '可能です。CSV形式のファイルで連携することができます。'
  },
  {
    question: '「ドライバーとお客さまの相性」があり、その条件に合った計画立案は可能ですか？',
    answer: '現在は対応しておりません。お客さま同士の相性設定は可能です。'
  },
  {
    question: '送迎の履歴は、どのぐらいの期間を見ることができますか？',
    answer: '過去3年間の送迎の履歴を見ることができます。'
  },
  {
    question: '現場には、IT管理者が不在ですが利用できますか？',
    answer: '可能です。簡単な設定でご利用できます。'
  },
  {
    question: '利用にあたり、準備するモノには何がありますか？',
    answer: '本部で利用するインターネットに接続できるパソコン又はタブレット、送迎車で利用するスマホをご準備ください'
  },
  {
    question: 'ドライバーが必要となる操作を教えてください。',
    answer: '基本的には、出発、到着操作のみです。詳細は本資料をご確認ください。'
  },
  {
    question: '同じ車でも、ドライバーが日によって変わります。その時の操作はどうなりますか？',
    answer: '車に乗る際に、スマホのアプリで、運転する車を指定する必要があります。同じ車に乗る場合の操作は不要です。'
  },
  {
    question: '本サービスの最低利用期間はありますか',
    answer: 'ありません。月単位でご利用いただけます。'
  },
  {
    question: 'セキュリティは問題ないですか？',
    answer: 'データは日本国内のクラウドへ保存され、通信は全て暗号化しています。'
  }
]

const showAll = ref(false)
const initialDisplayCount = 7

const visibleQAs = computed(() => {
  return showAll.value ? qaList : qaList.slice(0, initialDisplayCount)
})

const hasMoreQAs = computed(() => {
  return qaList.length > initialDisplayCount && !showAll.value
})

const showMore = () => {
  showAll.value = true
}
</script>

<style scoped>
.section_7 {
  height: auto;
  background-color: #45B13E;
  text-align: center;
  padding: 80px 0;
}

.section_7 .heading {
  width: 100%;
  margin-bottom: 56px;
}

.section_7 .heading h3 {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
}

.section_7 .contents {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

.section_7 .contents .qa_area {
  background-color: #FFFFFF;
  border-radius: 20px;
  width: 1092px;
  margin: 0 auto;
  height: 145px;
  font-size: 16px;
}

.above {
  display: flex;
  height: 72px;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #45B13E;
  padding-left: 20px
}



.under {
  display: flex;
  height: 72px;
  align-items: center;
  text-align: left;
  padding-left: 20px
}

.qa_area {
  font-size: 18px;
}

.question::before {
  content: "Q";
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background-color: #45B13E;
  text-align: center;
  color: #FFFFFF;
  margin-right: 20px;
}


.answer::before {
  content: "A";
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background-color: #C9C74E;
  text-align: center;
  color: #FFFFFF;
  margin-right: 20px;
}

.show_more_button {
  margin: 0 auto;
  width: 200px;
  height: 50px;
  border: 2px solid #FFFFFF;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.show_more_button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.show_more_button p {
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
}

@media screen and (max-width: 600px) {

  .section_7 {
    padding: 40px 20px;
  }

  .section_7 .contents .qa_area {
    width: 100%;
  }

  .above {
    /* display: flex; */
    height: auto;
    /* align-items: center;
    text-align: left;
    border-bottom: 1px solid #45B13E; */
    padding: 10px 20px;
  }


  .under {
    height: auto;
    width: 100%;
    padding-left: 0;
  }

  .section_7 .contents .qa_area {
    font-size: 16px;
    height: auto;
  }

  .question {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .answer {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: start;
    justify-content: center;
    padding: 10px 20px;
  }

  .answer::before {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 8px;
  }

  .question::before {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 8px;
  }


  .qa_area span {
    width: 100%;
  }


}
</style>
