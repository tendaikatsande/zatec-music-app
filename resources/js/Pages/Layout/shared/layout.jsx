import React from "react";
import ShowError from "./error";
import Footer from "./footer";
import Header from "./header";
import ShowSuccess from "./success";

export default function Layout({ children, user, error, success }) {
    return (
        <div className="flex flex-col h-screen">
            <Header user={user} />
            <main className="container mx-auto py-4 flex-grow  overflow-y-auto">
                <ShowError error={error} />
                <ShowSuccess success={success} />
                {children}
            </main>
            <Footer />
        </div>
    );
}
