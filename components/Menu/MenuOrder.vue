<template>
  <nav :class="customclass">
    <ul class="list">
      <li
        v-for="orderFilter in dataviz.ordersFilterListFilteredByDomain"
        :key="orderFilter.id"
        :class="[
          'item',
          {
            'item--active': currentLink === generateRoute(orderFilter.pathName),
          },
        ]"
      >
        <n-link :to="generateRoute(orderFilter.pathName)" prefetch>{{
          orderFilter.html
        }}</n-link>
      </li>
    </ul>
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
  computed: mapState(["dataviz"]),
  methods: {
    generateRoute(pathName) {
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

      if (this.$route.params.filter && this.$route.params.name) {
        routeParams +=
          "/" + this.$route.params.filter + "/" + this.$route.params.name;
      }

      routeParams += "/" + pathName;

      return routeParams;
    },
  },
};
</script>

<style lang="scss" scoped>
$item-font-sizes: (
  null: 1.125rem,
  $medium-max: 0.625rem + #{8 / 1920 * 100vw},
  $small-max: 0.625rem,
);

.menu-order {
  text-align: center;
}

.list {
  color: inherit;
  margin: 14px auto 10px;

  @include breakpoint($medium-max) {
    margin: 8px auto 10px;
  }

  @include breakpoint($small-max) {
    margin: 5px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  }
}

.item {
  @include font-size($item-font-sizes);

  font-weight: 700;
  color: v(white-color);
  border-radius: 100px;
  display: inline-block;
  margin: 3px;
  color: v(black-color);

  a {
    position: relative;
    padding: 0.3em 0.73em 0.4em 60px;
    display: inline-block;

    @include breakpoint($small-max) {
      padding: 0.3em 0.73em 0.4em 23px;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      border-radius: 100%;
      top: 50%;
      transform: translate3d(0, -50%, 0);
    }

    &::before {
      background: v(white-color);
      border: 1px solid v(black-color);
      width: 42px;
      height: 42px;
      left: 0;
      box-shadow: -3px 3px 0px 0px #000000;

      @include breakpoint($small-max) {
        width: 20px;
        height: 20px;
        box-shadow: -2px 2px 0px 0px #000000;
      }
    }

    &::after {
      background: v(main-color);
      width: 26px;
      height: 26px;
      left: 8px;
      transition: transform 0.25s ease-in-out;

      @include breakpoint($small-max) {
        width: 12px;
        height: 12px;
        left: 4px;
      }
    }

    &::after {
      transform: translate3d(0, -50%, 0) scale(0);
    }

    @include on-event {
      &::after {
        transform: translate3d(0, -50%, 0) scale(1);
      }
    }
  }

  &--active {
    a {
      &::after {
        transform: translate3d(0, -50%, 0) scale(1);
      }
    }
  }
}
</style>
