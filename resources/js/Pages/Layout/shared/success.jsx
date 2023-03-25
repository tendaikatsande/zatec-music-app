import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ShowSuccess({ success }) {
    success && toast.success(success);
    return success && <Toaster />;
}
