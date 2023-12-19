import React from 'react'

 const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
        <div className='container'>
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text__para">
                Got a technical issue? Want to send feedback about a beta feature? Let us know.
            </p>


            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[650px]'>
                    <iframe title='google-maps' className='border-0 w-full h-full' 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.328237902846!2d74.25636264421121!3d31.46461865691158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702318570560!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[650px] lg:flex items-center bg-indigo-100 px-4
                    lg:px-8 py-8'>
                        <form className='w-full'>
                            <div className='mb-5'>
                                <input type='text' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[5px]' name='name' id='name' />
                            </div>
                            <div className='mb-5'>
                                <input type='email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[5px]' name='name' id='name' />
                            </div>
                            <div className='mb-5'>
                                <input type='text' placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[5px]' name='name' id='name' />
                            </div>
                            <div className='mb-5'>
                                <textarea type='text' rows={3} placeholder='Write your message' className='w-full p-3 focus:outline-none rounded-[5px]' name='name' id='name' />
                            </div>
                            <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor
                            text-center ease-linear duration-150'>
                                Send Message
                            </button>
                        </form>
                    </div>
            </div>
        </div>
    </section>
    
  )
}
export default Contact