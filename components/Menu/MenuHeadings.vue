<template>
  <nav :class="customclass">
    <ul class="headings-navigation__list">
      <!-- <div class="arrows">
        <svg
          width="37"
          height="30"
          viewBox="0 0 37 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="arrows__previous"
        >
          <path
            d="M1.5809 13.4758C0.799855 14.2568 0.799855 15.5232 1.5809 16.3042L14.3088 29.0322C15.0899 29.8132 16.3562 29.8132 17.1373 29.0322C17.9183 28.2511 17.9183 26.9848 17.1373 26.2037L5.82354 14.89L17.1373 3.57631C17.9183 2.79526 17.9183 1.52893 17.1373 0.747879C16.3562 -0.0331696 15.0899 -0.0331696 14.3088 0.747879L1.5809 13.4758ZM36.9951 12.89L2.99512 12.89V16.89L36.9951 16.89V12.89Z"
            fill="#BF191A"
          />
        </svg>
        <svg
          width="37"
          height="30"
          viewBox="0 0 37 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="arrows__next"
        >
          <path
            d="M35.4767 16.3042C36.2578 15.5232 36.2578 14.2568 35.4767 13.4758L22.7488 0.747879C21.9677 -0.0331696 20.7014 -0.0331696 19.9204 0.747879C19.1393 1.52893 19.1393 2.79526 19.9204 3.57631L31.2341 14.89L19.9204 26.2037C19.1393 26.9848 19.1393 28.2511 19.9204 29.0322C20.7014 29.8132 21.9677 29.8132 22.7488 29.0322L35.4767 16.3042ZM0.0625 16.89H34.0625V12.89H0.0625V16.89Z"
            fill="#BF191A"
          />
        </svg>
      </div> -->
      <li
        v-for="heading in dataviz.headings"
        :key="heading.id"
        :index="heading.id"
        :class="[
          'headings-navigation__item',
          heading.pathName,
          {
            'headings-navigation__item--active': currentHeading(
              heading.pathName
            ),
          },
        ]"
      >
        <n-link :to="generateRoute(heading.pathName)" prefetch>
          <img
            v-if="currentHeading(heading.pathName)"
            class="img"
            :src="'/images/visualiser/' + heading.pathName + '.png'"
            alt=""
          />
          <div
            :class="[
              'title',
              {
                'title--dark': !currentHeading(heading.pathName),
              },
            ]"
          >
            <p class="title__content">
              <BackgroundSvg
                v-if="currentHeading(heading.pathName)"
                :fill="heading.color || '#C51A1B'"
              />
              {{ heading.title }}
            </p>
          </div>
        </n-link>
      </li>
    </ul>
    <template v-for="heading in dataviz.headings">
      <p
        v-if="currentHeading(heading.pathName)"
        :key="heading.id"
        class="subtitle"
      >
        {{ heading.subtitle }}<br />
        <span class="text--bold subtitle__bold">{{
          heading.subtitleBold
        }}</span>
      </p>
    </template>
    <div
      v-for="heading in dataviz.headings"
      :key="heading.id"
      :index="heading.id"
    >
      <p
        v-if="currentHeading(heading.pathName) && heading.counter !== ''"
        class="counter"
      >
        <span class="iCountUp">
          <ICountUp
            :delay="delay"
            :end-val="endVal"
            :options="options"
            @ready="onReady" /></span
        >&nbsp;%
      </p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p
        v-if="currentHeading(heading.pathName) && heading.accroche !== ''"
        class="accroche"
      >
        {{ heading.accroche }}<span>{{ heading.accrocheSecondary }}</span>
      </p>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import ICountUp from "vue-countup-v2";

export default {
  name: "CounterComponent",
  components: {
    ICountUp,
  },
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
      delay: 5,
      endVal: 100,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: "",
        decimal: "",
        prefix: "",
        suffix: "",
      },
    };
  },
  computed: {
    ...mapState(["dataviz"]),
  },
  methods: {
    currentHeading(headingPathName) {
      return this.$route.params.heading === headingPathName;
    },
    generateRoute(pathName) {
      let routeParams = "";

      if (this.prefixlink !== "") {
        routeParams += this.prefixlink;
      }

      routeParams += "/" + pathName;

      if (pathName === "influence") {
        return routeParams;
      }

      if (pathName === "tracabilite") {
        routeParams += "/2021/montant";
      } else if (pathName === "partage") {
        routeParams += "/2022";
      } else {
        routeParams += this.$route.params.year
          ? "/" + this.$route.params.year
          : "/2022/montant";
      }

      // if (pathName === "partage") {
      //   routeParams += "/2022/montant";
      // } else {
      //   routeParams += this.$route.params.year
      //     ? "/" + this.$route.params.year
      //     : "/2022/montant";
      // }

      return routeParams;
    },
    onReady(instance, CountUp) {
      const that = this;
      instance.update(that.endVal);
    },
  },
};
</script>

