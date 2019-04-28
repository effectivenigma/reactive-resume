export function DefaultTheme() {
  let styles: ITheme = {
    name: "modern",
    palette: {
      "--accent-color": "#333",
      "--primary-color": "#454545",
      "--secondary-color": "#656565"
    },
    typography: {
      /*fontSize: "14px",*/
      fontFamily: "sans-serif"
    }
  };

  return {
    styles
  }
}