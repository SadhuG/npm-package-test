import { ensurePrettierPlugin } from '../lib/ensure-prettier.js';
import { execSync } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Detects the current package manager
function getPackageManager() {
  const userAgent = process.env.npm_config_user_agent || '';
  if (userAgent.includes('pnpm')) return 'pnpm';
  if (userAgent.includes('yarn')) return 'yarn';
  return 'npm';
}

// Checks if a dependency is installed locally in the project
function isInstalled(pkg) {
  try {
    require.resolve(pkg);
    return true;
  } catch {
    return false;
  }
}

// Installs required dependencies using the detected package manager
function installDeps() {
  const pm = getPackageManager();
  const installCommand = {
    npm: 'npm install -D prettier prettier-plugin-tailwindcss',
    pnpm: 'pnpm add -D prettier prettier-plugin-tailwindcss',
    yarn: 'yarn add -D prettier prettier-plugin-tailwindcss',
  }[pm];

  console.log(`Installing required packages with ${pm}...`);
  execSync(installCommand, { stdio: 'inherit' });
}

// Install if missing
if (!isInstalled('prettier') || !isInstalled('prettier-plugin-tailwindcss')) {
  installDeps();
}

// Run the config modifier
ensurePrettierPlugin();
