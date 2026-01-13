const { execSync } = require('child_process');
const { spawnSync } = require('child_process');

function runSync(cmd) {
  return execSync(cmd, { stdio: 'inherit' });
}

console.log('📦 Iniciando setup TD Traceability...\n');

// 1️⃣ Criar projeto
console.log('1️⃣ Criando Project V1...');
runSync('node create_td_project.js');

// 2️⃣ Criar labels
console.log('\n2️⃣ Criando labels...');
runSync('node create_labels.js');

// 3️⃣ Criar issue template
console.log('\n3️⃣ Criando issue template...');
runSync('node create_issue_template.js');

// 4 Criar workflow
console.log('\n 4 Criando workflow...');
runSync('node create_workflow.js');

// // 4️⃣ Criar colunas (precisa do token)
// console.log('\n4️⃣ Criando colunas do Project V1 (requisição de token)...');
// console.log('⚠️ Certifique-se de que a variável de ambiente GITHUB_TOKEN está configurada');
// runSync('node create_td_columns_v1.js');

console.log('\n🎉 Setup completo!');