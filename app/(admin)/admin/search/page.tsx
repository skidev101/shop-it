import { SearchResultsContent } from "@/components/dashboard/search-results-content";
import { Suspense } from "react";

export default function AdminSearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
