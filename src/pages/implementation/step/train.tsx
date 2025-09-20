import StepperBar from "@/components/implementation/StepperBar";
import Layout from "@/components/layout";
import Head from "next/head";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { backEnd, frontEnd, testApp } from "@/constant/checkbox.constant";
import { useRouter } from "next/router";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn, convertQueryToInt } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { patchData } from "@/lib/axios";
import { ToastAction } from "@/components/ui/toast";
import { TrainStep } from "@/datatype/patch.datatype";
import SignatureCanvas from "@/components/claimorder/DrawSignature";

const formSchema = z.object({
  frontEndDetail: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
  backEndDetail: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
  dateTrain: z.date(),
  signatureTrainer: z.string().min(1, { message: 'Must Sign Signature!s' })
})


export default function Train() {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      frontEndDetail: [],
      backEndDetail: [],
      dateTrain: new Date(),
      signatureTrainer: ""
    },
  })


  const mutation = useMutation({
    mutationFn: (format: TrainStep) => {
      const numericId = convertQueryToInt(id)
      if (!numericId) {
        throw new Error("Invalid Id")
      }
      return patchData("transactioncustomer", numericId, format);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categoryData"] });
      router.push({
        pathname: "deliver", query: {
          id: id
        }
      });
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


  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await mutation.mutateAsync(values);
    } catch (error) {
      console.error("Error updating Implementation:", error);
    }
  }
  return (
    <Layout>
      <Head>
        <title>Implementation</title>
      </Head>
      <main className="font-lexend">
        <StepperBar />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4" >
            <Card className="w-full">
              <CardContent>
                <div className="grid grid-cols-12">
                  <div className="col-span-6  text-center grid-cols-12 grid mt-4">
                    <div className="col-span-12 text-gray-500">
                      Front-End
                      <div className="mt-4">
                        <FormField
                          control={form.control}
                          name="frontEndDetail"
                          render={() => (
                            <FormItem>
                              <div className="mb-4"></div>
                              {frontEnd.map((item) => (
                                <FormField
                                  key={item.id}
                                  control={form.control}
                                  name="frontEndDetail"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl className="font-light text-base text-gray-500">
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
                                                    (value) =>
                                                      value !== item.id
                                                  )
                                                );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-light text-base text-gray-500">
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
                    </div>
                  </div>
                  <div className="col-span-6  text-center grid-cols-12 grid mt-4">
                    <div className="col-span-12 text-gray-500">
                      Back-End
                      <div className="mt-4">
                        <FormField
                          control={form.control}
                          name="backEndDetail"
                          render={() => (
                            <FormItem>
                              <div className="mb-4"></div>
                              {backEnd.map((item) => (
                                <FormField
                                  key={item.id}
                                  control={form.control}
                                  name="backEndDetail"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl className="font-light text-base text-gray-500">
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
                                                    (value) =>
                                                      value !== item.id
                                                  )
                                                );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-light text-base text-gray-500">
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
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 text-gray-500">
                  <div className="justify-self-end col-span-12 text-center mr-12">
                    <div>
                      <FormField
                        control={form.control}
                        name="signatureTrainer"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <SignatureCanvas onSave={field.onChange} onClear={() => field.onChange("")} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div>Trainer</div>
                      {/* <div>Trigger Plus co.,Itd</div> */}
                      <div>
                        <FormField
                          control={form.control}
                          name="dateTrain"
                          render={({ field }) => (
                            <FormItem className="mt-1">
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
                                        <span>
                                          ........./.........../..........
                                        </span>
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
                <div className={`flex justify-between mt-4`}>
                  <Button
                    type='button'
                    className="bg-cyan-700"
                    onClick={() => router.push("shopinformation")}
                  >
                    Back
                  </Button>
                  <Button
                    type='submit'
                    className="bg-cyan-700"
                    onClick={() => { }}
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </main>
    </Layout>
  )
}