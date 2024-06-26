import React from 'react';

const ContactForm = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
      };
    return (
        <form onSubmit={handleSubmit} action="#">
        <div className="row">
            <div className="col-xl-6">
                <div className="contact-from-input mb-20">
                    <input type="text" placeholder="Name"/>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="contact-from-input mb-20">
                    <input type="text" placeholder="Phone"/>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="contact-from-input mb-20">
                    <input type="text" placeholder="Email"/>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="contact-select">
                    <select className="mb-20">
                        <option value="Subject">Course</option>
                        <option value="Subject">Financial Aid</option>
                        <option value="Subject">Payment</option>
                        <option value="Subject">Information</option>
                    </select>
                </div>
            </div>
            <div className="col-xl-12">
                <div className="contact-from-input mb-20">
                    <textarea placeholder="Message" name="message"></textarea>
                </div>
            </div>
            <div className="colxl-2 ">
                <div className="cont-btn mb-20">
                    <a href="#" className="cont-btn">Submit</a>
                </div>
            </div>
        </div>
    </form>
    );
};

export default ContactForm;