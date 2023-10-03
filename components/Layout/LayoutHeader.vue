<template>
  <header class="wrapper">
    <div class="container">
      <div class="content">
        <MainLogo customclass="logo--header" />
        <BurgerMenu />
      </div>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
header {
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
