<template>
  <div class="document_form">
    <div class="form_container">
      <h3>資料請求</h3>
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

        <button type="submit" class="submit_button">資料請求する</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  company: '',
  name: '',
  address: '',
  phone: '',
  email: '',
  users: '',
  privacy: false
})

const submitForm = () => {
  // フォーム送信の処理をここに実装
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form_container h3 {
  font-size: 32px;
  font-weight: bold;
  color: #45B13E;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.form_container h3::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #45B13E;
  margin: 16px auto 0;
}

.form_group {
  margin-bottom: 24px;
}

.form_group label {
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333333;
}

.form_group input,
.form_group select {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #E5E5E5;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #FFFFFF;
  color: #2C3E50;
}

.form_group input::placeholder {
  color: #A0AEC0;
}

.form_group input:hover,
.form_group select:hover {
  border-color: #45B13E;
  background-color: #F8FFF8;
}

.form_group input:focus,
.form_group select:focus {
  outline: none;
  border-color: #45B13E;
  box-shadow: 0 0 0 4px rgba(69, 177, 62, 0.1);
  background-color: #FFFFFF;
}

.required {
  color: #FF4B4B;
  margin-left: 4px;
  font-size: 13px;
  font-weight: normal;
}

.checkbox_label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #4A5568;
  padding: 4px 0;
}

.checkbox_label input[type="checkbox"] {
  width: 22px;
  height: 22px;
  cursor: pointer;
  border: 2px solid #E5E5E5;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  background-color: #FFFFFF;
}

.checkbox_label input[type="checkbox"]:checked {
  background-color: #45B13E;
  border-color: #45B13E;
}

.checkbox_label input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  color: #FFFFFF;
  font-size: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.submit_button {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #45B13E, #3A9A34);
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 40px;
  letter-spacing: 0.05em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.submit_button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(69, 177, 62, 0.2);
  background: linear-gradient(135deg, #4CBE45, #41A93A);
}

.submit_button:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(69, 177, 62, 0.2);
}

.submit_button:disabled {
  background: #CCCCCC;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
  text-shadow: none;
}

@media screen and (max-width: 768px) {
  .document_form {
    padding: 40px 0;
  }

  .form_container {
    padding: 32px 24px;
    margin: 0 16px;
    border-radius: 20px;
  }

  .form_container h3 {
    font-size: 28px;
    margin-bottom: 36px;
  }

  .form_group {
    margin-bottom: 24px;
  }

  .form_group input,
  .form_group select {
    padding: 12px 16px;
    font-size: 15px;
  }

  .submit_button {
    padding: 16px;
    font-size: 16px;
    margin-top: 32px;
  }
}
</style>