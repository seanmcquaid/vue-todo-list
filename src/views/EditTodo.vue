<template>
  <div>Hello</div>
  <form @submit.prevent="submitEditedTodo">
    <TextInput
      name="inputText"
      :value="inputText"
      @text-input-on-change="textInputOnChange"
      label="Edit Todo"
    />
    <Button :type="'submit'">Edit Todo</Button>
  </form>
</template>

<script>
import Button from '../components/universal/Button.vue';
import TextInput from '../components/universal/TextInput.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    Button,
    TextInput,
  },
  data() {
    return {
      inputText: '',
    };
  },
  computed: {
    ...mapGetters(['getTodoById']),
    todoId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(['editTodo']),
    textInputOnChange(payload) {
      this[payload.name] = payload.value;
    },
    submitEditedTodo() {
      this.editTodo({
        todo: {
          text: this.inputText,
          isCompleted: false,
        },
        index: Number.parseInt(this.todoId),
      });
      this.$router.push({ name: 'home' });
    },
  },
  mounted() {
    this.inputText = this.getTodoById(Number.parseInt(this.todoId))?.text ?? '';
  },
};
</script>

<style></style>
