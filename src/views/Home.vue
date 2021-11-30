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

          <router-link class="site-btn" to="/xx99-mark-ii-headphones">See product</router-link>
        </div>
      </div>
    </section>
    <category-nav></category-nav>
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
    <best-gear></best-gear>
  </div>
</template>

<script>
import BestGear from '@/components/BestGear'
import CategoryNav from '@/components/CategoryNav'
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
  components: {BestGear, CategoryNav},
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;

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
}
</style>
