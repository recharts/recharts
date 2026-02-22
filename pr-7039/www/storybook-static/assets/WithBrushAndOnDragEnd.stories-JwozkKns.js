import{e as t}from"./iframe-BAkhr1dX.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-ws_I-Su9.js";import{B as p}from"./BarChart-DsQr4zQW.js";import{X as l}from"./XAxis-DFbVQKiI.js";import{Y as h}from"./YAxis-B2mEiGUw.js";import{B as c}from"./Brush-H8xqIi2t.js";import{B as x}from"./Bar-C6Zjr6RY.js";import{R as u}from"./RechartsHookInspector-CZGFYlgB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNqTx6xA.js";import"./immer-CpzDDdx2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6vYGZxV.js";import"./index-Cogrk3y-.js";import"./hooks-BQ6EMEQX.js";import"./axisSelectors-5IeRVjyJ.js";import"./d3-scale-D4vzySek.js";import"./zIndexSlice-DySAbts1.js";import"./renderedTicksSlice-KIutDziH.js";import"./CartesianChart-JKhVhhuI.js";import"./chartDataContext-BxZ2tnlW.js";import"./CategoricalChart-BEpc5Jb6.js";import"./CartesianAxis-DhYmi_Op.js";import"./Layer-ChOUaBRc.js";import"./Text-DEUhZcIO.js";import"./DOMUtils-B-z1kise.js";import"./Label-C63pHtg-.js";import"./ZIndexLayer-D9oqm7-r.js";import"./types-UutyoBzA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DZAPIpvh.js";import"./ReactUtils-CLeHX5Ip.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-xtyk6YAI.js";import"./isPlainObject-_51Ij8KQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DGk7C1pp.js";import"./useAnimationId-DpHYdy2q.js";import"./Trapezoid-XKQAH1TM.js";import"./Sector-CoTacwlm.js";import"./Symbols-BpFdmF0L.js";import"./symbol-BeaTf5eH.js";import"./step-BqWOfOpT.js";import"./Curve-oAmAnVW8.js";import"./RegisterGraphicalItemId-BbgywdL0.js";import"./ErrorBarContext-DGlqNFZc.js";import"./GraphicalItemClipPath-wygGc-U-.js";import"./SetGraphicalItem-D74ae6eQ.js";import"./getZIndexFromUnknown-2RikP9pj.js";import"./graphicalItemSelectors-Bg3OC9G5.js";import"./index-CEM5lfG1.js";import"./ChartSizeDimensions-DS99mPzw.js";import"./OffsetShower-BN9FCNNs.js";import"./PlotAreaShower-DjsLqly8.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
