import whyIsNodeRunning from 'why-is-node-running';
import { exec } from 'child_process';

exec('npm run test-storybook', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

const ONE_MINUTE = 60 * 1000;

setTimeout(() => whyIsNodeRunning(), ONE_MINUTE);
setTimeout(() => whyIsNodeRunning(), ONE_MINUTE * 2);
setTimeout(() => whyIsNodeRunning(), ONE_MINUTE * 3);
setTimeout(() => whyIsNodeRunning(), ONE_MINUTE * 4);
setTimeout(() => whyIsNodeRunning(), ONE_MINUTE * 5);
