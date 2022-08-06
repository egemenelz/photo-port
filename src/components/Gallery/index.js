import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../Photolist";

const Gallery = ({ currentCategory }) => {
    const { name, description } = currentCategory;
    return (
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{capitalizeFirstLetter(description)}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
};

export default Gallery;