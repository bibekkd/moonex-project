import Logo from '../assets/moonex-logo.png';
import Twitter from '../assets/twitter.svg';
import Telegram from '../assets/telegram.svg';
import Reddit from '../assets/reddit.svg';

export const Footer = () => {
  return (
    <footer className='bg-secondary text-white font-bold py-10'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between'>

          <div className='mb-4 md:mb-0'>
            <img src={Logo} height={80} width={80} alt='MoonEX Logo' />
          </div>


          <nav className='flex flex-wrap gap-6 text-center md:text-left justify-center md:justify-center'>
            <a href='#' className='hover:text-yellow-300'>About Us</a>
            <a href='#' className='hover:text-yellow-300'>Roadmap</a>
            <a href='#' className='hover:text-yellow-300'>FAQs</a>
            <a href='#' className='hover:text-yellow-300'>Contact Us</a>
          </nav>


          <div className='mt-4 md:mt-0 text-center md:text-right'>
            <div className='font-bold text-yellow-200'>Contact Us</div>
            <div className='flex justify-center md:justify-end gap-3 mt-2'>
              <img src={Telegram} alt='Telegram Icon' height={20} width={20} />
              <img src={Reddit} alt='Reddit Icon' height={20} width={20} />
              <img src={Twitter} alt='Twitter Icon' height={20} width={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

