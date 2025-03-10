// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { GrMail } from "react-icons/gr";
// import Review from './Review';
// import { FiMail } from 'react-icons/fi';
// import { LuMapPin } from 'react-icons/lu';

// const Contact = () => {
//     const [status, setStatus] = useState("idle");

//     const handleClick = () => {
//         if (status === "idle") {
//             setStatus("loading");
//             setTimeout(() => setStatus("checked"), 1000);
//         }
//     };

//     // Form Input State
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         website: '',
//         message: '',
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);


//     //Handle Input Change
//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData({ ...formData, [id]: value });

//         // Clear specific error when the user starts to type in that field
//         setErrors({ ...errors, [id]: '' });

//     };

//     const validateForm = () => {
//         let tempErrors = {};
//         let isValid = true;

//         if (!formData.name.trim()) {
//             tempErrors.name = 'Name is required';
//             isValid = false;
//         }
//         if (!formData.email.trim()) {
//             tempErrors.email = 'Email is required';
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = 'Email is invalid';
//             isValid = false;
//         }
//         if (!formData.subject.trim()) {
//             tempErrors.subject = 'Subject is required';
//             isValid = false;
//         }
//         if (!formData.website.trim()) {
//             tempErrors.website = "Website URL is Required"
//             isValid = false;
//         }
//         if (!formData.message.trim()) {
//             tempErrors.message = 'Message is required';
//             isValid = false;
//         }

//         setErrors(tempErrors);
//         return isValid;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const isValid = validateForm(); // Validate form
//         if (isValid && !isSubmitting) {
//             setIsSubmitting(true);
//             try {
//                 const response = await fetch(
//                     "https://script.google.com/macros/s/AKfycbxbXucJkwfB9zFoRyzfS_fJHWWNvADmxJBQWiE_src/dev",
//                     {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify(formData),
//                     }
//                 );

//                 if (response.ok) {
//                     toast.success("Form submitted Successfully!", {
//                         position: toast.POSITION.TOP_CENTER,
//                         autoClose: 2000,
//                     });
//                     setFormData({
//                         name: "",
//                         email: "",
//                         subject: "",
//                         website: "",
//                         message: "",
//                     });
//                     setErrors({});
//                 } else {
//                     toast.error("Failed to submit the form!", {
//                         position: toast.POSITION.TOP_CENTER,
//                         autoClose: 3000,
//                     });
//                     console.error("Failed to submit the form:", response.statusText);
//                 }
//             } catch (error) {
//                 toast.error("An error occurred during form submission!", {
//                     position: toast.POSITION.TOP_CENTER,
//                     autoClose: 3000,
//                 });
//                 console.error("Error during form submission:", error);
//             }
//             finally {
//                 setIsSubmitting(false)
//             }
//         } else {
//             toast.error('Please fix the errors in the form!', {
//                 position: toast.POSITION.TOP_CENTER,
//                 autoClose: 3000,
//             });
//         }
//     };
//     return (
//         <>
//             <section className="py-10 bg-talk">
//                 <div className="container mx-auto">
//                     <div className="flex justify-between lg:flex-row flex-col">
//                         {/* Left Side - Text Content */}
//                         <div className="space-y-6 lg:max-w-lg">
//                             <h2 className="text-light-blue text-4xl font-bold">Get In Touch</h2>
//                             <p className="text-primary md:text-medium text-small font-normal leading-5 md:leading-6">
//                                 Have questions about our WordPress maintenance plans? Want to discuss how we can
//                                 keep your site secure, fast, and updated? Fill out the form below or reach out to
//                                 us using any of the options provided. We're here to help!
//                             </p>
//                             <div className="space-y-3 flex flex-col">
//                                 <a href='mailto:info@vcga.com' className="lg:text-small text-xs flex items-center gap-2 font-medium text-primary">
//                                     <FiMail className='lg:size-5 text-slate-700/70' />
//                                     info@vcga.czom
//                                 </a>
//                                 <a href='#' className="lg:text-small text-xs flex items-center gap-2 text-primary font-medium">
//                                     <LuMapPin className='lg:size-5 text-slate-700/70' />
//                                     279 high street north london
//                                 </a>
//                             </div>
// <div className='py-5'>
//     <h3 className="text-primary md:text-basic text-base font-bold mb-4 md:text-left text-center">Follow Us on Social Media</h3>
//     <div className='flex justify-center md:justify-start gap-5'>
//         <a href="https://www.facebook.com/people/VCGA/61572283934920/" className='md:p-3 p-2 bg-[#3B5998] rounded-md hover:bg-blue-700 transition-all ease-in duration-200'>
//             <FaFacebook className='md:size-5 size-4 text-white' />
//         </a>
//         <a href="https://www.linkedin.com/company/vcgauk/about/?viewAsMember=true" className='md:p-3 p-2 bg-[#0077B5] rounded-md hover:bg-sky-700 transition-all ease-in duration-200'>
//             <FaLinkedin className='md:size-5 size-4 text-white' />
//         </a>
//         <a href="https://x.com/VCGAPVTLTD" className='md:p-3 p-2 bg-black rounded-md hover:bg-dark-black transition-all ease-in duration-200'>
//             <FaXTwitter className='md:size-5 size-4 text-white' />
//         </a>
//         <a href="mailto:info@vcga.com" className='md:p-3 p-2 bg-[#EA4335] rounded-md hover:bg-red-700 transition-all ease-in duration-200'>
//             <GrMail className='md:size-5 size-4 text-white' />
//         </a>
//     </div>
// </div>
//                         </div>

