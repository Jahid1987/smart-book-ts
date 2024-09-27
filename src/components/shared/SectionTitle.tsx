const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-2 mb-3 md:mb-6 lg:mb-10">
      <h3 className="text-center text-xl md:text-2xl lg:text-3xl ">{title}</h3>
      <span className="flex self-center h-[2px] bg-primary w-52 text-center"></span>
    </div>
  );
};

export default SectionTitle;
