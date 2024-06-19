<template>
	<div class="w-screen h-screen flex items-center justify-center">
		<div class="relative font-medium dark:text-white h-[44px] text-sm w-fit xs:w-[170px]">
			<button class="cursor-pointer flex justify-between h-full rounded-lg items-center border border-transparent gap-2 w-full hover:bg-[#F8F9FF] dark:hover:bg-dark px-2 duration-300" @click="toggle">
				<span class="sr-only">change language</span>
				<span class="flex items-center gap-2">
				<generic-icon width="28" :name="$i18n.locale" alt="'flag-' + $i18n.locale" />
				<span class="hidden xs:inline-block">{{ currentLanguageName }}</span>
			</span>
				<generic-icon v-if="!open" width="20" name="chevronDown" alt="chevronDown"/>
				<generic-icon v-else width="20" name="chevronUp" alt="chevronUp"/>
			</button>
			<div v-if="open" class="z-20 bg-white dark:bg-black duration-300 absolute flex flex-col top-12 shadow rounded-lg w-full border border-stroke dark:border-stroke-dark overflow-hidden">
				<button
					class="cursor-pointer flex p-2 items-center w-full justify-center xs:justify-start gap-2 hover:bg-[#F8F9FF] dark:hover:bg-dark"
					v-for="locale in availableLocales" :key="locale.code" @click="setLanguage(locale)"
				>
					<generic-icon width="28" :name="locale.code" alt="'flag-' + locale.code" /> <span class="hidden xs:inline-block">{{ locale.name }}</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TestPage",
	data: () => ({
		open: false
	}),
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		},
		currentLanguageName() {
			const currentLocale = this.$i18n.locales.find(locale => locale.code === this.$i18n.locale);
			return currentLocale ? currentLocale.name : '';
		}
	},
	methods: {
		toggle() {
			this.open = !this.open;
		},
		setLanguage(locale) {
			this.$i18n.setLocale(locale.code);
			this.toggle();
		}
	}
}
</script>
