const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "https://tomatogonft.com/ipfsUrl";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
// 配置生成总数 以及 元素图层优先级 ps：如果有部份元素不是必须，那需要加入blank图层
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Special effects" },
      { name: "Body" },
      { name: "Clothes" },
      { name: "Left hand" },
      { name: "Eye" },
      { name: "Eyebrow" },
      { name: "Mouth" },
      { name: "Shoes" },
      { name: "Face makeup" },
      // { name: "Hangings" },
      { name: "Headwear" },
      { name: "Right hand" },
    ],
  },
];

// 配置冲突规则 include表示冲突的元素index数组， exclude标识除了这些其他都为冲突
const hoodedConflict = {
  "Left hand": {
    include:[2, 9, 14],
  },
  "Headwear": {
    include:[4],
  },
};
const earConflict = {
  "Left hand": {
    include:[2, 9, 14],
  },
  "Headwear": {
    exclude:[8, 9, 0]
  },
};

const shuffleLayerConfigurations = false;

const debugLogs = false;

// 导出图片的像素
const format = {
  width: 1500,
  height: 1500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

// 添加额外的元数据 例如 项目官网
const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  earConflict,
  hoodedConflict
};
