<template>
  <div class="page-wrapper">

    <div class="confirmation-popup" :class="{'is-open': triggerPopup}">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#D87D4A"/>
        <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" stroke-width="4"/>
      </svg>

      <p class="confirmation-title">THANK YOU FOR YOUR ORDER</p>
      <p class="confirmation-text">You will receive an email confirmation shortly.</p>

      <div class="confirmation-summary">
        <div class="left-summary">
          <div class="products-wrapper">
            <div class="cart-product">
              <div class="img-wrapper" :style="`background-image:url('${$parent.cartArray[0].cartImg}');`"></div>
              <div class="cart-product-content">
                <p class="cart-product-title">{{ $parent.cartArray[0].shortname }}</p>
                <p class="cart-product-price">$ {{ $parent.cartArray[0].price }}</p>
              </div>

              <p class="count">x{{$parent.cartArray[0].qty}}</p>
            </div>

            <p v-if="$parent.cartArray.length > 1" class="other-items">
              and {{ $parent.cartArray.length - 1 }} other item(s)
            </p>
          </div>
        </div>

        <div class="right-summary">
          <p class="total-title">Grand total</p>
          <p class="total-price">$ {{$parent.grandTotal}}</p>
        </div>
      </div>

      <router-link to="/home" @click.native="closePopup" class="site-btn">Back to home</router-link>
    </div>

    <div class="container">
      <div class="return-container">
        <router-link to="/headphones" class="return-link">Go back</router-link>
      </div>
    </div>

    <form class="checkout-form parent-container" action="#" method="POST" @submit.prevent="validateForm">
      <div class="container">
        <section class="checkout-wrapper">
          <section class="checkout-form-wrapper">
            <h1>Checkout</h1>

            <div class="form-section">
              <h2>Billing Details</h2>

              <div class="input-wrapper">
                <div class="input-container half-width" :class="{'has-error': invalidForm.name}">
                  <div class="label-wrapper">
                    <label>Name</label>

                    <p v-if="invalidForm.name" class="error-message">
                      Required
                    </p>
                  </div>
                  <input v-model="name" placeholder="Your Full Name" />
                </div>
                <div class="input-container half-width" :class="{'has-error': invalidForm.email}">
                  <div class="label-wrapper">
                    <label>Email Address</label>

                    <p v-if="invalidForm.email === 2" class="error-message">
                      Required
                    </p>
                    <p v-else-if="invalidForm.email" class="error-message">
                      Wrong format
                    </p>
                  </div>
                  <input v-model="email" placeholder="email@domain.com" />
                </div>
              </div>

              <div class="input-wrapper">
                <div class="input-container half-width" :class="{'has-error': invalidForm.phone}">
                  <div class="label-wrapper">
                    <label>Phone Number</label>

                    <p v-if="invalidForm.phone" class="error-message">
                      Required
                    </p>
                  </div>
                  <input v-model="phone" placeholder="+1 234-567-8900" />
                </div>
              </div>
            </div>

            <div class="form-section">
              <h2>Shipping Info</h2>

              <div class="input-wrapper">
                <div class="input-container" :class="{'has-error': invalidForm.address}">
                  <div class="label-wrapper">
                    <label>Address</label>

                    <p v-if="invalidForm.address" class="error-message">
                      Required
                    </p>
                  </div>
                  <input v-model="address" placeholder="1234 Street Name" />
                </div>
              </div>

              <div class="input-wrapper">
                <div class="input-container half-width" :class="{'has-error': invalidForm.zipCode}">
                  <div class="label-wrapper">
                    <label>ZIP Code</label>

                    <p v-if="invalidForm.zipCode" class="error-message">
                      Required
                    </p>
                  </div>
                  <input v-model="zipCode" placeholder="10001" />
                </div>
                <div class="input-container half-width" :class="{'has-error': invalidForm.city}">
                  <div class="label-wrapper">
                    <label>City</label>

                    <p v-if="invalidForm.city" class="error-message">
                      Required
                    </p>
                  </div>
                  <input v-model="city" placeholder="Your city" />
                </div>
              </div>

              <div class="input-wrapper">
                <div class="input-container half-width" :class="{'has-error': invalidForm.country}">
                  <div class="label-wrapper">
                    <label>Country</label>

                    <p v-if="invalidForm.country" class="error-message">
                      Required
                    </p>
                  </div>
                  <input v-model="country" placeholder="Your Country" />
                </div>
              </div>
            </div>

            <div class="form-section">
              <h2>Payment Details</h2>

              <div class="input-wrapper radio-wrapper">
                <label>Payment Method</label>

                <div class="input-container">
                  <div class="radio-box" :class="{'is-active': eMoney}" @click="paymentSwitch('emoney')">
                    <span class="radio-button"></span>
                    e-Money
                  </div>
                  <div class="radio-box" :class="{'is-active': !eMoney}" @click="paymentSwitch('cash')">
                    <span class="radio-button"></span>
                    Cash on Delivery
                  </div>
                </div>
              </div>

              <div class="input-wrapper e-money" :class="{'is-active': eMoney}">
                <div class="input-container half-width" :class="{'has-error': invalidForm.eMoneyNumber}">
                  <div class="label-wrapper">
                    <label>e-Money Number</label>

                    <p v-if="invalidForm.eMoneyNumber" class="error-message">
                      Required
                    </p>
                  </div>
                  <input v-model="eMoneyNumber" placeholder="238521993" />
                </div>
                <div class="input-container half-width" :class="{'has-error': invalidForm.eMoneyPin}">
                  <div class="label-wrapper">
                    <label>e-Money Ping</label>

                    <p v-if="invalidForm.eMoneyPin" class="error-message">
                      Required
                    </p>
                  </div>
                  <input v-model="city" placeholder="6891" />
                </div>
              </div>

              <div class="input-wrapper cash-money" :class="{'is-active': !eMoney}">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z" fill="#D87D4A"/>
                </svg>

                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                </p>
              </div>
            </div>
          </section>

          <section class="summary-wrapper">
            <div class="products-wrapper">
              <div class="cart-product" v-for="(product, index) in this.$parent.cartArray" v-bind:key="index">
                <div class="img-wrapper" :style="`background-image:url('${product.cartImg}');`"></div>
                <div class="cart-product-content">
                  <p class="cart-product-title">{{ product.shortname }}</p>
                  <p class="cart-product-price">$ {{ product.price }}</p>
                </div>

                <p class="count">x{{product.qty}}</p>
              </div>
            </div>

            <div class="cart-summary">
              <h2>Summary</h2>

              <div class="summary-row">
                <p class="price-title">TOTAL</p>
                <p class="price">$ {{this.$parent.totalCartPrice}} </p>
              </div>
              <div class="summary-row">
                <p class="price-title">SHIPPING</p>
                <p class="price">$ 50 </p>
              </div>
              <div class="summary-row">
                <p class="price-title">VAT (INCLUDED) </p>
                <p class="price">$ {{this.$parent.taxTotal}} </p>
              </div>
              <div class="summary-row">
                <p class="price-title">GRAND TOTAL </p>
                <p class="price">$ {{this.$parent.grandTotal}} </p>
              </div>
            </div>

            <button type="submit" class="site-btn">Continue & Pay</button>
          </section>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      eMoney: true,
      eMoneyNumber: '',
      eMoneyPin: '',
      invalidForm: {
        name: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
        country: false,
        eMoneyNumber: false,
        eMoneyPin: false
      },
      hasErrors: false,
      triggerPopup: false
    }
  },
  methods: {
    validateForm() {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const emailState = emailRegex.test(String(this.email).toLowerCase())

      this.invalidForm.email = this.email.trim() === '' ? 2 : !emailState
      this.invalidForm.name = this.name.trim() === ''
      this.invalidForm.phone = this.phone.trim() === ''
      this.invalidForm.address = this.address.trim() === ''
      this.invalidForm.zipCode = this.zipCode.trim() === ''
      this.invalidForm.city = this.city.trim() === ''
      this.invalidForm.country = this.country.trim() === ''

      if (this.eMoney) {
        this.invalidForm.eMoneyNumber = this.eMoneyNumber.trim() === ''
        this.invalidForm.eMoneyPin = this.eMoneyPin.trim() === ''

        if (this.eMoneyNumber.trim() === '' || this.eMoneyPin.trim() === '') {
          this.hasErrors = true
        } else {
          this.hasErrors = false
        }
      }

      if (
        this.email.trim() === '' ||
        !emailState ||
        this.name.trim() === '' ||
        this.phone.trim() === '' ||
        this.address.trim() === '' ||
        this.zipCode.trim() === '' ||
        this.city.trim() === '' ||
        this.country.trim() === ''
      ) {
        this.hasErrors = true
      } else {
        this.hasErrors = false
      }

      if(!this.hasErrors) {
        this.triggerPopup = true
        this.$parent.popupIsOpen = true
      }

      console.log(emailState)
    },
    paymentSwitch(value) {
      if(value === 'emoney') {
        this.eMoney = true
      } else {
        this.eMoney = false
      }
    },
    closePopup() {
      this.triggerPopup = false
      this.$parent.popupIsOpen = false
      this.$parent.cartArray.length = 0
      this.totalCartPrice = 0
      this.taxTotal = 0
      this.grandTotal = 0
    }
  },
  name: "Checkout"
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  background: $color3;
}

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

