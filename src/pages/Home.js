import Pix from '../components/Pix';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <section className="text-center py-5 bg-light">
                <div className="container">
                    <h1 className="display-4 fw-bold">IMPORTE SEUS HORÁRIOS FACILMENTE!</h1>
                    <p className="lead">Conheça o importador de horários do SIG, uma extensão do Chrome que pega e
                        mapeia seus horários de aula para um formato compatível com o Google Calendar! Assim, sua organização
                        de horários fica mais fácil e rápida!
                    </p>
                    <img src="import.png" alt="import" width="100%"></img>
                    <h3 className='mb-4'>E tudo isso por apenas <span style={{ color: "#0d6efd" }}>R$4,00</span>!</h3>
                    <Pix textoBotao="Obter Extensão" />
                </div>
            </section>

            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-3">Economize seu tempo</h2>
                    <p className="fs-5 mb-4">Não perca seu tempo criando manualmente seus horários do Google Calendar na mão.
                        Use nossa extensão para deixar tudo mais fácil e rápido. Acesse o tutorial para saber como:
                    </p>
                    <button className='btn btn-lg btn-warning'><Link to="/tutorial" className="nav-link">Tutorial</Link></button>
                </div>
            </section>

            <section className="py-5 bg-primary text-white">
                <div className="container">
                    <h2 className="mb-4 text-center">O que o Importador SIG faz?</h2>
                    <p className="fs-5 text-center mb-5">
                        Em menos de <strong>1 minuto</strong>, você extrai automaticamente seu quadro de horários do SIG
                        e vê os nomes reais das disciplinas sem esforço.
                    </p>

                    <ul className="fs-5">
                        <li className="mb-3">
                            <strong>Importação Automática do Horário:</strong><br />
                            Ao acessar o SIG já logado, a extensão identifica seu quadro de horários diretamente da página inicial.
                        </li>
                        <li className="mb-3">
                            <strong>Mapeamento dos Códigos das Disciplinas:</strong><br />
                            Converte os códigos (ex: DAC123) em nomes completos (ex: Estrutura de Dados), acessando a página de disciplinas cursadas.
                        </li>
                        <li className="mb-3">
                            <strong>Tudo pronto para usar:</strong><br />
                            Exporta os dados organizados para planners, Google Agenda, Notion ou como você preferir.
                        </li>
                        <li className="mb-3">
                            <strong>Privacidade garantida:</strong><br />
                            A extensão roda 100% no seu navegador. Nenhuma senha ou dado pessoal é armazenado.
                        </li>
                    </ul>
                    <h3 className="text-center mt-5">Tudo isso por apenas o preço de uma Coca Cola! <strong>(R$4,00)</strong></h3>
                </div>
            </section>


            <section className="py-5 bg-light text-center">
                <div className="container">
                    <h2 className="mb-3">Pronto para usar?</h2>
                    <p className="fs-5 mb-4">Clique abaixo para pagar via Pix e liberar o acesso  :)</p>
                    <Pix />
                </div>
            </section>

            <section className="text-center">
                <div className="container">
                    <p className="fs-7 my-4">Essa extensão foi desenvolvida por um aluno, e não tem vínculo direto com a UFLA. Seus dados não ficam salvos.</p>
                </div>
            </section>

            
        </div>
    );
}

export default Home;