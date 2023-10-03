<template>
  <h1 v-if="tag === 'h1'">{{ title }}</h1>
  <h2 v-else-if="tag === 'h2'">{{ title }}</h2>
  <h3 v-else-if="tag === 'h3'">{{ title }}</h3>
  <h4 v-else-if="tag === 'h4'">{{ title }}</h4>
  <h5 v-else-if="tag === 'h5'">{{ title }}</h5>
  <h6 v-else-if="tag === 'h6'">{{ title }}</h6>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: "h1",
    },
  },
};
</script>

<style lang="scss" scoped>
$page-title-h1-font-sizes: (
  null: calc(2.7rem + #{127 / 1920 * 100vw}),
  $small-max: 2.7rem,
);

$page-title-h2-font-sizes: (
  null: 1.875rem,
);

h1 {
  @include font-size($page-title-h1-font-sizes);

  font-family: $artus-alphabet-font-stack;
  font-weight: 400;
  line-height: 1; // 1.2 was too large
  margin-bottom: 0.575em;
  color: v(black-color);

  @include breakpoint($medium-min) {
    text-align: center;
  }

  @include breakpoint($small-max) {
    padding-right: 36px;
  }
}

h2 {
  @include font-size($page-title-h2-font-sizes);

  font-family: $interstate-condensed-font-stack;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-top: 1.4em;
}
</style>
