<template>
  <LayoutContent>
    <div class="page">
      <PageTitle :title="title" />

      <PageContent>
        <p>
          La page que vous cherchez n'existe pas ou est inaccessible. Nous vous
          prions de bien vouloir nous en excuser.
        </p>

        <p>
          <nuxt-link to="/">Retour sur la page d'accueil</nuxt-link>
        </p>

        <BlockSpacer :height="7" />
      </PageContent>
    </div>
  </LayoutContent>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: `${this.title} - Valtech`,
    };
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message;
    },
    title() {
      return this.statusCode === 404
        ? "Page introuvable"
        : "Une erreur s'est produite";
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
}

.page {
  padding: 0 40px;

  @include breakpoint($small-max) {
    padding: 0 20px;
  }
}
</style>
