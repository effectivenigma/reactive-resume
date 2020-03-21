const monthMap: IStringMap<string> = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sept",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

function dateformatter() {
  function toMMMdd(yyyymm: string) {
    if (yyyymm === "Present") {
      return yyyymm;
    }

    let yyyy = yyyymm.substr(0, 4);
    let mm = yyyymm.substr(5, 2);
    return `${monthMap[mm]} ${yyyy}`;
  }
  return {
    toMMMdd
  };
};

export default dateformatter();