import React, { useState } from "react";
import Layout from "@/components/layout";
import { TableStock } from "../../components/stock/table/TableStock";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/axios";
import Head from "next/head";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [pageStock, setPageStock] = useState<number>(1);
  const {
    data: stockData,
    isLoading: stockLoading,
    error: stockError,
    refetch: refetchStock
  } = useQuery({
    queryKey: ["stockData", "stock", pageStock],
    queryFn: () => fetchData("item", pageStock),
  });

  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useQuery({
    queryKey: ["categoryData", "category"],
    queryFn: () => fetchData("category"),
  });

  const {
    data: unitData,
    isLoading: unitLoading,
    error: unitError,
  } = useQuery({
    queryKey: ["unitData", "unit"],
    queryFn: () => fetchData("unit"),
  });

  const prevPage = () => {
    setPageStock(prev => Math.max(prev - 1, 1));
  }

  const nextPage = () => {
    setPageStock(prev => prev + 1);
  }
  return (
    <Layout>
      <Head>
        <title>Stock</title>
      </Head>
      <main className="h-screen">
        <TableStock
          dataStock={stockData}
          isLoadStock={stockLoading}
          dataCategory={categoryData}
          isLoadCategory={categoryLoading}
          dataUnit={unitData}
          isLoadUnit={unitLoading}
        />
        <div className="flex gap-3 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              prevPage();
              refetchStock();
            }}
            disabled={pageStock === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              nextPage();
              refetchStock();
            }}
            disabled={stockLoading || (stockData && stockData.length <= 10)}
          >
            Next
          </Button>
        </div>
      </main>
    </Layout>
  );
}
