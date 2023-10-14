import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <ThreeCircles
        height="300"
        width="300"
        color="#e50914"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: '20',
          transform: 'translate(-50%,-50%)',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#e50914"
        innerCircleColor="#ffffff"
        middleCircleColor="#e50914"
      />
    </LoaderWrap>
  );
};
