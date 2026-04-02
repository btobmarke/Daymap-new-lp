<template>
  <div class="section_1">
    <div class="heading">
      <h3>こんなお悩みありませんか？</h3>
    </div>

    <div class="contents">
      <img src="/daymap_kaigo.avif" class="left_image"></img>
      <ul class="right_area">
        <li>
          <img src="/check_mark.svg" class="check_mark"></img>
          <p>送迎計画の作成が大変</p>
        </li>
        <li>
          <img src="/check_mark.svg" class="check_mark"></img>
          <p>急な変更やキャンセルでのルート変更が大変</p>
        </li>
        <li>
          <img src="/check_mark.svg" class="check_mark"></img>
          <p>渋滞などで発生する遅延の伝達が大変</p>
        </li>
        <li>
          <img src="/check_mark.svg" class="check_mark"></img>
          <p>新規利用者による送迎ルートの見直しが大変</p>
        </li>
        <li>
          <img src="/check_mark.svg" class="check_mark"></img>
          <p>過去の送迎履歴の管理が大変</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.section_1 {
  height: 608px;
  background-image: url("/daymap_top.avif");
  padding: 80px 0;
}

.section_1 .heading {
  width: 100%;
  margin-bottom: 56px;
}

.section_1 .heading h3 {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}

.section_1 .contents {
  display: flex;
  column-gap: 40px;
  padding: 0 120px;
}

.section_1 .contents .left_image {
  width: 535px;
  height: 300px;
  border-radius: 20px;
}

.section_1 .contents ul li {
  display: flex;
  column-gap: 20px;
  align-items: center;
}

.section_1 {
  font-size: 24px;
}

.section_1 .left_image {
  /* width: 50%; */
}

.section_1 .right_area {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  font-size: 23px;
  font-weight: bold;
}

.check_mark {
  display: flex;
  width: 36px;
  height: 36px;
}

@media screen and (max-width: 767px) {
  .section_1 {
    height: auto;
    padding: 40px 20px;
  }

  .section_1 .heading h3 {
    font-size: 24px;
  }

  .section_1 .contents {
    flex-direction: column-reverse;
    padding: 0 20px;
    gap: 30px;
  }

  .section_1 .contents .left_image {
    width: 100%;
    height: auto;
  }

  .section_1 .right_area {
    font-size: 18px;
    gap: 20px;
  }

  .check_mark {
    width: 24px;
    height: 24px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section_1 {
    padding: 60px 40px;
  }

  .section_1 .contents {
    padding: 0 40px;
  }

  .section_1 .contents .left_image {
    width: 45%;
    height: auto;
  }

  .section_1 .right_area {
    font-size: 20px;
  }
}
</style>
