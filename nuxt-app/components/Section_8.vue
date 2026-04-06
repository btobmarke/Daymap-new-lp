<script setup lang="ts">
import Contact from '~/pages/contact.vue';
import Document_form from '~/pages/document_form.vue';

const form = ref({
  company: '',
  name: '',
  address: '',
  phone: '',
  email: '',
  users: '',
  privacy: false
})

const isModalShow = ref(false);
const message = ref('');

const submitForm = async () => {
  try {
    await $fetch('/api/mail/document-request', {
      method: 'POST',
      body: {
        CompanyName: form.value.company,
        Name: form.value.name,
        Address: form.value.address,
        TelephoneNumber: form.value.phone,
        EmailAddress: form.value.email,
        ExpectedNumber: form.value.users,
      },
    });

    // 成功時の処理
    navigateTo('/download_thanks');

    // フォームをリセット
    form.value = {
      company: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      users: '',
      privacy: false
    };

  } catch (error) {
    console.error('Error:', error);
    message.value = 'エラーが発生しました。もう一度お試しください。';
    isModalShow.value = true;
  }
}

const closeModal = () => {
  isModalShow.value = false;
  message.value = '';
}
</script>


<template>
  <div class="section_8">
    <div class="heading">
      <h3>お役立ち資料</h3>
    </div>
    <div class="contents">
      <div class="image_area">
        <img src="/daymap_document_image.png" class="sp_display_none"></img>
        <form @submit.prevent="submitForm">
          <div class="form_group">
            <label for="company">会社名 <span class="required">*</span></label>
            <input type="text" id="company" v-model="form.company" required>
          </div>

          <div class="form_group">
            <label for="name">氏名 <span class="required">*</span></label>
            <input type="text" id="name" v-model="form.name" required>
          </div>

          <div class="form_group">
            <label for="address">住所 <span class="required">*</span></label>
            <input type="text" id="address" v-model="form.address" required>
          </div>

          <div class="form_group">
            <label for="phone">電話番号 <span class="required">*</span></label>
            <input type="tel" id="phone" v-model="form.phone" required>
          </div>

          <div class="form_group">
            <label for="email">メールアドレス <span class="required">*</span></label>
            <input type="email" id="email" v-model="form.email" required>
          </div>

          <div class="form_group">
            <label for="users">施設の利用者数 <span class="required">*</span></label>
            <select id="users" v-model="form.users" required>
              <option value="">選択してください</option>
              <option value="1-10">1-10名</option>
              <option value="11-30">11-30名</option>
              <option value="31-50">31-50名</option>
              <option value="51-100">51-100名</option>
              <option value="101-">101名以上</option>
            </select>
          </div>

          <div class="form_group checkbox">
            <label class="checkbox_label">
              <input type="checkbox" v-model="form.privacy" required>
              <span>個人情報の取り扱いに同意します <span class="required">*</span></span>
            </label>
          </div>

          <button type="submit" class="submit_button" :disabled="!form.privacy">資料請求する</button>
        </form>
      </div>
    </div>

    <!-- モーダル -->
    <Teleport to="body">
      <div v-if="isModalShow" class="modal_overlay">
        <div class="modal_content">
          <p>{{ message }}</p>
          <button @click="closeModal" class="modal_close_button">閉じる</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.section_8 {
  height: auto;
  background-color: #FFFFFF;
  text-align: center;
  padding: 80px 0;
}

.section_8 .heading {
  width: 100%;
  color: #45B13E;
  margin-bottom: 56px;
}

.section_8 .heading h3 {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}

.section_8 .contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 40px;
}

.section_8 .image_area {

  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: auto;
  padding: 20px 20px;
}

.section_8 .image_area img {
  width: 48%;
}


.section_8 .image_area form {
  width: 48%;
}

.section_8 .image_area form .form_group {
  text-align: left;
}

.section_8 .btn_area {
  display: flex;
  justify-content: center;
}

.section_8 a.document {
  border-radius: 40px;
  background-color: #FF8800;
  width: 288px;
  height: 78px;
  display: block;
  align-items: center;
  text-align: center;
  line-height: 78px;
  color: #FFFFFF;
}

.section_8 a.trial {
  border-radius: 40px;
  background-color: #10ACFB;
  width: 288px;
  height: 78px;
  display: block;
  align-items: center;
  text-align: center;
  line-height: 78px;
  color: #FFFFFF;
}

.document_form {
  background-color: #FFFFFF;
  padding: 80px 0;
}

.form_container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #F8F8F8;
  border-radius: 20px;
  font-family: 'Noto Sans JP', sans-serif;
}

.form_container h3 {
  font-size: 32px;
  font-weight: bold;
  color: #45B13E;
  text-align: center;
  margin-bottom: 40px;
}

.form_group {
  margin-bottom: 24px;
}

.form_group label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333333;
}

.form_group input,
.form_group select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #DDDDDD;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form_group input:focus,
.form_group select:focus {
  outline: none;
  border-color: #45B13E;
}

.required {
  color: #FF0000;
  margin-left: 4px;
}

.checkbox_label {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.checkbox_label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 8px;
  padding: 0;
  border: 2px solid #DDDDDD;
  border-radius: 4px;
  background-color: white;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
}

.checkbox_label input[type="checkbox"]:checked {
  background-color: #45B13E;
  border-color: #45B13E;
}

.checkbox_label input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.checkbox_label input[type="checkbox"]:focus {
  outline: 2px solid #45B13E;
  outline-offset: 2px;
}

.submit_button {
  width: 100%;
  padding: 16px;
  background-color: #FF8800;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit_button:hover {
  background-color: #3A9A34;
}

@media screen and (max-width: 600px) {
  .section_8 {
    padding: 40px 10px;
  }

  .section_8 .image_area form {
    width: 100%;
  }

  .sp_display_none {
    display: none;
  }


  .form_container {
    padding: 20px;
    margin: 0 20px;
  }

  .form_container h3 {
    font-size: 24px;
  }
}

/* モーダル用のスタイル */
.modal_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal_content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  font-family: 'Noto Sans JP', sans-serif;
}

.modal_close_button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FF8800;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal_close_button:hover {
  background-color: #3A9A34;
}

.submit_button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
