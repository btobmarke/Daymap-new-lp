<template>
  <div class="section_6_wrapper">
    <div class="section_6" id="price">
      <div class="heading">
        <h3>料金プラン</h3>
      </div>
      <div class="contents">
        <div class="table is-mode-pc">
          <!-- ヘッダー -->
          <div class="plan-name"></div>
          <div class="table-header">初期費用</div>
          <div class="table-header">初月利用料</div>
          <div class="table-header">月額利用料</div>

          <!-- DAYMAP -->
          <div class="cell plan-name">
            <span class="plan-badge daymap">DAYMAP</span>
          </div>
          <div class="cell">0円</div>
          <div class="cell">0円</div>
          <div class="cell">3,000円～</div>

          <!-- 競合A -->
          <div class="cell plan-name">
            <span class="plan-badge competitor">競合A</span>
          </div>
          <div class="cell">0円</div>
          <div class="cell">0円</div>
          <div class="cell">15,000円～</div>

          <!-- 競合B -->
          <div class="cell plan-name">
            <span class="plan-badge competitor">競合B</span>
          </div>
          <div class="cell">0円</div>
          <div class="cell">0円</div>
          <div class="cell">8,800円～</div>
        </div>


        <div class="table is-mode-sp grid_table">
          <!-- ヘッダー -->
          <div class="cell border_bottom"></div>
          <!-- DAYMAP -->
          <div class="cell my_company head_cell border_bottom">
            <span class="plan-badge　daymap">DAYMAP</span>
          </div>
          <div class="cell other_company head_cell  border_bottom">
            <span class="plan-badge other_company competitor">競合A</span>
          </div>
          <div class="cell other_company head_cell border_bottom">
            <span class="plan-badge other_company competitor">競合B</span>
          </div>

          <div class="cell item_name border_left border_bottom">初期費用</div>
          <div class="cell my_company border_bottom">0円</div>
          <div class="cell other_company border_bottom">0円</div>
          <div class="cell other_company end_cell border_bottom">0円</div>

          <!-- 競合A -->
          <div class="cell item_name border_left border_bottom">初月利用料</div>
          <div class="cell my_company border_bottom">0円</div>
          <div class="cell other_company border_bottom">0円</div>
          <div class="cell other_company end_cell border_bottom">0円</div>

          <!-- 競合B -->
          <div class="cell item_name border_left border_bottom">月額利用料</div>
          <div class="cell my_company border_bottom">3,000円～</div>
          <div class="cell other_company border_bottom">15,000円～</div>
          <div class="cell other_company end_cell border_bottom">8,800円～</div>
        </div>

        <div class="attention">
          <h3>最低利用期間はありません。<br class="sp_br">いつでもやめられます。</h3>
          <p>※施設の利用者様の人数によって金額は変動いたしますのでお気軽にお問い合わせください。</p>
          <p>※本部、および送迎車で利用するパソコン、スマートフォン、通信環境は、お客さまでご準備ください。</p>
        </div>

        <div class="step-flow is-mode-pc">
          <!-- Step 1 -->
          <div class="step">
            <img src="/left-arow.svg" class="step_arrow">
            <div class="arow_inner_content">
              <img class="arow_inner_content_icon" src="/white_check.svg"></img>
              <div class="arow_inner_content_text">
                <p class="number">01</p>
                <p class="text">無料体験申込</p>
              </div>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="step">
            <img src="/middle-arow.svg" class="step_arrow">
            <div class="arow_inner_content">
              <img class="arow_inner_content_icon" src="/white_check.svg"></img>
              <div class="arow_inner_content_text">
                <p class="number">02</p>
                <p class="text">アカウント発行</p>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="step">
            <img src="/right-arow.svg" class="step_arrow">
            <div class="arow_inner_content">
              <img class="arow_inner_content_icon" src="/white_check.svg"></img>
              <div class="arow_inner_content_text">
                <p class="number">03</p>
                <p class="text">ご利用開始</p>
              </div>
            </div>
          </div>
        </div>

        <div class="sp-step-flow">
          <!-- Step 1 -->
          <div class="sp_step first-item">
            <img src="/sp_arrow_1.svg" class="step_arrow">
            <div class="arow_inner_content">
              <div class="arow_inner_content_box">
                <img class="arow_inner_content_icon" src="/white_check.svg"></img>
                <div class="arow_inner_content_text">
                  <p class="number">01</p>
                  <p class="text">無料体験申込</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="sp_step second-item">
            <img src="/sp_arrow_2.svg" class="step_arrow">

            <div class="arow_inner_content">
              <div class="arow_inner_content_box">
                <img class="arow_inner_content_icon" src="/white_check.svg"></img>
                <div class="arow_inner_content_text">
                  <p class="number">02</p>
                  <p class="text">アカウント発行</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Step 3 -->
          <div class="sp_step third-item">
            <img src="/sp_arrow_3.svg" class="step_arrow">
            <div class="arow_inner_content">
              <div class="arow_inner_content_box">
                <img class="arow_inner_content_icon" src="/white_check.svg"></img>
                <div class="arow_inner_content_text">
                  <p class="number">03</p>
                  <p class="text">ご利用開始</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trial_message">
        <p>まずは2週間無料で体験</p>
        <p>送迎計画にかかる時間を<br class="sp_br">大幅に削減してみませんか？</p>
        <div class="btn_area">
          <a href="#" class="trial">
            <img src="/trial_logo.svg" width="20px" height="20px">２週間無料体験<span>></span>
          </a>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.section_6 {
  background-color: #FFFFFF;
  text-align: center;
  padding: 80px 0;
}

