<template>
  <div class="thanks-page">
    <main>
      <section class="thanks-section">
        <div class="head">
          <h1>お知らせ</h1>
        </div>
        <div class="main">
          <div class="news_item">
            <p class="news_date">2023年6月9日</p>
            <p class="news_contents">東京ビッグサイトにて2023年7月19日(水)-20日(木)の2日間開催される住まい×介護×医療展 2023 in 東京にて出展及びセミナー登壇します。</p>
            <p class="news_contents">【出展者セミナー】"送迎DX"ワンタッチでルート最適化〜デイサービスの送迎の課題を解決する「DAYMAP」とは〜</p>
          </div>
          <div class="news_item">
            <p class="news_date">2023年4月1日</p>
            <p class="news_contents">DAYMAP(デイマップ)がApp Store及びGoogle Play ストアよりインストールできるようになりました。</p>
          </div>
          <div class="news_item">
            <p class="news_date">2023年3月2日</p>
            <p class="news_contents">インテックス大阪にて2023年3月14日(火)-15日(水)の2日間開催されるバックオフィスDXPO 2023に出展します。</p>
          </div>
          <div class="news_item">
            <p class="news_date">2023年3月2日</p>
            <p class="news_contents">DAYMAPのプレスリリースを配信しました。</p>
          </div>
          <div class="news_item">
            <p class="news_date">2023年2月1日</p>
            <p class="news_contents">第4回 CareTEX名古屋 2023 -【名古屋】介護用品展 /【名古屋】介護施設産業展 /【名古屋】介護施設ソリューション展に出展します。</p>
          </div>
          <div class="news_item">
            <p class="news_date">2022年8月1日</p>
            <p class="news_contents">東京ビックサイトにて開催される第2回バックオフィスDXPO東京'23に出展します。</p>
          </div>
          <div class="news_item">
            <p class="news_date">2022年6月1日</p>
            <p class="news_contents">吹上ホールにて開催される名古屋デジタルイノベーション2022に出展します。</p>
          </div>
        </div>
      </section>
      <section class="feature-section">
        <Section_3 />
      </section>
    </main>
  </div>
</template>

<style scoped>
.thanks-page {
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 16px 40px;
  border-bottom: 1px solid #e5e5e5;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  height: 40px;
}

.catch {
  color: #45B13E;
  font-size: 18px;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 32px;
  font-size: 18px;
}

.header-right {
  display: flex;
  gap: 16px;
}

.login-btn {
  background: #e5e5e5;
  color: #333;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: bold;
}

.download-btn {
  width: 247px;
  height: 45px;
  line-height: 45px;
  background: #10ACFB;
  color: #fff;
  border-radius: 24px;
  text-align: center;
  align-items: center;
  text-decoration: none;
  display: inline-block;
}

.download-btn.green {
  background: #44902D;
}

.download-btn.orange {
  background: #FF8800;
}

.download-btn.blue {
  background: #10ACFB;
}

.thanks-section {
  background: #fff;
  padding: 0 0 32px 0;
  text-align: center;
}

.thanks-section h1 {
  color: #178809;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 16px;
}

.lead {
  font-size: 22px;
  margin: 55px 0;
}

.document-list {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
}

.document-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  width: 403px;
  height: 501px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.document-card .doc-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 48px;
}

.doc-title {
  display: flex;
  font-size: 16px;
  margin-bottom: 16px;
  min-height: 48px;
  text-align: center;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 57px;
}

