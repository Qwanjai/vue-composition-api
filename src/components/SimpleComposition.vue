<template>
	<button @click="a++">A :{{ a }}</button>
	<button @click="b++">B :{{ b }}</button>
	<p>{{ total }}</p>
	<div v-for="number in logHistory" :key="number">
		{{ number }}
	</div>
</template>

<script>
import { useNumbers } from "../src/components/composables/useNumbers.js";
export default {
	setup() {
		// const { a, b, logHistory, total } = useNumbers();

		// watch(count, (newVal) => {
		// 	console.log(`count : ${newVal}`);
		// });
		// watchEffect(() => {
		// 	console.log(`${count.value} | ${a.value} | ${b.value}  `);
		// });

		return useNumbers();
	},
};
</script>

<style lang="scss" scoped></style>
