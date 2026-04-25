function Chip({ children, classNames, onClick, style }) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`px-4 py-2 m-1 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-800
       hover:border-gray-400 dark:hover:border-white/80 transition-all duration-300 hover-lift
      ${classNames}`}
    >
      <span className="text-sm lg:text-base font-medium">{children}</span>
    </div>
  );
}

export default Chip;
