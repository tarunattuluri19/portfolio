const Card = ({ data, isOpen, index, onClick }) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`cursor-pointer mb-4 p-6 rounded-xl border-2 transition-all duration-300 hover-lift animate-slideInUp
      bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800
      hover:border-purple-500 dark:hover:border-purple-400
      ${isOpen === index + 1 ? "border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-500/20" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
          <img
            src={data.logo}
            alt={`${data.company} logo`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {data.company}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 font-medium">{data.role}</p>
          {isOpen === index + 1 && (
            <div className="mt-4 text-gray-700 dark:text-gray-400 whitespace-pre-line leading-relaxed text-sm animate-slideInUp">
              {data.description}
            </div>
          )}
        </div>

        <div className="lg:text-right text-sm text-gray-600 dark:text-gray-400 font-medium">
          <span>{data.duration}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
