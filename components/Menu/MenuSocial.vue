<template>
  <ul :class="customclass">
    <li v-for="link in links" :key="link.id">
      <a :href="link.url" :title="link.title" :target="link.target">
        <BaseIcon
          :name="link.name"
          :rounded="link.rounded"
          :width="link.width"
          :height="link.height"
          :dark="link.dark"
          :hoverevent="hoverevent"
        />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      required: true,
    },
    customclass: {
      type: String,
      required: false,
      default: "",
    },
    hoverevent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.social-links {
  &--header {
    text-align: right;
    margin-top: 1.75em;
    width: 100%;

    @include breakpoint($large-min) {
      margin-right: 2em;
    }

    @include breakpoint($medium-max) {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 20px;
      top: 70px;
      z-index: 10;
      width: auto;
    }

    li {
      &:not(:last-child) {
        @include breakpoint($medium-max) {
          margin-right: 0;
          margin-bottom: 0.75em;
        }
      }
    }
  }

  &--footer {
    margin: 1.0625em 0;

    @include breakpoint($medium-min) {
      li {
        width: 2.5vw;
        height: 2.5vw;
      }
    }

    @include breakpoint($small-max) {
      display: flex;
    }
  }
}

li {
  display: inline-block;

  &:not(:last-child) {
    margin-right: 0.75em;

    @include breakpoint($small-max) {
      margin-right: 0.4375em;
    }
  }
}
</style>
