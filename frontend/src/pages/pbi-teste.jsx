import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

// Configuração de incorporação do Power BI
const embedConfig = {
  type: 'report', // Tipos suportados: report, dashboard, tile, visual, e qna.
  id: 'caef5fc3-eb0e-4aa6-9471-cb1264d41b7c',
  embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=1ac70614-919a-4e23-9dd7-8fa17d94dfa3',
  accessToken: 'teste',
  tokenType: models.TokenType.Embed, // Use models.TokenType.Aad se estiver incorporando para sua organização.
  settings: {
    panes: {
      filters: {
        expanded: false,
        visible: false
      }
    }
  }
};

// Mapeamento dos event handlers
const eventHandlers = new Map([
  ['loaded', () => {
    console.log('Report loaded');
  }],
  ['rendered', () => {
    console.log('Report rendered');
  }],
  ['error', (event) => {
    console.error(event.detail);
  }]
]);

// Classe CSS para o container de incorporação
const cssClassName = "report-style-class";

// Função callback para obter referência ao componente incorporado
const getEmbeddedComponent = (embeddedReport) => {
  window.report = embeddedReport;
};

export default function PowerBI() {
  return (
    // Container com altura definida para a renderização do relatório
    <div style={{ height: '600px' }}>
      <PowerBIEmbed
        embedConfig={embedConfig}
        eventHandlers={eventHandlers}
        cssClassName={cssClassName}
        getEmbeddedComponent={getEmbeddedComponent}
      />
    </div>
  );
}
