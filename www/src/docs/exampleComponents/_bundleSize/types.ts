export type BundleVisualizationStage = {
  readonly stage: 'es6-folder' | 'tree-shaken' | 'minified' | 'minified+gzip';
  readonly bytes: number;
  readonly humanReadableSize: string;
  readonly reductionFromBaselinePercent: number;
};

export type BundleVisualizationNode = {
  readonly name: string;
  readonly fullPath: string;
  readonly value: number;
  readonly children?: ReadonlyArray<BundleVisualizationNode>;
};

export type BundleVisualizationEntry = {
  readonly examplePath: string;
  readonly totalSize: number;
  readonly totalSizeLabel: string;
  readonly moduleCount: number;
  readonly generatedAt: string;
  readonly stages: ReadonlyArray<BundleVisualizationStage>;
  readonly tree: BundleVisualizationNode;
};

export type BundleVisualizationData = {
  readonly treemap: BundleVisualizationEntry;
  readonly sunburst: BundleVisualizationEntry;
};
