<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="return-container">
        <router-link to="/headphones" class="return-link">Go back</router-link>
      </div>
    </div>

    <section class="product-wrapper parent-container">
      <div class="container">
        <div class="product-container">
          <div class="product-img"></div>
          <div class="product-content">
            <h1 class="product-title">{{ currentProduct.name }}</h1>
            <p class="product-details">
              Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
            </p>

            <p class="product-price"> 3,500$</p>

            <div class="input-container">
              <div class="number-field">
                <span class="subtract-item is-disabled">-</span>
                <span class="count">1</span>
                <span class="add-item">+</span>
              </div>
              <button type="submit" class="site-btn" @submit.prevent>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section parent-container">
      <div class="container">
        <div class="features-content-wrapper">
          <div class="features-content">
            <h2>FEATURES</h2>
            <p>
              Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.
            </p>

            <p>
              The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
            </p>
          </div>

          <div class="box-content">
            <h2>In the box</h2>
            <div class="box-list">
              <p>2x <span>Speaker Unit</span></p>
              <p>2x <span>Speaker Cloth Panel</span> </p>
              <p>1x <span>User Manual</span> </p>
              <p>1x <span>3.5mm 7.5m Audio Cable</span> </p>
              <p>1x <span>7.5m Optical Cable</span> </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery-section parent-container">
      <div class="container">
        <div class="gallery-wrapper">
          <div class="left-gallery">
            <div class="gallery-img1 gallery-block"></div>
            <div class="gallery-img2 gallery-block"></div>
          </div>

          <div class="gallery-img3 gallery-block big-block"></div>
        </div>
      </div>
    </section>

    <section class="related-section parent-container">
      <div class="container">
        <h2>You may also like</h2>

        <div class="related-wrapper">
          <div class="related-item">
            <div class="img-wrapper related-1"></div>
            <p class="related-title">ZX9 Speaker</p>
            <router-link to="/zx9-speaker" class="site-btn">See product</router-link>
          </div>
          <div class="related-item">
            <div class="img-wrapper related-2"></div>
            <p class="related-title">XX99 Mark I</p>
            <router-link to="/xx99-mark-i-headphones" class="site-btn">See product</router-link>
          </div>
          <div class="related-item">
            <div class="img-wrapper related-3"></div>
            <p class="related-title">XX59</p>
            <router-link to="/xx59-headphones" class="site-btn">See product</router-link>
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
  data() {
    return {
      currentProduct: {
        name: 'ZX7 Speaker',
        shortname: 'ZX7',
        price: 3500,
        cartImg: '../img/cart/image-zx7-speaker.jpg'
      }
    }
  },
  name: "ZX7 Speaker",
  components: {BestGear, CategoryNav},
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.return-container {
  padding: 79px 0 0;

  @media (max-width: 1024px) {
    padding: 123px 40px 0;
  }

  @media (max-width: 767px) {
    padding: 106px 24px 0;
  }
}

.return-link {
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: $black;
  opacity: 0.5;
  transition: all .3s ease-in-out;

  &:hover {
    opacity: 1;
    color: $color1;
  }
}

.product-wrapper {
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

    @media (max-width: 767px) {
      flex-direction: column;
    }

    .product-img {
      width: 540px;
      height: 560px;
      margin-right: 100px;
      border-radius: 8px;

      @media (max-width: 1024px) {
        width: 281px;
        height: 480px;
        margin-right: 69px;
        margin-bottom: 52px;
        padding: 41px 54px 68px;
      }

      @media (max-width: 767px) {
        width: 100%;
        height: 327px;
        margin-right: 0;
        margin-bottom: 32px;
      }

      &.product-img {
        background: url('../assets/img/product-zx7-speaker/desktop/image-product.jpg') center/cover no-repeat, $color3;

        @media (max-width: 1024px) {
          background: url('../assets/img/product-zx7-speaker/tablet/image-product.jpg') center/contain no-repeat, $color3;
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
        margin-bottom: 47px;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: $black;
        opacity: 0.5;

        @media (max-width: 767px) {
          margin-bottom: 24px;
        }
      }

      .product-price {
        margin-bottom: 47px;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1.28571px;
        text-transform: uppercase;

        @media (max-width: 767px) {
          margin-bottom: 31px;
        }
      }

      .input-container {
        display: flex;
        align-items: center;
        width: 100%;

        .number-field {
          max-width: 120px;
          margin-right: 16px;
        }

        .site-btn {
          border: none;
          cursor: pointer;
        }
      }
    }
  }
}

.features-section {
  margin-top: 160px;

  @media (max-width: 1024px) {
    margin-top: 120px;
  }

  @media (max-width: 1024px) {
    margin-top: 88px;
  }

  .features-content-wrapper {
    display: flex;
    align-items: flex-start;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    h2 {
      margin-bottom: 32px;
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;
      letter-spacing: 1.14286px;
      text-transform: uppercase;
      color: $black;

      @media (max-width: 767px) {
        margin-bottom: 24px;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.857143px;
      }
    }

    .features-content {
      max-width: 635px;
      margin-right: 125px;

      @media (max-width: 1024px) {
        margin-right: 0;
        margin-bottom: 120px;
        max-width: 100%;
      }

      @media (max-width: 767px) {
        margin-right: 0;
        margin-bottom: 88px;
      }

      p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: $black;
        opacity: 0.5;

        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }

    .box-content {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;

      @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: row;
        width: 100%;
      }

      .box-list {
        @media (min-width: 768px) and (max-width: 1024px) {
          margin-left: 25%;
        }
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: $color1;

        &:not(:last-child) {
          margin-bottom: 8px;
        }

        span {
          margin-left: 24px;
          color: $black;
          opacity: 0.5;
        }
      }
    }
  }
}

