// import datasApiService from "@/services/datasApiService";

export const state = () => ({
  country: {},
  countries: [
    {
      id: 0,
      surtitle: "Front-end",
      title: "valtech_",
      subtitle:
        "Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",
      chapo:
        "Factius lorem isun dolor sit a met ipsun lorem amet, lorem ipsun dolor sit a met lorem dolor sit a met dolce mateus.",
      ctaText: "Explore More",
      ctaLink: "#",
      ctaTarget: "_blank",
      backgroundSrc: "https://source.unsplash.com/random/700x400?sig=0",
    },
    {
      id: 1,
      surtitle: "Italy",
      title: "Venice",
      subtitle: "",
      chapo:
        "Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",
      ctaText: "Explore More",
      ctaLink: "#",
      ctaTarget: "_blank",

      backgroundSrc: "https://source.unsplash.com/random/500x500?sig=1",
    },
    {
      id: 2,
      surtitle: "Germany",
      title: "Berlin",
      subtitle: "",
      chapo:
        "Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",
      ctaText: "Explore More",
      ctaLink: "#",
      ctaTarget: "_blank",

      backgroundSrc: "https://source.unsplash.com/random/500x500?sig=2",
    },
    {
      id: 3,
      surtitle: "Spain",
      title: "Barcelona",
      subtitle: "",
      chapo:
        "Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",
      ctaText: "Explore More",
      ctaLink: "#",
      ctaTarget: "_blank",

      backgroundSrc: "https://source.unsplash.com/random/500x500?sig=3",
    },
    {
      id: 4,
      surtitle: "France",
      title: "Paris",
      subtitle: "",
      chapo:
        "Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",
      ctaText: "Explore More",
      ctaLink: "#",
      ctaTarget: "_blank",

      backgroundSrc: "https://source.unsplash.com/random/500x500?sig=4",
    },
    {
      id: 5,
      surtitle: "Netherlands",
      title: "Amsterdam",
      subtitle: "",
      chapo:
        "Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",
      ctaText: "Explore More",
      ctaLink: "#",
      ctaTarget: "_blank",

      backgroundSrc: "https://source.unsplash.com/random/500x500?sig=5",
    },
    {
      id: 6,
      surtitle: "United Kingdom",
      title: "London",
      subtitle: "",
      chapo:
        "Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem isun dolor sit a met ipsun lorem amet",
      ctaText: "Explore More",
      ctaLink: "#",
      ctaTarget: "_blank",

      backgroundSrc: "https://source.unsplash.com/random/500x500?sig=6",
    },
  ],
});

export const mutations = {};

export const actions = {
  // fetchDatasCountries({ commit, getters }, content) {
  //   const datasCountries = getters.getDatasCountriesByRequest("countries");
  //   if (datasCountries) {
  //     commit("SET_DATAS_COUNTRIES", datasCountries);
  //     return datasCountries;
  //   } else {
  //     return datasApiService
  //       .getDatas("countries")
  //       .then((response) => {
  //         commit("SET_DATAS_COUNTRIES_CACHE", response.data);
  //         return response.data;
  //       })
  //       .catch((/* error */) => {
  //         /* console.error(
  //           "There was an error fetching graph data:" + error.message
  //         ); */
  //         return false;
  //       });
  //   }
  // },
};

export const getters = {
  // getDatasCountriesByRequest: (state) => (request) => {
  //   return state.countries.find((country) => country.request === request);
  // },
};
