

const SectionTitle = ({ heading, subheading}) => {
  return (
    <div className="mx-auto md:w- w-4/12 text-center my-8">
      <p className="text-yellow-600 mb-2">--- {subheading} ---</p>
      <p className="text-4xl uppercase border-y-4 py-4 ">{heading}</p>
    </div>
  );
};

export default SectionTitle;