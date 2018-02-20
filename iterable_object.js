q2 = {
    [Symbol.iterator] () {
      let keys = Object.keys(this);
      let self = this;
      let i = 0;
      return {
        next() {
          if (i < keys.length) {
            i++;
            return {
              done: false,
              value: {key: keys[i-1], val: self[keys[i-1]]}
            };
          } else {
            return {
              done: true
            };
          }
        }
      }
    }
  }

  w2 = {
    q: 123,
    w: "qweqwer",
    t: 345,
    r: "tiuio",
  }

Object.assign(this.w2, this.q2)
