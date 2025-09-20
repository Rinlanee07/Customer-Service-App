"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryData, StockData, UnitData } from "@/datatype/fetch.datatype";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil2Icon } from "@radix-ui/react-icons";
import cookie from 'cookiejs';

const formSchema = z.object({
  id: z.number(),
  code: z.string(),
  organizationId: z.number(),
  description: z.string(),
  name: z.string(),
  categoryId: z.string().optional(),
  baseUnitId: z.string().optional(),
  displayUnitId: z.string().optional(),
  stockLevel: z.string().optional(),
  reorderLevel: z.string().optional(),
});

interface StockType {
  stock: StockData;
  dataCategory: CategoryData[];
  isLoadCategory: boolean;
  dataUnit: UnitData[];
  isLoadUnit: boolean;
}

export function EditStock({
  stock,
  dataCategory,
  isLoadCategory,
  dataUnit,
  isLoadUnit,
}: StockType) {
  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: stock.id,
      organizationId: stock.organizationId,
      code: stock.code,
      categoryId: stock.categoryId.toString(),
      name: stock.name,
      displayUnitId: stock.displayUnitId.toString(),
      baseUnitId: stock.baseUnitId.toString(),
      description: stock.description,
    },
  });

  const mutation = useMutation({

    mutationFn: (formData: StockData) => {
      const token = cookie.get('token');
      return axios.patch(
        `${process.env.NEXT_PUBLIC_HOST}/api/item/${formData.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stockData"] });
      setOpen(false);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema> | any) {
    try {
      const format = {
        ...values,
        categoryId: +values.categoryId,
        displayUnitId: +values.displayUnitId,
        baseUnitId: +values.baseUnitId,
      };
      // console.log(format);
      await mutation.mutateAsync(format);
    } catch (error) {
      console.error("Error editing Stock Item:", error);
      // Handle error, e.g., display error message to the user
    }
  }
  return (
    <div className="flex items-center justify-center ">
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogTrigger>
          <Pencil2Icon />
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="light:invert">Edit Item</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-stone-700">Name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-stone-700">Code *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Item Category *</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {!isLoadCategory &&
                              dataCategory.map((category: CategoryData) => (
                                <SelectItem
                                  key={category.id}
                                  value={category.id.toString()}
                                >
                                  {category.name}
                                </SelectItem>
                              ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-12">
                <FormField
                  control={form.control}
                  name="displayUnitId"
                  render={({ field }) => (
                    <FormItem className="col-span-6">
                      <FormLabel>Display Unit *</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {!isLoadUnit &&
                                dataUnit.map((unit: UnitData) => (
                                  <SelectItem
                                    key={unit.id}
                                    value={unit.id.toString()}
                                  >
                                    {unit.name}
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="baseUnitId"
                  render={({ field }) => (
                    <FormItem className="col-span-6 ml-6">
                      <FormLabel>Cutting Stock Unit *</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {!isLoadUnit &&
                                dataUnit.map((unit: UnitData) => (
                                  <SelectItem
                                    key={unit.id}
                                    value={unit.id.toString()}
                                  >
                                    {unit.name}
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-between">
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>

                <Button className="bg-sky-800" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
