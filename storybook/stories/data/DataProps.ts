// Used in stacked bar graph
export type BoxPlotData = {
  min: number;
  bottomWhisker: number;
  bottomBox: number;
  topBox: number;
  topWhisker: number;
  average?: number;
  size: number; // for average dot size
};

// Original data of boxplot graph
export type BoxPlot = {
  min: number;
  lowerQuartile: number;
  median: number;
  upperQuartile: number;
  max: number;
  average?: number;
};

export type Impressions = { name: number; cost: number; impression: number };
