<template>
  <div
    class="card"
    :data-card="id"
    @click="(e) => e.target.classList.toggle('active')"
  >
    <h2 v-if="surtitle" class="card__surtitle">{{ surtitle }}</h2>
    <h3 v-if="title" class="card__title">
      <span>{{ title }}</span>
    </h3>
    <h4 v-if="subtitle" class="card__subtitle">{{ subtitle }}</h4>
    <p v-if="chapo" class="card__chapo">{{ chapo }}</p>
    <a
      v-if="ctaLink && ctaText"
      :href="ctaLink"
      class="card__cta"
      :target="ctaTarget"
      >{{ ctaText }}</a
    >
    <img
      v-if="backgroundSrc"
      :src="backgroundSrc"
      alt=""
      class="card__background"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: false,
      default: 0,
    },
    surtitle: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
    chapo: {
      type: String,
      required: false,
      default: "",
    },
    ctaText: {
      type: String,
      required: false,
      default: "",
    },
    ctaLink: {
      type: String,
      required: false,
      default: "",
    },
    ctaTarget: {
      type: String,
      required: false,
      default: "",
    },
    backgroundSrc: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
$card-highlighted-surtitle-font-size: (
  null: calc(0.75rem + #{10 / 1920 * 100vw}),
  $medium-max: calc(0.75rem + #{8 / 1920 * 100vw}),
  $small-max: 0.975rem,
);

$card-highlighted-title-font-size: (
  null: calc(1.125rem + #{54 / 1920 * 100vw}),
  $medium-max: calc(1.125rem + #{48 / 1920 * 100vw}),
  $small-max: calc(1.125rem + #{48 / 1920 * 100vw}),
);

$card-surtitle-font-size: (
  null: calc(0.75rem + #{8 / 1920 * 100vw}),
  $medium-max: calc(0.75rem + #{6 / 1920 * 100vw}),
  $small-max: 0.975rem,
);

$card-title-font-size: (
  null: calc(1.125rem + #{22 / 1920 * 100vw}),
  $medium-max: calc(1.125rem + #{16 / 1920 * 100vw}),
  $small-max: calc(1.125rem + #{16 / 1920 * 100vw}),
);

.card {
  position: relative;
  width: calc(25% - 1.875rem);
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  color: v(white-color);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;

  @include breakpoint($medium-max) {
    width: calc(50% - 0.5rem);
  }

  @include breakpoint($small-max) {
    width: 100%;
    height: 50vh;
  }

  &:first-of-type {
    width: 100%;
    height: 80vh;

    @include breakpoint($small-max) {
      height: 70vh;
    }

    .card__surtitle {
      @include font-size($card-highlighted-surtitle-font-size);
    }

    .card__title {
      @include font-size($card-highlighted-title-font-size);

      text-transform: none;
    }
  }

  &:not(:first-of-type):nth-child(5n + 2) {
    width: calc(50% - 1.275rem);

    @include breakpoint($medium-max) {
      width: calc(50% - 0.5rem);
    }

    @include breakpoint($small-max) {
      width: 100%;
    }
  }

  &__surtitle {
    @include font-size($card-surtitle-font-size);

    line-height: normal;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    pointer-events: none;
  }

  &__title {
    @include font-size($card-title-font-size);

    line-height: normal;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 0.35em;
    letter-spacing: 0.01em;
    pointer-events: none;

    span {
      background-color: transparent;
      color: v(white-color);
      padding: 0.3rem;
      transition: all 0.2s ease-in-out;
    }
  }

  &__subtitle {
    margin: 0 auto;
    max-width: 40%;
    line-height: 1.6;
    margin-top: 0.9em;
    pointer-events: none;

    @include breakpoint($medium-max) {
      max-width: 70%;
    }

    @include breakpoint($small-max) {
      max-width: 95%;
      line-height: normal;
    }
  }

  &__chapo {
    opacity: 0;
    font-size: 0;
    line-height: normal;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    max-width: 90%;
    line-height: 1.2;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    @include breakpoint($small-max) {
      max-width: 95%;
      margin-top: 1.875rem;
    }
  }

  &__cta {
    font-size: 1rem;
    width: fit-content;
    margin: 1rem auto 0 auto;
    padding: 0.725rem 1.4rem;
    font-weight: 700;
    border: solid 2px v(white-color);
    border-radius: 5px;
    opacity: 0;
    transform: translate3d(0, 8vh, 0) scale(0.5);
    transform-origin: center center;
    line-height: normal;
    transition: all 0.2s ease-in-out;
  }

  &__background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: 10px;
    transform: scale(1);
    filter: blur(0);
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }

  &:hover,
  &:focus {
    cursor: pointer;

    .card__title {
      span {
        background-color: v(white-color);
        color: v(black-color);
      }
    }

    .card__background {
      filter: blur(2px);
      transform: scale(1.2);
    }
  }

  &.active {
    .card__title {
      span {
        background-color: v(black-color);
        color: v(white-color);
      }
    }

    .card__chapo {
      opacity: 1;
      font-size: 1rem;
    }

    .card__cta {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);

      &:hover {
        transform: translate3d(0, 0, 0) scale(0.9);
      }
    }

    .card__background {
      transform: scale(1);
      filter: blur(0);
    }
  }
}
</style>
