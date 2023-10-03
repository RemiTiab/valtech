<template>
  <LayoutContent>
    <Gallery />
  </LayoutContent>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      metaData: {
        title: "About - Valtech",
        description: "About - Valtech",
        url: "" + this.$nuxt.$route.path,
      },
    };
  },
  head() {
    return {
      title: this.metaData.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.metaData.description,
        },
        {
          hid: "og-title",
          property: "og:title",
          content: this.metaData.title,
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: this.metaData.title,
        },
        {
          hid: "og-description",
          property: "og:description",
          content: this.metaData.description,
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: this.metaData.description,
        },
        {
          hid: "og-url",
          property: "og:url",
          content: this.metaData.url,
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: this.metaData.url,
        },
      ],
    };
  },
  computed: { ...mapState(["routing"]) },
  beforeCreate() {
    this.$store.dispatch("routing/routeUpdate", "/about");
  },
  created() {
    this.updateData(this.metaData);
  },
  mounted() {},
  methods: {
    ...mapActions("sharer", ["updateData"]),
  },
};
</script>

<style lang="scss"></style>
