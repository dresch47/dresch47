"num_rom.js";

let list_num = [];
let j = 1;
for (let i = 0; i < 1000; i++) {
  list_num[i] = j;
  j++;
}

function convert() {
  let n_romano = document.querySelector("#roman").value;
  number_roman.filter((item) => {
    if (
      typeof n_romano == "string" &&
      n_romano.toUpperCase() == item.AR &&
      n_romano.length < 10
    ) {
      document.querySelector("#convertion").innerHTML = item.n;
    }
  });
}
