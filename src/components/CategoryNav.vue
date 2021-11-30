<template>
  <section class="category-nav-section parent-container">
    <div class="container">
      <nav class="category-nav-links">
        <router-link class="category-nav-link-wrapper" to="/headphones">
          <div class="category-nav-link-content">
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
        <router-link class="category-nav-link-wrapper" to="/speakers">
          <div class="category-nav-link-content">
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
        <router-link class="category-nav-link-wrapper" to="/earphones">
          <div class="category-nav-link-content">
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
</template>

<script>
export default {
  name: "CategoryNav"
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.category-nav-section {
  margin-top: 170px;

  @media (max-width: 1024px) {
    margin-top: 130px;
  }

  .category-nav-links {
    display: flex;
    align-items: stretch;
    width: 100%;

    @media(max-width: 767px) {
      flex-direction: column;
    }
  }

  .category-nav-link-wrapper {
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

  .category-nav-link-content {
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
</style>
