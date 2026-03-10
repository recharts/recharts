import{e as t}from"./iframe-O9ArEVIv.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C-MTCypy.js";import{B as p}from"./BarChart-DjjplvZZ.js";import{X as l}from"./XAxis-Cej5L1H9.js";import{Y as h}from"./YAxis-Br5uA6sX.js";import{B as c}from"./Brush-Ddf_kBJi.js";import{B as x}from"./Bar-SwwJWQOg.js";import{R as u}from"./RechartsHookInspector-16YUtyRB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cjflm227.js";import"./immer-BFzhs2u-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOYlziR8.js";import"./index-a21uXOx0.js";import"./hooks-CqiKktT9.js";import"./axisSelectors-CwHYpHLU.js";import"./d3-scale-CJB90U0O.js";import"./zIndexSlice-Sxdp-diY.js";import"./renderedTicksSlice-BvOqc92I.js";import"./CartesianChart-z72RSBTa.js";import"./chartDataContext-B4Ztt00m.js";import"./CategoricalChart-C-oRlLv7.js";import"./CartesianAxis-Ds14BfSb.js";import"./Layer-Bs1IQ35S.js";import"./Text-DQdIz477.js";import"./DOMUtils-dyLmYPqX.js";import"./Label-CEXSNWpb.js";import"./ZIndexLayer-gMxYNdgc.js";import"./types-CsxGUr-v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CkAKGhbX.js";import"./ReactUtils-BfiyyF4-.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cu-_wtkP.js";import"./isPlainObject-BMtTHHOe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTyUjMdM.js";import"./useAnimationId-DFOXeF_s.js";import"./Trapezoid-BgYcRPYD.js";import"./Sector-CeOtRqWC.js";import"./Symbols-BsW0CkYV.js";import"./symbol-D8ksNROS.js";import"./step-CooRIyZW.js";import"./Curve-BaetafJM.js";import"./RegisterGraphicalItemId-CLKZixP7.js";import"./ErrorBarContext-Caa3uBDH.js";import"./GraphicalItemClipPath-FlIwAJHm.js";import"./SetGraphicalItem-Cl8ON75H.js";import"./getZIndexFromUnknown-dvDDHMA9.js";import"./graphicalItemSelectors-ucncYg0i.js";import"./index-CKq64LI9.js";import"./ChartSizeDimensions-BSf1VGM1.js";import"./OffsetShower-DBynPTQJ.js";import"./PlotAreaShower-DzB7vB8a.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
