<template>
  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      class="{{isCompleted : todo.isCompleted}}"
    >
      <span>
        {{ todo.text }}
      </span>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      todos: state => state.todos,
    }),
  },
  methods: mapActions(['deleteTodo', 'completeTodo']),
  mounted() {
    console.log(this.todos);
  },
};
</script>

<style></style>
