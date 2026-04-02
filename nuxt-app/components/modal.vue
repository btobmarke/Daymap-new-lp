<script setup>
const isShowModal = ref(true);

const toggleShowModal = () => {
  this.isShowModal.value = !this.isShowModal;
};
</script>

<template>
  <div v-if="isShowModal" class="overlay">
    <div class="modal_area">
      <div class="modal_top_area">
        <h2 class="modal_title">ご注文画面</h2>
      </div>
      <div class="modal_middle_area">
        <div class="modal_left">
          <h3 class="modal_product_name">{{ post.title }}</h3>
          <img class="modal_main_img" src="~/public/bee_header.jpg" />
          <h3 class="modal_attention">注意事項</h3>
          <p class="modal_attention_des">注意事項を書く注意事項を書く注意事項を書く注意事項を書く注意事項を書く注意事項を書く注意事項を書く注意事項を書く注意事項を書く注意事項を書く</p>
        </div>
        <div class="modal_right">
          <form class="form_contact" method="">
            <div><label class="require" for="name">お名前</label><input id="name" v-model="param.name" type="text" /></div>
            <div><label class="require" for="kana">ふりがな</label><input id="kana" v-model="param.kana" type="text" /></div>
            <div><label class="require" for="mail">メールアドレス</label><input id="mail" v-model="param.mail" type="text" /></div>
            <div><label class="non_require" for="tel">電話番号</label><input id="tel" v-model="param.tel" type="text" /></div>
            <div><label class="require" for="pref">郵便番号</label><input id="pref" v-model="param.pref" type="text" /></div>
            <div><label class="require" for="pref">都道府県</label><input id="pref" v-model="param.pref" type="text" /></div>
            <div><label class="require" for="pref">市町村</label><input id="pref" v-model="param.pref" type="text" /></div>
            <div><label class="require" for="pref">番地</label><input id="pref" v-model="param.pref" type="text" /></div>
            <div><label class="require" for="pref">建物・部屋名</label><input id="pref" v-model="param.pref" type="text" /></div>
            <div><label class="require" for="mail">商品</label><input id="mail" v-model="param.mail" type="text" /></div>
            <div><label class="non_require" for="tel">数量</label><input id="tel" v-model="param.tel" type="text" /></div>
            <div><label class="require" for="body">備考</label><textarea id="body" v-model="param.body"></textarea></div>
            <!-- <div><button type="button" @click="sendContact">入力内容を送信する</button></div> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
