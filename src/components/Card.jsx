const Card = ({ children }) => {
  return (
    <div className="p-8 bg-cardDarkBlue rounded-2xl w-[85%] max-w-[350px]">
      {children}
    </div>
  );
};
export default Card;
