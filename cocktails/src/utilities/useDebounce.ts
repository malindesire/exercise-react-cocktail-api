import { useRef, useEffect, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebouncedFunction<T extends (...args: any[]) => any> = {
	(...args: Parameters<T>): void;
	cancel: () => void;
	flush: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<T extends (...args: any[]) => any>(
	func: T,
	delay: number
): DebouncedFunction<T> {
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const latestFunc = useRef(func);
	const latestArgs = useRef<Parameters<T>>(null);

	// uppdatera senaste callbacken
	useEffect(() => {
		latestFunc.current = func;
	}, [func]);

	const debounced = useCallback(
		(...args: Parameters<T>) => {
			latestArgs.current = args;
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				if (latestArgs.current) {
					latestFunc.current(...latestArgs.current);
				}
			}, delay);
		},
		[delay]
	);

	const cancel = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	}, []);

	const flush = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		if (latestArgs.current) {
			latestFunc.current(...latestArgs.current);
		}
	}, []);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	const debouncedWithMethods = debounced as DebouncedFunction<T>;
	debouncedWithMethods.cancel = cancel;
	debouncedWithMethods.flush = flush;

	return debouncedWithMethods;
}
