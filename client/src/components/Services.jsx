import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ title, color, icon, subtitle }) => {
  return (
    <div className="flex flex-row items-center justify-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
      <div className="ml-5 flex flex-col flex-1">
        <h1 className="mt-2 text-white text-lg">{title}</h1>
        <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start">
        <ServiceCard
          title="Security Guaranteed"
          color="bg-[#2952E3]"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our services."
        />
        <ServiceCard
          title="Best exchange rates"
          color="bg-[#8945f8]"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our services."
        />
        <ServiceCard
          title="Fastest transactions"
          color="bg-[#f84450]"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our services."
        />
      </div>
    </div>
  );
};

export default Services;
