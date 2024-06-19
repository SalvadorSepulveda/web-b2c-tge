<template>
	<span :style="iconStyle" v-if="iconSvg" v-html="iconSvg"></span>
</template>

<script>
import { Icons } from "~/assets/icons.js";

export default {
	name: "genericIcon",
	props: {
		name: {
			type: String,
			required: true
		},
		width: {
			type: String,
			required: false
		},
	},
	computed: {
		iconSvg() {
			return Icons[this.name] || null;
		},
		iconStyle() {
			if (!this.width) return {};
			return {
				width: this.width + 'px',
				display: 'inline-block'
			};
		}
	}
}
</script>
