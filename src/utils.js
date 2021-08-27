/* eslint-disable no-extend-native */

export const randomIdx = max => Math.floor(Math.random() * max);

Function.prototype.times = function(times) {
    for (let i = 1; i <= times; i++) this(i);
};

Array.prototype.shuffle = function() {
    for (let current = this.length - 1; current > 0; --current) {
      let random = randomIdx(current);
      [this[current], this[random]] =  [this[random], this[current]];
    }
    
    return this;
};

