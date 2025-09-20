import { useEffect } from 'react';
import SignInForm from '@/components/form/SignInForm';
import { Toaster } from '@/components/ui/toaster';
import Head from 'next/head';
import cookie from 'cookiejs';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    useEffect(() => {
        const token = cookie.get('token');
        if (token) {
            // ลบ token ถ้า middleware redirect กลับมา login
            cookie.remove('token');
        }
    }, []);

    return (
        <div className="h-screen flex justify-center items-center bg-slate-100">
            <Head>
                <title>Support-App-Login</title>
            </Head>
            <SignInForm name="Sign In" />
            <Toaster />
        </div>
    )
}