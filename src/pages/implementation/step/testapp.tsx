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
import { testApp } from "@/constant/checkbox.constant";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { convertQueryToInt } from "@/lib/utils";
import { patchData } from "@/lib/axios";
import { ToastAction } from "@/components/ui/toast";

const formSchema = z.object({
  testAppDetail: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
})

export default function TestApp() {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      testAppDetail: [],
    },
  })

  const mutation = useMutation({
    mutationFn: (format: { testAppDetail?: string[] | undefined }) => {
      const numericId = convertQueryToInt(id)
      if (!numericId) {
        throw new Error("Invalid Id")
      }
      return patchData("transactioncustomer", numericId, format);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categoryData"] });
      router.push({
        pathname: "train", query: {
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
            <Card className="w-full">
              <CardContent>
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="testAppDetail"
                    render={() => (
                      <FormItem>
                        <div className="mb-4"></div>
                        {testApp.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="testAppDetail"
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
                                              (value) => value !== item.id
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
                <div className={`flex justify-end mt-4`}>
                  <Button
                    type='submit'
                    className="bg-cyan-700"
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