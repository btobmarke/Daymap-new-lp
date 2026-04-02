<template>
  <div class="thanks-page">
    <main>
      <section class="thanks-section">
        <div class="head">
          <h1>資料ダウンロードありがとうございます</h1>
        </div>
        <div class="main">
          <p class="lead">「無料でダウンロード」ボタンをクリックするとダウンロードできます。</p>
          <div class="document-list">
            <div class="document-card">
              <img src="/doc_1.png" class="doc-img" alt="効率化3選" />
              <div class="doc-title">
                <img src="/pdf_icon.svg" class="pdf-icon">
                <p>デイサービスの送迎業務を効率化する<br>方法3選</p>
              </div>
              <NuxtLink to="#" class="download-btn green">無料でダウンロード</NuxtLink>
            </div>
            <div class="document-card">
              <img src="/doc_2.png" class="doc-img" alt="最新動向レポート" />
              <div class="doc-title">
                <img src="/pdf_icon.svg" class="pdf-icon"></img>
                <span>デイサービスの送迎業務における<br>最新動向レポート決定版</span>
              </div>
              <NuxtLink to="#" class="download-btn green">無料でダウンロード</NuxtLink>
            </div>
            <div class="document-card">
              <img src="/doc_3.png" class="doc-img" alt="DAYMAP概要" />
              <div class="doc-title">
                <img src="/pdf_icon.svg" class="pdf-icon"></img>
                <span>DAYMAP機能概要</span>
              </div>
              <NuxtLink to="#" class="download-btn green">無料でダウンロード</NuxtLink>
            </div>
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
  background-color: #fff;
}

.pdf-icon {
  color: #EB3347;
  width: 40px;
  height: auto;
}

.thanks-section .document-card {
  width: 403px;
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
</style>