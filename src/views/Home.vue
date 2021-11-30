<template>
  <div class="page-wrapper">
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <p class="intro-subtitle">New Product</p>

          <h1 class="intro-title">
            XX99 Mark II
            Headphones
          </h1>

          <p class="intro-brief">
            Experience natural, lifelike audio and exceptional
            build quality made for the passionate music enthusiast.
          </p>

          <router-link class="site-btn" to="/product/xx99-mark-ii">See product</router-link>
        </div>
      </div>
    </section>

    <section class="home-nav-section parent-container">
      <div class="container">
        <nav class="home-nav-links">
          <router-link class="home-nav-link-wrapper" to="/headphones">
            <div class="home-nav-link-content">
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
          <router-link class="home-nav-link-wrapper" to="/speakers">
            <div class="home-nav-link-content">
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
          <router-link class="home-nav-link-wrapper" to="/earphones">
            <div class="home-nav-link-content">
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
    </section>

    <section class="featured-section parent-container">
      <div class="container">
        <div class="featured-item-1 featured-item">
          <div class="img-wrapper"></div>

          <div class="featured-content">
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>

            <router-link to="/zx9-speaker" class="site-btn is-dark">See product</router-link>
          </div>
        </div>
        <div class="featured-item-2 featured-item">
          <div class="featured-content">
            <h2>ZX7 SPEAKER</h2>
            <router-link to="/zx7-speaker" class="site-btn is-light">See product</router-link>
          </div>
        </div>
        <div class="featured-item-3 featured-item">
          <div class="img-wrapper"></div>

          <div class="featured-content">
            <h2>YX1 Earphones</h2>
            <router-link to="/yx1-earphones" class="site-btn is-light">See product</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="outro-section parent-container">
      <div class="container">
        <div class="outro-content">
          <h2>Bringing you the <span>best</span> audio gear</h2>

          <p>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div class="img-wrapper"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;

  .intro-section {
    padding: 225px 10% 158px;
    background: url('../assets/img/home/desktop/image-hero.jpg') right center no-repeat, #191919;

    @media (max-width: 1300px) {
      background-position: right -100px center;
    }

    @media (max-width: 1200px) {
      background-position: right -200px center;
    }

    @media (max-width: 1024px) {
      position: relative;
      background: url('../assets/img/home/tablet/image-header.jpg') center/contain no-repeat, #191919;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($black, 0.5);
        z-index: 2;
      }
    }

    @media (max-width: 767px) {
      padding: 198px 24px 112px;
      background: url('../assets/img/home/mobile/image-header.jpg') center/contain no-repeat, #191919;
    }

    .intro-content {
      position: relative;
      max-width: 400px;
      z-index: 3;

      @media (max-width: 1024px) {
        max-width: 380px;
        margin: auto;
        text-align: center;
      }

      .intro-subtitle {
        margin-bottom: 24px;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;

        color: $white;
        opacity: 0.5;
      }

      .intro-title {
        margin-bottom: 24px;
        font-weight: bold;
        font-size: 56px;
        line-height: 58px;
        /* or 104% */

        letter-spacing: 2px;
        text-transform: uppercase;
        color: $white;

        @media (max-width: 767px) {
          font-size: 36px;
          line-height: 40px;
          letter-spacing: 1.28571px;
        }
      }

      .intro-brief {
        margin-bottom: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: $white;
        opacity: 0.75;

        @media (max-width: 767px) {
          margin-bottom: 28px;
        }
      }
    }
  }


  .home-nav-section {
    margin-top: 170px;

    @media (max-width: 1024px) {
      margin-top: 130px;
    }

    .home-nav-links {
      display: flex;
      align-items: stretch;
      width: 100%;

      @media(max-width: 767px) {
        flex-direction: column;
      }
    }

    .home-nav-link-wrapper {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: calc((100% - 60px) / 3);
      border-radius: 8px;
      background: $color3;

      @media (max-width: 1024px) {
        width: calc((100% - 20px) / 3);
      }

      @media(max-width: 767px) {
        width: 100%;
      }

      &:hover {
        .link-goto {
          color: $color1;
        }
      }

      &:not(:last-child) {
        margin-right: 30px;

        @media (max-width: 1024px) {
          margin-right: 10px;
        }

        @media(max-width: 767px) {
          margin-right: 0;
          margin-bottom: 82px;
        }

        @media (max-width: 500px) {
          margin-bottom: 62px;
        }
      }
    }

    .home-nav-link-content {
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
        color: rgba($black, 0.5);
        transition: color .3s ease-in-out;

        svg {
          margin-left: 13px;
        }
      }
    }
  }

  .featured-section {
    margin-top: 168px;

    @media (max-width: 1024px) {
      margin-top: 96px;
    }

    @media (max-width: 767px) {
      margin-top: 120px;
    }

    .featured-item {
      display: flex;
      border-radius: 8px;

      &:not(:last-child) {
        margin-bottom: 48px;

        @media (max-width: 1024px) {
          margin-bottom: 32px;
        }
      }
    }

    .featured-content {
      max-width: 350px;

      @media (max-width: 1024px) {
        margin-left: 0;
        text-align: center;
      }

      h2 {
        margin-bottom: 24px;
        font-weight: bold;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: $black;

        @media (max-width: 767px) {
          font-size: 36px;
          line-height: 40px;
          letter-spacing: 1.28571px;
        }
      }

      p {
        margin-bottom: 40px;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: $black;
        opacity: 0.75;

        @media (max-width: 767px) {
          margin-bottom: 24px;
        }
      }
    }

    .featured-item-1 {
      display: flex;
      padding: 133px 95px 0;
      background: url('../assets/img/home/desktop/pattern-circles.svg') left -150px top -35px no-repeat, $color1;
      overflow: hidden;

      @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-position: center top -64px;
        padding: 52px 52px 64px;
      }

      @media (max-width: 767px) {
        padding: 55px 24px;
        background-position: center top -163px;
      }

      .img-wrapper {
        margin-right: 40px;
        width: 410px;
        height: 493px;
        background: url('../assets/img/home/desktop/image-speaker-zx9.png') center bottom -27px /contain no-repeat;

        @media (max-width: 1024px) {
          width: 197px;
          height: 237px;
          background: url('../assets/img/home/tablet/image-speaker-zx9.png') center/contain no-repeat;
          margin-bottom: 64px;
          margin-right: 0;
        }
        @media (max-width: 767px) {
          width: 172px;
          height: 207px;
          background: url('../assets/img/home/mobile/image-speaker-zx9.png') center/contain no-repeat;
          margin-bottom: 32px;
        }
      }

      .featured-content {
        margin-left: auto;

        @media (max-width: 1024px) {
          margin-left: 0;
        }

        h2 {
          margin-bottom: 24px;
          font-weight: bold;
          font-size: 56px;
          line-height: 58px;
        }

        h2,
        p {
          color: $white;
        }
      }
    }

    .featured-item-2 {
      padding: 101px 95px;
      background: url('../assets/img/home/desktop/image-speaker-zx7.jpg') right center no-repeat;

      @media (max-width: 1024px) {
        background: url('../assets/img/home/tablet/image-speaker-zx7.jpg') right center/100% auto no-repeat;
      }

      @media (max-width: 767px) {
        padding: 101px 24px;
        background: url('../assets/img/home/mobile/image-speaker-zx7.jpg') right center/100% auto no-repeat;
      }

      .featured-content {
        text-align: left;

        h2 {
          margin-bottom: 32px;

          @media (max-width: 767px) {
            font-size: 28px;
            line-height: 38px;
            letter-spacing: 2px;
          }
        }
      }
    }

    .featured-item-3 {
      width: 100%;
      align-items: stretch;

      @media (max-width: 767px) {
        flex-direction: column;
      }

      div {
        width: calc((100% - 30px) / 2);
        border-radius: 8px;

        @media (max-width: 1024px) {
          width: calc((100% - 10px) / 2);
        }

        @media (max-width: 767px) {
          width: 100%;
        }
      }

      .img-wrapper {
        margin-right: 30px;
        background: url('../assets/img/home/desktop/image-earphones-yx1.jpg') center no-repeat;

        @media (max-width: 1024px) {
          background: url('../assets/img/home/tablet/image-earphones-yx1.jpg') center no-repeat;
          margin-right: 10px;
        }

        @media (max-width: 767px) {
          height: 200px;
          margin-right: 0;
          margin-bottom: 24px;
          background: url('../assets/img/home/mobile/image-earphones-yx1.jpg') center no-repeat;
        }
      }

      .featured-content {
        max-width: 100%;
        padding: 101px 95px;
        background: $color3;
        text-align: left;

        @media (max-width: 1024px) {
          padding: 101px 51px 101px 41px;
        }

        @media (max-width: 1024px) {
          padding: 41px 24px;
        }

        h2 {
          margin-bottom: 32px;

          @media (max-width: 767px) {
            font-size: 28px;
            line-height: 38px;
            letter-spacing: 2px;
          }
        }
      }
    }
  }

  .outro-section {
    margin-top: 160px;

    @media (max-width: 1024px) {
      margin-top: 96px;
    }

    @media (max-width: 767px) {
      margin-top: 120px;
    }

    .container {
      display: flex;
      align-items: center;

      @media (max-width: 1024px) {
        flex-direction: column-reverse;
      }
    }

    .outro-content {
      width: 100%;
      max-width: 445px;
      margin-right: 125px;
      text-align: left;

      @media (max-width: 1024px) {
        max-width: 575px;
        text-align: center;
        margin-right: 0;
        margin-top: 63px;
      }

      @media (max-width: 767px) {
        max-width: 100%;
        margin-top: 40px;
      }

      h2 {
        margin-bottom: 32px;
        font-weight: bold;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
        text-transform: uppercase;
        color: $black;

        @media (max-width: 767px) {
          font-size: 28px;
          line-height: 38px;
          letter-spacing: 1px;
        }

        span {
          color: $color1;
        }
      }

      p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        opacity: .5;
      }
    }

    .img-wrapper {
      width: 540px;
      height: 588px;
      border-radius: 8px;
      background: url('../assets/img/shared/desktop/image-best-gear.jpg') center no-repeat;

      @media (max-width: 1024px) {
        width: 100%;
        height: 300px;
        background: url('../assets/img/shared/tablet/image-best-gear.jpg') center/cover no-repeat;
      }

      @media (max-width: 767px) {
        background: url('../assets/img/shared/mobile/image-best-gear.jpg') center/cover no-repeat;
      }
    }
  }
}
</style>
