export const inputStyles = `
  w-full px-4 py-3 
  bg-white/80 
  border border-gray-200 
  rounded-xl
  shadow-sm
  placeholder:text-gray-400
  focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 
  hover:border-gray-300
  transition-all duration-200
`;

export const dateInputStyles = `
  ${inputStyles}
  cursor-pointer
  text-gray-700
  appearance-none
  bg-no-repeat
  bg-[length:20px] bg-[center_right_1rem]
  bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxMGg4IiBzdHJva2U9IiM2QjcyODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')]
`;

export const textareaStyles = `
  ${inputStyles}
  min-h-[120px]
  resize-none
`;

export const sectionStyles = `
  p-6
  bg-white/80 
  backdrop-blur-sm 
  rounded-xl 
  border border-gray-200/50
  shadow-sm
  hover:shadow-md
  transition-all duration-300
  space-y-4
`;

export const aiButtonStyles = `
  absolute bottom-3 right-3 
  px-4 py-1.5 
  text-sm font-medium
  text-violet-600 
  bg-violet-50 
  rounded-lg
  border border-violet-100
  hover:bg-violet-100 
  hover:border-violet-200
  transition-all duration-200
`;

export const addButtonStyles = `
  w-full 
  py-4 
  border-2 border-dashed border-gray-200 
  rounded-xl 
  text-gray-600 
  hover:border-violet-500 
  hover:text-violet-600 
  hover:bg-violet-50/50
  active:bg-violet-100/50
  transition-all duration-200
`; 