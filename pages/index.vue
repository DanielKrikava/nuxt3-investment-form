<template>
	<section class="investment-section max-w-screen-md mx-auto pt-20 px-5">
		<div class="investment-section__heading text-white text-center">
			<h1 class="text-3xl font-semibold mb-7">
				Investiční formulář pro pravidelné investování
			</h1>
		</div>

		<Form @submit-form="submitForm">
			<template #step1>
				<p class="form-step-heading">
					Pravidelná výše investice v korunách.
				</p>
				<div class="form-data">
					<div class="form-data__item">
						<label for="investmentAmount" class="form-input-label"
							>Výše investice v korunách</label
						>
						<div class="flex items-center">
							<input
								type="number"
								id="investmentAmount"
								name="investmentAmount"
								placeholder="100000"
								v-model="getFormData.step1.investmentAmount"
								class="form-input"
							/>
							<div class="text-white font-semibold text-lg ml-2">
								Kč
							</div>
						</div>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step1.investmentAmount.$error"
								>{{
									v$.step1.investmentAmount.$errors[0]
										.$message
								}}</span
							>
						</div>
					</div>
					<div class="form-data__item">
						<input
							id="minmax-range"
							type="range"
							min="25000"
							max="1000000"
							step="25000"
							v-model="getFormData.step1.investmentAmount"
							class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
						/>
					</div>
				</div>
			</template>

			<template #step2>
				<p class="form-step-heading">
					Z legislativních důvodů prosíme o vyplnění osobních údajů
					pro ověření Vaší identity.
				</p>
				<div class="form-data">
					<div class="form-data__item">
						<label for="firstName" class="form-input-label"
							>Jméno</label
						>
						<input
							type="text"
							id="firstName"
							name="firstName"
							placeholder="Jan"
							v-model="getFormData.step2.firstName"
							class="form-input"
						/>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step2.firstName.$error"
								>{{
									v$.step2.firstName.$errors[0].$message
								}}</span
							>
						</div>
					</div>
					<div class="form-data__item">
						<label for="lastName" class="form-input-label"
							>Příjmení</label
						>
						<input
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Novák"
							v-model="getFormData.step2.lastName"
							class="form-input"
						/>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step2.lastName.$error"
								>{{
									v$.step2.lastName.$errors[0].$message
								}}</span
							>
						</div>
					</div>
					<div class="form-data__item">
						<label for="email" class="form-input-label"
							>Email</label
						>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="jan.novak@email.cz"
							v-model="getFormData.step2.email"
							class="form-input"
						/>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step2.email.$error"
								>{{ v$.step2.email.$errors[0].$message }}</span
							>
						</div>
					</div>
					<div class="form-data__item">
						<label for="phoneNumber" class="form-input-label"
							>Telefonní číslo</label
						>
						<input
							type="text"
							id="phoneNumber"
							name="phoneNumber"
							placeholder="123456789"
							v-model="getFormData.step2.phoneNumber"
							class="form-input"
						/>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step2.phoneNumber.$error"
								>{{
									v$.step2.phoneNumber.$errors[0].$message
								}}</span
							>
						</div>
					</div>
				</div>
			</template>

			<template #step3>
				<p class="form-step-heading">
					Z legislativních důvodů prosíme o vyplnění osobních údajů
					pro ověření Vaší identity.
				</p>
				<div class="form-data">
					<div class="form-data__item">
						<label for="address" class="form-input-label"
							>Adresa trvalého pobytu</label
						>
						<input
							type="text"
							id="address"
							name="address"
							placeholder="Novákova 14, 123 00 Novákov"
							v-model="getFormData.step3.address"
							class="form-input"
						/>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step3.address.$error"
								>{{
									v$.step3.address.$errors[0].$message
								}}</span
							>
						</div>
					</div>
					<div class="form-data__item">
						<label for="nationalIdNumber" class="form-input-label"
							>Rodné číslo</label
						>
						<input
							type="text"
							id="nationalIdNumber"
							name="nationalIdNumber"
							placeholder="881206/1434"
							v-model="getFormData.step3.nationalIdNumber"
							class="form-input"
						/>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step3.nationalIdNumber.$error"
								>{{
									v$.step3.nationalIdNumber.$errors[0]
										.$message
								}}</span
							>
						</div>
					</div>
					<div class="form-data__item">
						<label for="idNumber" class="form-input-label"
							>Číslo občanského průkazu</label
						>
						<input
							type="text"
							id="idNumber"
							name="idNumber"
							placeholder="101923678"
							v-model="getFormData.step3.idNumber"
							class="form-input"
						/>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step3.idNumber.$error"
								>{{
									v$.step3.idNumber.$errors[0].$message
								}}</span
							>
						</div>
					</div>
					<div class="form-data__item">
						<label for="bankAccountNumber" class="form-input-label"
							>Číslo bankovního účtu (pro případné výplaty výnosů
							z investice)</label
						>
						<input
							type="text"
							id="bankAccountNumber"
							name="bankAccountNumber"
							placeholder="123456789/0000"
							v-model="getFormData.step3.bankAccountNumber"
							class="form-input"
						/>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step3.bankAccountNumber.$error"
								>{{
									v$.step3.bankAccountNumber.$errors[0]
										.$message
								}}</span
							>
						</div>
					</div>
				</div>
			</template>

			<template #step4>
				<p class="form-step-heading">
					Souhlas se zpracováním osobních údajů.
				</p>
				<div class="form-data">
					<div class="form-data__item text-left sm:text-center">
						<div class="inline-flex items-center">
							<label
								class="relative flex cursor-pointer items-center rounded-full p-3"
								for="privacyPolicyConsent"
							>
								<input
									id="privacyPolicyConsent"
									name="privacyPolicyConsent"
									type="checkbox"
									v-model="
										getFormData.step4.privacyPolicyConsent
									"
									class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-indigo-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
								/>
								<div
									class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
										viewBox="0 0 20 20"
										fill="currentColor"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</label>
							<label
								class="mt-px cursor-pointer select-none text-white"
								for="privacyPolicyConsent"
							>
								Souhlasím se zpracováním osobních údajů
							</label>
						</div>
						<div class="form-error">
							<span
								class="form-error__message"
								v-if="v$.step4.privacyPolicyConsent.$error"
								>{{
									v$.step4.privacyPolicyConsent.$errors[0]
										.$message
								}}</span
							>
						</div>
					</div>
				</div>
			</template>

			<template #step5>
				<p class="form-step-heading">Souhrn údajů</p>
				<div class="form-data">
					<div class="form-data__item text-white">
						<div class="summary-item">
							<span class="summary-item__heading"
								>Pravidelná výše investice v korunách</span
							>
							<p class="summary-item__value">
								{{ getFormDataSummary.investmentAmount }} Kč
							</p>
						</div>
						<div class="summary-item">
							<span class="summary-item__heading">
								Jméno a příjmení
							</span>
							<p class="summary-item__value">
								{{ getFormDataSummary.firstName }}
								{{ getFormDataSummary.lastName }}
							</p>
						</div>
						<div class="summary-item">
							<span class="summary-item__heading"> Email </span>
							<p class="summary-item__value">
								{{ getFormDataSummary.email }}
							</p>
						</div>
						<div class="summary-item">
							<span class="summary-item__heading">
								Telefonní číslo
							</span>
							<p class="summary-item__value">
								{{ getFormDataSummary.phoneNumber }}
							</p>
						</div>
						<div class="summary-item">
							<span class="summary-item__heading">
								Adresa trvalého pobytu
							</span>
							<p class="summary-item__value">
								{{ getFormDataSummary.address }}
							</p>
						</div>
						<div class="summary-item">
							<span class="summary-item__heading">
								Rodné číslo
							</span>
							<p class="summary-item__value">
								{{ getFormDataSummary.nationalIdNumber }}
							</p>
						</div>
						<div class="summary-item">
							<span class="summary-item__heading">
								Číslo občanského průkazu
							</span>
							<p class="summary-item__value">
								{{ getFormDataSummary.idNumber }}
							</p>
						</div>
						<div class="summary-item">
							<span class="summary-item__heading">
								Číslo bankovního účtu
							</span>
							<p class="summary-item__value">
								{{ getFormDataSummary.bankAccountNumber }}
							</p>
						</div>
						<div class="summary-item">
							<span class="summary-item__heading">
								Souhlas se zpracováním osobních údajů
							</span>
							<p class="summary-item__value">Ano</p>
						</div>
					</div>
				</div>
			</template>

			<template #footer>
				<div class="flex justify-between flex-wrap">
					<button
						type="button"
						@click="prevStep"
						v-if="getActiveStepIndex > 1"
						class="form-button"
					>
						Předchozí krok
					</button>
					<button
						type="button"
						@click="validateStep(getActiveStepIndex)"
						v-if="getActiveStepIndex < totalSteps"
						class="ml-auto form-button"
					>
						Další krok
					</button>
					<button
						type="submit"
						v-if="
							getActiveStepIndex === totalSteps &&
							!getShowSummaryValue
						"
						class="form-button"
					>
						Dokončit a odeslat
					</button>
					<button
						type="button"
						@click="$reset"
						v-if="getShowSummaryValue"
						class="form-button"
					>
						Začít znovu
					</button>
				</div>
			</template>
		</Form>
	</section>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
