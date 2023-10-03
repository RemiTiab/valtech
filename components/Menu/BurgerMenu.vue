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
            <div class="subtitle">{{ link.subtitle }}</div>
          </n-link>
        </li>
      </ul>
    </div>
    <div :class="['bandeau-scroll', { active: menu.isOpen }]"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      links: {
        0: {
          title: "Comprendre",
          subtitle: "et décider où va votre argent",
          url: "/comprendre",
        },
        1: {
          title: "Visualiser",
          subtitle: "le rapport 2022 de la finance engagée",
          url: "/visualiser/partage/2022",
        },
        2: {
          title: "Mesurer",
          subtitle: "le pouvoir d'agir avec votre argent",
          url: "/mesurer",
        },
        3: {
          title: "Expérimenter",
          subtitle: "le circuit de l’argent au Crédit Coopératif",
          url: "/#experimenter",
        },
        4: {
          title: "Rencontrer",
          subtitle: "ceux que votre argent soutient",
          url: "/rencontrer",
        },
      },
    };
  },
  computed: mapState(["menu", "experience"]),
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

      if (link.url === "/#experimenter") {
        setTimeout(() => {
          this.setVisibility(true);
        }, 1000);
      }
    },
    ...mapActions("menu", ["openBurger"]),
    ...mapActions("experience", ["setVisibility"]),
  },
};
</script>

<style lang="scss">
$burger-menu-title-font-size: (
  null: calc(1.5625rem + #{51 / 1920 * 100vw}) /* 76px */,
  $medium-max: calc(1.5625rem + #{40 / 1920 * 100vw}) /* 65px */,
  $small-max: 1.5625rem /* 25px */,
);

$burger-menu-subtitle-font-size: (
  null: calc(0.75rem + #{9 / 1920 * 100vw}) /* 21px */,
  $medium-max: calc(0.75rem + #{6 / 1920 * 100vw}) /* 18px */,
  $small-max: 0.75rem /* 12px */,
);

.burger-button {
  position: relative;
  height: 100% !important;

  &_open,
  &_close {
    display: block;
    width: 57px !important;
    height: 57px !important;
    position: absolute;
    left: 0 !important;
    top: 50% !important;
    transform: translate3d(0, -50%, 0) !important;
    transition: all 0.2s ease-in;
    opacity: 0;
    z-index: 1550;

    @include breakpoint($small-max) {
      width: 33px !important;
      height: 33px !important;
    }
  }

  &_open {
    background: url("/images/hamburger/hamburger-open.svg") no-repeat center
      center / contain;
    transition: all 0.2s ease-in;

    &.active {
      opacity: 1;
    }

    &:hover {
      background: url("/images/hamburger/hamburger-open-hover.svg") no-repeat
        center center / contain;
    }
  }

  &_close {
    background: url("/images/hamburger/hamburger-cross.svg") no-repeat center
      center / contain;
    transition: all 0.2s ease-in;

    &.active {
      opacity: 1;
      z-index: 1551;
    }

    &:hover {
      background: url("/images/hamburger/hamburger-cross-hover.svg") no-repeat
        center center / contain;
    }
  }
}

.bandeau-scroll {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 960px;
  height: 175px;
  background-color: black;
  z-index: 1500;
  transform: translate3d(-100%, 0, 0);
  transition: all 0.2s ease-in;

  @include breakpoint($xx-large-max) {
    width: 820px;
  }

  @include breakpoint($xs-large-max) {
    width: 740px;
  }

  @include breakpoint($medium-max) {
    width: 500px;
    height: 100px;
  }

  @include breakpoint($small-max) {
    width: 260px;
    height: 90px;
  }

  &.active {
    transform: translate3d(0, 0, 0);
  }
}

.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 960px;
  height: 100vh;
  background-color: v(black-color);
  z-index: 1499;
  overflow: scroll;
  transform: translate3d(-100%, 0, 0);
  color: v(white-color);
  // padding: 8.75em 4.688em 0 9.8em;
  padding: 8.75em 4.688em 0 8.5em;
  transition: all 0.2s ease-in;

  @include breakpoint($xx-large-max) {
    width: 820px;
  }

  @include breakpoint($xs-large-max) {
    width: 740px;
  }

  @include breakpoint($medium-max) {
    width: 500px;
    padding: 8.75em 4.688em 0 6.563em;
  }

  @include breakpoint($small-max) {
    width: 260px;
    padding: 5.25em 1.625em 0 1.625em;
  }

  &.active {
    transform: translate3d(0, 0, 0);
  }

  &_list {
    white-space: nowrap;
    margin-top: 4em;

    @include breakpoint($medium-max) {
      margin-top: 1em;
    }

    li {
      max-width: 488px;
      padding-bottom: 25px;
      margin-bottom: 15px;
      border-bottom: solid 1px #646363;
      color: #646363;
      transition: all 0.2s ease-in;

      &:hover {
        color: v(white-color);
        border-bottom: solid 1px v(white-color);
      }

      @include breakpoint($small-max) {
        padding-bottom: 22px;
        margin-bottom: 12px;
      }
    }

    .title {
      @include font-size($burger-menu-title-font-size);

      font-family: $artus-alphabet-font-stack;
      line-height: 0.8;
    }

    .subtitle {
      @include font-size($burger-menu-subtitle-font-size);

      line-height: normal;
    }
  }
}
</style>