.feature-inner {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.feature-left {
  background: #fff;
  border-radius: 50%;
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 40px;
}

.feature-label {
  color: #45B13E;
  font-size: 18px;
  font-weight: bold;
}

.feature-value {
  color: #45B13E;
  font-size: 32px;
  font-weight: bold;
  margin: 8px 0;
}

.feature-value span {
  font-size: 48px;
}

.feature-try {
  color: #333;
  font-size: 16px;
  text-align: center;
}

.feature-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.feature-title {
  font-size: 32px;
  font-weight: bold;
  color: #45B13E;
}

.feature-title span {
  font-size: 48px;
  color: #45B13E;
}

.feature-desc {
  font-size: 18px;
  color: #333;
  margin-bottom: 16px;
}

.feature-btns {
  display: flex;
  gap: 24px;
}

.footer {
  background: #f8f8f8;
  padding: 40px 0 0 0;
  border-top: 1px solid #e5e5e5;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  gap: 40px;
}

.footer-left {
  flex: 1;
}

.footer-logo {
  font-size: 28px;
  font-weight: bold;
  color: #45B13E;
  margin-bottom: 12px;
}

.footer-company {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

.footer-sub {
  font-size: 14px;
  color: #333;
}

.footer-center {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.privacy-mark {
  width: 60px;
  margin-bottom: 8px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.copyright {
  text-align: center;
  color: #888;
  font-size: 13px;
  margin-top: 24px;
  padding-bottom: 16px;
}

.thanks-section .head {
  height: 200px;
  background-color: #DEFEE9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}

.thanks-section .main {
  width: 980px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 100px 0;
}

.news_item {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  text-align: start;
  padding: 20px 40px;
  border-bottom: solid 1px #d9d9d9;
}

.news_contents {
  font-weight: bold;
}

.pdf-icon {
  color: #EB3347;
  width: 40px;
  height: auto;
}

.thanks-section .document-card {
  width: 403px;
}

.news_date {
  color: #B7B7B7;
}

.thanks-section .doc-title {
  font-size: 18px;
  text-align: left;
  padding: 0 16px;
}

@media (max-width: 900px) {
  .document-list {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .feature-inner,
  .footer-inner {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .feature-left {
    margin-bottom: 0;
  }

  .feature-right {
    align-items: center;
  }

  .footer-right {
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .thanks-section {
    padding: 0 0 24px 0;
  }

  .thanks-section h1 {
    font-size: 28px;
    margin-bottom: 12px;
  }

  .thanks-section .head {
    height: 150px;
    font-size: 24px;
  }

  .thanks-section .main {
    width: 90%;
    padding: 60px 0;
    row-gap: 8px;
  }

  .news_item {
    padding: 16px 20px;
    row-gap: 16px;
  }

  .news_date {
    font-size: 14px;
  }

  .news_contents {
    font-size: 16px;
    line-height: 1.6;
  }

  .feature-left {
    width: 180px;
    height: 180px;
    margin-bottom: 24px;
  }

  .feature-label {
    font-size: 16px;
  }

  .feature-value {
    font-size: 28px;
  }

  .feature-value span {
    font-size: 36px;
  }

  .feature-title {
    font-size: 24px;
    text-align: center;
  }

  .feature-title span {
    font-size: 32px;
  }

  .feature-desc {
    font-size: 16px;
    text-align: center;
  }

  .feature-btns {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .footer {
    padding: 32px 0 0 0;
  }

  .footer-inner {
    padding: 0 20px;
    gap: 24px;
  }

  .footer-logo {
    font-size: 24px;
  }

  .footer-center,
  .footer-right {
    align-items: center;
  }

  .nav {
    gap: 20px;
    font-size: 16px;
  }

  .header {
    padding: 12px 20px;
  }

  .header-left {
    gap: 8px;
  }

  .logo {
    height: 32px;
  }

  .catch {
    font-size: 16px;
  }

  .header-right {
    gap: 12px;
  }

  .login-btn {
    padding: 6px 16px;
    font-size: 14px;
  }

  .download-btn {
    width: 180px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  .thanks-section h1 {
    font-size: 24px;
  }

  .thanks-section .head {
    height: 120px;
    font-size: 20px;
  }

  .thanks-section .main {
    width: 95%;
    padding: 40px 0;
  }

  .news_item {
    padding: 12px 16px;
    row-gap: 12px;
  }

  .news_date {
    font-size: 12px;
  }

  .news_contents {
    font-size: 14px;
    line-height: 1.5;
  }

  .feature-left {
    width: 150px;
    height: 150px;
  }

  .feature-value {
    font-size: 24px;
  }

  .feature-value span {
    font-size: 32px;
  }

  .feature-title {
    font-size: 20px;
  }

  .feature-title span {
    font-size: 28px;
  }

  .feature-desc {
    font-size: 14px;
  }

  .header {
    padding: 8px 16px;
  }

  .nav {
    display: none;
  }

  .header-right {
    gap: 8px;
  }

  .download-btn {
    width: 140px;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
  }

  .footer-inner {
    padding: 0 16px;
  }

  .footer-logo {
    font-size: 20px;
  }

  .footer-company,
  .footer-sub {
    font-size: 12px;
  }

  .footer-center {
    font-size: 14px;
  }

  .footer-links {
    font-size: 12px;
  }
}
</style>