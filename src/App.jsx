import Card from './components/Card';
import CardContent from './components/CardContent';
import CardFooter from './components/CardFooter';
import CardImg from './components/CardImg';

const App = () => {
  return (
    <>
      <div className="w-full min-h-[90vh] justify-center items-center flex">
        <Card>
          <CardImg />
          <CardContent />
          <CardFooter />
        </Card>
      </div>
      <div className="px-8 mx-auto my-4 text-xs text-center">
        Challenge by
        <a
          className="ml-1 text-cyan"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a className="ml-1 text-cyan" href="#">
          PTMeen
        </a>
        .
      </div>
    </>
  );
};
export default App;
