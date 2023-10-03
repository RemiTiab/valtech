<template>
  <LayoutHeader />

  <div>
    <Nuxt />
  </div>

  <LayoutFooter />

  <div class="resizer">
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["routing", "windowParams"]),
  mounted() {
    if (this.$browserDetect.isIE) {
      this.updateData(true);
    } else {
      this.updateData(false);
    }

    const params = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.$store.dispatch("windowParams/updateParams", params);
  },
  methods: {
    handleResize({ width, height }) {
      this.$store.dispatch("windowParams/updateParams", { width, height });
    },
  },
};
</script>

<style lang="scss">
/* Import Local Fonts */
@font-face {
  font-family: "ArtusAlphabet";
  src: url("../static/fonts/Roboto/Roboto-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "ArtusAlphabet";
  src: url("../static/fonts/Roboto/Roboto-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "ArtusAlphabet";
  src: url("../static/fonts/Roboto/Roboto-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.resizer {
  z-index: -10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
