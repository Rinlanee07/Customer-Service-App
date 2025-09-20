import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, CircleCheckBig } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { accessories, category } from "@/constant/checkbox.constant";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import { PostClaimOrderData } from "@/datatype/post.datatype";
import { postClaimOrder } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useUserInfoStore } from "@/store/user.store";
import SignatureCanvas from "./DrawSignature";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  date: z.date().optional(),
  dateReceived: z.date().optional(),
  dateServiceReceived: z.date().optional(),
  dateServiceSend: z.date().optional(),
  dateCustomerService: z.date().optional(),
  address: z.string(),
  category: z.array(z.string()),
  model: z.string(),
  serialNumber: z.string(),
  accessories: z.array(z.string()),
  refNo: z.string(),
  trackNo: z.string(),
  symptop: z.string(),
  resolution: z.string(),
  receiverName: z.string(),
  receiverService: z.string(),
  senderCustomerService: z.string(),
  senderService: z.string(),
  warrantyStatus: z.string(),
  price: z.string().optional(),
  signatureReceiverName: z.string(),
  signatureReceiverService: z.string(),
  signatureSenderService: z.string(),
  signatureSenderName: z.string(),
  documentType: z.string(),
  companyName: z.string().optional()
});

const ClaimOrder = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      dateReceived: undefined,
      dateServiceReceived: undefined,
      dateServiceSend: undefined,
      dateCustomerService: undefined,
      address: '',
      category: [],
      model: '',
      serialNumber: '',
      accessories: [],
      refNo: '',
      trackNo: '',
      symptop: '',
      resolution: '',
      receiverName: '',
      receiverService: '',
      senderCustomerService: '',
      senderService: '',
      warrantyStatus: "",
      price: "",
      signatureReceiverName: "",
      signatureReceiverService: "",
      signatureSenderService: "",
      signatureSenderName: "",
      documentType: "EXTERNAL",
      companyName: ""

    },
  });
  const [otherCategory, setOtherCategory] = useState<string>('');
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const { userInfo } = useUserInfoStore();


  const mutation = useMutation({
    mutationFn: (data: PostClaimOrderData) => postClaimOrder(data),
    onSuccess: () => {
      setOpenDialog(true);
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  })



  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formatData = {
        category: values.category,
        model: values.model,
        serialNumber: values.serialNumber,
        warrantyStatus: values.warrantyStatus === 'In-Warranty' ? true : false,
        accessories: values.accessories,
        refNo: values.refNo,
        trackNo: values.trackNo,
        symptom: values.symptop,
        resolution: values.resolution,
        receiverName: values.receiverName,
        receiverService: values.receiverService,
        receiverDate: values.dateReceived,
        receiverServiceDate: values.dateServiceReceived,
        senderName: values.senderCustomerService,
        senderService: values.senderService,
        senderDate: values.dateCustomerService,
        senderServiceDate: values.dateServiceSend,
        date: values.date,
        address: values.address,
        price: values.price ? parseFloat(values.price) : 0,
        createdBy: userInfo.id,
        signatureReceiverName: values.signatureReceiverName,
        signatureReceiverService: values.signatureReceiverService,
        signatureSenderService: values.signatureSenderService,
        signatureSenderName: values.signatureSenderName,
        documentType: values.documentType,
        companyName: values.companyName
      }
      await mutation.mutateAsync(formatData);
    } catch (error) {
      throw error
    }
  }


  return (
    <div className=" h-fit rounded-md bg-white p-12 min-w-[44rem] md:w-full">
      <div className="text-center font-bold text-xl">Claim Order</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light text-base text-gray-600">Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your address here..."  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="documentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-light text-base text-gray-600">Document Type</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a document type." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="EXTERNAL">External</SelectItem>
                          <SelectItem value="INTERNAL">Internal</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-light text-base text-gray-600">
                      Date
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
          </div>
          <div className="mt-3">
            <div className="border rounded-lg">
              <div className="flex w-full h-full">
                <div className="flex items-center border">
                  <span className="-rotate-90 font-bold">
                    Product Info.
                  </span>
                </div>
                <div className="flex flex-col w-full">
                  <div className=" w-full grid grid-cols-12">
                    <div className="border col-span-2">
                      <span>Category</span>
                    </div>
                    <div className="col-span-10 w-full">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <div className="grid grid-cols-1">
                            {category.map((item) => {
                              const isOther = item.id === 'other';
                              const isChecked = field.value.includes(item.id) || (isOther && otherCategory !== '');
                              return (
                                <div className="flex items-center" key={item.id}>
                                  <Checkbox
                                    checked={isChecked}
                                    onCheckedChange={(checked) => {
                                      const currentCategory = form.getValues('category');
                                      if (checked) {
                                        if (item.id === 'other') {
                                          field.onChange(['other']);
                                          setOtherCategory('');
                                        } else {
                                          field.onChange([...field.value.filter((val) => val !== 'other'), item.id]);
                                        }
                                      } else {
                                        field.onChange(field.value.filter((value) => value !== item.id && value !== 'other'));
                                        if (item.id === 'other') {
                                          setOtherCategory('');
                                        }
                                      }
                                    }}
                                  />
                                  <label>{item.label}</label>
                                  {isOther && isChecked && (
                                    <Input
                                      value={otherCategory}
                                      onChange={(e) => {
                                        const value = e.target.value;
                                        setOtherCategory(value);
                                        const updatedValues = field.value.filter((val) => val !== 'other' && val !== otherCategory);
                                        if (value) {
                                          updatedValues.push(value);
                                        }
                                        field.onChange(updatedValues);
                                      }}
                                      placeholder="Specify other"
                                      className="ml-2"
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-12">
                    <div className="border col-span-2">
                      <span>Model</span>
                    </div>
                    <div className="col-span-4 ">
                      <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormControl>
                              <Input placeholder="Type your model here..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="border col-span-2">
                      <span>S/N</span>
                    </div>
                    <div className="col-span-4 ">
                      <FormField
                        control={form.control}
                        name="serialNumber"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormControl>
                              <Input placeholder="Type your serial number here..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-12">
                    <div className="border col-span-2">
                      <span>Warranty Status</span>
                    </div>
                    <div className="col-span-6 w-full">
                      <FormField
                        control={form.control}
                        name="warrantyStatus"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-2 "
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="In-Warranty" />
                                  </FormControl>
                                  <FormLabel className="font-normal">In-Warranty</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="Out-Warranty " />
                                  </FormControl>
                                  <FormLabel className="font-normal">Out-Warranty</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="border col-span-2">
                      <span>THB</span>
                    </div>
                    <div className="col-span-2 ">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormControl>
                              <Input type="number" placeholder="Type your price here..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-12">
                    <div className="border col-span-2">
                      <span>Accessories</span>
                    </div>
                    <div className="col-span-6 w-full border">
                      <FormField
                        control={form.control}
                        name="accessories"
                        render={() => (
                          <FormItem className="grid grid-cols-1">
                            {accessories.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="accessories"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      className=""
                                      key={item.id}

                                    >
                                      <FormControl >
                                        <Checkbox
                                          checked={
                                            Array.isArray(field.value) &&
                                            field.value.includes(item.id)
                                          }
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                ...(field.value || []),
                                                item.id,
                                              ])
                                              : field.onChange(
                                                (field.value || []).filter(
                                                  (value) => value !== item.id
                                                )
                                              );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel >
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-4 border grid ">
                      <FormField
                        control={form.control}
                        name="refNo"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel>Ref No.</FormLabel>
                            <FormControl>
                              <Input placeholder="Type Ref No. here..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="trackNo"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel>Track No.</FormLabel>
                            <FormControl>
                              <Input placeholder="Type track number here..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-center">Symptom</h1>
                <FormField
                  control={form.control}
                  name="symptop"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Type your symptom here..."  {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-center">Resolution</h1>
                <FormField
                  control={form.control}
                  name="resolution"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Type your resolution here..."  {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 border py-2">
                <div>
                  <div className="flex justify-center my-2">
                    <span className="font-semibold">Investigate and Repair</span>
                  </div>
                  <div className="border-r grid grid-cols-2">
                    <div className=" flex justify-center">
                      <div className="flex flex-col">
                        <FormField
                          control={form.control}
                          name="signatureReceiverName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <SignatureCanvas onSave={field.onChange} onClear={() => field.onChange("")} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="justify-center flex">{`(`}
                          <FormField
                            control={form.control}
                            name="receiverName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Type your receiver here..."  {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />{`)`}</div>
                        <span className="text-center">Receiver</span>
                        <span className="text-center">Triggers Plus co.,ltd </span>
                        <FormField
                          control={form.control}
                          name="dateReceived"
                          render={({ field }) => (
                            <FormItem className="mt-1 text-center">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-light text-base text-gray-500",
                                        !field.value &&
                                        "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>........./.........../..........</span>
                                      )}
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
                    </div>
                    <div className="flex justify-center">
                      <div className="flex flex-col">
                        <FormField
                          control={form.control}
                          name="signatureReceiverService"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <SignatureCanvas onSave={field.onChange} onClear={() => field.onChange("")} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-center">{`(`}
                          <FormField
                            control={form.control}
                            name="receiverService"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Type your receiver here..."  {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />{`)`}</div>
                        <span className="text-center">Receiver</span>
                        <span className="text-center">Service Center </span>
                        <FormField
                          control={form.control}
                          name="dateServiceReceived"
                          render={({ field }) => (
                            <FormItem className="mt-1 text-center">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-light text-base text-gray-500",
                                        !field.value &&
                                        "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>........./.........../..........</span>
                                      )}
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
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center my-2">
                    <h1 className="font-semibold">Give Back</h1>
                  </div>
                  <div className=" grid grid-cols-2">
                    <div className=" flex justify-center">
                      <div className="flex flex-col">
                        <FormField
                          control={form.control}
                          name="signatureSenderService"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <SignatureCanvas onSave={field.onChange} onClear={() => field.onChange("")} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-center">
                          {`(`}
                          <FormField
                            control={form.control}
                            name="senderService"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Type your name here..."  {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {`)`}
                        </div>
                        <span className="text-center">Sender</span>
                        <span className="text-center">Service Center </span>
                        <FormField
                          control={form.control}
                          name="dateServiceSend"
                          render={({ field }) => (
                            <FormItem className="mt-1 text-center">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-light text-base text-gray-500",
                                        !field.value &&
                                        "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>........./.........../..........</span>
                                      )}
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
                    </div>
                    <div className="flex justify-center">
                      <div className="flex flex-col">
                        <FormField
                          control={form.control}
                          name="signatureSenderName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <SignatureCanvas onSave={field.onChange} onClear={() => field.onChange("")} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-center">
                          {`(`}
                          <FormField
                            control={form.control}
                            name="senderCustomerService"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Type your name here..."  {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {`)`}
                        </div>
                        {form.getValues('documentType') === 'INTERNAL' ? (
                          <>
                            <span className="text-center">Customer Service</span>
                            <span className="text-center">Triggers Plus co.,ltd </span>
                          </>
                        ) : (
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Type customer company..."  {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                        <FormField
                          control={form.control}
                          name="dateCustomerService"
                          render={({ field }) => (
                            <FormItem className="mt-1 text-center">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-light text-base text-gray-500",
                                        !field.value &&
                                        "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>........./.........../..........</span>
                                      )}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="px-12">Save</Button>
          </div>
          <AlertDialog onOpenChange={setOpenDialog} open={openDialog}>
            <AlertDialogTrigger className="px-12 bg-blue-800 rounded-lg py-1.5 text-white hover:bg-blue-700 duration-100 hidden"></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>SUCCESS</AlertDialogTitle>
                <AlertDialogDescription className="flex justify-center items-center">
                  <CircleCheckBig size={100} />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </Form>
    </div >
    // <Card className="w-full h-fit overflow-auto">
    //   <CardContent>
    //     <Form {...form}>
    //       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    //         <div className="">
    //           <h1 className="text-lg font-bold text-center ">Claim Order</h1>
    //           <div className="flex justify-center h-full ">
    //             <div className="flex flex-col w-[80%]">
    //               <div className="flex justify-between">
    //                 <div></div>
    //                 <div>No. ...</div>
    //               </div>
    //               <div className="flex justify-between">
    //                 <FormField
    //                   control={form.control}
    //                   name="address"
    //                   render={({ field }) => (
    //                     <FormItem className="py-2">
    //                       <FormLabel>Address</FormLabel>
    //                       <FormControl>
    //                         <Textarea {...field} />
    //                       </FormControl>
    //                       <FormMessage />
    //                     </FormItem>
    //                   )}
    //                 />
    //                 <div>
    //                   <FormField
    //                     control={form.control}
    //                     name="date"
    //                     render={({ field }) => (
    //                       <FormItem className="flex flex-col">
    //                         <FormLabel className="font-light text-base text-gray-600">
    //                           Date
    //                         </FormLabel>
    //                         <Popover>
    //                           <PopoverTrigger asChild>
    //                             <FormControl>
    //                               <Button
    //                                 variant={"outline"}
    //                                 className={cn(
    //                                   "pl-3 text-left font-light text-base text-gray-500",
    //                                   !field.value && "text-muted-foreground"
    //                                 )}
    //                               >
    //                                 {field.value ? (
    //                                   format(field.value, "PPP")
    //                                 ) : (
    //                                   <span>Pick a date</span>
    //                                 )}
    //                                 <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    //                               </Button>
    //                             </FormControl>
    //                           </PopoverTrigger>
    //                           <PopoverContent
    //                             className="w-auto p-0"
    //                             align="start"
    //                           >
    //                             <Calendar
    //                               mode="single"
    //                               selected={field.value}
    //                               onSelect={field.onChange}
    //                               disabled={(date) =>
    //                                 date < new Date("1900-01-01")
    //                               }
    //                               initialFocus
    //                             />
    //                           </PopoverContent>
    //                         </Popover>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   />
    //                 </div>
    //               </div>
    //               <div className="flex flex-col border">
    //                 <div className="flex w-full">
    //                   <div className="flex items-center border">
    //                     <span className="-rotate-90 font-bold">
    //                       Product Info.
    //                     </span>
    //                   </div>
    //                   <div className="w-full">
    //                     <div className="grid grid-cols-12">
    //                       <div className="col-span-2 border">Category</div>
    //                       <FormField
    //                         control={form.control}
    //                         name="category"
    //                         render={() => (
    //                           <FormItem className="col-span-10 grid grid-cols-3 p-2">
    //                             {category.map((item) => (
    //                               <FormField
    //                                 key={item.id}
    //                                 control={form.control}
    //                                 name="category"
    //                                 render={({ field }) => {
    //                                   return (
    //                                     <FormItem
    //                                       key={item.id}
    //                                       className="flex gap-1 items-center"
    //                                     >
    //                                       <FormControl >
    //                                         <Checkbox
    //                                           checked={
    //                                             Array.isArray(field.value) &&
    //                                             field.value.includes(item.id)
    //                                           }
    //                                           onCheckedChange={(checked) => {
    //                                             return checked
    //                                               ? field.onChange([
    //                                                 ...(field.value || []),
    //                                                 item.id,
    //                                               ])
    //                                               : field.onChange(
    //                                                 (field.value || []).filter(
    //                                                   (value) => value !== item.id
    //                                                 )
    //                                               );
    //                                           }}
    //                                         />
    //                                       </FormControl>
    //                                       <FormLabel >
    //                                         {item.label}
    //                                       </FormLabel>
    //                                     </FormItem>
    //                                   );
    //                                 }}
    //                               />
    //                             ))}
    //                             <FormMessage />
    //                           </FormItem>
    //                         )}
    //                       />
    //                     </div>
    //                     <div className="grid grid-cols-12">
    //                       <div className="col-span-2 border">Model</div>
    //                       <div className="col-span-10 grid grid-cols-2">
    //                         <FormField
    //                           control={form.control}
    //                           name="model"
    //                           render={({ field }) => (
    //                             <FormItem className="flex items-center border">
    //                               <FormControl>
    //                                 <Input {...field} />
    //                               </FormControl>
    //                               <FormMessage />
    //                             </FormItem>
    //                           )}
    //                         />
    //                         <FormField
    //                           control={form.control}
    //                           name="serialNumber"
    //                           render={({ field }) => (
    //                             <FormItem className="flex items-center border">
    //                               <FormLabel>S/N</FormLabel>
    //                               <FormControl>
    //                                 <Input {...field} />
    //                               </FormControl>
    //                               <FormMessage />
    //                             </FormItem>
    //                           )}
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="grid grid-cols-12">
    //                       <div className="col-span-2 border">
    //                         Warranty Status
    //                       </div>
    //                       <div className="col-span-10 grid-cols-2 grid">
    //                         <div className="border flex justify-center items-center gap-1">
    //                           <Checkbox />
    //                           In - Warranty
    //                         </div>
    //                         <div className="border flex justify-center items-center gap-1">
    //                           <Checkbox />
    //                           Out - Warranty{" "}
    //                           <Input
    //                             className="w-[30%]"
    //                             type="number"
    //                             min={0}
    //                           />
    //                           THB
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="grid grid-cols-12">
    //                       <div className="col-span-2 border">Accessories</div>
    //                       <div className="col-span-8 grid-cols-2 grid border">
    //                         <div>
    //                           <div>
    //                             <Checkbox />
    //                             <span>Power Cord</span>
    //                           </div>
    //                           <div>
    //                             <Checkbox />
    //                             <span>LAN Cable</span>
    //                           </div>
    //                           <div className="flex items-center">
    //                             <Checkbox />
    //                             <span>Others</span>
    //                             <Input className="h-4" />
    //                           </div>
    //                         </div>
    //                         <div className="">
    //                           <div className="">
    //                             <Checkbox />
    //                             Adapter
    //                           </div>
    //                           <div className="">
    //                             <Checkbox />
    //                             RJ-11
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="col-span-2 border">
    //                         <div>
    //                           Ref No.
    //                           <Input />
    //                         </div>
    //                         <div>
    //                           Track No.
    //                           <Input />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <div className="text-center border">Symptom</div>
    //                   <div>
    //                     <Textarea placeholder="Type your message here." />
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <div className="text-center border">Resolution</div>
    //                   <div>
    //                     <Textarea placeholder="Type your message here." />
    //                   </div>
    //                 </div>

    //                 <div className="grid grid-cols-12">
    //                   <div className="col-span-6 border text-center grid-cols-12 grid">
    //                     <div className="col-span-6">
    //                       <div>..............................</div>
    //                       <div>(..............................)</div>
    //                       <div>Receiver</div>
    //                       <div>Trigger Plus co.,Itd</div>
    //                       <div>
    //                         <FormField
    //                           control={form.control}
    //                           name="dateReceived"
    //                           render={({ field }) => (
    //                             <FormItem className="mt-1">
    //                               <Popover>
    //                                 <PopoverTrigger asChild>
    //                                   <FormControl>
    //                                     <Button
    //                                       variant={"outline"}
    //                                       className={cn(
    //                                         "pl-3 text-left font-light text-base text-gray-500",
    //                                         !field.value &&
    //                                         "text-muted-foreground"
    //                                       )}
    //                                     >
    //                                       {field.value ? (
    //                                         format(field.value, "PPP")
    //                                       ) : (
    //                                         <span>........./.........../..........</span>
    //                                       )}
    //                                     </Button>
    //                                   </FormControl>
    //                                 </PopoverTrigger>
    //                                 <PopoverContent
    //                                   className="w-auto p-0"
    //                                   align="start"
    //                                 >
    //                                   <Calendar
    //                                     mode="single"
    //                                     selected={field.value}
    //                                     onSelect={field.onChange}
    //                                     disabled={(date) =>
    //                                       date < new Date("1900-01-01")
    //                                     }
    //                                     initialFocus
    //                                   />
    //                                 </PopoverContent>
    //                               </Popover>
    //                               <FormMessage />
    //                             </FormItem>
    //                           )}
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="col-span-6">
    //                       <div>..............................</div>
    //                       <div>(..............................)</div>
    //                       <div>Receiver</div>
    //                       <div>Service Center</div>
    //                       <div>
    //                         <FormField
    //                           control={form.control}
    //                           name="dateServiceReceived"
    //                           render={({ field }) => (
    //                             <FormItem className="mt-1">
    //                               <Popover>
    //                                 <PopoverTrigger asChild>
    //                                   <FormControl>
    //                                     <Button
    //                                       variant={"outline"}
    //                                       className={cn(
    //                                         "pl-3 text-left font-light text-base text-gray-500",
    //                                         !field.value &&
    //                                         "text-muted-foreground"
    //                                       )}
    //                                     >
    //                                       {field.value ? (
    //                                         format(field.value, "PPP")
    //                                       ) : (
    //                                         <span>........./.........../..........</span>
    //                                       )}
    //                                     </Button>
    //                                   </FormControl>
    //                                 </PopoverTrigger>
    //                                 <PopoverContent
    //                                   className="w-auto p-0"
    //                                   align="start"
    //                                 >
    //                                   <Calendar
    //                                     mode="single"
    //                                     selected={field.value}
    //                                     onSelect={field.onChange}
    //                                     disabled={(date) =>
    //                                       date < new Date("1900-01-01")
    //                                     }
    //                                     initialFocus
    //                                   />
    //                                 </PopoverContent>
    //                               </Popover>
    //                               <FormMessage />
    //                             </FormItem>
    //                           )}
    //                         />
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="col-span-6 border text-center grid-cols-12 grid">
    //                     <div className="col-span-6">
    //                       <div>..............................</div>
    //                       <div>(..............................)</div>
    //                       <div>Sender</div>
    //                       <div>Service Center</div>
    //                       <div>
    //                         <FormField
    //                           control={form.control}
    //                           name="dateServiceSend"
    //                           render={({ field }) => (
    //                             <FormItem className="mt-1">
    //                               <Popover>
    //                                 <PopoverTrigger asChild>
    //                                   <FormControl>
    //                                     <Button
    //                                       variant={"outline"}
    //                                       className={cn(
    //                                         "pl-3 text-left font-light text-base text-gray-500",
    //                                         !field.value &&
    //                                         "text-muted-foreground"
    //                                       )}
    //                                     >
    //                                       {field.value ? (
    //                                         format(field.value, "PPP")
    //                                       ) : (
    //                                         <span>........./.........../..........</span>
    //                                       )}
    //                                     </Button>
    //                                   </FormControl>
    //                                 </PopoverTrigger>
    //                                 <PopoverContent
    //                                   className="w-auto p-0"
    //                                   align="start"
    //                                 >
    //                                   <Calendar
    //                                     mode="single"
    //                                     selected={field.value}
    //                                     onSelect={field.onChange}
    //                                     disabled={(date) =>
    //                                       date < new Date("1900-01-01")
    //                                     }
    //                                     initialFocus
    //                                   />
    //                                 </PopoverContent>
    //                               </Popover>
    //                               <FormMessage />
    //                             </FormItem>
    //                           )}
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="col-span-6">
    //                       <div>..............................</div>
    //                       <div>(..............................)</div>
    //                       <div>Customer Service</div>
    //                       <div>Trigger Plus co.,Itd</div>
    //                       <div>
    //                         <FormField
    //                           control={form.control}
    //                           name="dateCustomerService"
    //                           render={({ field }) => (
    //                             <FormItem className="mt-1">
    //                               <Popover>
    //                                 <PopoverTrigger asChild>
    //                                   <FormControl>
    //                                     <Button
    //                                       variant={"outline"}
    //                                       className={cn(
    //                                         "pl-3 text-left font-light text-base text-gray-500",
    //                                         !field.value &&
    //                                         "text-muted-foreground"
    //                                       )}
    //                                     >
    //                                       {field.value ? (
    //                                         format(field.value, "PPP")
    //                                       ) : (
    //                                         <span>........./.........../..........</span>
    //                                       )}
    //                                     </Button>
    //                                   </FormControl>
    //                                 </PopoverTrigger>
    //                                 <PopoverContent
    //                                   className="w-auto p-0"
    //                                   align="start"
    //                                 >
    //                                   <Calendar
    //                                     mode="single"
    //                                     selected={field.value}
    //                                     onSelect={field.onChange}
    //                                     disabled={(date) =>
    //                                       date < new Date("1900-01-01")
    //                                     }
    //                                     initialFocus
    //                                   />
    //                                 </PopoverContent>
    //                               </Popover>
    //                               <FormMessage />
    //                             </FormItem>
    //                           )}
    //                         />
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     </Form>
    //   </CardContent>
    // </Card>
  );
};

export default ClaimOrder;
