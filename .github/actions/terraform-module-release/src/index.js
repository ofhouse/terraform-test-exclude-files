const exec = require('@actions/exec');

async function run() {
  const releaseBranchName = 'release';

  await exec.exec('git', ['checkout', releaseBranchName]);
}

run();
