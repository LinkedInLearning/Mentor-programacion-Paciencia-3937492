import React, { useState } from "react";

const PageContacto: React.FC = () => {

    const hashSeguridad: string = (new Date().getMilliseconds() + Math.random()).toString();

    const [form, setForm] = useState([
        { field: "Nombre", value: "" },
        { field: "Documento", value: "" },
        { field: "Ingresos", value: "" },
        { field: "Tarjeta Solicitada", value: "Clásica" },
    ]);

    const handleChange = (index, value) => {
        const newForm = [...form];
        newForm[index].value = value;
        setForm(newForm);
    };


    return (
        <section className="bg-white py-8">
            <div className="container d-flex justify-content-center">
                <div className="col-12 col-lg-8">

                    <h2>Solicita tu tarjeta aquí</h2>
                    <form id={hashSeguridad} >
                        {form.map((input, index) => (

                            <div className="form-group " key={index}  data-hash={hashSeguridad}>
                                <label >{input.field}</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={input.value}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            </div>


                        ))}
                        <button type="submit" className="btn btn-primary mt-5">Guardar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PageContacto;