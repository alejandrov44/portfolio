export async function getGitHubStars(repoName: string): Promise<number> {
  const url = `https://api.github.com/repos/${repoName}`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch GitHub stars");

    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return 0;
  }
}
