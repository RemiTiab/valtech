<template>
  <div class="menu-section">
    <nav v-for="item in list" :key="item.id">
      <h2 v-if="item.title">
        <n-link v-if="item.internal" :to="item.titleUrl">{{
          item.title
        }}</n-link>
        <a v-else :href="item.titleUrl" :target="item.target">{{
          item.title
        }}</a>
      </h2>

      <template v-if="item.insertSocialLinks">
        <MenuSocial
          :links="socialLinks"
          customclass="social-links--footer"
          :rounded="true"
          :hoverevent="true"
        />
      </template>

      <ul>
        <li v-for="link in item.links" :key="link.id">
          <!-- <span v-if="link.tac" @click="handleClickTac">{{ link.title }}</span> -->
          <n-link v-if="link.internal" :to="link.url">{{ link.title }}</n-link>
          <!-- eslint-disable -->
          <a
            v-else
            :href="link.url"
            :target="link.target"
            v-html="link.title"
          />
          <!-- eslint-enable -->
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tac: null,
      socialLinks: {
        0: {
          title: "Nous suivre sur Facebook",
          url: "https://www.facebook.com/CreditCooperatif",
          target: "_blank",
          rounded: true,
          name: "facebook",
          width: 48,
          height: 48,
        },
        1: {
          title: "Nous suivre sur Linkedin",
          url: "https://www.linkedin.com/company/credit-cooperatif",
          target: "_blank",
          rounded: true,
          name: "linkedin",
          width: 48,
          height: 48,
        },
        2: {
          title: "Nous suivre sur Twitter",
          url: "https://twitter.com/credit_coop_",
          target: "_blank",
          rounded: true,
          name: "twitter",
          width: 48,
          height: 48,
        },
        3: {
          title: "Nous suivre sur Instagram",
          url: "https://www.instagram.com/creditcooperatif/?hl=fr",
          target: "_blank",
          rounded: true,
          name: "instagram",
          width: 48,
          height: 48,
        },
        4: {
          title: "Nous suivre sur Youtube",
          url: "https://www.youtube.com/user/CreditCooperatif",
          target: "_blank",
          rounded: true,
          name: "youtube",
          width: 48,
          height: 48,
        },
      },
      list: {
        0: {
          title: "Nous découvrir",
          titleUrl: null,
          target: "",
          links: {
            0: {
              title: "en 100 secondes",
              url: "https://www.youtube.com/watch?v=jnGuTS5lpPo",
              target: "_blank",
            },
          },
        },
        1: {
          title: "Nous trouver",
          titleUrl: "https://www.credit-cooperatif.coop",
          target: "_blank",
          links: {
            0: {
              title: "sur le territoire",
              url: "https://agences.credit-cooperatif.coop/banque/",
              target: "_blank",
            },
            1: {
              title: "sur internet",
              url:
                "https://www.credit-cooperatif.coop/votre-banque/une-autre-banque-est-possible/",
              target: "_blank",
            },
          },
        },
        2: {
          title: "Nous suivre",
          titleUrl: null,
          target: "",
          insertSocialLinks: true,
        },
        3: {
          title: "Nous rejoindre",
          titleUrl: null,
          target: "",
          links: {
            0: {
              title: "Devenir client",
              url:
                "https://www.credit-cooperatif.coop/comptes-paiements/ouvrir-un-compte/",
              target: "_blank",
            },
            1: {
              title: "Devenir sociétaire",
              url:
                "https://www.credit-cooperatif.coop/societariat/devenir-societaire/",
              target: "_blank",
            },
          },
        },
        4: {
          title: "Agir ensemble",
          titleUrl: null,
          target: "",
          links: {
            0: {
              title: "Particuliers",
              url: "https://www.credit-cooperatif.coop/",
              target: "_blank",
            },
            1: {
              title: "Économie sociale et institutionnelle",
              url: "https://www.credit-cooperatif.coop/associations-ess/",
              target: "_blank",
            },
            2: {
              title: "Entreprises",
              url: "https://www.credit-cooperatif.coop/Entreprises",
              target: "_blank",
            },
            3: {
              title: "Majeurs protégés",
              url: "https://www.credit-cooperatif.coop/personnes-protegees/",
              target: "_blank",
            },
            4: {
              title: "Sociétaires",
              url: "https://www.credit-cooperatif.coop/societariat/",
              target: "_blank",
            },
          },
        },
        5: {
          title: null,
          titleUrl: null,
          target: "",
          links: {
            0: {
              title: "Mentions légales",
              url: "/mentions-legales",
              target: "",
              internal: true,
            },
            1: {
              title: `Protection des données personnelles \net informations sur les cookies`,
              url: "/protection-des-donnees-personnelles",
              target: "",
              internal: true,
            },
            /* 2: {
              title: "Gestion des cookies",
              tac: true,
            }, */
          },
        },
      },
    };
  },
  /* mounted() {
    this.tac = window.tarteaucitron;
  }, */
  /* methods: {
    handleClickTac() {
      return this.tac.userInterface.openPanel();
    },
  }, */
};
</script>

<style lang="scss" scoped>
$menu-title-font-size: (
  null: 1.5rem,
  $medium-max: 1.375rem,
);

$menu-item-font-size: (
  null: 0.9375rem,
  $medium-max: 0.875rem,
);

.menu-section {
  flex: 1 1 0%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
  height: 290px;
  margin-top: 1.875em;

  @include breakpoint($medium-max) {
    // height: 370px;
    height: 430px;
  }

  @include breakpoint($small-max) {
    height: auto;
  }
}

nav {
  @include breakpoint($medium-min $medium-max) {
    max-width: 50%;
  }

  &:not(:last-child) {
    margin-right: 1.875em;
    margin-bottom: 1.875em;

    @include breakpoint($small-max) {
      margin-right: 0;
    }
  }
}

h2 {
  @include font-size($menu-title-font-size);

  font-family: $interstate-condensed-font-stack;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0.3em;
  text-transform: uppercase;
}

li {
  @include font-size($menu-item-font-size);

  font-weight: 400;
  line-height: 1.37;
  transition: color 0.35s ease;
  white-space: pre;

  @include breakpoint($medium-max) {
    white-space: inherit;
  }

  @include on-event {
    color: v(main-color);
  }
}
</style>
