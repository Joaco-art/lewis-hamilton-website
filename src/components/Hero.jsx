import LewisFerrari from '../assets/lewisferrari.png';
import HamiltonWin from '../assets/hamiltonwin.png';

export default function Hero() {
  return (
    <section className="relative h-[870px] flex items-center justify-center">
      <div className='absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-black to-gray-950 opacity-95'></div>
      <img src={HamiltonWin} alt="Lewis Hamilton" className="absolute top-0 z-0 right-5 w-screen h-full no-repeat object-cover" />
      <img src={LewisFerrari} alt="Lewis Hamilton" className="absolute bottom-0 z-20 left-0 w-3/12 h-10/12 no-repeat object-cover" />


        <h1 className="absolute right-5 z-10 text-9xl font-bold mb-4 uppercase font-family-poppins">Lewis Hamilton</h1>
        <p className="absolute right-8 z-10 text-3xl font-bold mt-30 uppercase font-family-poppins text-primary">Seven-time Formula 1 World Champion</p>
        <p className="absolute right-5 top-5 z-10 text-xl font-bold font-family-poppin">Stevenage, England</p>
        <p className="absolute right-5 top-15 z-10 text-sm font-bold font-family-poppins">7th of January 1985</p>

        


    </section>
  );
}