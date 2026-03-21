import{e as t}from"./iframe-rLfMAXZA.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-OjJIGGxq.js";import{B as p}from"./BarChart-D6C6k48L.js";import{X as l}from"./XAxis-B_pkAheb.js";import{Y as h}from"./YAxis-BkAFZjuO.js";import{B as c}from"./Brush-BWoUQazz.js";import{B as x}from"./Bar-DYWDdnde.js";import{R as u}from"./RechartsHookInspector-CGMMyBd8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cy3Gz-UL.js";import"./immer-DvqdMPbs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5rZD4qh.js";import"./index-1CgFOnhG.js";import"./hooks-DgA2khsF.js";import"./axisSelectors-Cq_h1C-j.js";import"./d3-scale-DULTCxaQ.js";import"./zIndexSlice-CNK81FG0.js";import"./renderedTicksSlice-BlSnCr41.js";import"./CartesianChart-C_VZaAy7.js";import"./chartDataContext-B3WND6K7.js";import"./CategoricalChart-CTzB8VLC.js";import"./CartesianAxis-C2v11b4L.js";import"./Layer-B0Vv-b1h.js";import"./Text-BWQYbcH-.js";import"./DOMUtils-CYiDz4oM.js";import"./Label-BHs-e8Zr.js";import"./ZIndexLayer-CsEI63Vc.js";import"./types-BRd5e3b8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BiA8xJam.js";import"./ReactUtils-BClzbOkG.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BxNoVXTY.js";import"./isPlainObject-xuio5Ndz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CweQqCr6.js";import"./useAnimationId-Bi7bZ4Q9.js";import"./Trapezoid-BajFM_G_.js";import"./Sector-Bx3vc8cf.js";import"./Symbols-DNEFR3nz.js";import"./symbol-CTj6pWvp.js";import"./step-DkSlwgc8.js";import"./Curve-DS3UGKj9.js";import"./RegisterGraphicalItemId-5AOI34gd.js";import"./ErrorBarContext-BvpDrqLU.js";import"./GraphicalItemClipPath-f54LuI1V.js";import"./SetGraphicalItem-Coif6o--.js";import"./getZIndexFromUnknown-B9VAhH5P.js";import"./graphicalItemSelectors-BXXhlkhw.js";import"./index-Ck4Yf9Sw.js";import"./ChartSizeDimensions-83vg2xh3.js";import"./OffsetShower-E_iTtzu1.js";import"./PlotAreaShower-Df-GR4o6.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
