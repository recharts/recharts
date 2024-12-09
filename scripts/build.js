// eslint-disable-next-line @typescript-eslint/no-require-imports
const { execSync } = require('child_process');

function exec(command) {
  execSync(command, { stdio: [0, 1, 2] });
}

exec('npm run build');
exec('npm run build-umd');
exec('npm run build-min');
