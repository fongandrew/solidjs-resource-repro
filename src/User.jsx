import { createResource } from 'solid-js';

// Mock user loader - returns a user object
async function loadUser(id) {
	await new Promise((resolve) => setTimeout(resolve, 10));
	return {
		id,
		name: `User ${id}`,
	};
}

export function User(props) {
	const [user] = createResource(
		() => props.id,
		(id) => loadUser(id),
	);

	return <span>User: {user()?.id} </span>;
}
