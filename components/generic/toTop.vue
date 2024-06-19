<template>
	<button
		:style="buttonStyle"
		class="fixed bottom-10 right-10 z-50 w-10 h-10 bg-primary rounded-lg p-2 shadow hover:scale-95 duration-300 transition"
		@click="scrollToTop"
		aria-label="Ir arriba"
	>
		<svg fill="#fff" viewBox="-1 1 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg">
			<path d="M15.3 15.32a1.026 1.026 0 0 1-.727-.302L8.5 8.946l-6.073 6.072a1.03 1.03 0 0 1-1.456-1.455l6.801-6.8a1.03 1.03 0 0 1 1.456 0l6.8 6.8a1.03 1.03 0 0 1-.727 1.757z"/>
		</svg>
	</button>
</template>

<script>
import {useScroll} from "~/composables/scroll.js";

export default {
	name: "genericToTop",
	setup() {
		const {position, initialize, scrollToTop} = useScroll();
		onMounted(initialize);
		const buttonStyle = computed(() => ({
			opacity: position.value > 65 ? 1 : 0,
			transform: position.value > 65 ? 'scale(' + (position.value > 65 ? 1 : position.value / 65) + ')' : 'scale(.5)',
			cursor: position.value > 65 ? 'pointer' : 'default'
		}));
		const visible = computed(() => position.value > 65);
		return {buttonStyle, scrollToTop, visible};
	}
}
</script>
