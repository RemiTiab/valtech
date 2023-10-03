<template>
  <nav class="ly-aside main-navigation">
    <transition-group name="flip-list" tag="ul" class="main-navigation__list">
      <li
        v-for="link in links"
        :key="link.id"
        :class="[
          'main-navigation__item',
          { 'main-navigation__item--active': currentLink === link.to },
        ]"
      >
        <n-link :to="link.to" prefetch>{{ link.title }}</n-link>
      </li>
    </transition-group>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
    currentLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$main-nav-list-item-size: (
  null: 1.5625rem /* 25px */,
  $medium-max: 1rem /* 16px */,
);

.flip-list-move {
  transition: transform 1s !important;
}

.main-navigation {
  position: fixed;
  right: 0;
  top: 0;

  @include breakpoint($medium-max) {
    overflow: hidden;
    height: 100%;
    box-shadow: inset 0px 8px 10px rgba(0, 0, 0, 0.3);
  }

  &__list {
    list-style: none;
    padding: 0;

    @include breakpoint($large-min) {
      display: flex;
      height: 100vh;
    }
  }

  &__item {
    @include font-size($main-nav-list-item-size);

    cursor: pointer;
    position: relative;
    text-align: right;
    font-family: $interstate-condensed-font-stack;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    width: v(main-nav-items-width);

    @include breakpoint($large-min) {
      background: v(background-site-color);
    }

    @include breakpoint($medium-max) {
      line-height: normal;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:not(.main-navigation__item--active) {
      transition: color 0.35s ease;

      @include breakpoint($large-min) {
        @include on-event {
          color: v(main-color);

          a {
            transform: translateX(-10px) rotate(180deg);
          }
        }
        //background: v(background-site-color);
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 10px 0px 10px 0px rgba(0, 0, 0, 0.3);
      transition: opacity 1s ease, background 1s ease;

      @include breakpoint($medium-max) {
        box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3);
      }
    }

    &--active {
      z-index: 10;

      //@include breakpoint($medium-max) {
      background: v(background-site-color);
      //}

      @include breakpoint($large-min) {
        &::before {
          opacity: 0;
        }
      }
    }

    /* @include breakpoint($small-max) {
      line-height: 0;
      width: 30px;
    } */

    a {
      transition: transform 0.35s ease;
      color: inherit;
      padding: 2.5rem 1.4375rem; // 40px 23px;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      text-orientation: sideways;
      text-align: right;

      @include breakpoint($large-min) {
        height: 100%;
      }

      @include breakpoint($medium-max) {
        padding: 1.25em 0;
      }

      /* @include breakpoint($small-max) {
        height: auto;
        padding: 5px 15px;
      } */
    }

    /* &:nth-child(1) {
      z-index: 100;
    }

    &:nth-child(2) {
      z-index: 10;
    } */
  }

  .nuxt-link-active {
    color: v(main-color);
  }
}
</style>
