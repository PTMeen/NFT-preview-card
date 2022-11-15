import { FaEthereum } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
import colors from 'tailwindcss/colors';

const CardContent = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Equilibrium #3429</h1>
      <p className="my-8">
        Our Equilibrium collection promotes balance and calm. 0.041 ETH 3 days
        left Creation of Jules Wyvern
      </p>
      <div className="flex items-baseline justify-between text-sm">
        <div className="flex items-center">
          <FaEthereum size={20} color={colors.cyan[400]} />
          <p className="ml-2 text-lg font-extrabold text-cyan">0.041 ETH</p>
        </div>
        <div className="flex items-center">
          <BsFillClockFill size={15} />
          <p className="ml-2 text-lg">3 days left</p>
        </div>
      </div>
      <div className="my-4 border-t border-t-lineDarkBlue"></div>
    </div>
  );
};
export default CardContent;
