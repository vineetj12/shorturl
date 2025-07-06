import React, { ChangeEvent } from 'react';

interface InputBoxProps {
  seturl: (url: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ seturl }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    seturl(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ENTER URL"
        className="bg-white text-black-100 rounded-4xl w-[370px] h-[30px] p-5"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;
