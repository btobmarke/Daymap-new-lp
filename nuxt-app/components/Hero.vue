<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { reactive } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = reactive({
      value: "",
    });

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>
<template>
  <div class="hero_wrapper">
    <div class="top_area">
      <div class="left_area">
        <div class="description">
          <p>送迎ルートをボタン1つで自動作成</p>
          <p>複数施設にまたがった合同送迎計画の作成も可能</p>
        </div>
        <div class="title">
          <p>ルート自動作成なら</p>
          <img src="/DayMap_logo_L.avif" width="504px" height="88px">
          <p class="daymap_kana">デイマップ</p>
        </div>
        <div class="daymap_ring_area">
          <div class="daymap_ring">
            <span class="daymap_ring_comment">ドライバーへの<br>​音声通知</span>
            <img src="/daymap_ring.svg" width="100%" height="100%">
          </div>
          <div class="daymap_ring">
            <span class="daymap_ring_comment">特殊な端末<br>​​必要なし</span>
            <img src="/daymap_ring.svg" width="100%" height="100%">
          </div>
          <div class="daymap_ring">
            <span class="daymap_ring_comment">利用者への<br>​自動メール</span>
            <img src="/daymap_ring.svg" width="100%" height="100%">
          </div>
        </div>
      </div>
      <div class="right_area">
        <div class="popup_area">
          <p>子供の習い事の送迎、配送業者・訪問営業など</p>
          <p>日々ルートが変わる業界にも利用可能</p>
          <img class="pop_triangle" src="/pop_triangle.svg" width="20px" height="20px">
        </div>

        <div class="youtube_area">
          <img fetchpriority="high" sizes="50%" srcset="/img_pc.avif" src="/img_pc.avif" alt="" style="object-fit:cover"
            width="50%" height="50%" class="youtube_image">
          <iframe frameborder="0" allowfullscreen=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" title="【デイサービス】送迎をラクにするシステムDAYMAP（デイマップ）" width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5St7o1pOipg?autoplay=1&amp;mute=1&amp;controls=1&amp;loop=1&amp;origin=https%3A%2F%2Fwww.daymap.site&amp;playsinline=1&amp;playlist=5St7o1pOipg&amp;enablejsapi=1&amp;widgetid=1&amp;forigin=https%3A%2F%2Fwww.daymap.site%2F&amp;aoriginsup=1&amp;vf=1"
            id="widget2" data-gtm-yt-inspected-23="true" class="youtube_iframe">
          </iframe>
        </div>
      </div>
    </div>

    <div class="bottom_area">
      <div class="bottom_area_wrapper"></div>
      <div class="content_area">
        <div class="btn_area">
          <a href="#" class="document">
            <img src="/cloud_download.svg" width="20px" height="20px">資料ダウンロード<span>></span>
          </a>
          <a href="#" class="trial">
            <img src="/trial_logo.svg" width="20px" height="20px">２週間無料体験<span>></span>
          </a>
        </div>
        <div class="media_achievement">
          <div class="medal">
            <img src="/left-medal.svg">
            <span>​メディア<br>掲載多数</span>
            <img src="/right-medal.svg">
          </div>
          <span>​デイサービスの送迎・<br class="sp_only">訪問業務を改善</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero_wrapper {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-image: url("/daymap_head.avif");
  background-size: cover;
}

.top_area {
  display: flex;
  justify-content: space-around;
  padding: 80px 50px 0 50px;
}

.left_area {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.left_area .description {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
}

.left_area .description p {
  text-align: center;
}

.left_area .title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  margin-bottom: 40px;
}

.left_area .daymap_kana {
  font-size: 20px;
  color: #119600;
}

.left_area .daymap_ring_area {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px
}

.daymap_ring {
  position: relative;
  width: 145px;
  height: 145px;
  text-align: center;
}

.daymap_ring_comment {
  position: absolute;
  white-space: nowrap;
  /* display: inline-block; */
  width: 100%;
  text-align: center;
  top: 31%;
  left: 0;
  color: #178809;
  font-size: 20px;
  text-shadow:
    -1px -1px 0 white,
    1px -1px 0 white,
    -1px 1px 0 white,
    1px 1px 0 white;

}

.daymap_ring img {
  width: 120px;
}

.bottom_area {
  position: relative;
  display: flex;
  height: 186px;
  width: 100%;
  margin-top: auto;
}

