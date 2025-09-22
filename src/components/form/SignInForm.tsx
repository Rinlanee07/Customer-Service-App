import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useUserInfoStore } from '@/store/user.store';
import jwt from 'jsonwebtoken'
import { Token } from '@/datatype/token.datatype';
import cookie from 'cookiejs';
import Loading from '../loading/Loading';

interface SignInProps {
    name: string;
}
const formSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

const SignInForm = (props: SignInProps) => {
    const router = useRouter();
    const { name } = props;
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { setUserInfo } = useUserInfoStore();
    const { toast } = useToast()

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/auth/signin/`, {
                email: values.email,
                password: values.password,
            });
            if (res.data) {
                cookie.set('token', res.data.token);
                const data = jwt.decode(res.data.token) as Token;
                setUserInfo(data);
                // reload เพื่อให้ token ถูกอ่านใหม่
                router.push('/');
                // หรือใช้ window.location.replace('/') เพื่อ reload ทั้งหน้า
                // window.location.replace('/');
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loading />;
    }

    return (

        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type='password' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <Button className="bg-sky-800 size-full" type='submit'>Login</Button>
                        </div>

                    </form>
                </Form>
            </CardContent>

        </Card>
    )
}

export default SignInForm