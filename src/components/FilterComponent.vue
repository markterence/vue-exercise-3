<template>
  <div class="filterComponent mb-5">
    <h2>Filtering, Conditional Rendering and Scoped Slots</h2>
    <div class="container-fluid mt-3">
      <div class="form">
        <div class="form-container">
          <input type="text" class="form-control" placeholder="Filter" v-model="search">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="chkStar" v-model="ratingFilter">
            <label class="form-check-label" for="chkStar" style="user-select:none">Difficulty</label>
          </div>
          <div v-show="ratingFilter" class="mt-2 ">
            <div class="d-flex align-items-center">
              <button class="btn btn-warning mr-1" @click="selectRandomLevel">Random using <code>v-model</code></button>
              <select class="form-control" v-model="difficulty" ref="dropdownDifficulty">
                <option v-for="(rating,i) in ratingOps" :key="i" :value="rating.value">{{rating.text}}</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      <div class="my-4">
        <BaseFilter 
          :list="filterTopics(topics)"
          :filter="(item) => (difficulty == item.value || (difficulty == 0 || !ratingFilter))"
        >
          <template v-slot:default="{ list }">
            <Term v-for="(topic) in list" :key="topic.id" 
              :title="topic.title" 
              :active="topic.id === selectedItem" 
              @on-header-click="setActiveTerm(topic.id)"
            >
              <component v-if="topic.component" :is="topic.component" v-bind="topic.props" />
            </Term>
          </template>
        </BaseFilter> 
      </div>
    </div>
  </div>
</template>

<script>
import Term from "./Term";
import ClassBindingContent from './ClassBindingContent';

import { generateSearchRegex } from '../utils/search'
export default {
  components: {
    Term,
  },
  data() {
    return {
      selectedItem: -1,
      topics: [
        {
          title: 'Class and Style Binding',
          id: 1, 
          value: 1,
          component: Term,
          props: {
            title: `Dynamic components, use with care.`
          }
        },
        {
          title: 'Element & Component Access',
          id: 2,
          value: 2
        },
        {
          title: 'Filtering, Conditional Rendering',
          id: 3,
          value: 2
        },
        {
          title: 'Scoped Slots',
          id: 4,
          value: 2
        },
        {
          title: 'Render Functions & JSX',
          id: 5,
          value: 3
        },
        {
          title: 'Dynamic Component',
          id: 6, 
          value: 1,
          component: ClassBindingContent
        },
      ],
      search: "",
      difficulty: 0,
      ratingFilter: false,
      ratingOps: [
        {
          text:'All',
          value: 0
        },
        {
          text:'Intermediate',
          value: 1
        },
        {
          text:'Advanced',
          value: 2
        },
        {
          text:'Pro',
          value: 3
        }
      ]
    };
  },
  methods: {
    randomizeLevel(){
      return Math.floor(Math.random() * Math.floor(this.ratingOps.length));
    },
    selectRandomLevel() { 
      this.difficulty = this.randomizeLevel() 
    },
    setActiveTerm(termId) {
      this.selectedItem = termId
    },
    filterTopics(topics){
      const reg = generateSearchRegex(this.search)
      if(reg) {
        return topics.filter(
          (t) => reg.test(t.title)
        )
      }
      return topics
    }
  }
};
</script>

<style scoped>
</style>
