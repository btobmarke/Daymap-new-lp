<script setup>
const isShow = ref(true);

const isShowMenu = ref(false);

const ToggleMenu = () => {
  isShowMenu.value = !isShowMenu.value;
};
</script>

<template>
  <header>
    <div class="inner">
      <div class="left_area">
        <NuxtLink class="header_logo" to="/">
          <img class="logo_icon" src="~/public/daymap_logo_icon.avif" width="45" heigh="45" alt="蜂楽園" />
          <img class="logo" src="~/public/daymap_logo.avif" width="151" heigh="25" alt="蜂楽園" />
        </NuxtLink>
        <span>送迎ルートを自動で作成</span>
      </div>
      <nav>
        <div v-if="isShow" id="menu" class="pc_menu">
          <div class="navi">
            <ul class="main">
              <li class="g_navi navi_home">
                <NuxtLink to="/" class="pa">ホーム</NuxtLink>
              </li>
              <li class="g_navi navi_news">
                <NuxtLink to="/news" class="pa">お知らせ</NuxtLink>
                <!--megamenu-->
              </li>
              <li class="g_navi navi_features">
                <NuxtLink to="/#features" class="pa">特徴</NuxtLink>
              </li>
              <li class="g_navi navi_price">
                <NuxtLink to="/#price" class="pa">価格</NuxtLink>
              </li>
              <li class="g_navi navi_contact">
                <NuxtLink to="/contact" class="pa">お問い合わせ</NuxtLink>
              </li>
            </ul>
            <ul class="btn_area">
              <li class="g_navi navi_login">
                <NuxtLink to="/" class="action_btn">
                  <img src="~/public/login_icon.svg" class="login_icon" alt="ログイン" />
                  <span class="label_login">ログイン</span>
                </NuxtLink>
              </li>
              <li class="g_navi navi_trial">
                <NuxtLink to="/" class="action_btn">
                  <img src="~/public/trial_icon.svg" class="trial_icon" alt="2週間無料体験" />
                  <span class="label_trial">2週間無料体験</span>
                </NuxtLink>
              </li>
              <li class="g_navi navi_hamburger">
                <div class="toggle" :class="{ active: isShowMenu }" @click="ToggleMenu">
                  <div class="hamburger" :class="{ active: isShowMenu }">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--navi-->
        </div>
        <Teleport to="body">
          <div v-if="isShowMenu" class="mobile_menu">
            <ul>
              <li>
                <NuxtLink to="/" @click="ToggleMenu" class="pa">ホーム</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/news" @click="ToggleMenu" class="pa">お知らせ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#features" @click="ToggleMenu" class="pa">特徴</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#price" @click="ToggleMenu" class="pa">価格</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" @click="ToggleMenu" class="pa">お問い合わせ</NuxtLink>
              </li>
            </ul>
          </div>
        </Teleport>
      </nav>
    </div>
    <!--inner-->
  </header>
</template>

<style scoped>
.inner {
  display: flex;
  height: 88px;
  align-items: center;
  justify-content: space-between;
}

.navi {
  display: flex;
  align-items: center;
  height: 88px;
}

.main {
  min-width: 480px;
  display: flex;
  column-gap: 56px;
}

.header_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
}

.left_area {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #23BE10;
  margin-left: 40px;
}

.left_area span {
  margin-left: 16px;
  font-weight: bold;
}

.main a {
  font-size: 14px;
  font-weight: bold;
}

ul.btn_area {
  display: flex;
  height: 100%;
}

ul.btn_area li {
  display: flex;
  height: 100%;
  align-items: center;
}

ul.btn_area li.navi_login {
  display: flex;
  justify-content: center;
  width: 95px;
  height: 88px;
  background-color: rgb(69, 177, 62);
  height: 100%;
  align-items: center;
  color: #FFFFFF;
}

ul.btn_area li.navi_trial {
  display: flex;
  justify-content: center;
  width: 95px;
  height: 88px;
  background-color: rgb(16, 172, 251);
  height: 100%;
  align-items: center;
  color: #FFFFFF;
}

ul.btn_area li.navi_login a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
  align-items: center;
}

ul.btn_area li.navi_trial a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
  align-items: center;
}

.label_trial {
  font-size: 12px;
}

.label_login {
  font-size: 12px;
}

.toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
}

.toggle p {
  font-size: 12px;
  margin-top: 4px;
  color: #333;
}

.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile_menu {
  position: fixed;
  top: 21.2vw;
  left: 0;
  width: 100%;
  height: calc(100vh - 88px);
  background-color: #fff;
  z-index: 1000;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mobile_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile_menu li {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.mobile_menu li:last-child {
  border-bottom: none;
}

.mobile_menu a {
  display: block;
  font-size: 16px;
  color: #333;
  text-decoration: none;
}

@media screen and (max-width: 600px) {

  .navi {
    display: show;
    height: auto;
  }

  .main {
    display: none;
  }

  .header_logo .logo_icon {
    width: 6vw;
    height: auto;
  }

  .header_logo .logo {
    width: 25vw;
    height: auto;
  }

  .left_area {
    margin-left: 0px;
  }

  .left_area span {
    display: none;
  }

  .btn_area {
    display: show;
  }

  .btn_area .login_icon {
    height: 7vw;
  }

  .btn_area .trial_icon {
    height: 7vw;
  }

  .label_trial,
  .label_login {
    font-size: 10px;
    margin-top: 2vw;
  }

  .toggle {
    display: flex;
  }

  .inner {
    padding-left: 5px;
    height: auto;
  }


  ul.btn_area li.navi_hamburger {
    flex: 1 1 21.2vw;
    aspect-ratio: 1/1;
    width: 21.2vw;
  }

  .toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21.2vw;
  }

  ul.btn_area li.navi_login {
    flex: 1 1 21.2vw;
    aspect-ratio: 1/1;
    width: 21.2vw;
  }

  ul.btn_area li.navi_trial {
    flex: 1 1 21.2vw;
    aspect-ratio: 1/1;
    width: 21.2vw;
  }

  .action_btn {
    display: flex;
    flex-direction: row;
  }
}

@media screen and (min-width: 600px) and (max-width: 1023px) {
  .inner {
    padding: 0 40px;
  }

  .main {
    min-width: auto;
    column-gap: 30px;
  }

  .header_logo img {
    width: 140px;
    height: auto;
  }

  .toggle {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .toggle {
    display: none;
  }
}
</style>
