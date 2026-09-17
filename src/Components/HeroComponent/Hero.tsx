// import HeroImage from '../../assets/bg-shadow.png';
import HeroImage1 from '../../assets/banner-main.png';
import HeroImage2 from '../../assets/bg-shadow.png';

const Hero = () => {
    return (
        <div className="px-4 py-10 md:px-8 md:py-25 flex flex-col gap-5 justify-center items-center w-full h-auto bg-center bg-cover bg-no-repeat bg-black" style={{backgroundImage: `url(${HeroImage2})`}}>
            <img src={HeroImage1} alt="" />
            <h1 className='font-bold text-3xl md:text-5xl text-white text-center'>This is an Players selections dashboard</h1>
            <p className='font-normal md:w-[600px] text-center text-[18px] text-white'>Before Move to the Next.Js we should learn React first. In react mostly the fundamantals such as state, components, props, useEffect, data fetching etc </p>
        </div>
    );
};

export default Hero;