// Import needed validators from Vuelidate
import {
	requiredIf,
	email,
	sameAs,
	minValue,
	maxValue,
	helpers,
} from "@vuelidate/validators";
// Import form store
import { useFormStore } from "@/stores/form";

// Pick totalSteps, getActiveStepIndex, formData, getFormData, fetchFormData, getFormDataSummary, getShowSummaryValue, $reset and prevStep/NextStep functions from form store
const {
	totalSteps,
	getActiveStepIndex,
	formData,
	getFormData,
	prevStep,
	nextStep,
	getFormDataSummary,
	getShowSummaryValue,
	fetchFormData,
	$reset,
} = useFormStore();

// Regex helpers
const containsNumber = helpers.regex(/[0-9]/);

// Vuelidate - Rules for form validation
const rules = computed(() => {
	return {
		step1: {
			investmentAmount: {
				requiredIf: helpers.withMessage(
					"Výše investice je povinná",
					requiredIf(getActiveStepIndex.value === 1 ? true : false)
				),
				minValue: helpers.withMessage(
					"Minimální výše investice je 25 000 Kč",
					minValue(25000)
				),
				maxValue: helpers.withMessage(
					"Maximální výše investice je 1 000 000 Kč",
					maxValue(1000000)
				),
			},
		},
		step2: {
			firstName: {
				requiredIf: helpers.withMessage(
					"Jméno je povinné",
					requiredIf(getActiveStepIndex.value === 2 ? true : false)
				),
			},
			lastName: {
				requiredIf: helpers.withMessage(
					"Příjmení je povinné",
					requiredIf(getActiveStepIndex.value === 2 ? true : false)
				),
			},
			email: {
				requiredIf: helpers.withMessage(
					"Email je povinný",
					requiredIf(getActiveStepIndex.value === 2 ? true : false)
				),
				email: helpers.withMessage("Neplatný formát emailu", email),
			},
			phoneNumber: {
				requiredIf: helpers.withMessage(
					"Telefonní číslo je povinné",
					requiredIf(getActiveStepIndex.value === 2 ? true : false)
				),
				containsNumber: helpers.withMessage(
					"Telefonní číslo se musí skládat pouze z číslic 0 až 9",
					containsNumber
				),
			},
		},
		step3: {
			address: {
				requiredIf: helpers.withMessage(
					"Trvalá adresa je povinná",
					requiredIf(getActiveStepIndex.value === 3 ? true : false)
				),
			},
			nationalIdNumber: {
				requiredIf: helpers.withMessage(
					"Rodné číslo je povinné",
					requiredIf(getActiveStepIndex.value === 3 ? true : false)
				),
			},
			idNumber: {
				requiredIf: helpers.withMessage(
					"Číslo občanského průkazu je povinné",
					requiredIf(getActiveStepIndex.value === 3 ? true : false)
				),
			},
			bankAccountNumber: {
				requiredIf: helpers.withMessage(
					"Číslo bankovního účtu je povinné",
					requiredIf(getActiveStepIndex.value === 3 ? true : false)
				),
			},
		},
		step4: {
			privacyPolicyConsent: {
				sameAs: helpers.withMessage(
					"Souhlas se zpracováním osobních údajů je povinný",
					sameAs(true)
				),
			},
		},
	};
});

