<script setup>
import { ref, onMounted } from 'vue';

const name = ref('john doe');
const status = ref(true);
const tasks = ref(['task1', 'task2', 'task3']);
const newTask = ref('aaaa');

const changeStatus = () => {
  status.value = !status.value;
};

const addTask = () => {
  tasks.value = [...tasks.value, newTask.value];
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map(task => task.title);
  } catch(error) {
    console.log(error)
  }
})

</script>

<template>
  <div>
    <h1 class="text-2xl">Vue Jobs</h1>
    <h1>{{ name }}</h1>
    <p v-if="status">User active</p>
    <p v-else>User inactive</p>

    <form @submit.prevent="addTask">
      <label for="newTask">Add Task</label>
      <input type="text" id="newTask" name="newTask" v-model="newTask">
      <button type="submit">Submit</button>
    </form>
  
    <h1>Tasks</h1>
    
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">delete</button>
      </li>
    </ul>

    <a :href="link">Go to google</a>

    <div>
      <button @click="changeStatus">Change status</button>
    </div>
  </div>
</template>


<style scoped>
  p{
    color:red;
  }
</style>