<template>
  <div class="page-wrapper">
    <section class="intro-section">
      <div class="container">
        <h1>Headphones</h1>
      </div>
    </section>

    <section class="product-section parent-container">
      <div class="container">
        <div class="product-container">
          <div class="product-img product-1"></div>
          <div class="product-content">
            <p class="new-text">New product</p>
            <h2 class="product-title">XX99 Mark II Headphones</h2>
            <p class="product-details">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone
              experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>

            <router-link to="/xx99-mark-ii-headphones" class="site-btn">See Product</router-link>
          </div>
        </div>
        <div class="product-container">
          <div class="product-img product-2"></div>
          <div class="product-content">
            <h2 class="product-title">XX99 Mark I Headphones</h2>
            <p class="product-details">
              As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio
              reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.            </p>

            <router-link to="/xx99-mark-i-headphones" class="site-btn">See Product</router-link>
          </div>
        </div>
        <div class="product-container">
          <div class="product-img product-3"></div>
          <div class="product-content">
            <h2 class="product-title">XX59 Headphones</h2>
            <p class="product-details">
              Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
              The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.            </p>

            <router-link to="/xx59-headphones" class="site-btn">See Product</router-link>
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
  name: "Headphones",
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
        background: url('../assets/img/product-xx99-mark-two-headphones/desktop/image-product.jpg') center/cover no-repeat, $color3;

        @media (max-width: 1024px) {
          background: url('../assets/img/product-xx99-mark-two-headphones/tablet/image-product.jpg') center/50% no-repeat, $color3;
        }
        @media (max-width: 767px) {
          background: url('../assets/img/product-xx99-mark-two-headphones/mobile/image-product.jpg') center/contain no-repeat, $color3;
        }
      }

      &.product-2 {
        background: url('../assets/img/product-xx99-mark-one-headphones/desktop/image-product.jpg') center/cover no-repeat, $color3;

        @media (max-width: 1024px) {
          background: url('../assets/img/product-xx99-mark-one-headphones/tablet/image-product.jpg') center/50% no-repeat, $color3;
        }
        @media (max-width: 767px) {
          background: url('../assets/img/product-xx99-mark-one-headphones/mobile/image-product.jpg') center/contain no-repeat, $color3;
        }
      }

      &.product-3 {
        background: url('../assets/img/product-xx59-headphones/desktop/image-product.jpg') center/cover no-repeat, $color3;

        @media (max-width: 1024px) {
          background: url('../assets/img/product-xx59-headphones/tablet/image-product.jpg') center/50% no-repeat, $color3;
        }
        @media (max-width: 767px) {
          background: url('../assets/img/product-xx59-headphones/mobile/image-product.jpg') center/contain no-repeat, $color3;
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
