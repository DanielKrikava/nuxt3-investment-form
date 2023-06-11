interface FormData {
    step1: {
        investmentAmount: number | null,
    },
    step2: {
        firstName: string | null,
        lastName: string | null,
        phoneNumber: string | null,
        email: string | null,
    },
    step3: {
        nationalIdNumber: string | null,
        idNumber: string | null,
        address: string | null,
        bankAccountNumber: string | null,
    },
    step4: {
        privacyPolicyConsent: boolean | null,
    }
}

const defaultFormData = {
    step1: {
        investmentAmount: 100000,
    },
    step2: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    },
    step3: {
        nationalIdNumber: '',
        idNumber: '',
        address: '',
        bankAccountNumber: '',
    },
    step4: {
        privacyPolicyConsent: false
    }
}

interface SummarizedData {
    investmentAmount: number | null,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    email: string | null,
    nationalIdNumber: string | null,
    idNumber: string | null,
    address: string | null,
    bankAccountNumber: string | null,
    privacyPolicyConsent: boolean | null,
}

const defaultSummarizedData = {
    investmentAmount: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    nationalIdNumber: '',
    idNumber: '',
    address: '',
    bankAccountNumber: '',
    privacyPolicyConsent: null
}

export const useFormStore = defineStore('form', () => {
    // Total steps
    const totalSteps = 4

    // Active step
    const activeStepIndex = ref(1)

    // Next step
    const nextStep = () => {
        if (activeStepIndex.value < totalSteps) {
            activeStepIndex.value++;
        }
    };

    // Previous step
    const prevStep = () => {
        if (activeStepIndex.value > 1) {
            activeStepIndex.value--;
        }
        // Hide summary when coming back to edit previous form data
        if (showSummary.value) {
            showSummary.value = false
            activeStepIndex.value = 4
        }
    };

    // Get current active index
    const getActiveStepIndex = computed(() => activeStepIndex)

    // Form data
    const formData = ref<FormData>(defaultFormData)

    // Get form data
    const getFormData = computed(() => formData)

    // Summarized form data
    const formDataSummary = ref<SummarizedData>(defaultSummarizedData)

    const getFormDataSummary = computed(() => formDataSummary)

    // Summary of sent form data
    const showSummary = ref(false);

    // Get value of showSummary
    const getShowSummaryValue = computed(() => showSummary)

    // Send form data to API, get response of data back
    const fetchFormData = async (finalFormData: SummarizedData) => {
        const { data, error } = await useCustomFetch<{}>(
            "/posts",
            "POST",
            finalFormData
        );

        if (data.value) {
            formDataSummary.value = data.value
            showSummary.value = true
        }

        if (error.value) {
            throw createError({ statusMessage: 'There has been an error.' })
        }
    }

    // Reset form to default values
    const $reset = () => {
        formData.value = defaultFormData
        formDataSummary.value = defaultSummarizedData
        showSummary.value = false
        activeStepIndex.value = 1
    }

    return { formData, getFormData, fetchFormData, formDataSummary, totalSteps, nextStep, prevStep, getActiveStepIndex, showSummary, getShowSummaryValue, getFormDataSummary, $reset }
})