// const { execSync } = require('child_process');

// const labels = [
//   "TD identified",
//   "TD documented",
//   "TD prioritized",
//   "TD communicated",
//   "TD in repayment",
//   "TD in monitoring",
//   "TD archived",
//   "TD ignored"
// ];

// labels.forEach(label => {
//   try {
//     execSync(`gh label create "${label}" --color FFA500`, { stdio: 'inherit' });
//   } catch {
//     console.log(`⚠️ Label "${label}" já existe`);
//   }
// });

const { execSync } = require('child_process');

console.log('📋 Criando labels...');

const labels = [
  "TD identified",
  "TD documented",
  "TD prioritized",
  "TD communicated",
  "TD in repayment",
  "TD in monitoring",
  "TD archived",
  "TD ignored"
];

labels.forEach(label => {
  try {
    execSync(`gh label create "${label}" --color FDD017 --description "Status TD: ${label}"`, { stdio: 'inherit' });
    console.log(`✅ Label criada: ${label}`);
  } catch (err) {
    console.log(`⚠️ Label "${label}" já existe ou houve erro`);
  }
});