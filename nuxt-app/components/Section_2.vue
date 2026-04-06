<template>
  <div class="section_2">
    <div class="heading">
      <h3>デイマップ導入で<br class="sp_br">ルート作成時間を<span class="sp_color">50％削減</span>！</h3>
    </div>

    <div class="contents">
      <img
        src="/reduction_image.avif"
        alt="デイマップ導入によるルート作成時間の削減効果"
        decoding="async"
      />
    </div>
  </div>
</template>

<style scoped>
.section_2 {
  height: auto;
  background-color: #FFFFFF;
  padding: 80px 0;
}

.section_2 .heading {
  width: 100%;
  margin-bottom: 56px;
}

.section_2 .heading h3 {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}

.section_2 .contents {
  margin: 0 auto;
  display: flex;
  width: 1200px;
  height: auto;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFDC;
  column-gap: 40px;
  padding: 0 200px;
}

.section_2 .contents img {
  display: block;
  width: 725px;
  max-width: 100%;
  height: auto;
  border-radius: 20px;
}

.section_2 .contents ul li {
  font-size: 24px;
}

.section_2 .contents .above_area {
  margin: 56px 0 40px 0;
}


.section_2 ul.above_area li::before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50px;
  display: inline-block;
  background-color: #45B13E;
}


@media screen and (max-width: 600px) {
  .section_2 {
    padding: 40px 8px;
    background-color: #FFFFDC;
  }


  .section_2 .heading h3 .sp_color {
    color: #45B13E;
  }

  .section_2 .heading h3 {
    font-size: 24px;
  }

  .section_2 .heading {
    margin-bottom: 16px;
  }

  .section_2 .contents {
    width: 100%;
    height: auto;
    padding: 8px;
  }

  .section_2 .contents img {
    width: 100%;
    height: auto;
  }

  .section_2 .contents ul li {
    font-size: 16px;
    font-weight: bold;
  }

  .section_2 .contents .above_area {
    margin: 30px 0 20px 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section_2 .contents {
    width: 90%;
    padding: 0 40px;
  }

  .section_2 .contents img {
    width: 100%;
    height: auto;
  }
}
</style>
