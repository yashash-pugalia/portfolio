import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('https://api.github.com/users/yashash-pugalia/repos?type=all').then(
		(res) => res.json()
	);

	return { res };
};
