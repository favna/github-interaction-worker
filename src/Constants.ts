import type { APIApplicationCommandOptionChoice } from "discord-api-types/v9";

export const GITHUB_BASE_URL = 'https://api.github.com/graphql';
export const GITHUB_EMOJI_PR_OPEN = '<:pr_open:852715356622553088>';
export const GITHUB_EMOJI_PR_CLOSED = '<:pr_closed:852715338268409887>';
export const GITHUB_EMOJI_PR_MERGED = '<:pr_merge:852715380282753044>';
export const GITHUB_EMOJI_PR_DRAFT = '<:pr_draft:852715368888008714>';
export const GITHUB_EMOJI_ISSUE_OPEN = '<:issue_open:852714230280486942>';
export const GITHUB_EMOJI_ISSUE_CLOSED = '<:issue_closed:852714146335555594>';
export const GITHUB_EMOJI_COMMIT = '<:commit:852713964889702410>';
export const FAIL_PREFIX = '\`❌ Error\`';
export const FETCH_USER_AGENT = `GitHub Interaction Worker/2.0.0 (node-fetch) (https://github.com/almostSouji/github-interaction-worker/tree/main)`;
export const PREFERRED_RESPOSITORIES: APIApplicationCommandOptionChoice[] = [
	/* 01 */ { name: '📌 Discord.js', value: 'discord.js' },
	/* 02 */ { name: '📌 Discord API Types', value: 'discord-api-types' }
];