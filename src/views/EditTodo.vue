<template>
  <div>Hello</div>
  {{ todoId }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({ todoInfo: 'getTodoById' }),
    todoId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
