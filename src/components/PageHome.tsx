import React from 'react';

const PageHome: React.FC = () => {
    return (
        <>

            <section className="bg-white vh-100">
                <div className="container">
                    <div className="text-center d-flex justify-content-center">
                        <div className="col-12 col-md-8">
                            <h3 className="mb-2">Conoce Nuestras Tarjetas</h3>
                            <h6 className="fw-normal text-gray-500">Únete a nuestra comunidad y disfruta de los beneficios exclusivos que nuestras tarjetas de crédito ofrecen. Mejora tus compras diarias y viaja con tranquilidad.</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row pt-4">
                        <div className="card bg-info col-md-4 me-2">
                            <div className="card-body text-white">
                                <h6 className="card-title">Recompensas de Viaje</h6>
                                <p className="card-text small">Acumula puntos en cada compra y canjéalos por boletos de avión, estadías en hoteles y más con nuestras recompensas de viaje.</p>
                            </div>
                        </div>
                        <div className="card bg-info col-md-4 me-2">
                            <div className="card-body text-white">
                                <h6 className="card-title">Cashback en Compras</h6>
                                <p className="card-text small">Recibe un porcentaje de tus compras de vuelta en efectivo y ahorra más con nuestro programa de cashback.</p>
                            </div>
                        </div>
                        <div className="card bg-info col-md-4 me-2">
                            <div className="card-body text-white">
                                <h6 className="card-title">Acceso a Salas VIP</h6>
                                <p className="card-text small">Disfruta de acceso exclusivo a salas VIP en aeropuertos de todo el mundo con nuestra tarjeta de crédito.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default PageHome;