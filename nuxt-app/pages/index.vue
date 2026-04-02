<!-- TOP -->
<script setup>
let scrollY = ref(0);
let isShow = ref(true);

const getScrollY = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", getScrollY);
});
</script>

<template>
  <div class="wrapper">
    <Hero />
    <Section_1 />
    <Section_2 />
    <Section_3 id="cv1" />
    <Section_4 />
    <Section_3 id="cv2" />
    <Section_5 />
    <Section_3 id="cv3" />
    <Section_6 />
    <Section_7 />
    <Section_8 />
    <Section_3 id="cv4" />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.loading {
  height: 900px;
  width: 900px;
  background-color: red;
}

h1.title {
  font-size: 32px;
  width: 100%;
}

.top>span {
  font-family: "Kosugi Maru", sans-serif;
}
</style>
