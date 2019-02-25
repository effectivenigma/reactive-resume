interface ITheme {
  name: string;
  palette: IPalette;
  typography: ITypography;
}

interface IPalette {
  "--primary-color": string;
  "--secondary-color": string;
  "--accent-color": string;
}

interface ITypography {
  fontFamily: string;
  fontSize: string;
}