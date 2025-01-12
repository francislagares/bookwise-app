import BookList from '@/components/BookList';
import BookOverview from '@/components/BookOverview';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <BookOverview />
      <BookList />
      <Button>Click me</Button>
    </>
  );
};

export default Home;
