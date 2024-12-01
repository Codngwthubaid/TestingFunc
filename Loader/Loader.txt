"use client"
import React, { useState, useEffect } from 'react';
export default function Loading() {
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="flex items-center justify-center h-screen">
                {isloading ? (
                    <div className="animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-orange-500 w-16 h-16"></div>
                ) : (
                    <h1 className="text-2xl">Content Loaded!</h1>
                )}
            </div>
        </div>
    )
}

