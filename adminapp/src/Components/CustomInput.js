import React from "react";

const CustomInput = (props) => {
  const { type, i_id, i_class, name, val, onChng, onBlr, placeholder } = props;
  return (
    <div className="relative flex items-start gap-1 flex-col ">
      <input
        type={type}
        className={`border border-gray-300 rounded-md px-3 block
             w-full leading-5 transition duration-150 ease-in-out sm:text-sm sm-leading-5 py-2 ${i_class}`}
        id={i_id}
        placeholder={placeholder}
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onBlr}
      />
    </div>
  );
};

export default CustomInput;