const v$ = useVuelidate(rules, formData);

// Validate current step. If current step is valid, call nextStep() and move to the next step
const validateStep = (step: number) => {
	v$.value["step" + step].$validate();
	if (v$.value["step" + step].$invalid) {
		return;
	} else {
		nextStep();
	}
};

// Submit form - final step
const submitForm = async () => {
	v$.value.$validate();
	if (v$.value.$invalid) {
		return;
	} else {
		const finalFormData = {
			...formData.step1,
			...formData.step2,
			...formData.step3,
			...formData.step4,
		};
		fetchFormData(finalFormData);
	}
};
</script>

<style>
.form-step-heading {
	@apply mb-5 text-center text-white text-lg;
}
.form-input-label {
	@apply font-semibold text-white px-1;
}
.form-input {
	@apply w-full px-2 py-2 rounded-lg border-2 bg-transparent text-white border-indigo-500 outline-none focus:border-white;
}
.form-button {
	@apply rounded-md bg-indigo-600 px-3.5 py-2.5 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;
}
.form-data {
	@apply mb-5;
}
.form-error {
	@apply h-5 mt-1;
}
.form-error__message {
	@apply block text-xs text-red-500 pl-1;
}
.summary-item__heading {
	@font-semibold;
}
.summary-item .summary-item__value {
	@apply border-solid border-2 border-indigo-500 rounded-md p-3 mb-2;
}
</style>
