<template>
	<li class="font-medium dark:text-white hover:text-primary dark:hover:text-primary duration-300">
		<NuxtLink :to="route">
			{{ label }}
		</NuxtLink>
	</li>
</template>

<script>
export default {
	name: "navbarLink",
	props: {
		label : {
			type: String,
			required: true
		},
		route : {
			type: String,
			required: true
		}
	}
}
</script>