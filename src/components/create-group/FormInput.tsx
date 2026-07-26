interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
}

export default function FormInput({
  label,
  placeholder,
  type = "text",
}: FormInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-3
          text-gray-700
          placeholder:text-gray-400
          outline-none
          transition
          focus:border-violet-500
          focus:ring-2
          focus:ring-violet-200
        "
      />
    </div>
  );
}