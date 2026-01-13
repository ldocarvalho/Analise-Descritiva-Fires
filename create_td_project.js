const { execSync } = require('child_process');
const fs = require('fs');

function run(cmd) {
  return execSync(cmd, { stdio: 'pipe' }).toString().trim();
}

const projectName = 'TD Traceability Lucas f';

console.log('📋 Criando Project V1 usando gh CLI...');
const projectJson = run(
  `gh project create --owner @me --title "${projectName}" --format json`
);

const project = JSON.parse(projectJson);

fs.writeFileSync(
  'td-project.json',
  JSON.stringify(
    { projectId: project.id, projectUrl: project.url },
    null,
    2
  )
);

console.log('✅ Project V1 criado com sucesso!');
console.log('URL:', project.url);