// @ts-check
const funding = ({ github, patreon, open_collective, community_bridge, paypal }) =>
` # For more - see https://help.github.com/articles/displaying-a-sponsor-button-in-your-repository

${github ? 'github: ' + github : ''}
${patreon ? 'patreon: ' + patreon : ''}
${open_collective ? 'open_collective: ' + open_collective : ''}
${community_bridge ? 'community_bridge: ' + community_bridge : ''}
${paypal ? 'custom: ' + 'https://paypal.me/' + paypal : ''}
`;

const path = '.github';
const filename = 'FUNDING.yml';
export { funding, path, filename };
