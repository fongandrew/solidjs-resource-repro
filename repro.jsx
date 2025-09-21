import { NoHydration, renderToStringAsync } from 'solid-js/web';

import { App } from './src/App';

try {
	console.log('\n=== Testing with NoHydration ===\n');
	console.log(
		await renderToStringAsync(() => (
			<NoHydration>
				<App />
			</NoHydration>
		)),
	);
	console.log('\n=== Testing without NoHydration ===\n');
	console.log(await renderToStringAsync(() => <App />));
} catch (error) {
	console.error('Error during render:', error);
}
