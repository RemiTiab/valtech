<template>
  <nav :class="customclass">
    <ul class="list">
      <li
        v-for="link in links"
        :key="link.id"
        :class="[
          'item',
          {
            'item--available': linkExist(link.url),
            'item--active': currentYear(link.url),
          },
        ]"
      >
        <n-link
          :to="generateRoute(link.url)"
          :title="link.title"
          :target="link.target"
        >
          <BackgroundSvg v-if="currentYear(link.url)" :rotation="3.25" />
          {{ link.name }}
        </n-link>
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
  },
  data() {
    return {
      links: {
        0: {
          title: "Voir 2019",
          name: "2019",
          url: "2019",
          target: "_self",
        },
        1: {
          title: "Voir 2020",
          name: "2020",
          url: "2020",
          target: "_self",
        },
        2: {
          title: "Voir 2021",
          name: "2021",
          url: "2021",
          target: "_self",
        },
        3: {
          title: "Voir 2022",
          name: "2022",
          url: "2022",
          target: "_self",
        },
        4: {
          title: "Tendance sur 3 ans",
          name: "Sur 3 ans",
          url: "tendance",
          target: "_self",
        },
      },
    };
  },
  computed: mapState(["dataviz"]),
  methods: {
    currentYear(yearPathName) {
      return this.$route.params.year === yearPathName;
    },
    linkExist(year) {
      if (this.$route.params.filter === "associations") {
        if (this.$route.params.name) {
          for (let $i = 0; $i < this.dataviz.associationsList.length; $i++) {
            const association = this.dataviz.associationsList[$i];

            if (
              association.years.includes(year) &&
              association.pathName === this.$route.params.name
            ) {
              return true;
            }
          }

          return false;
        } else {
          return true;
        }
      } else if (
        year === "2022" &&
        this.$route.params.name === "compte-a-terme-agir"
      ) {
        return false;
      } else {
        return true;
      }
      /* return this.dataviz.associationsList.filter(
        (association) => {
          console.log(
            year,
            association.years.includes(year),
            association.pathName,
            association.pathName === this.$route.params.name,
            association.years.includes(year) && association.pathName === this.$route.params.name
          );
          return true;
        } */
      /* !!(
            association.years.includes(year) &&
            association.pathName === this.$route.params.name
          ) */

      /* association.years.includes(year) &&
            association.name === this.$route.params.name */
      /* ); */

      /* if (this.$route.params.filter === "associations") {
        if (this.$route.params.name) {
          // console.log(this.$route.params.name);
        }
        return true;
      }

      return true; */
    },
    generateRoute(link) {
      let routeParams = "";

      if (this.prefixlink !== "") {
        routeParams += this.prefixlink;
      }

      if (this.$route.params.heading) {
        routeParams += "/" + this.$route.params.heading;
      }

      routeParams += "/" + link;

      if (this.$route.params.filter) {
        routeParams += "/" + this.$route.params.filter;
      }

      if (this.$route.params.name) {
        routeParams += "/" + this.$route.params.name;
      }

      if (this.$route.params.order) {
        routeParams += "/" + this.$route.params.order;
      }

      return routeParams;
    },
  },
};
</script>

<style lang="scss" scoped>
$item-font-sizes: (
  null: 1rem,
  $medium-max: calc(0.6875rem + #{5 / 1920 * 100vw}),
  $x-small-max: 0.6875rem,
);

.menu-years {
  padding-bottom: 0.75em; // 13px

  @include breakpoint($x-small-max) {
    padding-bottom: 0;
  }
}

.list {
  text-align: center;
  margin: 0.9375em 0;

  @include breakpoint($small-max) {
    margin-bottom: 0.5em;
  }

  @include breakpoint($x-small-max) {
    margin-bottom: 0;
  }
}

.item {
  @include font-size($item-font-sizes);

  position: relative;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-block;

  &:not(:last-child) {
    &::after {
      content: "";
      position: absolute;
      height: 2.25em;
      width: 1px;
      right: 0;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      background: v(black-color);

      @include breakpoint($x-small-max) {
        height: 12px;
      }
    }
  }

  a {
    z-index: 1;
    position: relative;
    display: block;
    padding: 0.625em 1.3em;

    @include breakpoint($x-small-max) {
      padding: 0 5px;
    }
  }

  @include on-event {
    // @TODO
    // color: v(white-color);
    // font-weight: 700;
    // padding: 0 1.3em;
  }

  &--active {
    color: v(white-color);
    font-weight: 700;
    padding: 0 1.3em;

    @include breakpoint($x-small-max) {
      padding: 4px 5px;
    }
  }

  &:not(.item--available) {
    pointer-events: none;
    color: #494949;
    opacity: 0.7;
  }
}
/* @TODO */
/* .social-links {
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
} */
</style>
