
import Dollar from '../assets/dollar.svg'
import Card from '../components/Card';
import { FeaturesData } from '../constants';

export const Feature = () => {
  return (
    <section className="bg-primary py-10">
      <div className="my-10">
        <h2 className="text-white font-mono font-bold text-3xl text-center mb-10"> Our <span className="text-yellow-300">Features</span> </h2>

        <div className='flex flex-wrap justify-center gap-5'>
          {FeaturesData.map(({ img, title, description }, index) => (
            <div key={index} className="max-w-full">
              <Card heading={title} icon={img} description={description} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

