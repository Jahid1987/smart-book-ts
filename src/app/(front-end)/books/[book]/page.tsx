const BookDetails = ({ params }: { params: { book: string } }) => {
  return <div>Details about {params.book}</div>;
};

export default BookDetails;
