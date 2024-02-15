export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(fn: F, waitFor = 300) => {
	let timeout: ReturnType<typeof setTimeout>

	const debounced = (...args: Parameters<F>) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => fn(...args), waitFor)
	}

	return debounced
}
