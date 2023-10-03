<template>
  <div class="section-carousel section-carousel--dataviz">
    <nav :class="customclass">
      <ul class="headings-navigation__list">
        <div class="arrows">
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
        </div>
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
                { 'title--dark': !currentHeading(heading.pathName) },
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
            <p v-if="currentHeading(heading.pathName)" class="subtitle">
              {{ heading.subtitle }}<br />
              <span class="text--bold subtitle__bold">{{
                heading.subtitleBold
              }}</span>
            </p>
          </n-link>
        </li>
      </ul>
    </nav>
    <div :class="customclass" style="display: none">
      <client-only placeholder="Chargement en cours...">
        <carousel-3d
          ref="carousel-3d"
          :perspective="0"
          :space="carousel3dParams['space']"
          :display="carousel3dParams['display']"
          :width="slideWidth"
          :height="slideHeight"
          :scaling="carousel3dParams['scaling']"
          :border="0"
          :disable3d="carousel3dParams['disable3d']"
          :controls-visible="carousel3dParams['controls-visible']"
          :controls-width="34"
          :controls-height="32"
          controls-prev-html='<svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5809 13.4758C0.799855 14.2568 0.799855 15.5232 1.5809 16.3042L14.3088 29.0322C15.0899 29.8132 16.3562 29.8132 17.1373 29.0322C17.9183 28.2511 17.9183 26.9848 17.1373 26.2037L5.82354 14.89L17.1373 3.57631C17.9183 2.79526 17.9183 1.52893 17.1373 0.747879C16.3562 -0.0331696 15.0899 -0.0331696 14.3088 0.747879L1.5809 13.4758ZM36.9951 12.89L2.99512 12.89V16.89L36.9951 16.89V12.89Z" fill="#BF191A"/></svg>'
          controls-next-html='<svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.4767 16.3042C36.2578 15.5232 36.2578 14.2568 35.4767 13.4758L22.7488 0.747879C21.9677 -0.0331696 20.7014 -0.0331696 19.9204 0.747879C19.1393 1.52893 19.1393 2.79526 19.9204 3.57631L31.2341 14.89L19.9204 26.2037C19.1393 26.9848 19.1393 28.2511 19.9204 29.0322C20.7014 29.8132 21.9677 29.8132 22.7488 29.0322L35.4767 16.3042ZM0.0625 16.89H34.0625V12.89H0.0625V16.89Z" fill="#BF191A"/></svg>'
          class="slide__container headings-navigation__list"
          @after-slide-change="onAfterSlideChange"
        >
          <slide
            v-for="(heading, i) in dataviz.headings"
            :key="i"
            :index="i"
            class="slide"
          >
            <div
              ref="heading"
              :class="[
                'slide__wrap headings-navigation__item',
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
                    { 'title--dark': !currentHeading(heading.pathName) },
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
                <p v-if="currentHeading(heading.pathName)" class="subtitle">
                  {{ heading.subtitle }}<br />
                  <span class="text--bold subtitle__bold">{{
                    heading.subtitleBold
                  }}</span>
                </p>
              </n-link>
            </div>
          </slide>
        </carousel-3d>
      </client-only>
    </div>
  </div>
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
      slideWidth: 735,
      slideHeight: 435,
    };
  },
  computed: {
    carousel3dParams() {
      if (this.windowParams.width <= 991) {
        return {
          space: 400,
          display: 3,
          /* width: 360, */
          scaling: 0,
          disable3d: true,
          "controls-visible": true,
        };
      } else {
        return {
          space: this.windowParams.width / 4.5,
          display: 3,
          /* width: this.windowParams.width / 2.4, */
          scaling: this.windowParams.width / 4.8,
          disable3d: false,
          "controls-visible": true,
        };
      }
    },
    ...mapState(["dataviz", "windowParams", "carouselPosition"]),
  },
  mounted() {
    setTimeout(() => {
      this.initSlider();
    }, 100);
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

      routeParams += this.$route.params.year
        ? "/" + this.$route.params.year
        : "2020";

      return routeParams;
    },
    onAfterSlideChange(index) {
      if (
        this.$refs["carousel-3d"].currentIndex === 0 &&
        this.$route.params.heading !== "tracabilite"
      ) {
        this.$router.push("/embed/visualiser/tracabilite/2020");
      } else if (
        this.$refs["carousel-3d"].currentIndex === 1 &&
        this.$route.params.heading !== "partage"
      ) {
        this.$router.push("/embed/visualiser/partage/2020");
      } else if (
        this.$refs["carousel-3d"].currentIndex === 2 &&
        this.$route.params.heading !== "influence"
      ) {
        this.$router.push("/embed/visualiser/influence/2020");
        // this.$refs["carousel-3d"].goPrev();
      }
    },
    goToSlide(index) {
      this.$refs["carousel-3d"].goSlide(index);
    },
    initSlider() {
      if (this.$route.params.heading === "tracabilite") {
        this.goToSlide(0);
      } else if (this.$route.params.heading === "partage") {
        this.goToSlide(1);
      } else if (this.$route.params.heading === "influence") {
        this.goToSlide(2);
      }
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
  $small-max: 2.8125rem,
);

.section-carousel {
  overflow: hidden;
  padding: (38.4 / 1920 * 100vw) 0 (40 / 1920 * 100vw) 0; // 95px 0 68px 0;

  @include breakpoint($small-max) {
    padding: 2.5em 30px; // 40px 36px 42.76px 37.65px;
  }
}

nav {
  width: 100%;
}

.headings-navigation__list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  .arrows {
    position: absolute;
    width: 730px !important;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .headings-navigation__item {
    text-align: center;
  }

  .headings-navigation__item:not(.headings-navigation__item--active) {
    a {
      display: block;
      padding: 100px 0;
      min-width: 240px;
    }
  }

  .tracabilite {
    margin-top: -90px;
    transform: translateX(-140px);
    order: 3;

    &.headings-navigation__item--active {
      order: -1;
      margin-top: 0px;
      transform: translateX(0px);
    }
  }

  .influence {
    margin-top: -90px;
    transform: translateX(140px);
    order: -1;
    opacity: 0.5;
    pointer-events: none;

    &.headings-navigation__item--active {
      order: -2;
      margin-top: 0px;
      transform: translateX(0px);
    }
  }

  .partage {
    &:not(.headings-navigation__item--active) {
      margin-top: -90px;
      transform: translateX(-140px);
    }
  }

  .headings-navigation__item--active {
    order: 2;
    min-height: 435px;
  }
}

.img {
  position: relative;
  z-index: -1;
  margin-bottom: -1em;
  width: initial;
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

  &__bold {
    display: block;
    margin-top: 0.938em;
  }
}
</style>
