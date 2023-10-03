<template>
  <div
    :class="[
      customclass,
      {
        'is-open': sharerOpen,
      },
    ]"
  >
    <svg
      width="27"
      height="42"
      viewBox="0 0 27 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="pictogramme"
      @click="handleSharer"
    >
      <path
        d="M13.7911 0.292908C13.4006 -0.0976162 12.7674 -0.0976162 12.3769 0.292908L6.01292 6.65687C5.62239 7.04739 5.62239 7.68056 6.01292 8.07108C6.40344 8.46161 7.03661 8.46161 7.42713 8.07108L13.084 2.41423L18.7408 8.07108C19.1314 8.46161 19.7645 8.46161 20.1551 8.07108C20.5456 7.68056 20.5456 7.04739 20.1551 6.65687L13.7911 0.292908ZM14.084 22.5735L14.084 1.00002L12.084 1.00002L12.084 22.5735L14.084 22.5735Z"
        fill="white"
      />
      <path
        d="M9.05592 16.8322C7.17017 16.8322 5.19327 16.8322 3.00022 16.8322C1.89565 16.8322 1 17.7276 1 18.8322V39C1 40.1046 1.89543 41 3 41H23.1678C24.2724 41 25.1678 40.1046 25.1678 39V18.8322C25.1678 17.7276 24.2721 16.8322 23.1676 16.8322C21.0204 16.8322 19.0804 16.8322 17.2303 16.8322"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>

    <div class="content">
      <h2>Partagez</h2>
      <ShareNetwork
        class="share-network-btn"
        network="facebook"
        :url="url"
        :title="dataviz.dataGraph.metaData.title"
        :description="dataviz.dataGraph.metaData.description"
      >
        <span class="visuallyhidden">Partager sur Facebook</span>
        <BaseIcon
          name="facebook"
          :rounded="true"
          :width="48"
          :height="48"
          :dark="true"
        />
      </ShareNetwork>
      <ShareNetwork
        class="share-network-btn"
        network="linkedin"
        :url="url"
        :title="dataviz.dataGraph.metaData.title"
        :description="dataviz.dataGraph.metaData.description"
      >
        <span class="visuallyhidden">Partager sur Linkedin</span>
        <BaseIcon
          name="linkedin"
          :rounded="true"
          :width="48"
          :height="48"
          :dark="true"
        />
      </ShareNetwork>
      <ShareNetwork
        class="share-network-btn"
        network="twitter"
        :url="url"
        :title="dataviz.dataGraph.metaData.title"
        :description="dataviz.dataGraph.metaData.description"
      >
        <span class="visuallyhidden">Partager sur Twitter</span>
        <BaseIcon
          name="twitter"
          :rounded="true"
          :width="48"
          :height="48"
          :dark="true"
        />
      </ShareNetwork>

      <svg
        width="35"
        height="35"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="close"
        @click="handleSharer"
      >
        <line
          x1="1.03935"
          y1="1.49512"
          x2="19.2257"
          y2="19.6814"
          stroke="white"
          stroke-linecap="round"
        />
        <line
          x1="1.15793"
          y1="19.6813"
          x2="19.3442"
          y2="1.49502"
          stroke="white"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    customclass: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      sharerOpen: false,
    };
  },
  computed: {
    url() {
      const currentPath =
        this.$route.path.slice(-1) === "/"
          ? this.$route.path.slice(0, -1)
          : this.$route.path;

      return "https://www.lepouvoirdenousengager.fr" + currentPath;
    },
    ...mapState(["sharer", "dataviz"]),
  },
  methods: {
    handleSharer() {
      if (this.sharerOpen === false) {
        this.sharerOpen = true;
      } else {
        this.sharerOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$menu-sharer-h2-font-sizes: (
  null: calc(0.5625rem + #{19 / 1920 * 100vw}),
  $medium-max: calc(0.5625rem + #{22 / 1920 * 100vw}),
  $small-max: 0.5625rem,
);

.menu-sharer {
  background: v(main-color);
  color: v(white-color);
  position: relative;
  z-index: 1000;
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: row;
  // justify-content: center;
  // align-items: center;
  position: relative;
  margin-top: 118px;
  transition: all 0.2s ease-in;
  padding: 0 35px;

  &--mobile {
    display: none !important;
    position: absolute !important;

    @include breakpoint($small-max) {
      display: flex;
      margin-top: 0 !important;
    }
  }

  @include breakpoint($medium-max) {
    padding: 0 20px;
  }

  @include breakpoint($small-max) {
    width: 47px;
    height: 47px;
    padding: 0 10px;
    margin-top: 95px;
  }

  &.is-open {
    width: 460px;
    max-width: 100%;

    @include breakpoint($small-max) {
      width: 240px;
    }

    .pictogramme {
      opacity: 0;
    }

    .content {
      width: 100%;
      overflow: visible;
      opacity: 1;
    }
  }

  .pictogramme {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    opacity: 1;
    transition: all 0.2s ease-in;
    z-index: 1000;

    @include breakpoint($small-max) {
      width: 18px;
    }
  }

  .content {
    opacity: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in;
    width: 0%;
    overflow: hidden;

    h2 {
      @include font-size($menu-sharer-h2-font-sizes);

      margin-right: 15px;

      @include breakpoint($small-max) {
        margin-right: 5px;
      }

      &:not(:first-child) {
        margin-left: 35px;

        @include breakpoint($small-max) {
          margin-left: 15px;
          max-width: 52px;
        }
      }
    }

    .share-network-btn {
      @include breakpoint($small-max) {
        width: 32px;
        height: 32px;
      }

      &:not(:first-child) {
        margin-left: 6px;
      }
    }

    .icon-wrapper {
      @include breakpoint($small-max) {
        width: 32px;
        height: 32px;
      }
    }

    .close {
      margin-left: auto;

      @include breakpoint($small-max) {
        width: 19px;
        height: 19px;
      }
    }
  }
}
</style>
