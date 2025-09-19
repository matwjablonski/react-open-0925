import { Suspense } from "react";
import { Readers } from "../components/Readers/Readers";

const ReadersPage = () => {
    return (
        <Suspense fallback={<p>Ładowanie czytelników...</p>}>
          <Readers />
        </Suspense>
    )
};

export default ReadersPage;