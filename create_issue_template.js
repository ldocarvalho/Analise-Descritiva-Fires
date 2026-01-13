// const fs = require('fs');
// const path = '.github/ISSUE_TEMPLATE/td_traceability.yml';

// fs.mkdirSync('.github/ISSUE_TEMPLATE', { recursive: true });

// const content = `
// name: "TD Traceability"
// description: "Template for Technical Debt tracking"
// title: "[TD] "
// labels: ["TD identified"]
// body:
//   - type: textarea
//     id: context
//     attributes:
//       label: "Context"
//   - type: textarea
//     id: impact
//     attributes:
//       label: "Impact"
//   - type: textarea
//     id: evidences
//     attributes:
//       label: "Evidences"
//   - type: textarea
//     id: additional_details
//     attributes:
//       label: "Additional Details"
// `;

// fs.writeFileSync(path, content.trim());
// console.log(`✅ Issue template criado em ${path}`);

const fs = require('fs');
console.log('📋 Criando issue template...');

const issueTemplateDir = '.github/ISSUE_TEMPLATE';
if (!fs.existsSync(issueTemplateDir)) fs.mkdirSync(issueTemplateDir, { recursive: true });

const issueTemplateContent = `name: TD Traceability
description: Template para rastreabilidade de Technical Debt
title: "[TD]"
labels: TD identified
body:
  - type: textarea
    attributes:
      label: Context
      description: Contexto do TD
  - type: textarea
    attributes:
      label: Impact
      description: Impacto do TD
  - type: textarea
    attributes:
      label: Evidences
      description: Evidências do TD
  - type: textarea
    attributes:
      label: Additional Details
      description: Detalhes adicionais
`;

fs.writeFileSync(`${issueTemplateDir}/td_traceability.yml`, issueTemplateContent);
console.log('✅ Issue template criado');
