import { createResource, Suspense } from 'solid-js';

import { User } from './User';

// Mock post loader - returns a post object
async function loadPost(id) {
	await new Promise((resolve) => setTimeout(resolve, 10));
	return {
		id,
		userId: 'alice',
		content: 'Hello world',
	};
}

export function Post(props) {
	const [post] = createResource(
		() => props.postId,
		(postId) => loadPost(postId),
	);

	return (
		<div>
			<Suspense>
				<User id={post()?.userId} />
			</Suspense>
			<span>Post: {post()?.id}</span>
		</div>
	);
}
