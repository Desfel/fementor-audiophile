<template>
  <div class="page-wrapper">
    <section class="intro-section">
      <div class="container">
        <h1>Speakers</h1>
      </div>
    </section>

    <section class="product-section parent-container">
      <div class="container">
        <div class="product-container">
          <div class="product-img product-1"></div>
          <div class="product-content">
            <p class="new-text">New product</p>
            <h2 class="product-title">ZX9 Speakers</h2>
            <p class="product-details">
              Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that
              offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
            </p>

            <router-link to="/zx9-speaker" class="site-btn">See Product</router-link>
          </div>
        </div>
        <div class="product-container">
          <div class="product-img product-2"></div>
          <div class="product-content">
            <h2 class="product-title">ZX7 Speakers</h2>
            <p class="product-details">
              Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end
              audiophile components that represents the top of the line powered speakers for home or studio use.            </p>

            <router-link to="/zx7-speakers" class="site-btn">See Product</router-link>
          </div>
        </div>
      </div>
    </section>

    <category-nav></category-nav>
    <best-gear></best-gear>
  </div>
</template>

<script>
import BestGear from '@/components/BestGear'
import CategoryNav from '@/components/CategoryNav'

export default {
  name: "Speakers",
  components: {BestGear, CategoryNav},
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.intro-section {
  background: $black;
  padding: 195px 80px 97px;
  text-align: center;

  @media (max-width: 767px) {
    padding: 122px 80px 32px;
  }

  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    letter-spacing: 1.42857px;
    text-transform: uppercase;
    color: $white;

    @media (max-width: 767px) {
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 2px;
    }
  }
}

.product-section {
  display: flex;
  flex-direction: column;
  margin-top: 160px;

  @media (max-width: 1024px) {
    margin-top: 120px;
  }

  @media (max-width: 1024px) {
    margin-top: 64px;
  }

  .product-container {
    display: flex;
    align-items: stretch;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &:not(:last-child) {
      margin-bottom: 160px;

      @media (max-width: 1024px) {
        margin-bottom: 120px;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      @media (max-width: 1024px) {
        flex-direction: column;
      }

      .product-img {
        margin-right: 0;
        margin-left: 125px;

        @media (max-width: 1024px) {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }

    .product-img {
      width: 540px;
      height: 560px;
      margin-right: 100px;
      border-radius: 8px;

      @media (max-width: 1024px) {
        width: 100%;
        height: 352px;
        margin-right: 0;
        margin-bottom: 52px;
        padding: 41px 54px 68px;
      }

      @media (max-width: 767px) {
        margin-bottom: 32px;
      }

      &.product-1 {
        background: url('../assets/img/product-zx9-speaker/desktop/image-product.jpg') center/cover no-repeat, $color3;

        @media (max-width: 1024px) {
          background: url('../assets/img/product-zx9-speaker/tablet/image-product.jpg') center/50% no-repeat, $color3;
        }
        @media (max-width: 767px) {
          background: url('../assets/img/product-zx9-speaker/mobile/image-product.jpg') center/contain no-repeat, $color3;
        }
      }

      &.product-2 {
        background: url('../assets/img/product-zx7-speaker/desktop/image-product.jpg') center/cover no-repeat, $color3;

        @media (max-width: 1024px) {
          background: url('../assets/img/product-zx7-speaker/tablet/image-product.jpg') center/50% no-repeat, $color3;
        }
        @media (max-width: 767px) {
          background: url('../assets/img/product-zx7-speaker/mobile/image-product.jpg') center/contain no-repeat, $color3;
        }
      }
    }

    .product-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      max-width: 445px;

      @media (max-width: 1024px) {
        text-align: center;
        align-items: center;
      }

      .new-text {
        margin-bottom: 16px;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: $color1;

        @media (max-width: 767px) {
          margin-bottom: 24px;
        }
      }

      .product-title {
        margin-bottom: 32px;
        font-weight: bold;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
        text-transform: uppercase;
        color: $black;

        @media (max-width: 767px) {
          margin-bottom: 24px;
          font-size: 28px;
          line-height: 38px;
          letter-spacing: 1px;
        }
      }

      .product-details {
        margin-bottom: 40px;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: $black;
        opacity: 0.5;

        @media (max-width: 1024px) {
          margin-bottom: 24px;
        }
      }
    }
  }
}
</style>
