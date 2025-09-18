import { Suspense } from "react";
import { Readers } from "../components/Readers";

export const ReadersPage = () => {
    return (
        <Suspense fallback={<p>Ładowanie czytelników...</p>}>
          <Readers />
        </Suspense>
    )
};