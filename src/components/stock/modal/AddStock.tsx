"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CategoryData, UnitData } from "@/datatype/fetch.datatype";
import { ToastAction } from "@/components/ui/toast";
import cookie from 'cookiejs';
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const formSchema = z.object({
  code: z.string().min(1, {
    message: "Code field is required",
  }),
  organization: z.number().optional(),
  description: z.string().optional(),
  name: z.string().min(1, {
    message: "Name field is required",
  }),
  category: z.string().min(1, {
    message: "Category Name field is required",
  }),
  baseUnit: z.string().min(1, {
    message: "Display Unit field is required",
  }),
  displayUnit: z.string().min(1, {
    message: "Cutting Stock Unit field is required",
  }),
  customerExpiration: z.date(),
  vendorExpiration: z.date().refine((value) => value !== null, {
    message: "Customer expiration date is required",
  }),
  refDoc: z.string(),
  serialNumber: z.string().min(1, {
    message: "Serial Number field is required",
  }),
  stockLevel: z.string().optional(),
  reorderLevel: z.string().optional(),
});

interface StockType {
  dataCategory: CategoryData[];
  isLoadCategory: boolean;
  dataUnit: UnitData[];
  isLoadUnit: boolean;
}

export function AddStock({
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
      code: "",
      organization: 1,
      name: "",
      description: "",
      customerExpiration: undefined,
      vendorExpiration: new Date(),
      refDoc: "",
      serialNumber: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (formData) => {
      const token = cookie.get('token');
      return axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/item/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const phaseInt = {
        ...values,
        organization: { connect: { id: +values.organization } },
        category: { connect: { id: +values.category } },
        displayUnit: { connect: { id: +values.displayUnit } },
        baseUnit: { connect: { id: +values.baseUnit } },
        stockLevel: +200,
        reorderLevel: +10,
      };
      //console.log(phaseInt);
      await mutation.mutateAsync(phaseInt); // Call the mutation function instead of sending data directly
    } catch (error) {
      console.error("Error adding item:", error);
      // Handle error, e.g., display error message to the user
    }
  }
  return (
    <div className="flex items-center justify-center ">
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogTrigger asChild>
          <Button className="font-lexend bg-cyan-500 shadow-md shadow-cyan-500/50 hover:bg-cyan-600">
            Add Stock
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="light:invert">New Item</DialogTitle>
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
                name="refDoc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ref Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serialNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serial Number <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="customerExpiration"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="">
                        Customer Expiration
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-light text-base text-gray-500",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vendorExpiration"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="">
                        Vendor Expiration <span className="text-red-500">*</span>
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-light text-base text-gray-500",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="category"
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
                  name="displayUnit"
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
                  name="baseUnit"
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
