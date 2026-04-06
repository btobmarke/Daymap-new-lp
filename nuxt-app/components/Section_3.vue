<script setup>
defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="section_3">
    <div class="heading">
      <img src="/hit.svg" class="hit"></img>
      <div class="heading_title">
        <span class="root">ルート作成時間</span>
        <span class="rate">50</span>
        <span class="percent">%</span>
        <span class="reduction">削減</span>
      </div>
    </div>

    <div class="contents">
      <div class="contents_head">
        <div class="circle_pop_area">
          <img src="/circle_pop.svg" class="circle_pop"></img>
          <span class="circle_pop_text">専門端末不要<br>すぐに無料で<br>試せる</span>
        </div>
        <div class="contents_title">
          <span class="head">ルート作成自動作成なら</span>
          <img src="/daymap_cost_logo.avif" class="daymap_cost_logo"></img>
        </div>
      </div>
      <p class="message">複数施設にまたがって送迎計画を作成可能</p>
      <div class="btn_area">
        <a href="#" class="document" :id="'document-btn-' + id">
          <img src="/cloud_download.svg" width="20px" height="20px">資料ダウンロード<span>></span>
        </a>
        <a href="#" class="trial" :id="'trial-btn-' + id">
          <img src="/trial_logo.svg" width="20px" height="20px">２週間無料体験<span>></span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section_3 {
  width: 100%;
  height: auto;
  background-color: #DEFFE9;
  padding: 80px 0;

}

.section_3 .heading {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 56px;
}

.section_3 .heading .heading_title {
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}

.section_3 .heading .heading_title .root {
  font-size: 20px;
}

.section_3 .heading .heading_title .rate {
  margin-left: 20px;
  font-size: 74px;
  color: #109400;
}

.section_3 .heading .heading_title .percent {
  font-size: 30px;
  color: #000;
}

.section_3 .contents {
  margin: 0 auto;
  display: flex;
  width: 100%;
  border-radius: 20px;
  flex-direction: column;
  background-color: #DEFFE9;
  column-gap: 40px;
  padding: 0 200px;
  text-align: center;
}

.section_3 .contents span {
  font-size: 32px;
}

.section_3 .contents .daymap_cost_logo {
  width: 100%;
  height: auto;
}

.section_3 .contents .circle_pop {
  width: 100%;
  height: 100%;
}

.section_3 .contents ul li::before {
  display: block;
}

.section_3 .contents ul li {
  font-size: 24px;
}

.section_3 .btn_area {
  display: flex;
  column-gap: 20px;
  justify-content: center;
}

.section_3 .btn_area a {
  font-weight: bold;
}


.section_3 a.document {
  border-radius: 40px;
  background-color: #FF8800;
  width: 288px;
  height: 78px;
  display: flex;
  justify-content: space-around;
  padding: 0 5%;
  /* 横中央 */
  column-gap: 16px;
  align-items: center;
  color: #FFFFFF;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(255, 136, 0, 0.2);
  text-decoration: none;
}

.section_3 a.document:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 136, 0, 0.3);
}

.section_3 a.document:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(255, 136, 0, 0.2);
}

.section_3 a.document::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.section_3 a.document:hover::after {
  opacity: 1;
}

.section_3 a.trial {
  border-radius: 40px;
  background-color: #10ACFB;
  width: 288px;
  height: 78px;
  column-gap: 16px;
  display: flex;
  justify-content: space-around;
  padding: 0 5%;
  /* 横中央 */
  align-items: center;
  color: #FFFFFF;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(16, 172, 251, 0.2);
  text-decoration: none;
}

.section_3 a.trial:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 172, 251, 0.3);
}

.section_3 a.trial:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(16, 172, 251, 0.2);
}

.section_3 a.trial::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.section_3 a.trial:hover::after {
  opacity: 1;
}

.message {
  font-size: 22px;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 24px;
}

.section_3 .contents_head {
  display: flex;
  align-items: center;
  column-gap: 20px;
  justify-content: center;
}

.head {
  padding-left: 10px;
  font-weight: bold;
}

.section_3 .contents_title {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 462px;
  height: auto;
  text-align: left;
}

.section_3 .circle_pop_area {
  position: relative;
  display: flex;
  width: 134px;
  height: 134px;
  align-items: center;
  justify-content: center;
}

.section_3 .circle_pop_area .circle_pop_text {
  position: absolute;
  top: 28%;
  left: 11%;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  width: 96px;
}



@media screen and (max-width: 600px) {
  .section_3 {
    padding: 40px 0;
  }

  .section_3 .heading .hit {
    width: 90%;
  }

  .section_3 .contents {
    padding: 0 20px;
  }

  .section_3 .heading {
    margin-bottom: 24px;
  }

  .section_3 .heading .heading_title .root {
    font-size: 20px;
  }

  .section_3 .heading .heading_title .rate {
    font-size: 35px;
    margin-left: 8px;
  }

  .section_3 .heading .heading_title .percent {
    font-size: 23px;
  }

  .section_3 .heading .heading_title .reduction {
    font-size: 32px;
  }

  .section_3 .message {
    width: 100%;
    font-size: 18px;
  }

  .section_3 .contents span {
    font-size: 18px;
  }

  .section_3 a.document {
    width: min(100%, 320px);
    max-width: 90%;
    min-height: 56px;
    height: auto;
    padding: 12px 16px;
    line-height: 1.35;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .section_3 a.trial {
    width: min(100%, 320px);
    max-width: 90%;
    min-height: 56px;
    height: auto;
    padding: 12px 16px;
    line-height: 1.35;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .section_3 .btn_area {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    align-items: center;
  }

  .section_3 .circle_pop_area .circle_pop_text {
    position: absolute;
    top: 28%;
    left: -3%;
    font-size: 12px;
    font-weight: normal;
    color: #ffffff;
    width: 96px;
  }

  .section_3 .circle_pop_area {
    width: 200px;
    height: auto;
  }

  .section_3 .contents_title {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 462px;
    height: auto;
    text-align: left;
  }

  .section_3 .contents .daymap_cost_logo {
    width: 245px;
    height: auto;
  }

  .section_3 .contents_head {
    column-gap: 10px;
  }

}
</style>
