export const useCustomFetch = <T = unknown>(url: string, method: string, body?: object) => {
    const runtimeConfig = useRuntimeConfig();
    const apiBaseUrl = runtimeConfig.public.apiBaseUrl;

    return useFetch<{ payload: T }>(url, {
        baseURL: apiBaseUrl,
        method,
        body: JSON.stringify(body),
    })
}