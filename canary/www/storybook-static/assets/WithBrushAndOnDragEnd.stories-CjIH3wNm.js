import{e as t}from"./iframe-Br4eYoVn.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BTssjmx8.js";import{B as p}from"./BarChart-DCg78QTq.js";import{X as l}from"./XAxis-C8A1sscS.js";import{Y as h}from"./YAxis-WZOcc484.js";import{B as c}from"./Brush-CXforgic.js";import{B as x}from"./Bar-DJM807fU.js";import{R as u}from"./RechartsHookInspector-CJ4a_N61.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-d8J7CQ2o.js";import"./immer-DPmqhqsD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAtpNlJG.js";import"./index-q-WvHn66.js";import"./hooks-qMCGdphr.js";import"./axisSelectors-CHWOzT-A.js";import"./d3-scale-CCjKFVY6.js";import"./zIndexSlice-C3EiH9DM.js";import"./renderedTicksSlice-Tssq-3bV.js";import"./CartesianChart-Cr6moti0.js";import"./chartDataContext-DmHyrOc9.js";import"./CategoricalChart-RTBYP3g_.js";import"./CartesianAxis-DnfdLPHJ.js";import"./Layer-BXiy0Hpp.js";import"./Text-DSxsG7eI.js";import"./DOMUtils-CbhnCx5H.js";import"./Label-CUHpuvtr.js";import"./ZIndexLayer-BkFJTbU_.js";import"./types-Bdr3PbTc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-cjDug_hT.js";import"./ReactUtils-Dn-n-3Yl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C1KBE52j.js";import"./isPlainObject-Dnct6C6Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnOsz_oj.js";import"./useAnimationId-7Mhr-lzJ.js";import"./Trapezoid-CWbkVsvx.js";import"./Sector-DL1xggZ9.js";import"./Symbols-DmFirhkx.js";import"./symbol-NUJ48OEk.js";import"./step-DYF_aI-7.js";import"./Curve-C9oEn5cY.js";import"./RegisterGraphicalItemId-DFun1y8y.js";import"./ErrorBarContext-B31x6VGT.js";import"./GraphicalItemClipPath-Szud5QX3.js";import"./SetGraphicalItem-Bcsb28JH.js";import"./getZIndexFromUnknown-D8Wk6pHV.js";import"./graphicalItemSelectors-BFuwCmEQ.js";import"./index-B-JygPoA.js";import"./ChartSizeDimensions-DeYSdXrS.js";import"./OffsetShower-B3belhb8.js";import"./PlotAreaShower-DSu4MaQt.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
