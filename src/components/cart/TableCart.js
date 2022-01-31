import React from 'react';

export const TableCart = ({userCart,handleDeleteCart}) => {
  return  <table className="table shopping-summery">
  <thead>
    <tr className="main-hading">
      <th>IMAGE PRODUCT</th>
      <th>DESCRIPTION</th>
      <th className="text-center">PRICE</th>
      <th className="text-center"><i className="ti-trash remove-icon" /></th>
    </tr>
  </thead>
  <tbody>
    {
      userCart.map((userc,i) => {
        return <tr key={i}>
         
          <td className="image" data-title="No"><img src={userc.image} alt="#" /></td>
          <td className="product-des" data-title="Description">
            <p className="product-name"><a href="#w">{userc.title}</a></p>
            <p className="product-des">{userc.description}</p>
          </td>
          <td className="price" data-title="Price"><span>{`$${userc.price}`} </span></td>
          <td className="action" data-title="Remove"><a onClick={()=>handleDeleteCart(userc.id)} href="#w"><i className="ti-trash remove-icon" /></a></td>
        </tr>
      })
    }
  </tbody>
</table>;
};
