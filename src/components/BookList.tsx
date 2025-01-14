type BookListProps = {
  title: string;
  books: Book[];
  containerClassName: string;
};
const BookList = ({ title, books, containerClassName }) => {
  return (
    <section>
      <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>
    </section>
  );
};

export default BookList;
