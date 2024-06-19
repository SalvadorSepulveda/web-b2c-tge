<template>
	<button
		@click="toggleTheme"
		class="flex justify-center items-center ml-5 text-[#181C31] hover:text-primary dark:text-white dark:hover:text-primary duration-300 cursor-pointer"
	>
		<span class="sr-only">theme</span>
		<generic-icon v-if="theme === 'light'" name="sun" width="23"/>
		<generic-icon v-else name="moon" width="23"/>
	</button>
</template>

<script>
import {useTheme} from "~/composables/theme.js";

export default {
	name: "NavbarColorSwitcher",
	setup() {
		const {theme, toggleTheme} = useTheme();
		return {
			theme,
			toggleTheme
		}
	}
}
</script>