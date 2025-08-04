import React from 'react';

function Tutorial() {
  return (
    <div>
      <section className="pt-5 pb-2 bg-light">
        <div className="container">
          <h1 className="text-center display-4 fw-bold">TUTORIAL</h1>
          <ol>
            <li>Compre via Pix na Home.</li>
            <li>Após o pagamento, será redirecionado para o link da extensão.</li>
            <li>Instale a extensão.</li>
          </ol>
          <h2 className='mb-3'>Como usar a extensão:</h2>

          <div>
            <p className='fs-5 mb-2'>Abra o SIG UFLA e vá até Central do Aluno</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print01.png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>Dentro de central do aluno, clique em "Disciplinas Cursadas ou em Andamento".</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print02.png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>Selecione o perído atual e clique em "Buscar".</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print03.png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>Em seguida, abra a extensão e clique em "Mapear Disciplinas".</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print04.png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>Depois, volte para a página principal e clique em "Exportar Horário".</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print05.png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>Abra o Google Agenda e vá em "Criar Calendário".</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print06.png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>Crie um nome para seu novo calendário e clique em "Criar Calendário".</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print067png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>Com o calendário criado, clique em "Importar e Exportar".</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print10.png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>Selecione o arquivo baixado pela extensão e seu novo calendário, e clique em "Importar".</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print08.png'} alt='print' width={"80%"} />

            <p className='fs-5 mb-2'>E assim, seus horários estarão configurados até o fim do semestre de 2025/02!</p>
            <img className='mb-3 d-block mx-auto' src={process.env.PUBLIC_URL + '/printsTutorial/print09.png'} alt='print' width={"80%"} />

            <p className='fs-7 mt-4 text-center'>Qualquer dúvida entrar em contato com igorgarciarezende05@gmail.com</p>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Tutorial;
