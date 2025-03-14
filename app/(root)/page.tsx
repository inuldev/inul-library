import { sampleBooks } from "@/constants";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[0]} />

    <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
