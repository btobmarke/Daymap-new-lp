<template>
  <div class="section_5">
    <div class="heading">
      <h3>メディア実績</h3>
    </div>
    <div class="contents">
      <div class="grid">
        <!-- Column 1 -->
        <div>
          <a href="https://comimi.jp/archives/soft/daymap" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item">
            <div class="icon" aria-hidden="true"></div>
            <div class="text">介護のコミミ</div>
            <div class="arrow" aria-hidden="true">›</div>
          </a>
          <a href="https://careit.jp/product/20230403/" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item">
            <div class="icon"></div>
            <div class="text">care it</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://news.nicovideo.jp/watch/nw12286998" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item">
            <div class="icon"></div>
            <div class="text">ニコニコニュース</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://japan.zdnet.com/release/30839874/" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">ZDNet Japan</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://japan.cnet.com/release/30839874/" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">CNET JAPAN</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://news.jorudan.co.jp/docs/news/detail.cgi?newsid=PT000001A000118303" target="_blank"
            rel="noopener noreferrer" title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">ジョルダンニュース！</div>
            <div class="arrow">›</div>
          </a>
        </div>

        <!-- Column 2 -->
        <div>
          <a href="https://comimi.jp/archives/soft/daymap" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">Teachable</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://www.zaikei.co.jp/releases/1989731/" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">財経新聞</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://straightpress.jp/company_news/detail?pr=000000001.000118303" target="_blank"
            rel="noopener noreferrer" title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">STRAIGHT PRESS</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://news.nifty.com/economy/business/" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">@niftyビジネス</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://www.mapion.co.jp/news/release/000000001.000118303/" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">マピオンニュース</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://money.smt.docomo.ne.jp/column-detail/791625.html?ref=media-articles_company" target="_blank"
            rel="noopener noreferrer" title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">dメニューマネー</div>
            <div class="arrow">›</div>
          </a>
        </div>

        <!-- Column 3 -->
        <div>
          <a href="https://news.infoseek.co.jp/article/prtimes_000000001_000118303/" target="_blank"
            rel="noopener noreferrer" title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">Infoseek ニュース</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://www.excite.co.jp/news/article/Prtimes_2023-03-20-118303-1/" target="_blank"
            rel="noopener noreferrer" title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">エキサイトニュース</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://www.seotools.jp/news/id_000000001.000118303.html" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">SEOTOOLS</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://predge.jp/pr/270732/" target="_blank" rel="noopener noreferrer" title="介護のコミミ - DAYMAPの紹介記事"
            class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">PR EDGE</div>
            <div class="arrow">›</div>
          </a>
          <a href="https://headtopics.com/jp/123042603212469458557-36874431" target="_blank" rel="noopener noreferrer"
            title="介護のコミミ - DAYMAPの紹介記事" class="item" v-if="showAll || !isMobile">
            <div class="icon"></div>
            <div class="text">HEAD TOPICS</div>
            <div class="arrow">›</div>
          </a>
        </div>
      </div>

      <!-- 続きを読むボタン（モバイルのみ） -->
      <div v-if="!showAll && isMobile" class="show_more_button" @click="showMore">
        <p>続きを読む</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showAll = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 600
}

const showMore = () => {
  showAll.value = true
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.section_5 {
  background-color: #FFFFFF;
  text-align: center;
  padding: 80px 0;
}

.section_5 .heading {
  margin-bottom: 56px;
  width: 100%;
}

.section_5 .heading h3 {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #45B13E
}

.section_5 .contents {
  margin: 0 auto;
  display: flex;
  width: 1200px;
  border-radius: 20px;
  flex-direction: column;
  column-gap: 40px;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 150px;
  max-width: 900px;
  margin: 0 auto;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon {
  width: 20px;
  height: 20px;
  background-color: #3cb043;
  /* 緑色 */
  margin-right: 10px;
}

.text {
  flex-grow: 1;
}

.text a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.text a:hover {
  color: #3cb043;
}

.arrow {
  color: #3cb043;
  font-size: 30px;
  margin-left: 10px;
}

.arrow a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.arrow a:hover {
  color: #45B13E;
}

@media screen and (max-width: 600px) {
  .section_5 {
    padding: 40px 20px;
  }

  .section_5 .heading h3 {
    font-size: 24px;
  }

  .section_5 .contents {
    width: 100%;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .item {
    margin-bottom: 15px;
  }

  .text {
    font-size: 14px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section_5 .contents {
    width: 90%;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}

.show_more_button {
  margin: 0 auto;
  width: 200px;
  height: 50px;
  border: 2px solid #45B13E;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
}

.show_more_button:hover {
  background-color: #45B13E;
}

.show_more_button:hover p {
  color: #FFFFFF;
}

.show_more_button p {
  color: #45B13E;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;
}
</style>
