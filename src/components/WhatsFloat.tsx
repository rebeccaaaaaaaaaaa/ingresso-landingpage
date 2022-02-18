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
      avatar="/assets/images/logo.png"
      allowClickAway
      notification
      notificationDelay={60000} // 1 minute
      notificationSound
    />
  );
}
