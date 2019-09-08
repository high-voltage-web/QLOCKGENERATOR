import { IFont, FontCategory, IFontAlarm } from './../core/core.module';

export const FONTS: IFont[] = [
  {
    id: '1000',
    label: 'Avion',
    category: FontCategory.SPECIAL,
    filename: 'bd184bc4cff38e2ac7228dc490291a03.ttf',
    path: './assets/fonts/'
  },
  {
    id: '2000',
    label: 'Blades',
    category: FontCategory.REGULAR,
    filename: 'd8d5af6222225e2cb626557c53a17944.ttf',
    path: './assets/fonts/'
  },
  {
    id: '3000',
    label: 'Breymont',
    category: FontCategory.SPECIAL,
    filename: 'ca1f1c7d1993425b5284cd47a6aef619.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4000',
    label: 'DIN',
    category: FontCategory.REGULAR,
    filename: '7737a754866a4378500fbf0a6808fe54.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4010',
    label: 'DIN - Thin',
    category: FontCategory.REGULAR,
    filename: '02db292e6c9f218372d371479a8e417a.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4020',
    label: 'DIN - Light',
    category: FontCategory.REGULAR,
    filename: '975553ad05763e290ba31a889f390868.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4030',
    label: 'DIN - Bold',
    category: FontCategory.REGULAR,
    filename: '8c3956e750af056bfa9ccdcc45ef0e4e.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4100',
    label: 'DIN Round',
    category: FontCategory.REGULAR,
    filename: '72dab58a307a3da921bc4813519ed441.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4110',
    label: 'DIN Round - Light',
    category: FontCategory.REGULAR,
    filename: 'df595a18935ddd7171bc6411ce42bdab.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4120',
    label: 'DIN Round - Bold',
    category: FontCategory.REGULAR,
    filename: 'a5686978417340480eb3b3a0c2982464.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4200',
    label: 'DIN Stencil',
    category: FontCategory.STENCIL,
    filename: '1a3840bea709f24a0129f7a4e5372885.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4210',
    label: 'DIN Stencil - Thin',
    category: FontCategory.STENCIL,
    filename: '6fbb7d0251a1f8a4ce01a22df835f4e3.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4220',
    label: 'DIN Stencil - Light',
    category: FontCategory.STENCIL,
    filename: '431b4006ab48b77105500b8030a2821e.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4230',
    label: 'DIN Stencil - Bold',
    category: FontCategory.STENCIL,
    filename: '04956e1957f2622721b1593fb6551dab.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4300',
    label: 'DIN Q1',
    category: FontCategory.STENCIL,
    filename: '3db4863fed3e13b63db057a5b7099b25.ttf',
    path: './assets/fonts/'
  },
  {
    id: '4310',
    label: 'DIN Q2',
    category: FontCategory.STENCIL,
    filename: '7c6f5cd6fa441cb04d13679f92b4a262.ttf',
    path: './assets/fonts/'
  },
  {
    id: '5000',
    label: 'Dot Matrix',
    category: FontCategory.SPECIAL,
    filename: 'a995332cb20cd46e2849967f5152d728.ttf',
    path: './assets/fonts/'
  },
  {
    id: '6000',
    label: 'Frutiger',
    category: FontCategory.REGULAR,
    filename: '3890fc143c4bee26d3001584630b1d37.ttf',
    path: './assets/fonts/'
  },
  {
    id: '7000',
    label: 'Gluck',
    category: FontCategory.REGULAR,
    filename: 'c99d43ab6fdc02b9011bccfe29075158.ttf',
    path: './assets/fonts/'
  },
  {
    id: '7100',
    label: 'Gluck - Stroked',
    category: FontCategory.REGULAR,
    filename: '5dafad024b25d002a2ea1dc29846c708.ttf',
    path: './assets/fonts/'
  },
  {
    id: '8000',
    label: 'Heimdal',
    category: FontCategory.REGULAR,
    filename: '368d146f8a7c87973d100963d020a5f1.ttf',
    path: './assets/fonts/'
  },
  {
    id: '9000',
    label: 'Italianno',
    category: FontCategory.REGULAR,
    filename: 'b622cce140ed636cecb658f4d5ffc499.ttf',
    path: './assets/fonts/'
  },
  {
    id: '10000',
    label: 'Khalbot',
    category: FontCategory.REGULAR,
    filename: '469e61cd1088ef30e9298e912b1a87dc.ttf',
    path: './assets/fonts/'
  },
  {
    id: '11000',
    label: 'Klingon',
    category: FontCategory.SPECIAL,
    filename: '60bf06c50e504aa328a7dc7a3f43ffd6.ttf',
    path: './assets/fonts/'
  },
  {
    id: '12000',
    label: 'Laser LED',
    category: FontCategory.STENCIL,
    filename: '02f60539fc43f783a9359b15f2ac21bc.ttf',
    path: './assets/fonts/'
  },
  {
    id: '13000',
    label: 'Laser Punch 2',
    category: FontCategory.REGULAR,
    filename: 'be70ccc4b605ee104e06353e9ddc3c52.ttf',
    path: './assets/fonts/'
  },
  {
    id: '14000',
    label: 'Laser Sans Serif',
    category: FontCategory.STENCIL,
    filename: 'e185f7fa2652932c42c1e75a58520d85.ttf',
    path: './assets/fonts/'
  },
  {
    id: '14100',
    label: 'Laser Sans Serif - Bold',
    category: FontCategory.STENCIL,
    filename: 'bfb58ec1cfe2f2acb2c63f3584ffbd78.ttf',
    path: './assets/fonts/'
  },
  {
    id: '15000',
    label: 'Laser Time',
    category: FontCategory.STENCIL,
    filename: 'a78c3954e21562483ce1e13104033ea2.ttf',
    path: './assets/fonts/'
  },
  {
    id: '16000',
    label: 'Milk Cookies',
    category: FontCategory.REGULAR,
    filename: '286c9ab85ef8803326d2b52f3b2ea1c1.ttf',
    path: './assets/fonts/'
  },
  {
    id: '17000',
    label: 'Montour',
    category: FontCategory.REGULAR,
    filename: 'd081acc2da38bdacbcf4b10ddeaf9752.ttf',
    path: './assets/fonts/'
  },
  {
    id: '18000',
    label: 'Neon One',
    category: FontCategory.STENCIL,
    filename: '21107c42084fbcd207ce848b0e01dabe.ttf',
    path: './assets/fonts/'
  },
  {
    id: '19000',
    label: 'Night Life',
    category: FontCategory.REGULAR,
    filename: '636b0737e45c487ba691133e299c265a.ttf',
    path: './assets/fonts/'
  },
  {
    id: '20000',
    label: 'Old English Text',
    category: FontCategory.REGULAR,
    filename: '19d538b99afe170b5d18de15ea9c8b67.ttf',
    path: './assets/fonts/'
  },
  {
    id: '21000',
    label: 'Rachel Roman',
    category: FontCategory.REGULAR,
    filename: 'bf1807e9b9b6a5b3ee05ba34e288ffa4.ttf',
    path: './assets/fonts/'
  },
  {
    id: '22000',
    label: 'Solia Sans',
    category: FontCategory.REGULAR,
    filename: 'c2f8fc3015a38a9e0d3c6f41f16c33cd.ttf',
    path: './assets/fonts/'
  },
  {
    id: '23000',
    label: 'Teratur',
    category: FontCategory.REGULAR,
    filename: 'f90d69171098075e502c9465e1d5538f.ttf',
    path: './assets/fonts/'
  },
  {
    id: '24000',
    label: 'Theo Aged 6',
    category: FontCategory.SPECIAL,
    filename: '7c449a3d6488f894902edfedc36205a2.ttf',
    path: './assets/fonts/'
  },
  {
    id: '25000',
    label: 'Ykar',
    category: FontCategory.REGULAR,
    filename: '3a40308bd4fedb785b2d57a21451b722.ttf',
    path: './assets/fonts/'
  },
  {
    id: '26000',
    label: 'Exo 2',
    category: FontCategory.REGULAR,
    filename: '821b60800ddc23b627b093e31c1c92a70be62e1d.ttf',
    path: './assets/fonts/'
  }
  // ,{
  //   id: '30000',
  //   label: 'MyOwnFont',
  //   category: FontCategory.REGULAR,
  //   filename: 'MyOwnFont.ttf',
  //   path: './assets/fonts/',
  // },
];

