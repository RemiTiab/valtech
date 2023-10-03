<template>
  <header class="ly-header main-header">
    <BurgerMenu />
    <LogoMain />
    <LogoCcoop />
    <!-- <MenuSocial :links="links" customclass="social-links--header" /> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: {
        0: {
          title: "Nous suivre sur Facebook",
          url: "https://www.facebook.com/CreditCooperatif/",
          target: "_blank",
          rounded: false,
          name: "facebook",
        },
        1: {
          title: "Nous suivre sur Linkedin",
          url: "https://fr.linkedin.com/company/credit-cooperatif",
          target: "_blank",
          rounded: false,
          name: "linkedin",
        },
        2: {
          title: "Nous suivre sur Twitter",
          url: "https://twitter.com/credit_coop_",
          target: "_blank",
          rounded: false,
          name: "twitter",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.ly-header {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  // justify-content: space-between;
  // padding: 1.75em 0.9375em 0 4.75em;
  padding: 1.75em 0.9375em 0 2.1875em;
  margin-bottom: calc(1.75em + 53px);

  @include breakpoint($medium-max) {
    padding: 1.0625em 1.25em 1.1875em;
    margin-bottom: 0;
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
    margin-bottom: 30px;
  }
}
</style>
