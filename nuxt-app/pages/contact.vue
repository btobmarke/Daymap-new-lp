<!-- javaScript -->
<script setup>
import { reactive } from "vue";

const config = useRuntimeConfig();

///モーダル表示条件
const isModalShow = ref(false);
const message = ref("");

/**
 *
 */
const sendContact = async () => {
  const url = `${config.public.apiBase}/send_contact_form`;

  const { data: result } = await useFetch(url, {
    method: "POST",
    body: JSON.stringify(param),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((e) => console.log(e));

  let items = result._value.items;
  //問い合わせ完了モーダル
  ShowModal(items);
};

/**
 *フォームボタンのクリックイベント
 */
const CloseModal = () => {
  //モーダルを非表示化する。
  isModalShow.value = !isModalShow.value;
  message.value = "";
  useHead({
    htmlAttrs: {
      style: computed(() => {
        return "overflow: scroll";
      }),
    },
    bodyAttrs: {
      style: computed(() => {
        return "overflow: scroll";
      }),
    },
  });
};

const ShowModal = (items) => {
  isModalShow.value = !isModalShow.value;
  message.value = items.message;
  useHead({
    htmlAttrs: {
      style: computed(() => {
        return "overflow: hidden";
      }),
    },
    bodyAttrs: {
      style: computed(() => {
        return "overflow: hidden";
      }),
    },
  });
};

const param = reactive({
  CompanyName: "",
  Name: "",
  EmailAddress: "",
  TelephoneNumber: "",
  ContactContent: "",
  IsAgreed: false
});
</script>
<!-- javaScript -->
<template>
  <div class="thanks-page">
    <main>
      <section class="thanks-section">
        <div class="head">
          <h1>お問い合わせ</h1>
        </div>
        <div class="main">
          <p class="lead">​送迎支援システム「DAYMAP」<br>お問合わせフォームです</p>
          <form class="form-container">
            <div>
              <label class="require" for="company">会社名<img src="/require.svg" class="require-icon"></label>
              <input id="company" v-model="param.CompanyName" type="text" class="text-input" />
            </div>
            <div>
              <label class="require" for="name">氏名<img src="/require.svg" class="require-icon"></label>
              <input id="name" v-model="param.Name" type="text" class="text-input" />
            </div>
            <div>
              <label class="require" for="mail">メールアドレス<img src="/require.svg" class="require-icon"></label>
              <input id="mail" v-model="param.EmailAddress" type="text" class="text-input" />
            </div>
            <div><label class="require" for="tel">電話番号<img src="/require.svg" class="require-icon"></label>
              <input id="tel" v-model="param.TelephoneNumber" type="text" class="text-input" />
            </div>
            <div>
              <label class="require" for="content">お問い合わせ内容<img src="/require.svg" class="require-icon"></label>
              <textarea id="content" v-model="param.ContactContent" type="text" class="text-input"></textarea>
            </div>
            <div class="privacy_policy">
              <input type="checkbox" id="privacy" v-model="param.IsAgreed" class="checkbox-input" />
              <label for="privacy">個人情報の取扱いについて同意します。</label>
            </div>
            <div class="button_area">
              <button type="button" @click="sendContact" :disabled="!param.IsAgreed">入力内容を送信する</button>
            </div>
          </form>
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
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(16, 172, 251, 0.2);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 172, 251, 0.3);
}

.download-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(16, 172, 251, 0.2);
}

