<template>
  <div>
    <div :class="['menu-icon', { active: menu.isOpen }]" @click="handleBurger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav :class="['burger-menu', { active: menu.isOpen }]">
      <ul class="burger-menu__list">
        <li v-for="link in links" :key="link.id" @click="handleBurger(link)">
          <n-link :to="link.url" prefetch>
            {{ link.title }}
          </n-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      links: {
        0: {
          title: "Home",
          url: "/",
        },
        1: {
          title: "About",
          url: "/about",
        },
      },
    };
  },
  computed: mapState(["menu"]),
  methods: {
    handleBurger(link) {
      const container = document.querySelector("html");
      if (this.menu.isOpen) {
        this.openBurger(false);
        container.style.overflow = "visible";
      } else {
        this.openBurger(true);
        container.style.overflow = "hidden";
      }
    },
    ...mapActions("menu", ["openBurger"]),
  },
};
</script>

<style lang="scss">
$burger-nav-li-font-size: (
  null: calc(1.125rem + #{48 / 1920 * 100vw}),
  $medium-max: calc(1.125rem + #{44 / 1920 * 100vw}),
  $small-max: calc(1.125rem + #{48 / 1920 * 100vw}),
);

.menu-icon {
  margin: 20px auto;
  width: 20px;
  height: 14px;
  cursor: pointer;
  position: relative;
  z-index: 99999999;

  span {
    background-color: black;
    height: 2px;
    position: absolute;
    width: 100%;
    left: 0;
    transition: all 0.3s ease;
    border-radius: 10px;

    &:first-child {
      top: 0;
    }

    &:nth-child(2) {
      top: 6px;
    }

    &:last-child {
      top: 12px;
    }
  }

  &.active span {
    &:nth-child(2) {
      opacity: 0;
    }

    &:first-child,
    &:last-child {
      top: 6px;
      background-color: v(white-color);
    }

    &:first-child {
      transform: rotate(45deg);
    }

    &:last-child {
      transform: rotate(-45deg);
    }
  }
}

.burger-menu {
  position: absolute;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: v(black-color);
  padding: 2rem;
  transform: translate3d(0, -100%, 0);
  transition: all 0.2s ease-in-out;

  &.active {
    transform: translate3d(0, 0, 0);
  }

  &__list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    li {
      @include font-size($burger-nav-li-font-size);

      line-height: normal;
      font-weight: 400;
      color: v(white-color);
      text-transform: uppercase;

      &:not(:last-child) {
        margin-bottom: 0.3em;
      }

      a {
        padding: 0.3rem;
        background-color: v(black-color);
        color: v(white-color);
        transition: all 0.2s ease-in-out;

        &:hover,
        &:focus {
          background-color: v(white-color);
          color: v(black-color);
        }
      }
    }
  }
}
</style>
