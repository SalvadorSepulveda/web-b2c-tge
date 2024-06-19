<template>
	<div :style="styleMessage" class="flex bg-white dark:bg-dark dark:text-white border border-stroke dark:border-stroke-dark bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm p-4 fixed top-[80px] right-1/2 translate-x-1/2 max-w-[400px] shadow rounded-md z-50 duration-300">
	 	<span v-if="message">{{ emoji }} {{ $t(message) }}</span>
	</div>
</template>

<script>
import useNotify from "~/composables/notify.js";

export default {
	computed: {
		styleMessage() {
			if (this.show) {
				return {
					opacity: 1
				};
			}
			return {
				opacity: 0
			};
		}
	},
	setup() {
		const { message, show, emoji } = useNotify();
		return {
			emoji,
			show,
			message,
		};
	},
};
</script>