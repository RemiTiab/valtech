<template>
  <n-link
    v-if="!generateRouteIsCurrentRoute"
    class="link"
    :to="generateRoute"
    prefetch
  >
    <svg
      width="21"
      height="15"
      viewBox="0 0 21 15"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <path
        d="M0.45772 6.79312C0.0671928 7.18364 0.0671875 7.8168 0.457708 8.20733L6.82162 14.5713C7.21214 14.9619 7.8453 14.9619 8.23583 14.5713C8.62636 14.1808 8.62636 13.5477 8.23584 13.1571L2.57903 7.50024L8.23594 1.84342C8.62646 1.4529 8.62647 0.819737 8.23595 0.42921C7.84543 0.0386826 7.21226 0.0386782 6.82174 0.4292L0.45772 6.79312ZM20.7842 6.50037L1.16483 6.50023L1.16481 8.50023L20.7842 8.50037L20.7842 6.50037Z"
      />
    </svg>
    Tous les domaines
  </n-link>
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
  },
  computed: {
    generateRouteIsCurrentRoute() {
      const currentPath =
        this.$route.path.slice(-1) === "/"
          ? this.$route.path.slice(0, -1)
          : this.$route.path;

      return this.generateRoute === currentPath;
    },
    generateRoute() {
      let routeParams = "";

      if (this.prefixlink !== "") {
        routeParams += this.prefixlink;
      }

      routeParams += "/" + this.$route.params.heading;
      routeParams += "/" + this.$route.params.year;

      if (this.$route.params.heading === "tracabilite") {
        if (this.$route.params.name) {
          routeParams += "/" + this.$route.params.order;
        } else {
          routeParams += "/" + this.$route.params.filter;
        }
      }

      return routeParams;
    },
    ...mapState(["dataviz"]),
  },
  methods: {
    currentHeading(headingPathName) {
      return this.$route.params.heading === headingPathName;
    },
  },
};
</script>

<style lang="scss" scoped>
$link-font-sizes: (
  null: calc(1rem),
  $medium-max: calc(0.5625rem + #{9 / 1920 * 100vw}),
  $x-small-max: 0.5625rem,
);

.link {
  @include font-size($link-font-sizes);

  display: inline-block;
  margin: 0 auto;
  text-align: center;
  line-height: 1.125;
  border-radius: 2px;
  padding: 0.6875em 2em 0.6875em 3.5em;
  z-index: 10;
  border: 1px solid v(black-color);
  background: v(white-color);
  position: relative;
  transform: translate3d(0, -30%, 0);

  @include breakpoint($x-small-max) {
    transform: translate3d(0, -40%, 0);
  }

  @include on-event {
    color: v(main-color);

    svg {
      fill: v(main-color);
    }
  }

  svg {
    position: absolute;
    left: 19px;
    top: 50%;
    transform: translate3d(0, -50%, 0);

    @include breakpoint($medium-max) {
      width: 16px;
    }

    @include breakpoint($x-small-max) {
      width: 9px;
      left: 12px;
      transform: translate3d(0, -2px, 0);
    }
  }
}
</style>
