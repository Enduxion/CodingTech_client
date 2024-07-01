export default function LeftSidePanel({ name, faqs, className, shortDesc }) {
  return (
    <div className={className}>
      <div className="flex flex-col">
        <span className="text-2xl font-roboto font-bold">{name}</span>
        <span className="text-justify text-gray-700">{shortDesc}</span>
      </div>
      <div className="flex flex-col w-full gap-2">
        {faqs.map((faq, index) => (
          <a className="px-2 py-2 rounded-lg text-blue-500 hover:bg-gray-300 hover:text-black duration-100" key={index} href={`#${faq.split(" ")[0]}`}>
            {faq}
          </a>
        ))}
      </div>
    </div>
  );
}
