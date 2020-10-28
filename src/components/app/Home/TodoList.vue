<template>
  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      :class="{ isCompleted: todo.isCompleted }"
    >
      <span @click="completeTodo(index)">
        {{ todo.text }}
      </span>
      <Button @click="deleteTodo(index)">Delete</Button>
      <router-link :to="{ name: 'edit', params: { id: index } }">
        Edit
      </router-link>
    </li>
  </ul>
</template>

<script>
import Button from '../../universal/Button.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Button,
  },
  computed: mapState({
    todos: state => state.todos,
  }),
  methods: mapActions(['deleteTodo', 'completeTodo']),
};
</script>

<style scoped>
.isCompleted {
  text-decoration: line-through;
}
</style>