export const ALARM_SYMBOLS: IFontAlarm[] = [
  {
    id: '0',
    label: 'Ohne',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: ''
  },
  {
    id: '1',
    label: 'Symbol 1',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'A'
  },
  {
    id: '2',
    label: 'Symbol 1 (Stencil)',
    category: FontCategory.STENCIL,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'B'
  },
  {
    id: '3',
    label: 'Symbol 2',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'C'
  },
  {
    id: '4',
    label: 'Symbol 2 (Stencil)',
    category: FontCategory.STENCIL,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'D'
  },
  {
    id: '5',
    label: 'Symbol 3',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'E'
  },
  {
    id: '6',
    label: 'Symbol 3 (Stencil)',
    category: FontCategory.STENCIL,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'F'
  },
  {
    id: '7',
    label: 'Symbol 4',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'G'
  },
  {
    id: '8',
    label: 'Symbol 4 (Stencil)',
    category: FontCategory.STENCIL,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'H'
  },
  {
    id: '9',
    label: 'Symbol 5',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'I'
  },
  {
    id: '10',
    label: 'Symbol 6',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'J'
  },
  {
    id: '11',
    label: 'Symbol 7',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'K'
  },
  {
    id: '12',
    label: 'Symbol 7 (Stencil)',
    category: FontCategory.STENCIL,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'L'
  },
  {
    id: '13',
    label: 'Symbol 8',
    category: FontCategory.REGULAR,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'M'
  },
  {
    id: '14',
    label: 'Symbol 8 (Stencil)',
    category: FontCategory.STENCIL,
    filename: 'Alarm-Symbols.ttf',
    path: './assets/fonts/',
    value: 'N'
  }
];
