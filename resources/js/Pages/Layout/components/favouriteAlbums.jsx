import React from "react";
import Footer from "../shared/footer";
import Header from "../shared/header";
export default function FavouriteAlbums({albums,user}) {
    let pageData = { page: "favourite-albums", user: user };
    return (
        <>
            <Header data={pageData} />
            
            <Footer />
        </>
    );
}
