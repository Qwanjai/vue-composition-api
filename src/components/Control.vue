<template>
	<button @click="clickToLike">Like</button>
	{{ post.likes }}
	<hashtag v-for="hashtag in post.hashtags" :key="hashtag" :hashtag="hashtag"></hashtag>
</template>

<script>
import Hashtag from "./Hashtag.vue";
import { store } from "../store.js";

export default {
	components: {
		Hashtag,
	},
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const clickToLike = () => {
			store.incrementLike(props.post);
		};
		return { clickToLike };
	},
};
</script>

<style lang="scss" scoped></style>
