import React from "react";
import { InferGetServerSidePropsType } from "next";

type Data = {};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/products");
  const data: any = await res.json();
  return {
    props: {
      data,
    },
  };
};

function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { kuy } = data;

  return (
    <div>
      <h1>Tanapong</h1>
      <table>
        <tr>
          <th>id</th>
          <th>productName</th>
          <th>quantity</th>
          <th>price</th>
        </tr>
        {kuy.map((product: any,key:any) => (
          <tr id={key}>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Page;
