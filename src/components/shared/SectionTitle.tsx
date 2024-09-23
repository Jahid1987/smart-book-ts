const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-center text-xl md:text-2xl lg:text-3xl mb-3 md:mb-6 lg:mb-10">
      {title}
    </h3>
  );
};

export default SectionTitle;
