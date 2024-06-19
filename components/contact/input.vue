<template>
	<div class="w-full px-[22px] md:w-1/2">
		<div class="mb-8">
			<input
				:id="name"
				class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-bodywhite dark:text-body duration-300 outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary duration-300"
				:name="name"
				:placeholder="placeholder"
				:type="type"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "InputComponent",
	props: {
		placeholder: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: "text"
		},
		modelValue: {
			type: String,
			default: ""
		}
	}
}
</script>