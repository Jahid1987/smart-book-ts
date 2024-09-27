const ServiceDetails = ({ params }: { params: { service: string } }) => {
  return <div>Details about {params.service}</div>;
};

export default ServiceDetails;
