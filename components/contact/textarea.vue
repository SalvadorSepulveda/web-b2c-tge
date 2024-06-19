<template>
	<div class="w-full px-[22px]">
		<div class="mb-8">
			<textarea
				:id="name"
				class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary duration-300"
				:name="name"
				:placeholder="placeholder"
				:rows="rows"
				:value="modelValue"
				@input="updateValue"
			></textarea>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			default: ""
		},
		rows: {
			type: Number,
			default: 6
		},
		modelValue: {
			type: String,
			default: ""
		}
	},
	methods: {
		updateValue($event) {
			this.$emit('update:modelValue', $event.target.value);
		}
	}
}
</script>