"use client";
import Image from 'next/image';

const RotateBottel = () => {

  return (
    <div className='rotate-bottel-animate '>
      <Image className='circle-bottle' unoptimized src={`${process.env.NEXT_PUBLIC_IMG_SRC}/farm-to-bottel.png`} width={190} height={190} alt='Farm to bottel' />
    </div>
  );
};

export default RotateBottel;

