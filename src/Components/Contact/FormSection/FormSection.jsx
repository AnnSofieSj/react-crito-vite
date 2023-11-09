import React, { useState } from 'react'
import './Form.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const FormSection = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const emailregex = new RegExp (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/)
    
    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required("Du måste ange ett namn")
                .min(2, "Namnet måste bestå av minst 2 tecken"),
            email: Yup.string()
                .required("Du måste ange en e-postadress")
                .email("Ogiltig e-postadress")
                .matches(emailregex, "ogiltig e-postadress"),
            message: Yup.string()
                .required("Glöm inte skriva ditt meddelande")
                .min(10, "Meddelandet måste bestå av minst 10 tecken")
                .max(500, "Meddelandet fÅr bestå av max 500 tecken")
        }),

        onSubmit: async (values, actions) => {
            console.log(values)

            setErrorMessage('')

            const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:    
                    actions.resetForm();                   
                    alert ('Kontaktformuläret har skickats')                                    
                    break;
                case 400:
                    setErrorMessage ('Något gick fel.')
                    break;
                case 409:
                    setErrorMessage ('Något gick fel.')
                    break;
            }
        }        
    })

    

    
  return (
    <section className="form">
        <div className="container">
            <h2>Leave us a message <br /> for any information.</h2>
            <p className='errorMessage'>{errorMessage}</p>
            <form onSubmit={form.handleSubmit} noValidate id="messageForm">
                <div>                    
                    <label className={form.touched.name && form.errors.name ? 'error' : ''}>{form.touched.name && form.errors.name ? form.errors.name : ''}</label>
                    <input type="text" id="name" name="name" title="Name" placeholder={form.touched.name && form.errors.name ? form.errors.name : 'Name*'} tabIndex="1" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/>
                </div>
                <div>                   
                    <label className={form.touched.email && form.errors.email ? 'error' : ''} >{form.touched.email && form.errors.email ? form.errors.email : ''}</label>
                    <input type="email" id="email" name="email" title="email" placeholder={form.touched.email && form.errors.email ? form.errors.email : 'Email*'} tabIndex="2" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
                </div>
                <div>                   
                    <label className={form.touched.message && form.errors.message ? 'error' : ''}>{form.touched.message && form.errors.message ? form.errors.message : ''}</label>
                    <textarea  name="message" id="message" placeholder={form.touched.message && form.errors.message ? form.errors.message : 'Your Message*'} tabIndex="3" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur}></textarea>
                </div>
                <button className="btn-yellow" type="submit" tabIndex="4">Send Message <i className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default FormSection