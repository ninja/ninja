import {execSync} from 'child_process';
import {resolve} from 'path';

const {argv, env} = process;

execSync(`npm run ${argv.slice(2).join(' ')}`, {
  env,
  cwd: resolve(__dirname, '..'),
  stdio: 'inherit'
});
