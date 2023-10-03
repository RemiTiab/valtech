<template>
  <nav :class="customclass">
    <h2 class="title">
      <BackgroundSvg fill="#C51C1C" :rotation="1.18" />Voir l’impact par produit
    </h2>

    <div ref="list" class="list">
      <overlay-scrollbars :options="osOpts">
        <!-- <ul ref="list" class="list" @mousedown="mouseDownHandler"> -->
        <div
          v-for="product in dataviz.productsListFilteredByDomain"
          :key="product.id"
          :class="[
            'item',
            {
              'item--active': currentLink === generateRoute(product.pathName),
              'item--disabled': isDisabled(product.years, product.disabled),
            },
          ]"
        >
          <n-link :to="generateRoute(product.pathName)" prefetch>{{
            product.html
          }}</n-link>
        </div>
      </overlay-scrollbars>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    prefixlink: {
      type: String,
      required: false,
      default: "",
    },
    customclass: {
      type: String,
      required: false,
      default: "",
    },
    currentLink: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      osOpts: {
        className: "os-theme-light",
        sizeAutoCapable: true,
        autoUpdate: true,
        scrollbars: {
          clickScrolling: true,
          autoHide: "l",
          autoHideDelay: 0,
        },
        overflowBehavior: {
          y: "h",
        },
      },
      pos: { top: 0, left: 0, x: 0, y: 0 },
    };
  },
  computed: mapState(["dataviz"]),
  mounted() {},
  methods: {
    mouseDownHandler(e) {
      this.pos = {
        // The current scroll
        left: this.$refs.list.scrollLeft,
        top: this.$refs.list.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener("mousemove", this.mouseMoveHandler);
      document.addEventListener("mouseup", this.mouseUpHandler);
    },
    mouseMoveHandler(e) {
      // How far the mouse has been moved
      const dx = e.clientX - this.pos.x;
      const dy = e.clientY - this.pos.y;

      // Scroll the element
      this.$refs.list.scrollTop = this.pos.top - dy;
      this.$refs.list.scrollLeft = this.pos.left - dx;
    },
    mouseUpHandler() {
      this.$refs.list.style.cursor = "grab";
      this.$refs.list.style.removeProperty("user-select");

      document.removeEventListener("mousemove", this.mouseMoveHandler);
      document.removeEventListener("mouseup", this.mouseUpHandler);
    },
    generateRoute(pathName) {
      const isTracabilite = this.$route.params.heading === "tracabilite";

      let routeParams = "";

      if (this.prefixlink !== "") {
        routeParams += this.prefixlink;
      }

      if (this.$route.params.heading) {
        routeParams += "/" + this.$route.params.heading;
      }

      if (this.$route.params.year) {
        routeParams += "/" + this.$route.params.year;
      }

      routeParams += "/produits/" + pathName;

      if (isTracabilite) {
        if (this.$route.params.name) {
          routeParams += "/" + this.$route.params.order;
        } else {
          routeParams += "/" + this.$route.params.filter;
        }
      }

      return routeParams;
    },
    isDisabled(years, disabled) {
      return disabled[years.indexOf(this.$route.params.year)];
    },
  },
};
</script>

<style lang="scss" scoped>
$title-font-sizes: (
  null: calc(1.4375rem + #{7 / 1920 * 100vw}),
  $medium-max: calc(0.875rem + #{9 / 1920 * 100vw}),
  $small-max: 0.875rem,
);

$item-font-sizes: (
  null: 0.875rem,
  $medium-max: 0.875rem,
  $small-max: 0.46875rem,
);

.menu-products {
  background: v(black-color);
  height: 153px;
  position: relative;
  margin-top: auto;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;

  @include breakpoint($medium-max) {
    height: 183px;
  }

  @include breakpoint($small-max) {
    height: 85px;
  }
}

.title {
  @include font-size($title-font-sizes);

  z-index: 1;
  position: absolute;
  top: 0;
  left: 50%;
  display: inline-block;
  transform: translate3d(-50%, -50%, 0);
  padding: 0.56em 0.9em 0.53em;
  color: v(white-color);
  line-height: normal;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
}

.list {
  /* remove and todo */
  color: inherit;
  //padding: 0 30px 25px;
  padding: 8px 3px 0 17px;
  text-align: center;
  white-space: nowrap;
  //cursor: grab;
  //overflow: auto;
  margin-top: auto;
  width: 100%;
  //height: 100%;
  /* display: flex;
  align-items: center; */
  margin-bottom: auto;

  & > div {
    margin-left: auto;
    margin-right: auto;
    //height: 100%;
  }

  @include breakpoint($medium-min $medium-max) {
    margin-bottom: auto;
    padding-top: 0;
  }

  @include breakpoint($small-max) {
    //padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 9px;
  }

  @include breakpoint($x-small-max) {
    padding-left: 4px;
    padding-right: 5px;
  }
}

.item {
  @include font-size($item-font-sizes);

  position: relative;
  display: inline-block;
  vertical-align: top;
  min-width: 110px;
  color: v(mid-grey-2);
  font-weight: 500;
  line-height: 1;
  margin: 0 35px;
  white-space: pre-line;
  //margin-bottom: 15px;

  @include breakpoint($xs-large-max) {
    margin: 0 35px;
  }

  @include breakpoint($medium-max) {
    margin: 0 30px;
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
    /* For landscape Tablet only */
    margin: 0 30px;
  }

  @include breakpoint($small-max) {
    margin: 0 5px;
    min-width: 50px;
  }

  a {
    position: relative;
    display: block;

    &::before {
      content: "";
      display: block;
      width: 52px;
      height: 52px;
      border-radius: 100%;
      border: 1px solid v(mid-grey-2);
      margin: 10px auto;

      @include breakpoint($medium-max) {
        width: 40px;
        height: 40px;
      }

      @include breakpoint($small-max) {
        width: 22px;
        height: 22px;
        margin: 10px auto;
      }
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translate3d(-50%, 0, 0) scale(0);
      display: block;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background: v(white-color);
      transition: transform 0.25s ease-in-out;

      @include breakpoint($medium-max) {
        width: 24px;
        height: 24px;
        top: 8px;
      }

      @include breakpoint($small-max) {
        width: 12px;
        height: 12px;
        top: 5px;
      }
    }
  }

  @include on-event {
    a {
      &::after {
        transform: translate3d(-50%, 0, 0) scale(1);
      }
    }
  }

  &--active {
    color: v(white-color);

    a {
      &::after {
        transform: translate3d(-50%, 0, 0) scale(1);
      }
    }
  }

  &--disabled {
    display: none;
  }
}
</style>
