<template>
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
</template>

<script>
export default {
  name: "BestGear"
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
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
</style>
