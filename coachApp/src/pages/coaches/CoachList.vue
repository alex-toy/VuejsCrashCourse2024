<template>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register">Register as a coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item
                    v-for="coach in filteredCoaches" :key="coach.id"
                    :id="coach.id"
                    :firstName="coach.firstName"
                    :lastName="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas"
                ></coach-item>
            </ul>
            <h3 v-else>no coaches found</h3>
        </base-card>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'

export default {
    components : {
        CoachItem, CoachFilter
    },
    data(){
        return {
            activeFilters : {
                frontend : true,
                backend : true,
                career : true,
            }
        }
    },
    methods: {
        setFilters(updatedFilters){
            this.activeFilters = updatedFilters;
        }
    },
    computed : {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(c => 
                this.activeFilters.frontend && c.areas.includes('frontend') ||
                this.activeFilters.backend && c.areas.includes('backend') ||
                this.activeFilters.career && c.areas.includes('career')
            );
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>