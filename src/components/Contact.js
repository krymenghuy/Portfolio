import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaLanguage, FaFacebookF, FaTelegram } from 'react-icons/fa';

const infoCards = [
  {
    icon: <FaEnvelope className="text-5xl text-blue-400 drop-shadow-lg" />,
    label: 'Email',
    value: 'menghuykry@gmail.com',
    link: 'mailto:menghuykry@gmail.com',
  },
  {
    icon: <FaPhone className="text-5xl text-purple-400 drop-shadow-lg" />,
    label: 'Phone',
    value: '(+855) 962 365 105',
    link: 'tel:+855962365105',
  },
  {
    icon: <FaMapMarkerAlt className="text-5xl text-pink-400 drop-shadow-lg" />,
    label: 'Location',
    value: 'Phnom Penh, Cambodia',
    link: 'https://www.google.com/maps/place/Phnom+Penh/@11.5500000,104.9166667,12z/data=!3m1!4b1!4m6!3m5!1s0x310951add5e2cd67:0x3703f68bd469af0!8m2!3d11.55!4d104.9166667!16s%2Fg%2F11c403zwg7?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    icon: <FaLanguage className="text-5xl text-green-400 drop-shadow-lg" />,
    label: 'Languages',
    value: 'English, Khmer',
    link: null,
  },
];

const socialLinks = [
  {
    icon: <FaTelegram />,
    name: 'telegram',
    url: 'https://t.me/menghuykry',
    gradient: 'from-blue-500 to-blue-400',
  },
  {
    icon: <FaGithub />,
    name: 'GitHub',
    url: 'https://github.com/krymenghuy',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    icon: < FaFacebookF/>,
    name: 'Facebook',
    url: 'https://web.facebook.com/menghuy.kry.7',
    gradient: 'from-blue-400 to-cyan-400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: 'spring', stiffness: 80 } },
};

const iconVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: 'spring', stiffness: 80 } },
};

const Contact = () => (
  <section id="contact" className="relative pb-0 overflow-hidden section-padding">
    <div className="relative z-10 py-16 container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="mb-4 text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
          Get In Touch
        </h2>
        <motion.div
          className="w-40 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ width: 0 }}
          whileInView={{ width: '10rem' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        />
        <p className="max-w-2xl mx-auto text-2xl font-medium text-gray-200">
          I'm always interested in new opportunities and exciting projects. Let's connect!
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto">
        <h3 className="mb-8 text-2xl font-bold tracking-wide text-center text-white sm:text-3xl drop-shadow-lg">Contact Information</h3>
        <div className="grid gap-10 sm:grid-cols-2">
          {infoCards.map((info, idx) => {
            let cardGradient = '';
            let iconColor = '';
            if (info.label === 'Email') {
              cardGradient = 'bg-gradient-to-br from-blue-500 to-violet-900';
              iconColor = 'text-blue-400';
            } else if (info.label === 'Phone') {
              cardGradient = 'bg-gradient-to-br from-blue-500 to-violet-900';
              iconColor = 'text-fuchsia-400';
            } else if (info.label === 'Location') {
              cardGradient = 'bg-gradient-to-br from-blue-500 to-violet-900';
              iconColor = 'text-pink-400';
            } else if (info.label === 'Languages') {
              cardGradient = 'bg-gradient-to-br from-blue-500 to-violet-900';
              iconColor = 'text-green-400';
            } else {
              cardGradient = 'bg-white/30 text-gray-900';
              iconColor = 'text-gray-700';
            }
            return (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
                className={`relative flex flex-col items-center p-10 overflow-hidden transition-all duration-300 border-2 border-transparent shadow-2xl rounded-3xl backdrop-blur-2xl hover:border-blue-400/40 hover:shadow-blue-400/20 group text-white ${cardGradient}`}
              whileHover={{ scale: 1.045, y: -6, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.18)' }}
            >
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                  className={`mb-5 transition-transform duration-300 group-hover:scale-110 ${iconColor}`}
              >
                  {info.icon.type ? React.createElement(info.icon.type, { className: `text-5xl drop-shadow-lg ${iconColor}` }) : info.icon}
              </motion.div>
                <h4 className={`mb-2 text-2xl font-bold tracking-wide drop-shadow-lg ${
                  info.label === 'Email' ? 'text-white' :
                  info.label === 'Phone' ? 'text-white' :
                  info.label === 'Location' ? 'text-white' :
                  info.label === 'Languages' ? 'text-white' :
                  'text-gray-900'
                }`}>{info.label}</h4>
              {info.link ? (
                  <a href={info.link} className={`text-xl font-medium break-all hover:underline ${
                    info.label === 'Email' ? 'text-white' :
                    info.label === 'Phone' ? 'text-white' :
                    info.label === 'Location' ? 'text-white' :
                    info.label === 'Languages' ? 'text-white' :
                    'text-gray-900'
                  }`} target="_blank" rel="noopener noreferrer">{info.value}</a>
              ) : (
                  <p className={`text-xl font-medium break-all ${
                    info.label === 'Email' ? 'text-white' :
                    info.label === 'Phone' ? 'text-white' :
                    info.label === 'Location' ? 'text-white' :
                    info.label === 'Languages' ? 'text-white' :
                    'text-gray-900'
                  }`}>{info.value}</p>
              )}
              {/* Glassy border effect */}
              <div className="absolute inset-0 transition-all duration-300 border-2 pointer-events-none rounded-3xl border-white/10 group-hover:border-blue-400/40" style={{boxShadow:'0 4px 32px 0 rgba(99,102,241,0.08)'}}></div>
            </motion.div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <h4 className="mb-6 text-3xl font-semibold tracking-wide text-white">Follow Me</h4>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, y: -8, boxShadow: '0 0 24px 0 rgba(99,102,241,0.25)' }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full p-4 bg-gradient-to-br ${social.gradient} shadow-lg text-white text-3xl transition-all duration-300 hover:shadow-2xl`}
                style={{ boxShadow: '0 2px 16px 0 rgba(99,102,241,0.10)' }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 