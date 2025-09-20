import React, { useState } from "react";
import Layout from "@/components/layout";
import { TableCategory } from "../../components/category/table/TableCategory";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function Index() {
  const [pageCategory, setPageCategory] = useState<number>(1);

  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
    refetch: refetchCategory
  } = useQuery({
    queryKey: ["categoryData", "category", pageCategory],
    queryFn: () => fetchData("category", pageCategory)
  });

  const prevPage = () => {
    setPageCategory(prev => Math.max(prev - 1, 1));
  }

  const nextPage = () => {
    setPageCategory(prev => prev + 1);
  }

  return (
    <Layout>
      <Head>
        <title>Category</title>
      </Head>
      <main className=" ">
        <TableCategory dataCategory={categoryData} isLoadCategory={categoryLoading} />
        <div className="flex gap-3 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              prevPage();
              refetchCategory();
            }}
            disabled={pageCategory === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              nextPage();
              refetchCategory();
            }}
            disabled={categoryLoading || (categoryData && categoryData.length <= 10)}
          >
            Next
          </Button>
        </div>
      </main>
    </Layout>
  );
}
