import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#077728"
      visible={true}
      outerCircleColor="#094677"
      innerCircleColor="#c0119a"
      barColor="#bbce0b"
      ariaLabel="circles-with-bar-loading"
    />
  );
};

export default Loader;
