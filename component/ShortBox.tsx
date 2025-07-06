"use client";
import React, { useState } from 'react';
import InputBox from './InputBox';
import ButtonUi from './ButtonUi';

const ShortBox = () => {
  const [url, seturl] = useState("");

  return (
    <div className="bg-[#1c1c1e] rounded-3xl h-[220px] w-[400px] grid justify-center pt-10 shadow-[0_0_60px_rgba(255,255,255,0.3)]">
      <InputBox seturl={seturl} />
      <ButtonUi url={url} />
    </div>
  );
};

export default ShortBox;
