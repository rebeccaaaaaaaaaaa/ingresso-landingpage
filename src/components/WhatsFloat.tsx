import React from 'react';

import FloatingWhatsApp from 'react-floating-whatsapp';

export default function App() {
  return (
    <FloatingWhatsApp
      phoneNumber="5517991343817"
      accountName="Cursinho Ingresso"
      statusMessage="Online"
      chatMessage="Olá, tudo bem? Em que podemos ajudar?"
      placeholder="Escreva sua mensagem aqui..."
      avatar="https://avatars2.githubusercontent.com/u/52709818?s=460&u=f9f8b8c8f9f8b8c8f9f8b8c8f9f8b8c8f9f8b8c8&v=4"
      allowClickAway
      notification
      notificationDelay={60000} // 1 minute
      notificationSound
    />
  );
}
