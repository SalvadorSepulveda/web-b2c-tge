<template>
	<NuxtLink
		target="_blank"
		:to="src"
		class="rounded-md bg-[#111] py-2 px-4 text-base font-medium text-white hover:bg-opacity-90 flex items-center gap-3 w-fit max-h-[48px] whitespace-nowrap"
	>
		<span class="sr-only">{{ text }}</span>
		<generic-icon :name="icon" width="40" class="border-r border-white pr-3" />
		<div class="flex flex-col">
			<span v-if="smallText" class="uppercase text-[10px] leading-tight">
				{{ smallText }}
			</span>
			<span class="font-semibold leading-tight">
				{{ text }}
			</span>
		</div>
	</NuxtLink>
</template>

<script>
export default {
	name: "genericLinkButton",
	props: {
		smallText: {
			type: String,
			required: false
		},
		text: {
			type: String,
			required: false
		},
		icon: {
			type: String,
			required: false
		},
		width: {
			type: String,
			required: false
		},
		src: {
			type: String,
			required: true
		}
	}
}
</script>