<script>
export default {
  data(){
    return {
      name : "john doe",
      status : false,
      tasks : ['clean', 'wash', 'work'],
      link: 'https://google.com'
    };
  },
  methods: {
    changeStatus(){
      this.status = !this.status;
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <p v-if="status">User active</p>
    <p v-else>User inactive</p>
  
    <h1>Tasks</h1>
    
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>

    <a :href="link">Go to google</a>

    <div>
      <button @click="changeStatus">Change status</button>
    </div>
  </div>
</template>


<style scoped>
  h1{
    color:red;
  }
</style>