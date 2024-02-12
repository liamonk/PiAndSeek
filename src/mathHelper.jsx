import React from "react";

export class MathHelper {
  static findHcf(a, b) {
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  } 
  static coefficentGenerator(range) {
    let coefficent = Math.floor(Math.random() * range) + 1;
    let sign = Math.random();
    sign < 0.5 ? (sign = -1) : (sign = 1);
    return coefficent * sign;
  }
}

