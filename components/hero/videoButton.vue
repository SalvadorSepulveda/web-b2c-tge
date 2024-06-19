<template>
	<div
		class="glightbox flex gap-5 w-fit items-center text-black hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer duration-300"
		@click="showVideo"
	>
        <span
			class="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-current"
		>
			<generic-icon name="play" width="25"/>
        </span>
		<span class="text-base font-medium">
            <span class="block text-sm">{{ title }}</span>
            {{ description }}
        </span>
	</div>
</template>

<script>
import 'glightbox/dist/css/glightbox.min.css';
let GLightbox;
export default {
	name: 'HeroVideoButton',
	props: {
		url: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		} ,
		source: {
			type: String,
			default: 'youtube',
		},
	},
	async mounted() {
		if (process.client) {
			GLightbox = (await import('glightbox')).default;
		}
	},
	methods: {
		showVideo() {
			if (process.client) {
				GLightbox({
					href: this.url,
					type: 'video',
					source: this.source,
					width: 900,
					autoplayVideos: true,
				});
			}
		},
	},
}
</script>
