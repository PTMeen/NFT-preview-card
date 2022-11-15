import equilibrium from '../assets/images/image-equilibrium.jpg';
import { AiFillEye } from 'react-icons/ai';

const CardImg = () => {
  return (
    <div className="h-[250px] overflow-hidden rounded-2xl mx-auto mb-8 cursor-pointer relative">
      <div className="absolute flex items-center justify-center w-full h-full duration-300 opacity-0 hover:opacity-100 bg-cyan/50">
        <AiFillEye size={30} color="white" />
      </div>
      <img
        src={equilibrium}
        alt="equilibrium"
        className="object-cover w-full h-full"
      />
    </div>
  );
};
export default CardImg;
