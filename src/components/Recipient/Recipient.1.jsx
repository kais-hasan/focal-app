import React, { useState } from 'react';

//import 'botstrap/dist/css/bootstrap.min.css';
export function Recipient() {
    const [formData, setFormData] = useState({
        data: '',
        name: '',
        number: '',
        company: '',
        address: '',
        amount: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value });
    };


    return (
        <div className='ka-recipient'>

            <div className='ka-enter-name'>
                <p className='ka-main-rec-info '>Recipient information </p>
                <p className='ka-inp1'>Enter the recipients information accurately</p>
            </div>

            <div className='ka-line1'>

                <input className='ka-inp2'
                    type="text" placeholder='enter recipient full name'
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}></input>

                <input placeholder='enter recipient numper' className='ka-inp2'
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange} />
            </div>




            <div className='ka-line2'>

                <div className='ka-line2-col1'>
                    <label>Payment methood </label>
                    <select name="company" value={formData.company} onChange={handleInputChange}>
                        <option selected> select</option>
                        <option value="  company 1">mtn cash</option>
                        <option value="company 2">syrital cash </option>
                        <option value="company 3"> bemo banck</option>
                    </select>
                </div>
                <div>
                    <input placeholder='Enter youer Address' className='ka-inp3'
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange} />
                </div>
            </div>

            <div className='ka-line3'>
                <input placeholder='The amount withdrawn' className='ka-inp4'
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange} />

                <input placeholder='The password For vain' className='ka-inp5'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange} />
            </div>

        </div>
    );
}
