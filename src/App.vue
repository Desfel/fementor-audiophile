<template>
  <div id="app" :class="{'is-open': isBurgerOpen}">
    <nav-bar @triggerBurger="triggerBurger"></nav-bar>
    <div class="main-wrapper">
      <router-view />
    </div>
    <footer-bar></footer-bar>

    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)"
    >
    </apple-add-to-home-screen-modal>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      isBurgerOpen: false
    }
  },
  components: {FooterBar, NavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: {
    triggerBurger(value) {
      this.isBurgerOpen = value
    }
  }
}
</script>

<style lang="scss">
@import '@/theme/variables.scss';
body {
  margin: 0;

  * {
    box-sizing: border-box;
  }

  img {
    vertical-align: middle;
  }

  h1,
  h2,
  p,
  a {
    font-family: $textFont;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .site-btn {
    display: inline-block;
    padding: 15px 30px;
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $white;
    background: $color1;
    transition: all .3s ease-in-out;

    &:hover {
      background: $color5;
    }

    &.is-light {
      border: 1px solid $black;
      background: transparent;
      color: $black;

      &:hover {
        color: $white;
        background: $black;
      }
    }

    &.is-dark {
      background: $black;
      color: $white;

      &:hover {
        background: $color6;
      }
    }
  }

  #app {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #2c3e50;

    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: $black;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
      z-index: 9;
    }

    &.is-open {
      &:before {
        opacity: 0.4;
        pointer-events: auto;
      }
    }

    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .apple-add-to-home-screen-modal {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      height: fit-content;
      width: fit-content;
      margin: auto;
      z-index: 1000;
    }

    .main-wrapper {
      .page-wrapper {
        margin: auto;
      }
    }

    .parent-container {
      padding: 0 60px;

      @media (max-width: 1024px) {
        max-width: 100%;
        padding: 0 40px;
      }

      @media (max-width: 767px) {
        padding: 0 24px;
      }
    }

    .container {
      width: 100%;
      max-width: 1110px;
      margin: auto;

      @media (max-width: 1024px) {
        max-width: 100%;
      }
    }
  }
}
</style>
