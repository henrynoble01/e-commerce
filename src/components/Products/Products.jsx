import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   { id: 1, name: "John", description: "John", price: "$100" },
//   { id: 2, name: "mackbook", description: "hello", price: "$200" },
// ];

const Products = ({ products, onAddtoCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddtoCart={onAddtoCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
