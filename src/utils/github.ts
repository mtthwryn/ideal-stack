export interface GitHubRepo {
	name: string
	full_name: string
	description: string | null
	html_url: string
	homepage: string | null
	language: string | null
	stargazers_count: number
	forks_count: number
	watchers_count: number
	open_issues_count: number
	updated_at: string
	created_at: string
	pushed_at: string
	topics: string[]
	license: {
		name: string
		spdx_id: string
	} | null
	archived: boolean
	default_branch: string
	size: number
	has_pages: boolean
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
	try {
		const response = await fetch(
			`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
			{
				headers: {
					Accept: 'application/vnd.github.v3+json'
				}
			}
		)

		if (!response.ok) {
			console.error(`Failed to fetch GitHub repos: ${response.statusText}`)
			return []
		}

		const repos: GitHubRepo[] = await response.json()

		// Filter out forks and sort by updated date
		return repos
			.filter((repo) => !repo.fork)
			.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
	} catch (error) {
		console.error('Error fetching GitHub repos:', error)
		return []
	}
}
