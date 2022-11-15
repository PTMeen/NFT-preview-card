import equilibrium from '../assets/images/image-equilibrium.jpg';

const CardImg = () => {
  return (
    <div className="h-[250px] overflow-hidden rounded-2xl mx-auto mb-8">
      <img
        src={equilibrium}
        alt="equilibrium"
        className="object-cover w-full h-full"
      />
    </div>
  );
};
export default CardImg;
