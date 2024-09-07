const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" text-center my-12">
      <p className=" text-[#d99904] text-xl mb-6">--- {subHeading} ---</p>
      <h3 className=" mx-auto w-[412px] border-y-4 py-3 uppercase text-[40px] font-medium">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
