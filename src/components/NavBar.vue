<template>
  <header class="navbar">
    <div class="navbar-wrapper">
    <span class="burger-menu-icon" @click="openBurger">
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
    </span>

      <router-link to="/home">
        <img class="logo" src="@/assets/img/shared/desktop/logo.svg" alt="logo-audiophile" />
      </router-link>
      <div class="links">
        <nav class="nav-links">
          <router-link to="/home">Home</router-link>
          <router-link to="/headphones">Headphones</router-link>
          <router-link to="/speakers">Speakers</router-link>
          <router-link to="/earphones">Earphones</router-link>
        </nav>
      </div>

      <span class="cart-icon">
      <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#FFF" fill-rule="nonzero"/></svg>
    </span>

      <div class="mobile-menu" :class="{'is-open': isBurgerOpen}">
        <nav class="mobile-links">
          <router-link class="mobile-link-wrapper" to="/headphones">
            <div class="mobile-link-content">
              <img src="@/assets/img/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" />

              <p class="link-title">Headphones</p>
              <p class="link-goto">
                Shop
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" stroke-width="2"/>
                </svg>
              </p>
            </div>
          </router-link>
          <router-link class="mobile-link-wrapper" to="/speakers">
            <div class="mobile-link-content">
              <img src="@/assets/img/shared/desktop/image-category-thumbnail-speakers.png" alt="Speakers" />

              <p class="link-title">Speakers</p>
              <p class="link-goto">
                Shop
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" stroke-width="2"/>
                </svg>
              </p>
            </div>
          </router-link>
          <router-link class="mobile-link-wrapper" to="/earphones">
            <div class="mobile-link-content">
              <img src="@/assets/img/shared/desktop/image-category-thumbnail-earphones.png" alt="Earphones" />

              <p class="link-title">Earphones</p>
              <p class="link-goto">
                Shop
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.32227 1L6.32227 6L1.32227 11" stroke="#D87D4A" stroke-width="2"/>
                </svg>
              </p>
            </div>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isBurgerOpen: false
    }
  },
  computed: {
    ...mapState('app', ['appTitle', 'appShortTitle'])
  },
  methods: {
    openBurger() {
      this.isBurgerOpen = !this.isBurgerOpen
      this.$emit('triggerBurger', this.isBurgerOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.navbar {
  position: absolute;
  left: 0;
  right: 0;
  max-width: 1110px;
  width: calc(100% - 120px);
  padding: 32px 0 36px;
  margin: auto;
  border-bottom: 1px solid rgba($white, 0.2);
  z-index: 9;

  .navbar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1024px) {
    position: fixed;
    padding: 32px 40px;
    width: 100%;
    justify-content: left;
    background: $black;
    z-index: 10;
  }

  @media (max-width: 767px) {
    justify-content: space-between;
  }

  .links {
    @media (max-width: 1024px) {
      display: none;
    }

    .nav-links {
      a {
        font-weight: bold;
        font-size: 13px;
        line-height: 25px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: $white;
        transition: color 0.3s ease-in-out;

        &:not(:last-child) {
          margin-right: 34px;
        }

        &:hover {
          color: $color1;
        }
      }
    }
  }

  .burger-menu-icon {
    display: none;
    cursor: pointer;

    svg path {
      transition: fill 0.3s ease-in-out;
    }

    &:hover {
      svg path {
        fill: $color1;
      }
    }

    @media (max-width: 1024px) {
      display: block;
      margin-right: 42px;
    }

    @media (max-width: 767px) {
      margin-right: 0;
    }
  }

  .cart-icon {
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1024px) {
      margin-left: auto;
    }

    svg path {
      transition: fill .3s ease-in-out;
    }

    &:hover {
      svg path {
        fill: $color1;
      }
    }
  }

  .mobile-menu {
    position: fixed;
    width: 100%;
    top: 90px;
    left: 0;
    padding: 76px 40px 67px;
    background: $white;
    border-radius: 0 0 4px 4px;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    pointer-events: none;

    &.is-open {
      opacity: 1;
      pointer-events: auto;
    }

    .mobile-links {
      display: flex;
      align-items: stretch;
      width: 100%;

      @media(max-width: 767px) {
        flex-direction: column;
      }
    }

    .mobile-link-wrapper {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: calc((100% - 20px) / 3);
      border-radius: 8px;
      background: $color3;

      &:not(:last-child) {
        margin-right: 10px;

        @media(max-width: 767px) {
          margin-right: 0;
          margin-bottom: 82px;
        }

        @media (max-width: 500px) {
          margin-bottom: 62px;
        }
      }

      @media(max-width: 767px) {
        width: 100%;
      }
    }

    .mobile-link-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: auto;
      padding: 22px;

      img {
        margin: -50px auto 0;
        max-width: 50%;

        @media(max-width: 767px) {
          margin-top: -80px;
          max-width: 150px;
        }

        @media (max-width: 500px) {
          margin-top: -60px;
        }
      }

      .link-title {
        margin-bottom: 17px;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 1.07143px;
        text-transform: uppercase;
        color: $black;
      }

      .link-goto {
        font-weight: bold;
        font-size: 13px;
        line-height: 18px;
        /* identical to box height */

        letter-spacing: 1px;
        text-transform: uppercase;
        color: rgba($black, .5);

        svg {
          margin-left: 13px;
        }
      }
    }
  }
}
</style>
