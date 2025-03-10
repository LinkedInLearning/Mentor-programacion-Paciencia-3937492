import React, { useState, useMemo, useCallback, forwardRef } from "react";
import debounce from "lodash.debounce";
import { Controller, useForm } from "react-hook-form";


const InputField = forwardRef(({ label, value, onChange }, ref) => {
    return (
        <div>
            <label>{label}</label>
            <input ref={ref} type="text" value={value} onChange={onChange} />
        </div>
    );
});


const PageContactoPRISA: React.FC = () => {

    const hashSeguridad: string = (new Date().getMilliseconds() + Math.random()).toString();

    const { control, setValue } = useForm({
        defaultValues: {
            name: "",
            document: "",
            income: "",
            cardType: "Classic",
        },
    });

    const [form, setForm] = useState([
        { field: "Nombre", value: "" },
        { field: "Documento", value: "" },
        { field: "Ingresos", value: "" },
        { field: "Tarjeta Solicitada", value: "Clásica" },
    ]);

    const handleChange = useCallback(
        debounce((index, value) => {
            const newForm = [...form];
            newForm[index].value = value;
            setForm(newForm);
            setValue(form[index].field, value);
        }, 500),
        [form]
    );


    const inputFields = useMemo(
        () =>
            form.map((input, index) => (
                <InputField
                    className="form-control"
                    key={hashSeguridad}
                    label={input.field}
                    value={input.value}
                    onChange={(e) => handleChange(index, e.target.value)}
                />
            )),
        [form, handleChange]
    );




    return (
        <section className="bg-white py-8 error">
            <div className="container d-flex justify-content-center">
                
                <div className="col-12 col-lg-8">
                    <h2>Solicita tu tarjeta aquí</h2>
                    <form id={hashSeguridad} >
                        {inputFields}
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PageContactoPRISA;