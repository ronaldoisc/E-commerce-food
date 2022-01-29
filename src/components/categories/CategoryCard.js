import React from 'react';
import { setCategoryImage } from '../../helpers/utils';

export const CategoryCard = ({ category }) => {
    return <div key={category} className="col-lg-3 col-12">
        <div className="single-banner tab-height">
            <img src={setCategoryImage(category)} alt="" />
            <div className="content">
                <h1>{category}</h1>
            </div>
        </div>

    </div>
};