<style lang="scss" scoped>
$text-font-sizes: (
  null: calc(2.5rem + #{10 / 1920 * 100vw}),
  $medium-max: calc(1.125rem + #{22 / 1920 * 100vw}),
  $small-max: 1.125rem,
);

$text--active-font-sizes: (
  null: calc(4.25rem + #{12 / 1920 * 100vw}),
  $medium-max: calc(2.8125rem + #{23 / 1920 * 100vw}),
  $small-max: 2rem,
);

$counter-font-sizes: (
  null: 5rem,
  $medium-max: 4.063rem,
  $small-max: 2.8125rem,
);

$accroche-font-sizes: (
  null: calc(2.5rem + #{14 / 1920 * 100vw}),
  $medium-max: calc(1.25rem + #{8 / 1920 * 100vw}),
  $small-max: 1.25rem,
);

$accroche-secondary-font-sizes: (
  null: calc(2.5rem + #{9 / 1920 * 100vw}),
  $medium-max: calc(1.25rem + #{3 / 1920 * 100vw}),
  $small-max: 0.875rem,
);

.menu-headings {
  width: 100%;
  max-width: 100%;
  padding-top: 5.625em; // 90px

  @include breakpoint($medium-max) {
    padding-top: 2.5em; // 40px
  }
}

.headings-navigation__list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  max-width: 860px;
  width: 100%;
  margin: 0 auto;

  @include breakpoint($small-max) {
    max-width: 575px;
  }

  @include breakpoint($x-small-max) {
    max-width: 95%;
  }

  .arrows {
    position: absolute;
    width: 730px;
    left: 50%;
    transform: translate3d(-50%, -10%, 0);
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include breakpoint($medium-max) {
      width: 560px;
      transform: translate3d(-50%, 0, 0);
    }

    @include breakpoint($small-max) {
      width: 70%;
      transform: translate3d(-50%, -290%, 0);
    }

    @include breakpoint($xs-small-max) {
      transform: translate3d(-50%, -290%, 0);
      width: 80%;
    }

    @include breakpoint($xxs-small-max) {
      transform: translate3d(-50%, -340%, 0);
      width: 80%;
    }

    svg {
      @include breakpoint($small-max) {
        width: 23px;
      }
    }
  }

  .headings-navigation__item {
    text-align: center;
    z-index: 10;
  }

  .headings-navigation__item:not(.headings-navigation__item--active) {
    align-self: flex-end;

    a {
      display: block;
      /* padding: 100px 0; */
      width: 240px;
      padding-bottom: 55px;

      @include breakpoint($small-max) {
        padding-bottom: 30px;
        width: 175px;
      }

      @include breakpoint($x-small-max) {
        width: 80px;
      }

      .title {
        position: relative;

        &::after {
          content: "";
          width: 37px;
          height: 30px;
          background-image: url("/images/visualiser/arrow-left.png");
          background-size: contain;
          display: block;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate3d(-50%, 0, 0);

          @include breakpoint($small-max) {
            width: 23px;
            height: 18px;
          }
        }
      }
    }
  }

  .tracabilite {
    order: 3;

    &:not(.headings-navigation__item--active) {
      a {
        .title {
          &::after {
            background-image: url("/images/visualiser/arrow-right.png");
          }
        }
      }
    }

    &.headings-navigation__item--active {
      order: -1;
    }
  }

  .influence {
    order: -1;

    &.headings-navigation__item--active {
      order: 2;

      & + .partage {
        a {
          .title {
            &::after {
              background-image: url("/images/visualiser/arrow-left.png");
            }
          }
        }
      }
    }
  }

  .partage {
    &:not(.headings-navigation__item--active) {
      a {
        .title {
          &::after {
            background-image: url("/images/visualiser/arrow-right.png");
          }
        }
      }
    }
  }

  .headings-navigation__item--active {
    order: 2;
    z-index: -1;
    max-width: 100%;
    width: 730px;
  }
}

.img {
  position: relative;
  z-index: -1;
  margin-bottom: -1em;
  width: initial;

  @include breakpoint($small-max) {
    width: 100px;
    height: 80px;
    margin-bottom: -0.4em;
  }
}

.title {
  @include font-size($text-font-sizes);

  font-family: $artus-alphabet-font-stack;
  letter-spacing: -0.04em;
  font-weight: 400;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: v(white-color);

  &--dark {
    color: v(black-color);
  }

  .headings-navigation__item--active & {
    @include font-size($text--active-font-sizes);
  }

  &__content {
    position: relative;
    display: inline-block;
    padding: 0 0.28em;
  }
}

.subtitle {
  margin: 2em auto 2.2em;
  max-width: 730px;
  width: 100%;
  text-align: center;

  @include breakpoint($medium-max) {
    width: 700px;
    max-width: 100%;
  }

  @include breakpoint($small-max) {
    max-width: 90%;
    margin: 2em auto 1em auto;
  }

  &__bold {
    display: block;
    margin-top: 0.938em;
  }
}

.counter {
  @include font-size($counter-font-sizes);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: v(main-color);
  font-weight: 700;

  .iCountUp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 94px;
    background: #fbf9f7;
    background-blend-mode: multiply;
    box-shadow: inset 0px 0px 16.6531px rgba(0, 0, 0, 0.4);
    border-radius: 16.6531px;

    @include breakpoint($medium-max) {
      width: 146px;
      height: 79px;
    }

    @include breakpoint($small-max) {
      width: 104px;
      height: 56px;
    }
  }
}

.accroche {
  @include font-size($accroche-font-sizes);

  font-family: $artus-alphabet-font-stack;
  line-height: 1.2;
  font-weight: 400;
  margin: 12px auto 38px;
  text-align: center;

  @include breakpoint($medium-max) {
    padding: 0 16px;
    margin: 12px auto 8px;
  }

  @include breakpoint($small-max) {
    padding: 0 20px;
    margin: 12px auto 15px;
  }

  span {
    display: block;
    @include font-size($accroche-secondary-font-sizes);
  }
}
</style>
