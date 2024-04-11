import React from "react";

const Input = ({label, htmlFor, type, id, name, placeholder, formData, setFormData, error}) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="text-sm md:text-base block mb-2 font-bold"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full ${error && 'placeholder-red-400'} px-3 py-2 text-sm md:text-base font-medium rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500`}
        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        required
      />
    </>
  );
};

export default Input;
