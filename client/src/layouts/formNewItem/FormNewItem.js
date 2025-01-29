import React, { useState } from "react";

const FormNewItem = (props) => {
    const [fullName, setFullName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [notes, setNotes] = useState('');
    return (
        <div className='mt-3'>
            <form>
                <div className='mt-3'>
                    <label className='form-label'>ФИО</label>
                    <input
                        className='form-control'
                        type='text'
                        onChange={(e) => { setFullName(e.target.value) }} />
                </div>
                <div className='mt-3'>
                    <label className='form-label'>Телефон</label>
                    <input
                        className='form-control'
                        type='text'
                        onChange={(e) => { setTelephone(e.target.value) }}></input>
                </div>
                <div className='mt-3'>
                    <label className='form-label'>Заметки</label>
                    <textarea
                        className='form-control'
                        rows={3}
                        onChange={(e) => { setNotes(e.target.value) }} />
                </div>
                <div>
                    <button
                        type='button'
                        className='mt-3 btn btn-primary'
                        onClick={props.appendContact}
                    >
                        Новый контакт
                    </button>
                </div>
            </form >
        </div >)
}
export default FormNewItem;