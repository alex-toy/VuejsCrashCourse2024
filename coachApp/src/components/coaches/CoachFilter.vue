<template>
    <base-card>
        <h2>Find your coach</h2>
        <span class="filter-option">
            <input type="checkbox" id="frontend" checked @change="setFilter" />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="backend" checked @change="setFilter" />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="career" checked @change="setFilter" />
            <label for="career">Career</label>
        </span>
    </base-card>

    <base-card>
        <div v-for="filter in addedFilters" :key="filter.frontend">
        <span class="filter-option">
            <input type="checkbox" :id="filter.id" :checked="filter.frontend" @change="setAddedFilter(filter.id, 'frontend')" />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" :id="filter.id" :checked="filter.backend" @change="setAddedFilter(filter.id, 'backend')" />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option" v-if="filter.frontend && filter.backend">
            <input type="checkbox" :id="filter.id" :checked="filter.career" @change="setAddedFilter(filter.id, 'career')" />
            <label for="career">Career</label>
        </span>
        <button @click="removeFilter(filter.id)">Remove</button>
        </div>
        <button @click="addFilter">Add</button>
    </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend : true,
                backend : true,
                career : true,
            },
            addedFilters : []
        };
    },
    methods: {
        addFilter() {
            const id = Date.now();
            this.addedFilters = [...this.addedFilters, { id : id, frontend : true, backend : true, career : true,}];
        },
        removeFilter(id) {
            console.log(id)
            this.addedFilters = this.addedFilters.filter(f => f.id !== id);
        },
        setFilter(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId] : isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters)
        },
        setAddedFilter(id, type){
            const filter = this.addedFilters.find(f => f.id === +id)
            if (type === 'backend') filter.backend = !filter.backend;
            else if (type === 'frontend') filter.frontend = !filter.frontend;
            else if (type === 'career') filter.career = !filter.career;
        }
    }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>