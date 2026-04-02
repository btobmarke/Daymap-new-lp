<template>
  <div class="footer">
    <footer>
      <!-- 左側 -->
      <div class="flex-box">
        <img class="logo_img" src="/DayMap_logo_L.avif">
        <div class="nav-links">
          <a href="#">ホーム</a>
          <a href="#">お知らせ</a>
          <a href="#">特徴</a>
          <a href="#">価格</a>
          <a href="#">お問い合わせ</a>
        </div>
      </div>

      <div class="flex-box">
        <div class="address">
          <strong>株式会社アイシーソフト</strong><br>
          <a href="https://www.icsoft.jp" target="_blank">https://www.icsoft.jp</a><br><br>
          〒460-0003 名古屋市中区錦2丁目2番2号 名古屋丸紅ビル9階<br>
          Tel. 052-854-7279（代表）<br>
          Fax. 052-231-7311
        </div>
        <div class="privacy-mark">
          <img src="/privacy_mark.avif" alt="プライバシーマーク">
        </div>
      </div>

      <div class="flex-box">
        <div class="address">
          <strong>東京オフィス</strong><br>
          〒170-0013 東京都豊島区東池袋1丁目34番5号 いちごビル東池袋2階
        </div>
        <div class="privacy-links">
          <a href="#">個人情報保護方針</a>
          <a href="#">利用規約</a>
        </div>
      </div>

      <div class="flex-box">
        <div class="copyright">
          COPYRIGHT (C) 2024 DAYMAP Co., Ltd. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.flex-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.logo_img {
  width: 182px;
  height: auto;
}

.copyright {
  margin-right: 0;
  margin-left: auto;
}

footer {
  padding: 60px 80px 20px;
  background: #fff;
  color: #000;
  font-size: 14px;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: center;
  margin-bottom: 40px;
}

.footer-left {
  text-align: left;
}

.logo {
  font-size: 32px;
  font-weight: bold;
  color: #28c820;
  margin-bottom: 30px;
}

.address {
  /* margin-bottom: 30px; */
}

.address a {
  color: #000;
  text-decoration: underline;
}

.footer-right {
  text-align: right;
}

/* .nav-links {
  margin-bottom: 20px;
} */

.nav-links a {
  margin-left: 20px;
  color: #000;
  font-weight: bold;
  text-decoration: none;
}

/* .privacy-mark {
  margin-bottom: 30px;
} */

.privacy-mark img {
  width: 80px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.footer-bottom a {
  margin-left: 20px;
  color: #000;
  text-decoration: none;
}

@media screen and (max-width: 600px) {

  footer {
    padding: 40px 24px;
  }

  .logo_img {
    width: 40%;
    margin-bottom: 24px;
  }

  .flex-box {
    flex-direction: column;
    margin-bottom: 24px;
  }

  .address {
    text-align: center;
    margin-bottom: 24px;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    font-size: 16px;
    text-align: center;
  }

  .nav-links a {
    margin-left: 0;
  }

  .privacy-links {
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    justify-content: space-around;
  }











  .copyright {
    margin-right: auto;
    margin-left: 0;
  }
}
</style>