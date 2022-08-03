import { ref, reactive, computed, watch, watchEffect } from "vue";
export function useNumbers() {
	const a = ref(0);
	const b = ref(0);
	const logHistory = ref([]);
	watch([a, b], ([newa, newb], [preva, prevb]) => {
		if (preva !== newa) {
			logHistory.value.push(` A: ${preva} --> ${newa}`);
		}
		if (prevb !== newb) {
			logHistory.value.push(` B:${prevb} --> ${newb}`);
		}
	});
	const total = computed(() => {
		return a.value + b.value;
	});
	return { a, b, logHistory, total };
}
