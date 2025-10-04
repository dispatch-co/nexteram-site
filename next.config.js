const isProd = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.NEXT_PUBLIC_REPO_NAME || 'REPO_NAME_HERE';

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};
