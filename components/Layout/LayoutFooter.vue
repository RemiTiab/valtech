<template>
  <footer
    :class="[
      'ly-footer',
      {
        'ly-footer--hidden': experience.moduleVisible,
      },
    ]"
  >
    <div class="ly-footer__content">
      <a
        href="https://www.credit-cooperatif.coop/votre-banque/une-autre-banque-est-possible/"
        target="_blank"
        class="logo"
      >
        <LogoFooter />
        <LogoFooterText />
      </a>

      <MenuFooter />
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["experience"]),
};
</script>

<style lang="scss" scoped>
.ly-footer {
  position: relative;
  z-index: 1000;
  color: v(white-color);
  background: v(black-color);
  padding: 2.875em 40px 3.125em 40px;
  width: v(main-content-width);

  &--hidden {
    z-index: -1;
  }

  @include breakpoint($small-max) {
    padding-top: 1.875em;
  }

  &__content {
    display: flex;
    max-width: 1250px;
    margin: 0 auto;

    @include breakpoint($small-max) {
      flex-direction: column;
    }
  }
}

.logo {
  width: 13vw;
  margin-right: 2.1875em;
  align-self: flex-start;

  @include breakpoint($medium-max) {
    width: auto;
    max-width: 215px;
  }

  @include breakpoint($small-max) {
    margin-right: 0;
  }
}
</style>
