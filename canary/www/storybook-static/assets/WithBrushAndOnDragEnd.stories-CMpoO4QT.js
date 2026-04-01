import{e as t}from"./iframe-BEaYZ8Ke.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BO9iL3J2.js";import{B as p}from"./BarChart-DNwt-Hrz.js";import{X as l}from"./XAxis-B2ZFMdFE.js";import{Y as h}from"./YAxis-D75udpV7.js";import{B as c}from"./Brush-XBLgxxHF.js";import{B as x}from"./Bar-WB1hH0b2.js";import{R as u}from"./RechartsHookInspector-D2tl7RgO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-w4GCi4u5.js";import"./immer-ByOrN6rV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxjX8qFn.js";import"./index-BUXBVCXz.js";import"./hooks-BJ-fa7mf.js";import"./axisSelectors-DCKCETlC.js";import"./d3-scale-BqTC062g.js";import"./zIndexSlice-DSliDKHU.js";import"./renderedTicksSlice-2DyJU65H.js";import"./CartesianChart-Da_Lqy5J.js";import"./chartDataContext-416DyL2h.js";import"./CategoricalChart-CsR3P7Yd.js";import"./CartesianAxis-CxvGMdSy.js";import"./Layer-BLQnqq8X.js";import"./Text-DmuVr28j.js";import"./DOMUtils-w1bHB0TX.js";import"./Label-CF7kInX4.js";import"./ZIndexLayer-D6bVHPc-.js";import"./types-N9mcSd1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CakdKd2-.js";import"./ReactUtils-DilCfUhS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-MXRMbrW9.js";import"./isPlainObject-DJ4nWZqf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B25XPYc9.js";import"./useAnimationId-Ngy9FXMV.js";import"./Trapezoid-q196FHE8.js";import"./Sector-CEm4BkOd.js";import"./Symbols-BPjsU5gQ.js";import"./symbol-CNAvV-XC.js";import"./step-C3Uiieba.js";import"./Curve-atLapjtD.js";import"./RegisterGraphicalItemId-BaBHxSFh.js";import"./ErrorBarContext-BjGO5YSj.js";import"./GraphicalItemClipPath-CM553tH1.js";import"./SetGraphicalItem-CxB6zzLj.js";import"./getZIndexFromUnknown-2YUcyZZj.js";import"./graphicalItemSelectors-oSNnCF1a.js";import"./index-D7lPj8lh.js";import"./ChartSizeDimensions-57Mz-9Pr.js";import"./OffsetShower-D0pz8TZy.js";import"./PlotAreaShower-uQsOnF-d.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
