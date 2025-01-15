import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home= () =>
  (
    <>
      <BookOverview/>
      <BookList/>
    </>
  );


export default Home;