import { FaImage } from 'react-icons/fa';
import { SCALED_IMAGE } from '../constants';

const Image = () => {
  return (
    <div
      className="flex items-center justify-center rounded bg-gray-700"
      style={{ height: SCALED_IMAGE.h, width: SCALED_IMAGE.w }}
    >
      <FaImage className="h-16 w-16 text-gray-400" />
    </div>
  );
};

const Text = ({ h = 'h-4' }: { h?: string }) => (
  <div className={`${h} w-full rounded-lg bg-gray-700`}></div>
);

const Sk = { Image, Text };

export default Sk;
