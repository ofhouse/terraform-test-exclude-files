const core = require('@actions/core');
const simpleGit = require('simple-git');

async function run() {
  const baseDir = path.join(process.cwd());
  const git = simpleGit({ baseDir });
  const releaseTag = core.getInput('release-tag', { required: true });
  const releaseBranchName = 'release';

  await git.checkout(releaseBranchName);

  core.info(`Creating new tag ${releaseTag}`);
  await git.addAnnotatedTag(releaseTag, `Release ${releaseTag}`);

  // Push tag back to repo
  git.pushTags('origin');
}

try {
  run();
} catch (error) {
  console.log(error);
}
