<template>
  <div>
    <div class="gray_box">
        <div class="wrapper">
          <div class="main">
            <div class="breadcrumb">
              <nav>
                <ol>
                  <li><NuxtLink to="/">HOME</NuxtLink>&gt;</li>
                  <li>あああ会社概要</li>
                </ol>
              </nav>
            </div>
            <h1 class="title">会社概要</h1>
            <div class="contents">
              <div class="about_us1 fadeDown">
                <!-- <img class="image_1" src="~/public/koho_025.jpg" /> -->
                <div class="context">
                  <h4>蜂楽園</h4>
                  <p class="caption">蜂楽園は沖縄を拠点に活動する自然との共存の仕方を考える養蜂園です。</p>
                  <p class="details">みつばちの飼育事業からはちみつの生産販売まで、みつばちを軸とした自然環境に関わる事業を行なっています。養蜂家さんや農家さんをはじめとした、みつばちに関わる全ての方に元気なみつばちを提供します。</p>
                </div>
              </div>
              <div class="about_us2 fadeDown">
                <div class="context">
                  <h4>理念</h4>
                  <p class="caption">蜂楽園は、私たちの生活を大きく支えてくれる蜜蜂に感謝し、みつばちと人が豊かに暮らせる社会を目指しています。</p>
                  <p class="details">世界の９割の食料は100種類の作物で構成されおり、その100種類の作物の７割はハチが受粉を媒介しています。私たちの食事はハチによって支えられていると言われても過言ではありません。 私たちはみつばちが暮らしやすい自然を守り、共存していくことが豊かな社会につながると信じて、活動しています。</p>
                </div>
                <!-- <img class="image_2" src="~/public/koho_001.jpg" /> -->
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 1350px;
  width: 1200px;
  background: white;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 110px;
  padding: 40px 40px;
  margin-bottom: 110px;
}

.main {
  width: 100%;
  height: 1000px;
  margin-right: auto;
  margin-left: auto;
}

.contents {
  position: relative;
  height: 100%;
  margin-top: 80px;
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

h1.title {
  font-size: 32px;
  width: 100%;
}

.image_1 {
  width: 340px;
  height: 500px;
}

.image_2 {
  width: 340px;
  height: 500px;
}

.about_us1 {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  opacity: 0;
}

.caption {
  font-size: 18px;
}

.details {
  font-size: 18px;
}
.context {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 100px;
  padding: 50px;
  width: 583px;
  height: 312px;
  border-radius: 20px;
  background-color: #f5f4f1;
}

.context > p {
  overflow-wrap: normal;
}

.about_us2 {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -50px;
  right: 0;
  width: 100%;
  opacity: 0;
}

div.context {
  color: #1a2d51;
}

div.context > h4 {
  font-size: 30px;
}

div.context {
  color: #1a2d51;
  font-weight: 400;
}

.about_us1 > img {
  border-radius: 10px;
}

.about_us2 > img {
  border-radius: 10px;
}

.fadeDown {
  animation-name: fadeDownAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeDownAnime {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (max-width: 510px) {
  .wrapper {
    height: 1350px;
    width: 100%;
    background: white;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 110px;
    padding: 20px 20px;
    margin-bottom: 110px;
  }

  .about_us1 {
    flex-direction: row;
    /* position: relative; */
    width: 100%;
    min-height: 400px;
    position: unset;
  }

  .about_us1 > img {
    border-radius: 10px;
    width: 70%;
    position: absolute;
    top: 0;
    opacity: 0.4;
  }
  .contents {
    display: flex;
    flex-direction: column;
    row-gap: 150px;
  }

  .about_us2 > .context {
    width: 75%;
    top: 35%;
    right: 25%;
    margin-top: 0;
    position: absolute;
    padding: 20px;
    background: none;
  }

  .about_us1 > .context {
    width: 75%;
    top: 35%;
    left: 25%;
    margin-top: 0;
    position: absolute;
    padding: 20px;
    background: none;
  }

  .about_us2 {
    flex-direction: row;
    /* position: relative; */
    top: 350px;
    right: 0;
    width: 100%;
    min-height: 400px;
    position: unset;
  }

  .about_us2 > img {
    border-radius: 10px;
    width: 70%;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.4;
  }
}
</style>
