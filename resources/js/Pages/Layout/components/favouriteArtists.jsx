import React from "react";
import Footer from "../shared/footer";
import Header from "../shared/header";
export default function FavouriteArtists() {
    let pageData = { page: "favourite-albums", user: {} };
    return (
        <>
            <Header data={pageData} />
            hello
            <Footer />
        </>
    );
}
