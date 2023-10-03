<template>
  <div>
    <div class="burger-button" @click="handleBurger">
      <div :class="['burger-button_close', { active: menu.isOpen }]"></div>
      <div :class="['burger-button_open', { active: !menu.isOpen }]"></div>
    </div>
    <div :class="['burger-menu', { active: menu.isOpen }]">
      <ul class="burger-menu_list">
        <li v-for="link in links" :key="link.id" @click="handleBurger(link)">
          <n-link :to="link.url" prefetch>
            <div class="title">{{ link.title }}</div>
          </n-link>
        </li>
      </ul>
    </div>
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
$burger-menu-title-font-size: (
  null: calc(1.5625rem + #{51 / 1920 * 100vw}) /* 76px */,
  $medium-max: calc(1.5625rem + #{40 / 1920 * 100vw}) /* 65px */,
  $small-max: 1.5625rem /* 25px */,
);
</style>