//                         {/* Right Side - Form-Field */}
//                         <div className="bg-white rounded-2xl md:p-10 p-4 lg:max-w-md shadow-lg border border-slate-300">
//                             <h3 className="text-primary text-base font-bold mb-4">
//                                 Get in Touch with Our WordPress Experts
//                             </h3>
//                             <form onSubmit={handleSubmit} className="space-y-3 text-primary">
//                                 <div>
//                                     <label htmlFor="name" className="block font-medium">Name*</label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         value={formData.name}
//                                         onChange={handleInputChange}
//                                         className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg ${errors.name ? 'border-red-500' : ''
//                                             }`}
//                                     />
//                                     {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email" className="block  font-medium">Email*</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg ${errors.email ? 'border-red-500' : ''
//                                             }`}
//                                     />
//                                     {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                                 </div>
//                                 <div>
//                                     <label htmlFor="subject" className="block  font-medium">Subject*</label>
//                                     <input
//                                         type="text"
//                                         id="subject"
//                                         value={formData.subject}
//                                         onChange={handleInputChange}
//                                         className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg ${errors.subject ? 'border-red-500' : ''
//                                             }`}
//                                     />
//                                     {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
//                                 </div>
//                                 <div>
//                                     <label htmlFor="website" className="block  font-medium">Website URL(Optional)</label>
//                                     <input type="text" id="website" value={formData.website}
//                                         onChange={handleInputChange}
//                                         className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg ${errors.website ? 'border-red-500' : ''
//                                             }`} />
//                                     {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
//                                 </div>
//                                 <div>
//                                     <label htmlFor="message" className="block  font-medium">Message</label>
//                                     <textarea id="message" rows="5" value={formData.message}
//                                         onChange={handleInputChange}
//                                         className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg resize-none ${errors.message ? 'border-red-500' : ''
//                                             }`}></textarea>
//                                     {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//                                 </div>

//                                 <button type="submit" disabled={isSubmitting} className={`bg-light-blue text-white w-full md:py-4 py-2.5 font-medium rounded-lg hover:bg-[#103498] transition-all ease-in duration-200 focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
//                                     {isSubmitting ? "Sending..." : "Send My Request"}
//                                 </button>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//             <Review />
//         </>
//     );
// };

