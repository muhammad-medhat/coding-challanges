const isEmpty = (strs) => {
  return !strs.length || strs.length === 0;
};
const isOneItem = (strs) => {
  return strs.length === 1;
};
const isSameWord = (strs) => {
  return strs.every((w, i, arr) => w === arr[0]);
};
const isPrefix = (p, s) => {
  const ret = s.toLowerCase().startsWith(p);
  return ret;
};
const loopArray = (sorted, pre) => {
  var lcf = "";
  sorted.forEach((s, i) => {
    // const contains = isContain(sorted, pre, i)
    const contains = sorted.every((w) => isPrefix(pre, w));
    if (contains) {
      //all items have prefix
      lcf = pre;
      return lcf;
    } else {
      pre = s.slice(0, pre.length - 1);
    }
  });
  return lcf;
};
const loopPrefix = (sorted, pre) => {
  var lcf = "";
  var ln = pre.length;
  for (i = 0; i < ln; i++) {
    const contains = sorted.every((w) => isPrefix(pre, w));
    if (contains) {
      //all items have prefix
      lcf = pre;
      // console.log('all containes ');
      return lcf;
    } else {
      pre = pre.slice(0, pre.length - 1);
    }
  }
  return lcf;
};

const longestCommonPrefix = (strs) => {
  if (isEmpty(strs)) {
    console.log("empty arr");
    return "";
  } else {
    if (isOneItem(strs)) {
      console.log("one item only");
      return strs[0];
    } else {
      //check if all words are the same
      if (isSameWord(strs)) {
        console.log("the same word");
        return strs[0];
      } else {
        const sorted = strs.sort((c, d) => c.length - d.length);
        let pre = sorted[0];
        let lcf = "";
        if (sorted.length >= pre.length) {
          return loopArray(sorted, pre);
        } else {
          return loopPrefix(sorted, pre);
        }
      }
    }
  }
};

const r1 = longestCommonPrefix(["flower", "flow", "flight"]);
const r2 = longestCommonPrefix(["abcc", "ab"]);
const r3 = longestCommonPrefix(["cir", "car"]); //prefix length < array length
const r4 = longestCommonPrefix(["reflower", "flow", "flight"]); //similar characters 

console.log("lcf", r1);
console.log("lcf", r2);
console.log("lcf", r3);
console.log("lcf", r4);

/**
 * submitted with success
 */