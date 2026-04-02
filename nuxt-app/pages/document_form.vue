<!-- javaScript -->
<script setup>
import { reactive } from "vue";

const config = useRuntimeConfig();

///モーダル表示条件

/**
 *
 */
const sendContact = async () => {
  const url = `${config.public.apiBase}/send_contact_form`;

  const { data: result } = await useFetch(url, {
    method: "POST",
    body: JSON.stringify(param),
    headers: {
      //例
      "Content-Type": "application/json",
    },
  }).catch((e) => console.log(e));

  let items = result._value.items;
  //問い合わせ完了モーダル
  ShowModal(items);
};

const param = reactive({
  company: "",
  name: "",
  address: "",
  tel: "",
  mail: "",
  users: "",
});
</script>
<!-- javaScript -->

<!--html -->
<template>
  <div>
    <div class="wrapper">
      <div class="main">
        <form class="form_contact" method="">
          <div><label class="require" for="company">会社名</label><input id="company" v-model="param.company"
              type="text" /></div>
          <div><label class="require" for="name">氏名</label><input id="name" v-model="param.name" type="text" /></div>
          <div><label class="require" for="address">住所</label><input id="address" v-model="param.address" type="text" />
          </div>
          <div><label class="require" for="tel">電話番号</label><input id="tel" v-model="param.tel" type="text" /></div>
          <div><label class="require" for="mail">メールアドレス</label><input id="mail" v-model="param.mail" type="text" />
          </div>
          <div><label class="require" for="users">施設の利用者数</label><input id="users" v-model="param.users"
              type="number" /></div>
          <div><button type="button" @click="sendContact">入力内容を送信する</button></div>
        </form>
      </div>
    </div>
  </div>
</template>
<!-- html -->

<!-- css -->
<style scoped>
.overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal_area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 80vmin;
  height: 80vmin;
  padding: 30px 30px;
  border-radius: 10px;
  overflow: scroll;
}

.modal_top_area {
  width: 100%;
  height: 100%;
}

.root {
  margin-top: 110px;
}

h1 {
  font-size: 30px;
}

.head_image {
  display: flex;
  flex-direction: row;
  height: 400px;
  background-color: black;
}

.head_left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: gray;
}

.head_title>p {
  font-size: 14px;
}

.head_title>h3 {
  font-size: 30px;
}

.wrapper {
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: white;
  border-radius: 10px;
  padding: 40px 40px;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 40px 0px;
}

/* パンクズ */
.breadcrumb {
  width: 100%;
  margin-bottom: 50px;
}

/* .breadcrumb nav {
  margin-top: 18px;
} */

.breadcrumb nav ol li {
  display: inline;
  font-size: 16px;
  padding-right: 5px;
}

.breadcrumb nav ol li a {
  margin-right: 5px;
}

form.form_contact {
  display: flex;
  flex-direction: column;
  gap: 30px 20px;
  width: 100%;
  margin-bottom: 60px;
}

form>div {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

form>div>input {
  background-color: white;
  border-radius: 5px;
  border: solid 1px gray;
  margin-left: auto;
  width: 70%;
  height: 40px;
  padding: 10px;
}

form>div>textarea {
  background-color: white;
  border-radius: 5px;
  border: solid 1px gray;
  margin-left: auto;
  width: 70%;
  height: 120px;
  padding: 10px;
}

form>div>button {
  display: flex;
  width: 200px;
  height: 70px;
  margin-left: auto;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
}

.require::before {
  padding: 5px 10px;
  content: "必須";
  color: white;
  background-color: orange;
  margin-right: 10px;
}

.non_require::before {
  padding: 5px 10px;
  content: "任意";
  color: white;
  background-color: gray;
  margin-right: 10px;
}

.column_1 {
  width: 740px;
  padding: 0%;
  margin-right: 60px;
}

.column_2 {
  display: block;
  height: 100%;
  width: 300px;
  padding: 0%;
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.caption {
  font-size: 13px;
  color: #656c6e;
  margin: 20px 0 0;
}

.left {
  padding-right: 15px;
}

.right {
  padding-left: 15px;
}

.widget_1 {
  margin-top: 60px;
  display: flex;
  gap: 30px 0;
  flex-direction: column;
}

.widget_1_item {
  display: flex;
  flex-direction: row;
}

.check_icon {
  background-color: orange;
}

.complete_area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.button svg {
  transform: rotate(180deg);
  transition: all 0.5s;
}

.button:hover {
  cursor: pointer;
}

.container {
  height: 100%;
}

.tick {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  color: white;
  font-size: 2em;
  transition: all 0.9s;
  height: 100%;
}

.button__circle {
  background-color: #d87a00;
  border-radius: 50%;
  transform: rotate(-180deg);
  animation-name: spread;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.complete_message {
  margin-top: 5%;
  font-size: 26px;
  text-align: center;
}

.close_btn {
  margin-left: auto;
  width: 27px;
  height: 27px;
}

.close_icon {
  width: 100%;
  height: 100%;
}

@keyframes spread {
  from {
    width: 0px;
    height: 0px;
  }

  to {
    width: 60%;
    height: 60%;
  }
}

@media screen and (max-width: 510px) {
  .wrapper {
    width: 100%;
    padding: 20px;
  }

  form>div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 8px;
  }

  form>div>input {
    margin-left: 0;
    width: 100%;
  }

  form>div>textarea {
    margin-left: 0;
    width: 100%;
  }
}
</style>
<!-- css -->
