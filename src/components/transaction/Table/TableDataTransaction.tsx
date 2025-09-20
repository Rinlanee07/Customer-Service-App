import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ColumnProps } from './ColumnData';

type Props<T> = {
    columns: ColumnProps<T>[];
    data: T[];
};

const TableDataTransaction = <T,>({ columns, data }: Props<T>) => {
    return (
        <Table className='bg-white rounded-lg'>
            <TableHeader>
                <TableRow>
                    {columns.map((item) => (
                        <TableHead key={item.accessorKey}>{item.header}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.length ? (
                    data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((column) => (
                                <TableCell key={column.accessorKey}>
                                    {column.cell
                                        ? column.cell({ row }) // Pass the entire row object here
                                        : row[column.accessorKey as keyof T]?.toString()}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default TableDataTransaction;
