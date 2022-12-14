import avatar from '../assets/images/image-avatar.png';

const CardFooter = () => {
  return (
    <div className="flex items-center">
      <div className="w-[50px] h-[50px] rounded-full mr-4 border-2 border-white">
        <img
          className="object-cover w-full h-full"
          src={avatar}
          alt="Jules Wyvern"
        />
      </div>
      <p>
        Creation of{' '}
        <a href="#" className="text-white cursor-pointer hover:text-cyan">
          Jules Wyvern
        </a>
      </p>
    </div>
  );
};
export default CardFooter;