.bottom_area_wrapper {
  padding: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #fffffB;
  opacity: 0.8;
}

.media_achievement {
  display: flex;
  background-color: #23BE10;
  border-radius: 5px;
  width: 574px;
  height: 118px;
  align-items: center;
  justify-content: center;
}

.media_achievement>span {
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
}

.medal {
  display: flex;
  align-items: center;
}

.medal span {
  display: flex;
  font-size: 16px;
  color: #FFFF01;
}


.content_area {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  column-gap: 32px;
}

.medal {
  display: flex;
}

.btn_area {
  display: flex;
  column-gap: 24px;
}

.right_area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  width: 50%;
  gap: 40px;
}


a.document {
  border-radius: 40px;
  background-color: #FF8800;
  width: 288px;
  height: 78px;
  display: flex;
  justify-content: center;
  column-gap: 24px;
  align-items: center;
  text-align: center;
  line-height: 78px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
}

a.trial {
  border-radius: 40px;
  background-color: #10ACFB;
  width: 288px;
  height: 78px;
  display: flex;
  justify-content: center;
  column-gap: 24px;
  align-items: center;
  text-align: center;
  line-height: 78px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
}

.youtube_image {
  width: 85%;
  height: 100%;
}

.popup_area {
  background-color: #ffffff;
  width: 80%;
  padding: 32px 32px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 4px 0px;
  position: relative;
}

.pop_triangle {
  position: absolute;
  bottom: -30px;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translateX(-50%);
}

.popup_area p {
  color: #23BE10;
  font-size: 20px;
  width: 100%;
  font-weight: bold;
  text-align: center;
}

.youtube_area {
  position: relative;
  width: 100%;
  height: 100%;
}

.youtube_iframe {
  border-radius: 10px;
  position: absolute;
  top: 2.5%;
  left: 15.5%;
  width: 69%;
  height: 91%;
}

body {
  background: #000;
  color: #000;
}

.sp_only {
  display: none;
}


@media screen and (max-width: 600px) {
  .hero_wrapper {
    width: 100%;
    height: auto;
  }

  .left_area .daymap_ring_area {
    column-gap: 8px;
  }

  .top_area {
    flex-direction: column;
    padding: 40px 20px 0 20px;
  }

  .left_area {
    width: 100%;
  }

  .left_area .description {
    font-size: 18px;
  }

  .left_area .title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .left_area .title img {
    width: 100%;
    height: auto;
  }

  .right_area {
    width: 100%;
  }

  .popup_area {
    width: 100%;
    padding: 24px 16px;
    margin-top: 16px;
  }

  .popup_area p {
    font-size: 15px;
  }

  .youtube_image {
    width: 100%;
    height: 100%;
  }

  .youtube_iframe {
    border-radius: 10px;
    position: absolute;
    top: 2.5%;
    left: 9.5%;
    width: 81%;
    height: 91%;
  }

  .daymap_ring_area {
    display: flex;
    gap: 20px;
  }

  .daymap_ring img {
    width: 110px;
  }

  .daymap_ring {
    width: 110px;
    height: 110px;
  }

  .daymap_ring_comment {
    font-size: 16px;
  }

  .bottom_area {
    width: 100%;
    height: auto;
    aspect-ratio: 320/221;
    display: flex;
  }

  .btn_area {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }


  a.document {
    width: 73%;
    height: auto;
    aspect-ratio: 4/1;
    line-height: 0;
  }

  a.trial {
    width: 73%;
    height: auto;
    aspect-ratio: 4/1;
    line-height: 0;
  }

  .btn_area {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    align-items: center;
  }


  .content_area {
    width: 100%;
    flex-direction: column;
    gap: 20px;
    padding: 20px 20px;
    height: auto;
  }

  .media_achievement {
    width: 100%;
    height: auto;
    padding: 15px 10px;
  }

  .media_achievement img {
    width: 20px;
    height: 60px;
  }

  .media_achievement .medal {
    width: 130px;
  }


  /* .media_achievement .meadl span {
    font-size: 12px;

  } */

  .sp_only {
    display: inline;
  }

  .media_achievement span {
    font-size: 16px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1023px) {
  .hero_wrapper {
    width: 100%;
  }

  .left_area .title img {
    width: 80%;
    height: auto;
  }

  .daymap_ring_area {
    gap: 30px;
  }
}
</style>