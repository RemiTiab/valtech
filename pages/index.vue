<template>
  <LayoutContent>
    <h1>VALTECH</h1>
  </LayoutContent>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      metaData: {
        title: "Home - Valtech",
        description: "Home - Valtech",
        url: "@TODO" + this.$nuxt.$route.path,
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
          hid: "og:title",
          property: "og:title",
          content: this.metaData.title,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.metaData.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.metaData.description,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.metaData.description,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.metaData.url,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: this.metaData.url,
        },
      ],
    };
  },
  created() {
    this.updateData(this.metaData);
  },
  methods: {
    ...mapActions("sharer", ["updateData"]),
  },
};
</script>

<style lang="scss"></style>
