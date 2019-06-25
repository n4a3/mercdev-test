import React from "react";
import { MercdevServiceConsumer } from "../mercdev-service-context";

const withMercdevService = () => Wrapped => {
  return props => {
    return (
      <MercdevServiceConsumer>
        {mercdevService => {
          return <Wrapped {...props} mercdevService={mercdevService} />;
        }}
      </MercdevServiceConsumer>
    );
  };
};

export default withMercdevService;
