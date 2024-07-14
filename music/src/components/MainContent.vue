<template>
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <slot name="songHeader" :title="title" :iconClass="iconClass"></slot>
      <ol id="playlist">
        <SongItem
          v-for="song in songs"
          :key="song.name"
          :artistName="song.artist"
          :songTitle="song.title"
          :messageCount="song.messageCount"
        ></SongItem>
      </ol>
    </div>
  </section>
</template>

<script>
import SongItem from './SongItem.vue'

export default {
  components: { SongItem },
  name: 'MainContent',
  data() {
    return {
      songs: [
        { title: 'ti amo', artist: 'laura pausini', messageCount: 3 },
        { title: 'ti odio', artist: 'fiorella', messageCount: 12 },
        { title: 'amore', artist: 'eros ramazzotti', messageCount: 9 }
      ],
      title: 'Song',
      iconClass: 'fa-headphones-alt'
    }
  }
}
</script>