.gallery-section {
  margin-top: 160px;

  @media (max-width: 1024px) {
    margin-top: 120px;
  }

  @media (max-width: 1024px) {
    margin-top: 88px;
  }

  .gallery-wrapper {
    display: flex;
    align-items: stretch;
    width: 100%;

    @media (max-width: 1024px) {
      justify-content: center;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    .gallery-block {
      width: 445px;
      height: 280px;
      border-radius: 8px;

      @media (max-width: 1024px) {
        width: 100%;
        height: 174px;
      }

      @media (max-width: 767px) {
        width: 100%;
        height: 174px;
      }

      &.big-block {
        width: 635px;
        height: 592px;
        background: url('../assets/img/product-zx7-speaker/desktop/image-gallery-3.jpg') center/cover no-repeat;

        @media (max-width: 1024px) {
          width: 60%;
          height: 368px;
          background: url('../assets/img/product-zx7-speaker/tablet/image-gallery-3.jpg') center/cover no-repeat;
        }

        @media (max-width: 767px) {
          width: 100%;
          height: 368px;
          background: url('../assets/img/product-zx7-speaker/mobile/image-gallery-3.jpg') center/cover no-repeat;
        }
      }
    }

    .left-gallery {
      display: flex;
      flex-direction: column;
      margin-right: 30px;

      @media (max-width: 1024px) {
        width: 40%;
        margin-right: 18px;
      }

      @media (max-width: 767px) {
        width: 100%;
        margin-right: 0;
      }

      .gallery-img1 {
        margin-bottom: 32px;
        background: url('../assets/img/product-zx7-speaker/desktop/image-gallery-1.jpg') center/cover no-repeat;

        @media (max-width: 1024px) {
          margin-bottom: 20px;
          background: url('../assets/img/product-zx7-speaker/tablet/image-gallery-1.jpg') center/cover no-repeat;
        }

        @media (max-width: 767px) {
          background: url('../assets/img/product-zx7-speaker/mobile/image-gallery-1.jpg') center/cover no-repeat;
        }
      }

      .gallery-img2 {
        background: url('../assets/img/product-zx7-speaker/desktop/image-gallery-2.jpg') center/cover no-repeat;

        @media (max-width: 1024px) {
          background: url('../assets/img/product-zx7-speaker/tablet/image-gallery-2.jpg') center/cover no-repeat;
        }

        @media (max-width: 767px) {
          margin-bottom: 20px;
          background: url('../assets/img/product-zx7-speaker/mobile/image-gallery-2.jpg') center/cover no-repeat;
        }
      }
    }
  }
}

.related-section {
  margin-top: 160px;

  @media (max-width: 1024px) {
    margin-top: 120px;
  }

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 36px;
      letter-spacing: 0.857143px;
    }
  }

  .related-wrapper {
    display: flex;
    align-items: stretch;
    margin-top: 64px;

    @media (max-width: 767px) {
      margin-top: 40px;
      flex-direction: column;
    }

    .related-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc((100% - 60px) / 3);

      @media (max-width: 767px) {
        width: 100%;
      }

      &:not(:last-child) {
        margin-right: 30px;

        @media (max-width: 767px) {
          margin-right: 0;
          margin-bottom: 56px;
        }
      }

      .img-wrapper {
        margin-bottom: 40px;
        width: 100%;
        height: 318px;
        border-radius: 8px;

        @media (max-width: 767px) {
          height: 120px;
        }

        &.related-1 {
          background: url('../assets/img/product-zx9-speaker/desktop/image-product.jpg') center/cover no-repeat, $color3;

          @media (max-width: 1024px) {
            background: url('../assets/img/product-zx9-speaker/tablet/image-product.jpg') center/cover no-repeat, $color3;
          }

          @media (max-width: 767px) {
            background: url('../assets/img/product-zx9-speaker/mobile/image-product.jpg') center/contain no-repeat, $color3;
          }
        }

        &.related-2 {
          background: url('../assets/img/product-xx99-mark-one-headphones/desktop/image-product.jpg') center/cover no-repeat, $color3;

          @media (max-width: 1024px) {
            background: url('../assets/img/product-xx99-mark-one-headphones/tablet/image-product.jpg') center/cover no-repeat, $color3;
          }

          @media (max-width: 767px) {
            background: url('../assets/img/product-xx99-mark-one-headphones/mobile/image-product.jpg') center/contain no-repeat, $color3;
          }
        }

        &.related-3 {
          background: url('../assets/img/product-xx59-headphones/desktop/image-product.jpg') center/cover no-repeat, $color3;

          @media (max-width: 1024px) {
            background: url('../assets/img/product-xx59-headphones/tablet/image-product.jpg') center/cover no-repeat, $color3;
          }

          @media (max-width: 767px) {
            background: url('../assets/img/product-xx59-headphones/mobile/image-product.jpg') center/contain no-repeat, $color3;
          }
        }
      }

      .related-title {
        margin-bottom: 32px;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        letter-spacing: 1.71429px;
        text-transform: uppercase;
        color: $black;
      }
    }
  }
}
</style>
