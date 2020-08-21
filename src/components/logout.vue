<template>
  <div></div>
</template>

<script>
/* eslint-disable */
export default {
  created() {
    this.$store.dispatch("destroyToken").then(response => {
      this.$router.push({ name: "Home" });
    });
  }
};
</script>