.checkout-wrapper {
  display: flex;
  align-items: flex-start;
  margin-top: 38px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 24px;
  }

  .checkout-form-wrapper,
  .summary-wrapper {
    display: flex;
    flex-direction: column;
    background: $white;
    border-radius: 8px;
  }

  .checkout-form-wrapper {
    width: 65%;
    margin-right: 30px;
    padding: 54px 48px 48px;

    @media (max-width: 1024px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 32px;
      padding: 30px 27px;
    }

    h1 {
      margin-bottom: 41px;
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;
      letter-spacing: 1.14286px;
      text-transform: uppercase;
      color: $black;

      @media (max-width: 767px) {
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 1px;
      }
    }

    .form-section {
      &:not(:last-child) {
        margin-bottom: 53px;

        @media (max-width: 767px) {
          margin-bottom: 32px;
        }
      }

      h2 {
        margin-bottom: 16px;
        font-weight: bold;
        font-size: 13px;
        line-height: 25px;
        /* identical to box height, or 192% */

        letter-spacing: 0.928571px;
        text-transform: uppercase;
        color: $color1;
      }
    }

    .input-wrapper {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 24px;
      }

      @media (max-width: 767px) {
        flex-direction: column;
      }

      label,
      .error-message {
        margin-bottom: 9px;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.214286px;
        color: $black;
      }

      .label-wrapper {
        display: flex;
        align-items: center;

        .error-message {
          margin-left: auto;
          color: #CD2C2C;
        }
      }

      .input-container {
        display: flex;
        flex-direction: column;
        width: 100%;

        &.half-width {
          width: calc((100% - 16px) / 2);

          @media (max-width: 767px) {
            width: 100%;
          }

          &:first-child {
            margin-right: 16px;

            @media (max-width: 767px) {
              margin-right: 0;
              margin-bottom: 24px;
            }
          }
        }

        input {
          padding: 18px 24px 19px;
          width: 100%;
          background: $white;
          border: 1px solid #CFCFCF;
          box-sizing: border-box;
          border-radius: 8px;
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: -0.25px;
          color: $black;

          &::placeholder {
            opacity: 0.4;
          }
        }
      }

      &.e-money {
        display: none;

        &.is-active {
          display: flex;
        }
      }

      &.cash-money {
        display: none;
        margin-top: 30px;

        &.is-active {
          display: flex;
        }

        svg {
          flex-shrink: 0;
          margin-right: 32px;

          @media (max-width: 767px) {
            margin-bottom: 32px;
          }
        }

        p {
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          color: $black;
          opacity: .5;

          @media (max-width: 767px) {
            text-align: center;
          }
        }
      }

      .has-error {
        label {
          color: #CD2C2C;
        }

        input {
          border-color: #CD2C2C;
        }
      }
    }

    .radio-wrapper {
      width: 100%;
      align-items: flex-start;
      justify-content: space-between;

      @media (max-width: 767px) {
        flex-direction: column;
      }

      label {
        width: 50%;

        @media (max-width: 767px) {
          width: 100%;
        }
      }

      .input-container {
        width: 50%;
        margin-left: auto;

        @media (max-width: 767px) {
          width: 100%;
          margin-left: 0;
          margin-top: 16px;
        }

        .radio-box {
          display: flex;
          align-items: center;
          padding: 18px 16px;
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: -0.25px;
          border: 1px solid #CFCFCF;
          border-radius: 8px;
          transition: all .3s ease-in-out;
          cursor: pointer;

          &:first-child {
            margin-bottom: 16px;
          }

          &:hover,
          &.is-active {
            border: 1px solid $color1;
          }

          &.is-active {
            .radio-button:before {
              opacity: 1;
            }
          }

          .radio-button {
            margin-right: 16px;
            width: 20px;
            height: 20px;
            position: relative;
            border-radius: 50%;
            border: 1px solid #CFCFCF;

            &:before {
              content: '';
              position: absolute;
              top: 4px;
              left: 4px;
              width: 10px;
              height: 10px;
              background: $color1;
              border-radius: 50%;
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }

  .summary-wrapper {
    flex-grow: 1;
    padding: 32px 33px;

    @media (max-width: 767px) {
      width: 100%;
    }

    h2 {
      margin: 0 0 32px;
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: 1.28571px;
      text-transform: uppercase;
      color: $black;
    }

    .products-wrapper {
      .cart-product {
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        .img-wrapper {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          margin-right: 16px;
          border-radius: 8px;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          background-color: $color3;
        }

        .cart-product-title {
          font-weight: bold;
          font-size: 15px;
          line-height: 25px;
          color: $black;
        }

        .cart-product-price {
          font-weight: bold;
          font-size: 14px;
          line-height: 25px;
          color: $black;
          opacity: 0.5;
        }

        .count {
          flex-grow: 1;
          margin-left: auto;
          text-align: right;
          font-weight: bold;
          font-size: 15px;
          line-height: 25px;
          color: $black;
          opacity: 0.5;
        }
      }
    }

    .cart-summary {
      margin: 0 0 32px;

      .summary-row {
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 8px;
        }

        &:last-child {
          margin-top: 24px;

          .price {
            color: $color1;
          }
        }

        .price-title {
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          color: $black;
          opacity: 0.5;
        }

        .price {
          margin-left: auto;
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          text-align: right;
          text-transform: uppercase;
          color: $black;
        }
      }
    }

    .site-btn {
      width: 100%;
      border: 0;
      cursor: pointer;
    }
  }
}

.confirmation-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 540px;
  height: fit-content;
  background: $white;
  padding: 48px;
  border-radius: 8px;
  z-index: 10;
  display: none;

  &.is-open {
    display: block;
  }

  .confirmation-title {
    margin: 32px 0 24px;
    max-width: 285px;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;

    letter-spacing: 1.14286px;
    text-transform: uppercase;
    color: $black;

    @media (max-width: 767px) {
      max-width: 263px;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.857143px;
      margin: 23px 0 16px;
    }
  }

  .confirmation-text {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: $black;
    opacity: 0.5;
  }

  .confirmation-summary {
    display: flex;
    align-items: stretch;
    margin: 33px 0 46px;
    border-radius: 8px;
    width: 100%;

    @media (max-width: 767px) {
      flex-direction: column;
      margin: 24px 0;
    }

    .left-summary {
      flex-grow: 1;
      padding: 24px;
      background: $color3;
      border-radius: 8px 0 0 8px;

      @media (max-width: 767px) {
        border-radius: 8px 8px 0 0;
      }

      .cart-product {
        display: flex;
        align-items: flex-start;

        &:not(:last-child) {
          margin-bottom: 24px;
        }

        .img-wrapper {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          margin-right: 16px;
          border-radius: 8px;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          background-color: $color3;
        }

        .cart-product-title {
          font-weight: bold;
          font-size: 15px;
          line-height: 25px;
          color: $black;
        }

        .cart-product-price {
          font-weight: bold;
          font-size: 14px;
          line-height: 25px;
          color: $black;
          opacity: 0.5;
        }

        .count {
          flex-grow: 1;
          margin-left: auto;
          text-align: right;
          font-weight: bold;
          font-size: 15px;
          line-height: 25px;
          color: $black;
          opacity: 0.5;
        }
      }

      .other-items {
        text-align: center;
        padding-top: 12px;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.214286px;
        color: rgba($black , 0.5);
        border-top: 1px solid rgba($black, 0.08);
      }
    }

    .right-summary {
      padding: 41px 40px 42px 32px;
      border-radius: 0 8px 8px 0;
      background: $black;

      @media (max-width: 767px) {
        padding: 15px 24px;
        border-radius: 0 0 8px 8px;
      }

      .total-title {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: $white;
        opacity: 0.5;
        text-transform: uppercase;
      }

      .total-price {
        margin-top: 8px;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        text-transform: uppercase;
        color: $white;
      }
    }
  }

  .site-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
