import{e as t}from"./iframe-Db5WrE36.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C3JobR2_.js";import{B as p}from"./BarChart-Ci3Z9hKt.js";import{X as l}from"./XAxis-BTNXWmYe.js";import{Y as h}from"./YAxis-DlOThTCh.js";import{B as c}from"./Brush-XPQOenQS.js";import{B as x}from"./Bar-BDVf7wiC.js";import{R as u}from"./RechartsHookInspector-CFI1frAU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DvMxgvCh.js";import"./immer-CAzEWOIE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDDerXEh.js";import"./index-BJzZql5p.js";import"./hooks-lxXboCZm.js";import"./axisSelectors-CDotANNU.js";import"./d3-scale-FiYYf1nP.js";import"./zIndexSlice-DHcQINX8.js";import"./renderedTicksSlice-CypQTB_Z.js";import"./CartesianChart-5yWhuVSR.js";import"./chartDataContext-DCp_Y5EI.js";import"./CategoricalChart-K1l3oikN.js";import"./CartesianAxis-D6uDjXla.js";import"./Layer-BG3cqZBo.js";import"./Text-B5PL99FR.js";import"./DOMUtils-C6TuwyJI.js";import"./Label-CpNI3apL.js";import"./ZIndexLayer-xgBtkb6c.js";import"./types-CFSpK2OQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DKqePmHa.js";import"./ReactUtils-AT3k4juV.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CVJU97c4.js";import"./isPlainObject-C5kCzJV1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGyhLsa6.js";import"./useAnimationId-DKHJcbO_.js";import"./Trapezoid-Dafb8niv.js";import"./Sector-Dgz1-C8v.js";import"./Symbols-dNkD4NkT.js";import"./symbol-B2ykHL9B.js";import"./step-D8uPwds-.js";import"./Curve-CpGZD15H.js";import"./RegisterGraphicalItemId-D7MaJQJ5.js";import"./ErrorBarContext-D1SBSnUl.js";import"./GraphicalItemClipPath-DsXTVivH.js";import"./SetGraphicalItem-C-hqhW2S.js";import"./getZIndexFromUnknown-_zHvzrmt.js";import"./graphicalItemSelectors-PXX4gJok.js";import"./index-B08ilTo6.js";import"./ChartSizeDimensions-CXOsnzEA.js";import"./OffsetShower-DEnIV-uj.js";import"./PlotAreaShower-CqTq0MkW.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
