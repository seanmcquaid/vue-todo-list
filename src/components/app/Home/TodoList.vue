<template>
  <ol>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      :class="{ isCompleted: todo.isCompleted }"
    >
      <span @click="completeTodo(index)">
        {{ todo.text }}
      </span>
      <router-link :to="{ name: 'edit', params: { id: index } }" class="link">
        Edit
      </router-link>
      <Button @click="deleteTodo(index)">Delete</Button>
    </li>
  </ol>
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

.link {
  text-decoration: none;
  color: black;
}

.link:hover {
  text-decoration: underline;
}
</style>
