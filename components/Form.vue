<template>
	<form
		@submit.prevent="$emit('submitForm')"
		class="max-w-xl mx-auto border-solid border-2 border-indigo-500 rounded-md p-5 sm:p-10"
	>
		<p
			class="text-center font-semibold text-white"
			v-if="!getShowSummaryValue"
		>
			Krok {{ getActiveStepIndex }}/{{ totalSteps }}
		</p>

		<div v-show="getActiveStepIndex === 1">
			<slot name="step1" />
		</div>

		<div v-show="getActiveStepIndex === 2">
			<slot name="step2" />
		</div>

		<div v-show="getActiveStepIndex === 3">
			<slot name="step3" />
		</div>

		<div v-show="getActiveStepIndex === 4 && !getShowSummaryValue">
			<slot name="step4" />
		</div>

		<div v-show="getShowSummaryValue">
			<slot name="step5" />
		</div>

		<slot name="footer"> </slot>
	</form>
</template>

<script setup lang="ts">
import { useFormStore } from "@/stores/form";

// Pick totalSteps, getActiveStepIndex and getShowSummaryValue from form store
const { totalSteps, getActiveStepIndex, getShowSummaryValue } = useFormStore();
</script>
