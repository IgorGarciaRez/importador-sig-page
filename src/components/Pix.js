import React, { useState, useEffect } from 'react';

function Pix({ textoBotao = "Gerar Pix" }) {
  const [qrcode, setQrcode] = useState(null);
  const [imagemQrcode, setImagemQrcode] = useState(null);
  const [txid, setTxid] = useState(null);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!txid) return;
    const interval = setInterval(async () => {
      const res = await fetch(`https://igorgarciarezgithubio-production.up.railway.app/status/${txid}`);
      const data = await res.json();
      if (data.pago) {
        //console.log(data.link);
        clearInterval(interval);
        setRedirecting(true);
        window.location.href = data.link;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [txid]);

  const gerarPix = async () => {
    const res = await fetch('https://igorgarciarezgithubio-production.up.railway.app/');
    const data = await res.json();
    setQrcode(data.qrcode);
    setImagemQrcode(data.imagemQrcode);
    setTxid(data.txid);
  };

  return (
    <div style={{ textAlign: 'center'}}>
      <button className="btn btn-primary btn-lg" onClick={gerarPix}>{textoBotao}</button>
      {imagemQrcode && (
        <div style={{ marginTop: 20 }}>
          <img src={imagemQrcode} alt="QR Code" />
          <p style={{ wordBreak: 'break-word', padding: '0 20px' }}>
            Copia e cola:<br /> {qrcode}
          </p>
        </div>
      )}
      {redirecting && <p>Pagamento confirmado! Redirecionando...</p>}
    </div>
  );
}

export default Pix;
