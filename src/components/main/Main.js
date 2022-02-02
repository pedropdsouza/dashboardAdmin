import logo from '../../assets/logo.jpeg'
import Chart from '../charts/Charts';
import './Main.css';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={logo} alt="hello" />
                    <div className="main__greeting">
                        <h1>Olá Pedro ;)</h1>
                        <p>Bem-vindo ao seu painel</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">597</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$42.150</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de Produtos</p>
                            <span className="font-bold text-title">520</span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>São Paulo, São Paulo, BR</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>
                

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>São Paulo, São Paulo, BR</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>
                        
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$37.000</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$3.000</p>
                            </div>
                            
                            <div className="card3">
                                <h1>Custos de hospedagens</h1>
                                <p>R$1.000</p>
                            </div>
                            
                            <div className="card4">
                                <h1>Banco de dados</h1>
                                <p>R$700</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;