.sp_br {
  display: none;
}

.section_6 .heading {
  width: 100%;
  margin-bottom: 56px;
}

.section_6 .heading h3 {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #45B13E
}

.section_6 .contents {
  margin: 0 auto;
  display: flex;
  width: 1200px;
  border-radius: 20px;
  flex-direction: column;
  column-gap: 40px;
  text-align: center;
}

.section_6 .step_arrow {
  width: 360px;
  height: 100%;
}

.table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 80px 0;
}

.table-header {
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
  /* border-bottom: 2px solid #3cb043; */
  border-left: 2px solid #3cb043;
  /* border-right: 1px solid #3cb043; */
  background: #fff;
  color: #45B13E
}

.table-row {
  display: contents;
  /* グリッド内のrowを自然に流す */
}

.cell {
  padding: 20px;
  border-top: 2px dotted #3cb043;
  border-left: 2px solid #3cb043;
  /* border-right: 1px solid #3cb043; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #45B13E
}

.plan-name {
  border-left: none;
  border-right: none;
}

.plan-badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 10px;
  font-weight: bold;
  color: #fff;
}

.daymap {
  width: 135px;
  height: 49.5px;
  background-color: #3cb043;
}

.competitor {
  width: 135px;
  height: 49.5px;
  background-color: #999;
}

.step-flow {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

.step {
  position: relative;
  width: 360px;
  height: 130px;
}

.step:nth-child(2) {
  left: -40px
}

.step:nth-child(3) {
  left: -70px
}

.step svg {
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
}

.content .number {
  font-size: 24px;
}

.content .text {
  margin-top: 8px;
  font-size: 18px;
}

.icon {
  margin-bottom: 8px;
}

.attention {
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 10px;
  margin-bottom: 20px;
  padding: 0 80px;
}

.attention h3 {
  padding-left: 20px;
  text-align: left;
  color: #45B13E;
  font-weight: bold;
  font-size: 22px;
}

.attention p {
  text-align: left;
  color: #45B13E;
  font-size: 14px;
  font-weight: bold;
}

.attention p:first-child {
  text-align: left;
  font-size: 22px;
}

.trial_message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
  margin-top: 80px;
}

.trial_message p {
  font-size: 24px;
  color: #45B13E;
  font-weight: bold;
}

.trial_message p:first-child {
  font-size: 32px;
  color: #45B13E;
}

.section_6_wrapper a.trial {
  border-radius: 40px;
  background-color: #10ACFB;
  width: 288px;
  height: 78px;
  display: flex;
  justify-content: center;
  column-gap: 24px;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;

}

.section_6_wrapper .btn_area {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}

.section_6 .arow_inner_content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}

.arow_inner_content .arow_inner_content_text {
  margin-left: 20px;
  text-align: left;
}

.arow_inner_content .arow_inner_content_text p:first-child {
  font-size: 30px;
  color: #FFFFFF
}

.arow_inner_content .arow_inner_content_text p:last-child {
  font-size: 22px;
  color: #FFFFFF
}


.is-mode-sp {
  display: none;
}

.sp-step-flow {
  display: none;
}


@media screen and (max-width: 600px) {
  .section_6 {
    padding: 40px 20px;
  }

  .grid_table {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr 1fr;
  }


  .sp-step-flow {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .sp_step {
    position: relative;
  }

  .sp_step.second-item {
    top: -20px;
  }

  .sp_step.third-item {
    top: -40px;
  }

  .section_6 .arow_inner_content_box {
    display: flex;
    justify-content: start;
    width: 60%;
  }

  .section_6 .arow_inner_content {
    justify-content: center;
  }

  .sp_br {
    display: block;
  }

  .attention h3 {
    padding-left: 0;
  }

  .is-mode-pc {
    display: none;
  }

  .section_6 .heading h3 {
    font-size: 24px;
  }

  .section_6 .contents {
    width: 100%;
  }

  .table {
    margin-bottom: 32px;
  }

  .table-header {
    display: none;
  }

  .cell {
    border: none;
    border-left: solid 1px #fff;
    border-right: solid 1px #fff;
    border-bottom: solid 1px #fff;
    font-size: 16px;
    padding: 25px 5px;
  }

  .head_cell {
    border-radius: 8px 8px 0 0;
  }

  .border_left {
    border-left: solid 1px #3cb043;
  }

  .border_bottom {
    border-bottom: solid 1px #3cb043;
  }

  .other_company {
    color: #666666;
    background-color: #DEFFE9;
    font-size: 12px;
  }

  .competitor {
    color: #666666;
    width: 135px;
    height: 49.5px;
    background-color: #DEFFE9;
  }

  .my_company {
    background-color: #45B13E;
    color: #FFD700;
  }

  .item_name {
    font-size: 16px;
  }

  .plan-name {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  .plan-badge {
    width: 100%;
    height: auto;
    padding: 5px 10px;
    font-size: 14px;
  }

  .step-flow {
    flex-direction: column;
    gap: 20px;
  }

  .step {
    width: 100%;
    left: 0 !important;
  }

  .step_arrow {
    width: 100%;
  }

  .trial_message {
    margin-top: 8px;
  }

  .trial_message p {
    font-size: 18px;
  }

  .attention {
    padding: 0 0;
  }

  a.trial {
    width: 73%;
    height: auto;
    aspect-ratio: 4/1;
    line-height: 0;
  }


  .step-flow-sp {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .step-flow-sp-content {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }

  .circle {
    background-color: #fff;
    width: auto;
    height: 90%;
    aspect-ratio: 1.2/1;
    align-self: flex-end;
    /* 下に寄せる */
    margin-left: auto;

    /* 右に寄せる */
    border-top-left-radius: 100%;
  }

  .step1 {
    display: flex;
    justify-content: space-between;
    background-color: #45B13E;
    width: 100%;
    height: auto;
    aspect-ratio: 4/1;
    padding: 20px 60px 20px 20px;

  }

  .step2 {
    background-color: #45B13E;
    width: 100%;
    height: 130px;

  }

  .step3 {
    background-color: #45B13E;
    width: 100%;
    height: 130px;

  }

  .section_6_wrapper .btn_area {
    margin-top: 16px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1023px) {
  .section_6 .contents {
    width: 90%;
  }

  .table {
    margin-bottom: 80px;
  }

  .step {
    width: 280px;
  }
}
</style>
