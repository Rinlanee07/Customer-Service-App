import React, { useState } from "react";
import Layout from "@/components/layout";
import { TableSupplier } from "../../components/supplier/table/TableSupplier";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/axios";
import Head from "next/head";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [pageSupplier, setPageSupplier] = useState<number>(0);
  const {
    data: supplierData,
    isLoading: supplierLoading,
    error: supllierError,
    refetch: refetchSupplier
  } = useQuery({
    queryKey: ["supplierData", "supplier"],
    queryFn: () => fetchData("supplier",pageSupplier)
  });

  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useQuery({
    queryKey: ["categoryData", "category"],
    queryFn: () => fetchData("category")
  });

  const prevPage = () => {
    setPageSupplier(prev => Math.max(prev - 1, 1));
  }

  const nextPage = () => {
    setPageSupplier(prev => prev + 1);
  }


  return (
    <Layout>
      <Head>
        <title>Supplier</title>
      </Head>
      <main className="h-screen">
        <TableSupplier dataSupplier={supplierData} isLoadSupplier={supplierLoading} dataCategory={categoryData} isLoadCategory={categoryLoading} />
        <div className="flex gap-3 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              prevPage();
              refetchSupplier();
            }}
            disabled={pageSupplier === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              nextPage();
              refetchSupplier();
            }}
            disabled={supplierLoading || (supplierData && supplierData.length < 10)}
          >
            Next
          </Button>
        </div>
      </main>

    </Layout>
  );
}