.download-btn::after {
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

.download-btn:hover::after {
  opacity: 1;
}

.download-btn.green {
  background: #44902D;
  box-shadow: 0 4px 12px rgba(68, 144, 45, 0.2);
}

.download-btn.green:hover {
  box-shadow: 0 8px 20px rgba(68, 144, 45, 0.3);
}

.download-btn.orange {
  background: #FF8800;
  box-shadow: 0 4px 12px rgba(255, 136, 0, 0.2);
}

.download-btn.orange:hover {
  box-shadow: 0 8px 20px rgba(255, 136, 0, 0.3);
}

.download-btn.blue {
  background: #10ACFB;
  box-shadow: 0 4px 12px rgba(16, 172, 251, 0.2);
}

.download-btn.blue:hover {
  box-shadow: 0 8px 20px rgba(16, 172, 251, 0.3);
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

.text-input {
  background-color: #F0F0f0;
  width: 700px;
  height: 47px;
  padding: 0 16px;
  text-align: left;
  border: 2px solid #E5E5E5;
  border-radius: 8px;
  font-size: 16px;
  color: #333333;
}

.text-input:focus {
  outline: none;
  border-color: #45B13E;
  background-color: #FFFFFF;
}

textarea.text-input {
  height: 120px;
  padding: 12px 16px;
  resize: vertical;
}

.form-container {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
}

.form-container div {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: flex-start;
}

.form-container div.privacy_policy {
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  align-items: flex-start;
}

.require-icon {
  margin-left: 20px;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  border: 2px solid #E5E5E5;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  background-color: #FFFFFF;
  transition: all 0.3s ease;
}

.checkbox-input:checked {
  background-color: #45B13E;
  border-color: #45B13E;
}

.checkbox-input:checked::after {
  content: '✓';
  position: absolute;
  color: #FFFFFF;
  font-size: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkbox-input:hover {
  border-color: #45B13E;
  background-color: #F8FFF8;
}

.checkbox-input:checked:hover {
  background-color: #45B13E;
}

.form-container button[type="button"] {
  width: 300px;
  height: 60px;
  background: linear-gradient(135deg, #45B13E, #3A9A34);
  color: #FFFFFF;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 40px;
  letter-spacing: 0.05em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 12px rgba(69, 177, 62, 0.2);
  position: relative;
  overflow: hidden;
}

.form-container button[type="button"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(69, 177, 62, 0.3);
  background: linear-gradient(135deg, #4CBE45, #41A93A);
}

.form-container button[type="button"]:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(69, 177, 62, 0.2);
}

.form-container button[type="button"]:disabled {
  background: #CCCCCC;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
  text-shadow: none;
}

.form-container button[type="button"]::after {
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

.form-container button[type="button"]:hover::after {
  opacity: 1;
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

/* @media screen and (max-width: 768px) {
  .form-container button[type="button"] {
    width: 100%;
    height: 50px;
    font-size: 16px;
    margin-top: 32px;
  }

  .thanks-section {
    padding: 0 0 24px 0;
  }

  .thanks-section h1 {
    font-size: 28px;
    margin-bottom: 12px;
  }

  .lead {
    font-size: 18px;
    margin: 40px 0;
    padding: 0 20px;
  }

  .text-input {
    width: 90%;
    max-width: 500px;
    height: 44px;
    font-size: 16px;
  }

  textarea.text-input {
    height: 100px;
  }

  .form-container {
    row-gap: 32px;
    padding: 0 20px;
  }

  .form-container div {
    row-gap: 12px;
    width: 100%;
  }

  .form-container div.privacy_policy {
    column-gap: 12px;
    padding: 0 20px;
  }

  .thanks-section .head {
    height: 150px;
    font-size: 24px;
  }

  .thanks-section .document-card {
    width: 90%;
    max-width: 350px;
    height: auto;
    min-height: 400px;
  }

  .thanks-section .doc-title {
    font-size: 16px;
    padding: 0 12px;
    margin-bottom: 40px;
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
} */

@media screen and (max-width: 480px) {
  .thanks-section h1 {
    font-size: 24px;
  }

  .lead {
    font-size: 16px;
    margin: 32px 0;
  }

  .text-input {
    width: 100%;
    height: 40px;
    font-size: 16px;
  }

  textarea.text-input {
    height: 80px;
  }

  .form-container {
    row-gap: 24px;
    padding: 0 10px;
  }

  .form-container div.privacy_policy {
    padding: 0 10px;
    font-size: 14px;
  }

  .form-container div {
    width: 100%;
  }


  .privacy_policy {
    justify-content: center;
  }

  .form-container .button_area button {
    margin: 0 auto;
    margin-top: 0;
  }

  .thanks-section .head {
    height: 120px;
    font-size: 20px;
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
<!--html -->
