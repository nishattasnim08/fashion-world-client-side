import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer text-center'>
            <footer>
                <div className='d-flex'>
                    <div className='m-auto text-start'>
                        <p>Home</p>
                        <p>Inventory</p>
                        <p>My Items</p>
                        <p>Customer Reviews</p>
                        <p>FAQ</p>
                        <p>Blogs</p>
                    </div>
                    <div className='m-auto text-start'>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Cookies</p>
                    </div>
                    <div className='m-auto'>
                        <i class="fa-brands fa-facebook-f px-2"></i>
                        <i class="fa-brands fa-instagram px-2"></i>
                        <i class="fa-brands fa-linkedin-in px-2"></i>
                        <i class="fa-brands fa-twitter px-2"></i>
                        <i class="fa-brands fa-whatsapp px-2"></i>
                    </div>
                </div>
                <div><small>Copyright &copy; Nishat Tasnim | 2022 </small></div>
            </footer>
        </div>
    );
};

export default Footer;