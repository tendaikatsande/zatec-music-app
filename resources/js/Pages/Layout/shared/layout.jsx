import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, user }) {

    return (
        <div className="flex flex-col h-screen">
            <Header user={user} />
            <main className="container mx-auto py-4 flex-grow  overflow-y-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
}
