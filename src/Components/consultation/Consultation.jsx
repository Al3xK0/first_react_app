import './Consultation.scss';
import Polygon from './assets/Polygon.png'
import UpButton from './assets/upButton.png'
import Button from '../button/Button';

export default function Consultation() {
    return (
        <div className='consultation'>
            <header>
                <div className="container">
                    <h2>
                        Персональный консультант
                    </h2>
                    <div>
                        <p>
                            Самостоятельная торговля на бирже требует знаний, опыта, навыков работы с торговыми терминалами, а главное, времени на постоянный мониторинг ситуации и поиск инвестиционных идей.
                        </p>
                        <p>
                            Персональный консультант дает вам преимущество, сопровождая самой актуальной и необходимой информацией по рынку, предлагая рекомендации, и позволяя использовать максимум возможностей при минимуме затрат вашего времени.
                        </p>
                        <p>
                            Десятки человек (аналитики, риск-менеджеры, трейдеры) работают на то, чтобы каждая ваша сделка стала прибыльной.
                        </p>
                    </div>
                </div>
            </header>

            <main className='container'>
                <div className='row'>
                    <div>
                        <div>
                            <figure>
                                <img className='polygon' src={Polygon} alt="Polygon" />
                            </figure>
                        </div>
                        <p>
                            Эксклюзивные торговые идеи от нашей команды аналитиков
                        </p>
                    </div>
                    <div>
                        <div>
                            <figure>
                                <img className='polygon' src={Polygon} alt="Polygon" />
                            </figure>
                        </div>
                        <p>
                            Простое и удобное совершение сделок с персональным подходом
                        </p>
                    </div>
                    <div>
                        <div>
                            <figure>
                                <img className='polygon' src={Polygon} alt="Polygon" />
                            </figure>
                        </div>
                        <p>
                            Постоянный мониторинг позиций портфеля
                        </p>
                    </div>
                </div>
                <div className="services">
                    <h2>
                        Как работает услуга
                    </h2>
                    <div className="row">
                        <div className='list_services'>
                            <p>
                                Знакомство и определение финансовых целей и инвестиционного профиля
                            </p>
                        </div>
                        <div className='list_services'>
                            <p>
                                Ваш инвестиционный консультант вместе с командой аналитиков подбирает инвестицинные идеи
                            </p>
                        </div>
                        <div className='list_services'>
                            <p>
                                Консультант связывается с вами и сообщает о благоприятной ситуации для покупки или продажи ценных бумаг
                            </p>
                        </div>
                        <div className='list_services'>
                            <p>
                                Вы даете консультанту поручение на совершение сделки
                            </p>
                        </div>
                        <div className='list_services'>
                            <p>
                                Мы отслеживаем позиции. Связываемся с вами при необходимости пересмотра портфеля, появлении новых рекомендаций или для фиксации результата
                            </p>
                        </div>
                        <div className='list_services'>
                            <img className='upButton' src={UpButton} alt="Planing" />
                            <Button text={'Заказать консультацию'} />
                        </div>
                        <div className='list_services'>
                          
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}