import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ShowError({ error }) {
    error && toast.error(error);
    return error && <Toaster />;
}
