import React from 'react'
import ContactItem from '../components/ContactItem'
import Title from '../components/Title'
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function Contact() {
  return (
    <div>
      <div className="title">
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="Contact">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.651729896846!2d75.8303392144364!3d22.704005233857366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb679799821%3A0x846777fea7ed117!2s734%2C%20Sector%20B%2C%20Sector%20D%2C%20Gumasta%20Nagar%2C%20Scheme%2071%2C%20Indore%2C%20Madhya%20Pradesh%20452002!5e0!3m2!1sen!2sin!4v1633174139534!5m2!1sen!2sin" ></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8305386094'} text2={'+0731 4244329'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'nehal.200702@gmail.com'} text2={'19bit129@ietdavv.edu.in'} title={'Email'}/>
                    <ContactItem icon={location} text1={'734,Brahma Kamal, Sector B, Scheme no.71, Indore'} text2={'Madhya Pradesh'} title={'Address'}/>
                </div>
            </div>
    </div>
  )
}

export default Contact
