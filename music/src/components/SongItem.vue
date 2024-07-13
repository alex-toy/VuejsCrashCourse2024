<template>
  <li
    class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
  >
    <div>
      <a href="#" class="font-bold block text-gray-600">{{ songTitle }}</a>
      <span class="text-gray-500 text-sm">{{ artistName }}</span>
    </div>

    <div class="text-gray-600 text-lg">
      <span class="comments">
        <i class="fa fa-comments text-gray-600" @click="resetUser"></i>
        {{ messageCount }}
      </span>
    </div>
  </li>
</template>

<script>
import { mapState } from 'pinia'
import useModalStore from '../stores/modal'

export default {
  name: 'SongItem',
  props: ['songTitle', 'artistName', 'messageCount'],
  computed: {
    ...mapState(useModalStore, ['resetUser'])
  },
  methods: {}
}
</script>
