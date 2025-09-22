import { useState } from "react";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "@radix-ui/react-icons";
import { TriangleAlertIcon } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import { AddCategory } from "../modal/AddCategory";
import { EditCategory } from "../modal/EditCategory";
import { CategoryData } from "@/datatype/fetch.datatype";
import { deleteCategory } from "@/lib/axios";

interface TableCategoryProps {
  dataCategory: CategoryData[];
  isLoadCategory: boolean;
}

export function TableCategory(props: TableCategoryProps) {
  const { dataCategory, isLoadCategory } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const queryClient = useQueryClient();

  const mutationCategory = useMutation({
    mutationFn: (id: number) => deleteCategory(id),
    onError: (error) => {
      console.error("Error deleting Category:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categoryData"] });
    },
  });
  async function handleDelete(id: number) {
    try {
      await mutationCategory.mutateAsync(id); // Call the mutation function instead of sending data directly
    } catch (error) {
      console.error("Error delete category:", error);
    }
  }

  const filteredData =
    !isLoadCategory && dataCategory
      ? dataCategory.filter((item: CategoryData) =>
          Object.values(item).some(
            (value) =>
              value &&
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : [];

  const exportToExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const fileName = "inventory_data";

    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Category");

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName + fileExtension;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col font-lexend font-light">
      <div className="flex justify-end pb-4">
        <AddCategory/>
      </div>

      <div className="items-center text-sm ">
        <div className="flex justify-end pb-4">
          <Button
            className="mr-4 font-lexend bg-green-500 hover:bg-green-600"
            onClick={exportToExcel}
          >
            Export
          </Button>

          <MagnifyingGlassIcon className="size-6 m-2" />
          <Input
            className="w-350"
            type="text"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>

      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead className="w-[50px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-light text-base text-gray-500">
              {filteredData &&
                filteredData.map((category: CategoryData) => (
                  <TableRow key={category.id}>
                    <TableCell>{category.id}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell>{category.updatedAt.toLocaleString()}</TableCell>
                    <TableCell className="flex justify-center">
                      <EditCategory category={category} />
                      <Dialog>
                        <DialogTrigger asChild>
                          <TrashIcon className="mx-2 cursor-pointer size-5" />
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader className="flex justify-center items-center text-center">
                            <TriangleAlertIcon
                              className="justify-center text-yellow-500"
                              size={72}
                            />
                            <DialogTitle className="text-3xl">
                              Are you sure?
                            </DialogTitle>
                            <DialogDescription>
                              You wont be able to revert this!
                            </DialogDescription>
                          </DialogHeader>

                          <DialogFooter>
                            <Button
                              onClick={() => handleDelete(category.id)}
                              type="submit"
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
