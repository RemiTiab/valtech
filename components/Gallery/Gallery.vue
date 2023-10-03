<template>
  <div class="wrapper wrapper--gallery">
    <div class="container">
      <div class="content">
        <div ref="list" class="cards">
          <GalleryCard
            v-for="country in countries.countries"
            :id="country.id"
            :key="country.id"
            :surtitle="country.surtitle"
            :title="country.title"
            :subtitle="country.subtitle"
            :chapo="country.chapo"
            :cta-text="country.ctaText"
            :cta-link="country.ctaLink"
            :cta-target="country.ctaTarget"
            :background-src="country.backgroundSrc"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["countries"]),
};
</script>

<style lang="scss" scoped>
.wrapper--gallery {
  padding: 1.875rem 0;

  @include breakpoint($medium-max) {
    padding: 1.375rem 0;
  }

  @include breakpoint($medium-max) {
    padding: 1rem 0;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1.875rem;

    @include breakpoint($medium-max) {
      row-gap: 1rem;
    }
  }
}
</style>
