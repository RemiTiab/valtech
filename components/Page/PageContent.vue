<template>
  <div class="page-wrapper">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page-wrapper {
  margin: 0 auto 3em;

  @include breakpoint($large-min) {
    max-width: 45vw;
  }

  p,
  ul,
  ol {
    margin: 0 0 1.3125em;
    line-height: 1.32;
    letter-spacing: -0.01em;
  }

  ul,
  ol {
    list-style: initial;
    padding-left: 1em;
  }

  a {
    color: v(main-color);
  }
}
</style>
