import React from 'react';
import { BounceLoader } from 'react-spinners';
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Louder = ({loading}) => {
    return <div className='mt-5 container'>
        <div>
            <BounceLoader color={"#6E9CD3"} loading={loading} css={override} size={70} margin={2} />
            <p className='fw-bold text-center'>loading data..</p>
        </div>
    </div>;
};