// export default Contact;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import Review from './Review'; // Assuming this component is in the same directory
import contact from "../../assets/images/download.png";
import { FiMail } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import { GrMail } from "react-icons/gr";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Use 'name' attribute directly
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Invalid email format';
            isValid = false;
        }
        if (!formData.subject.trim()) {
            tempErrors.subject = 'Subject is required';
            isValid = false;
        }
        if (!formData.message.trim()) {
            tempErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fix the errors in the form!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxbXucJkwfB9zFoRyzfS_fJHWWNvADmxJBQWiE_src/dev",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                toast.success("Form submitted successfully!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setErrors({});
            } else {
                toast.error("Failed to submit the form!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
                console.error("Failed to submit the form:", response.statusText);
            }
        } catch (error) {
            toast.error("An error occurred during form submission!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
            console.error("Error during form submission:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="my-10 bg-gray-50">
                <div className="container mx-auto">
                    <div className="md:flex md:items-center md:justify-between gap-5">
                        {/* Image Side */}
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src={contact}
                                alt="Contact Us"
                                className="w-full h-auto object-cover hidden md:block"
                            />
                        </div>

                        {/* Form Side */}
                        <div className="md:w-1/2 bg-white rounded-2xl shadow-lg md:p-8 p-6 border border-slate-300">
                            <h2 className="md:text-3xl text-base font-bold text-light-blue mb-6">Get in Touch</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 text-small font-semibold mb-2">Name: </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 text-small font-semibold mb-2">Email: </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Your Email"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 text-small font-semibold mb-2">Subject: </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={`shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Subject"
                                    />
                                    {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 text-small font-semibold mb-2">Message: </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : 'border-gray-300'} h-32 resize-none`}
                                        placeholder="Your Message"
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-light-blue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="md:mt-12 mt-5 md:flex md:items-start md:justify-between gap-5">
                        {/* Contact Details */}
                        <div className="space-y-4 md:w-1/2 w-full">
                            <h3 className="lg:text-2xl text-base font-semibold text-light-blue mb-2">Contact Us</h3>
                            <p className="text-primary lg:text-medium text-small font-normal leading-5 md:leading-6">
                                Have questions about our WordPress maintenance plans? Want to discuss how we can
                                keep your site secure, fast, and updated? Fill out the form below or reach out to
                                us using any of the options provided. We're here to help!
                            </p>
                            <div className="space-y-3 flex flex-col">
                                <a href='mailto:info@vcga.com' className="lg:text-small text-xs flex items-center gap-2 font-medium text-primary">
                                    <FiMail className='size-5 text-slate-700/70' />
                                    info@vcga.czom
                                </a>
                                <a href='#' className="lg:text-small text-xs flex items-center gap-2 text-primary font-medium">
                                    <LuMapPin className='size-5 text-slate-700/70' />
                                    279 high street north london
                                </a>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className='md:w-1/2 mt-5 md:mt-0 w-full space-y-5'>
                            <h3 className="lg:text-2xl text-base font-semibold text-light-blue mb-2">Follow Us on Social Media</h3>
                            <div className='flex gap-3'>
                                <a href="https://www.facebook.com/people/VCGA/61572283934920/" className='lg:p-3 p-2 bg-[#3B5998] rounded-lg hover:bg-blue-700 transition-all ease-in duration-200'>
                                    <FaFacebook className='lg:size-5 size-4 text-white' />
                                </a>
                                <a href="https://www.linkedin.com/company/vcgauk/about/?viewAsMember=true" className='lg:p-3 p-2 bg-[#0077B5] rounded-lg hover:bg-sky-700 transition-all ease-in duration-200'>
                                    <FaLinkedin className='lg:size-5 size-4 text-white' />
                                </a>
                                <a href="https://x.com/VCGAPVTLTD" className='lg:p-3 p-2 bg-black rounded-lg hover:bg-dark-black transition-all ease-in duration-200'>
                                    <FaTwitter className='lg:size-5 size-4 text-white' />
                                </a>
                                <a href="mailto:info@vcga.com" className='lg:p-3 p-2 bg-[#EA4335] rounded-lg hover:bg-red-700 transition-all ease-in duration-200'>
                                    <GrMail className='lg:size-5 size-4 text-white' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
