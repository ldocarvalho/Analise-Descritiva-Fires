// const { execSync } = require('child_process');
// const fs = require('fs');

// function run(cmd) {
//   return execSync(cmd, { stdio: 'pipe' }).toString().trim();
// }

// const projectName = 'TD Traceability Lucas f';

// console.log('📋 Criando Project V1 usando gh CLI...');
// const projectJson = run(
//   `gh project create --owner @me --title "${projectName}" --format json`
// );

// const project = JSON.parse(projectJson);

// fs.writeFileSync(
//   'td-project.json',
//   JSON.stringify(
//     { projectId: project.id, projectUrl: project.url },
//     null,
//     2
//   )
// );

// console.log('✅ Project V1 criado com sucesso!');
// console.log('URL:', project.url);


const { execSync } = require('child_process');
const fs = require('fs');

// Função para rodar comandos e capturar a saída
function run(cmd) {
  return execSync(cmd, { stdio: 'pipe' }).toString().trim();
}

const projectName = 'TD Mwalu';
const repo = 'Analise-Descritiva-Fires'; // Nome do repositório sem o owner

console.log('📋 Criando Project V1 usando gh CLI...');

// Criando o projeto no repositório usando GitHub CLI
const projectJson = run(
  `gh project create --owner @me --title "${projectName}" --format json`
);

const project = JSON.parse(projectJson);

// Salve o ID e URL do projeto em um arquivo JSON
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

// Agora, vamos capturar automaticamente o owner do repositório
const repoOwner = run('gh repo view --json owner --jq ".owner.login"');
console.log('Owner capturado:', repoOwner);

// Pegar o número do projeto a partir da URL
const projectNumber = project.url.split('/').pop(); // Pega a última parte da URL, que é o número do projeto
console.log('Número do projeto:', projectNumber);

// Usar a API para vincular o projeto V1 ao repositório
try {
  // Vinculando o projeto ao repositório
  run(`gh project link ${projectNumber} --repo ${repoOwner}/${repo}`);
  console.log('✅ Projeto atrelado ao repositório com sucesso!');
} catch (error) {
  console.error('❌ Erro ao atrelar o projeto:', error.message);
}


