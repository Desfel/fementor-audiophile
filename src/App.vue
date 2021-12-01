<template>
  <div id="app" @triggerCart="triggerCart" :class="[{'is-open': (isBurgerOpen || isCartOpen || popupIsOpen)}, routeName]">
    <div v-if="(isBurgerOpen || isCartOpen || popupIsOpen)" class="overlay" @click="closePopup"></div>
    <nav-bar @triggerBurger="triggerBurger" @triggerCart="triggerCart"></nav-bar>
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
      popupIsOpen: false,
      isBurgerOpen: false,
      isCartOpen: false,
      routeName: null,
      totalCartPrice: 0,
      cartArray: [],
      taxTotal: 0,
      grandTotal: 0
    }
  },
  components: {FooterBar, NavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  watch: {
    $route: 'currentRoute'
  },
  created() {
    this.routeName = this.$route.name
  },
  methods: {
    triggerBurger(value) {
      this.isBurgerOpen = value
      this.isCartOpen = false
    },
    triggerCart(value) {
      this.isCartOpen = value
      this.isBurgerOpen = false
    },
    currentRoute() {
      this.$nextTick(() => {
        this.routeName = this.$route.name
      })
    },
    closePopup() {
      this.isBurgerOpen = false
      this.isCartOpen = false
    },
    calculateTotalPrice() {
      let totalPrice = 0

      this.cartArray.forEach(product => {
        totalPrice += product.price * product.qty
      })

      this.totalCartPrice = totalPrice
      this.taxTotal = totalPrice * 0.2
      this.grandTotal = totalPrice + this.taxTotal + 50

      if(this.cartArray.length > 0) {
        this.totalCartPrice = this.totalCartPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
        this.taxTotal = this.taxTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
        this.grandTotal = this.grandTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
      } else {
        this.totalCartPrice = 0
        this.taxTotal = 0
        this.grandTotal = 0
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/theme/variables.scss';

html {
  scroll-behavior: smooth;
}

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

    .overlay {
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

    &.product-page {
      .navbar {
        @media (min-width: 1025px) {
          position: relative;
          background: $black;
          width: 100%;
          max-width: 100%;
          padding-left: 40px;
          padding-right: 40px;
        }

        .navbar-wrapper {
          @media (min-width: 1025px) {
            width: 100%;
            max-width: 1110px;
            margin: auto;
          }
        }
      }
    }

    &.is-open {
      .overlay {
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
        padding-bottom: 200px;

        @media (max-width: 1024px) {
          padding-bottom: 120px;
        }
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

  .number-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: $color3;
    color: $black;

    span {
      user-select: none;
    }

    input {
      display: inline-block;
      width: 100%;
      font-weight: bold;
      font-size: 13px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: $color3;
      color: $black;
      background: transparent;
      border: none;
      outline: 0;
      pointer-events: none;
      user-select: none;
    }

    .subtract-item,
    .add-item {
      cursor: pointer;
      transition: color .3s ease-in-out;

      &:hover {
        color: $color1;
      }

      &.is-disabled {
        opacity: 0.25;
        pointer-events: none;
      }
    }
  }
}
</style>
