import React, { useState } from "react";
import Layout from "@/components/layout";
import { useQuery } from "@tanstack/react-query";
import { fetchData, fetchwithText } from "@/lib/axios";
import Head from "next/head";
import Loading from "@/components/loading/Loading";
import TableDataTransaction from "@/components/transaction/Table/TableDataTransaction";
import { columnsClaimOrder, columnsTransaction } from "@/components/transaction/Table/ColumnData";
import { ClaimOrderData, ImplementationDetails } from "@/datatype/fetch.datatype";
import { Button } from "@/components/ui/button";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import moment from "moment";

const formSchema = z.object({
    searchParams: z.string().max(50).optional(),
})


export default function Index() {
    const [pageCustomer, setPageCustomer] = useState<number>(1);
    const [pageClaimOrder, setPageClaimOrder] = useState<number>(1);
    const [filterShopName, setFilterShopName] = useState<string | undefined>("");
    const [filterClaimOrder, setFilterClaimOrder] = useState<string | undefined>("");
    const formTransaction = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchParams: "",
        },
    });

    const formClaimOrder = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchParams: "",
        },
    });

    function onSubmitTransaction(values: z.infer<typeof formSchema>) {
        setFilterShopName(values.searchParams);
        refetchTransactionCustomer();
    }

    function ResetTransactionData() {
        setFilterShopName("");
        formTransaction.reset();
        refetchTransactionCustomer();
    }

    function onSubmitClaimOrder(values: z.infer<typeof formSchema>) {
        setFilterClaimOrder(values.searchParams);
        refetchClaimOrder();
    }

    function ResetClaimOrder() {
        setFilterClaimOrder("");
        formClaimOrder.reset();
        refetchClaimOrder();
    }

    const {
        data: transactionCustomerData,
        isLoading: transactionCustomerLoading,
        error: transactionCustomerError,
        refetch: refetchTransactionCustomer
    } = useQuery<ImplementationDetails[]>({
        queryKey: ["transactionCustomerData", "transactionCustomer", pageCustomer, filterShopName],
        queryFn: () => fetchData("transactioncustomer", { page: pageCustomer, limit: filterShopName ? undefined : 10, search: filterShopName })
    });


    const {
        data: claimOrderData,
        isLoading: claimOrderLoading,
        error: claimOrderError,
        refetch: refetchClaimOrder
    } = useQuery<ClaimOrderData[]>({
        queryKey: ["claimOrderData", "claimOrder", pageClaimOrder, filterClaimOrder],
        queryFn: () => fetchData("claimorder", { page: pageClaimOrder, limit: filterClaimOrder ? undefined : 10, search: filterClaimOrder })
    });


    const prevPage = (table: string) => {
        if (table === 'customer') {
            setPageCustomer(prev => Math.max(prev - 1, 1));
        }
        if (table === 'claimorder') {
            setPageClaimOrder(prev => Math.max(prev - 1, 1));
        }

    }

    const nextPage = (table: string) => {
        if (table === 'customer') {
            setPageCustomer((prev) => prev + 1)
        }
        if (table === 'claimorder') {
            setPageClaimOrder(prev => prev + 1);
        }
    }

    const exportToExcel = async (name: string) => {
        try {
            const blob = await fetchwithText(name, "excel")
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            const today = new Date();
            const formatDate = moment(today).format('DD/MMM/yyyy')
            link.href = url;
            link.setAttribute('download', `data_export_${formatDate}.xlsx`); // Set the filename
            document.body.appendChild(link);
            link.click(); // Programmatically click the link to trigger the download
            link.parentNode?.removeChild(link); // Clean up the DOM

        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    return (
        <Layout>
            <Head>
                <title>Transaction Customer</title>
            </Head>
            <main className="h-fit font-lexend flex flex-col gap-5">
                <div>
                    <div className="flex justify-between">
                        <h1 className="py-2 text-lg">Transaction Implement</h1>
                        <div className="flex gap-3 items-center">
                            <Button onClick={() => exportToExcel('transactioncustomer')} className="bg-green-700 hover:bg-green-800">Export Excel</Button>
                            <Form {...formTransaction}>
                                <form onSubmit={formTransaction.handleSubmit(onSubmitTransaction)} className="flex items-center space-x-2 my-2">
                                    <FormField
                                        control={formTransaction.control}
                                        name="searchParams"
                                        render={({ field }) => (
                                            <FormItem >
                                                <FormControl>
                                                    <Input placeholder="Find Shop name..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Find</Button>
                                    <Button className="bg-blue-400 hover:bg-blue-500" type="button" onClick={ResetTransactionData}>Reset</Button>
                                </form>
                            </Form>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    prevPage('customer');
                                    refetchTransactionCustomer();
                                }}
                                disabled={pageCustomer === 1}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    nextPage('customer');
                                    refetchTransactionCustomer();
                                }}
                                disabled={transactionCustomerLoading || (transactionCustomerData && transactionCustomerData.length < 10)}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                    {transactionCustomerData && !transactionCustomerLoading ? (
                        <TableDataTransaction data={transactionCustomerData} columns={columnsTransaction} />
                    ) : (
                        <Loading />
                    )}
                </div>
                <div>
                    <div className="flex justify-between">
                        <h1 className="py-2 text-lg">Transaction Claim Order</h1>
                        <div className="flex gap-3 items-center">
                            <Button onClick={() => exportToExcel('claimorder')} className="bg-green-700 hover:bg-green-800">Export Excel</Button>
                            <Form {...formClaimOrder}>
                                <form onSubmit={formClaimOrder.handleSubmit(onSubmitClaimOrder)} className="flex items-center space-x-2 my-2">
                                    <FormField
                                        control={formClaimOrder.control}
                                        name="searchParams"
                                        render={({ field }) => (
                                            <FormItem >
                                                <FormControl>
                                                    <Input placeholder="Find Shop name..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Find</Button>
                                    <Button className="bg-blue-400 hover:bg-blue-500" type="button" onClick={ResetClaimOrder}>Reset</Button>
                                </form>
                            </Form>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    prevPage('claimorder');
                                    refetchClaimOrder();
                                }}
                                disabled={pageClaimOrder === 1}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    nextPage('claimorder');
                                    refetchClaimOrder();
                                }}
                                disabled={claimOrderLoading || (claimOrderData && claimOrderData.length < 10)}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                    {claimOrderData && !claimOrderLoading ? (
                        <TableDataTransaction data={claimOrderData} columns={columnsClaimOrder} />
                    ) : (
                        <Loading />
                    )}
                </div>

            </main>
        </Layout>
    );
}
