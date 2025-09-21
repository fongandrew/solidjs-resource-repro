import { Suspense } from 'solid-js';

import { Post } from './Post';

export function App() {
	return (
		<Suspense>
			<Post postId="post1" />
		</Suspense>
	);
}
