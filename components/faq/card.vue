<template>
	<div class="faq border-b border-stroke last-of-type:border-none dark:border-stroke-dark duration-300" :class="isOpen ? 'active' : ''" >
		<button class="faq-btn relative flex w-full justify-between py-6 px-[18px] text-left text-base font-medium text-black dark:text-white sm:px-[26px] sm:text-lg duration-300" @click="toggle">
			{{ title }}
		</button>
		<div class="faq-content h-auto overflow-hidden px-[18px]  sm:px-[26px] duration-300" >
			<p class="text-bodywhite dark:text-body border-t border-stroke dark:border-stroke-dark pt-6 duration-300">
				<slot />
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "faqCard",
	props: {
		title: {
			type: String,
			required: true,
		}
	},
	data: () => ({
		isOpen: false
	}),
	methods: {
		toggle() {
			this.isOpen = !this.isOpen
		}
	}
}
</script>
