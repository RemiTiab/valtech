<template>
  <footer class="wrapper">
    <div class="container">
      <div class="content">
        <div class="copyright">
          <a href="https://www.remitiab.fr" target="_blank"
            >Rémi Tiab - Frontend Developer</a
          >
        </div>
        <MainLogo customclass="logo--footer" />
      </div>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
footer {
  background-color: v(black-color);
  padding-top: 1.275rem;
  padding-bottom: 1.275rem;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include breakpoint($small-max) {
      justify-content: center;
      flex-direction: column;
    }
  }

  .copyright {
    font-size: 0.813rem; // 13px
    font-weight: 300;
    color: v(white-color);
    transform: scale(1);
    transform-origin: center center;
    transition: all 0.2s ease-in-out;

    @include breakpoint($small-max) {
      margin-bottom: 1rem;
    }

    &:hover {
      transform: scale(1.1);
      font-weight: 700;
    }
  }
}
</style>
