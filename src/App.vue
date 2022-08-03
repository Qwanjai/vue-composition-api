<template>
	<input :value="currentTag" @input="setHashtag" />
	<card v-for="post in filterPosts" :key="post.id">
		<template v-slot:title>{{ post.title }}</template>
		<template v-slot:content>{{ post.content }}</template>
		<template v-slot:description><control :post="post" /></template>
	</card>
</template>

<script>
import { computed } from "vue";
import { store } from "./store.js";
import Card from "../src/components/Card.vue";
import Control from "../src/components/Control.vue";
export default {
	components: {
		Card,
		Control,
	},
	setup() {
		const setHashtag = ($event) => {
			store.setHashtag($event.target.value);
		};
		return { filterPosts: computed(() => store.filterPosts), currentTag: computed(() => store.state.currentTag), setHashtag };
	},
};
</script>

<style lang="scss" scoped></style>
