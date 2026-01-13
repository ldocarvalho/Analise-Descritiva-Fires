// const fetch = require('node-fetch'); // node-fetch v2
// const fs = require('fs');
// const readline = require('readline-sync');

// // Ler o projeto criado
// const projectData = JSON.parse(fs.readFileSync('td-project.json', 'utf-8'));
// const projectId = projectData.projectId;

// // Lista de colunas
// const columns = [
//   "TD identified",
//   "TD documented",
//   "TD prioritized",
//   "TD communicated",
//   "TD in repayment",
//   "TD in monitoring",
//   "TD archived",
//   "TD ignored"
// ];

// // Pega token do ambiente ou pergunta
// let GITHUB_TOKEN = process.env.GITHUB_TOKEN;
// if (!GITHUB_TOKEN) {
//   GITHUB_TOKEN = readline.question('🔑 Digite seu GITHUB_TOKEN: ', { hideEchoBack: true });
// }

// // Função para criar coluna
// async function createColumn(name) {
//   try {
//     const res = await fetch(`https://api.github.com/projects/${projectId}/columns`, {
//       method: 'POST',
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//         Accept: 'application/vnd.github.v3+json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name })
//     });

//     if (!res.ok) {
//       const err = await res.json();
//       console.error(`❌ Erro ao criar coluna "${name}":`, err);
//     } else {
//       console.log(`✅ Coluna criada: ${name}`);
//     }
//   } catch (error) {
//     console.error(`❌ Erro de rede ao criar coluna "${name}":`, error);
//   }
// }

// // Criar todas as colunas
// (async () => {
//   console.log('📋 Criando colunas do Project V1...');
//   for (const col of columns) {
//     await createColumn(col);
//   }
//   console.log('🎉 Todas as colunas foram criadas!');
// })();

const { execSync } = require('child_process');
const fs = require('fs');

// Lê o ID do projeto criado
const projectData = JSON.parse(fs.readFileSync('td-project.json', 'utf-8'));
const projectId = projectData.projectId;

const columns = [
  "TD identified",
  "TD documented",
  "TD prioritized",
  "TD communicated",
  "TD in repayment",
  "TD in monitoring",
  "TD archived",
  "TD ignored"
];

console.log('📋 Criando colunas do Project V1 usando gh CLI...');

columns.forEach(col => {
  try {
    // Criar coluna usando gh CLI
    execSync(`gh project column-create ${projectId} --title "${col}"`, { stdio: 'inherit' });
    console.log(`✅ Coluna criada: ${col}`);
  } catch (err) {
    console.error(`❌ Erro ao criar coluna "${col}":`, err.message);
  }
});

console.log('🎉 Todas as colunas foram processadas!');