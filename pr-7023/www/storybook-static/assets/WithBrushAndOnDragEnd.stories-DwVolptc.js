import{e as t}from"./iframe-C8rrCX6B.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B6s-2qWd.js";import{B as p}from"./BarChart-Ckzz5bdE.js";import{X as l}from"./XAxis-B3LhdJHC.js";import{Y as h}from"./YAxis-DOVMeyYT.js";import{B as c}from"./Brush-BV3woj4X.js";import{B as x}from"./Bar-BMT6HgUY.js";import{R as u}from"./RechartsHookInspector-CRTByZl4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-g0jZ7vdX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zx0A2i-h.js";import"./hooks-CpCGF1sd.js";import"./axisSelectors-B7ZWRmd4.js";import"./zIndexSlice-Df3dbiIE.js";import"./renderedTicksSlice-Chx9DuQU.js";import"./CartesianChart-ZPTdsj2m.js";import"./chartDataContext-CpPK2chg.js";import"./CategoricalChart-D5ZpTP8T.js";import"./CartesianAxis-B58JFruC.js";import"./Layer-D1v-1P4s.js";import"./Text-CymC-fJp.js";import"./DOMUtils-D6vD6WjU.js";import"./Label-pD9QpgDQ.js";import"./ZIndexLayer-DFkgVZys.js";import"./types-DDBoPPlm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BXl1HKdK.js";import"./ReactUtils-B6XfFwTE.js";import"./ActiveShapeUtils-BVoBh-mr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk1pBm8g.js";import"./useAnimationId-CljxjOmY.js";import"./Trapezoid-8D3XkRpf.js";import"./Sector-Doajdj9m.js";import"./Symbols-CojuA_dk.js";import"./Curve-ckN9X3mA.js";import"./RegisterGraphicalItemId-vQCUHIAP.js";import"./ErrorBarContext-CHadBikd.js";import"./GraphicalItemClipPath-BqvBTWAt.js";import"./SetGraphicalItem-CAPB5Ckj.js";import"./getZIndexFromUnknown-DSsc7LvS.js";import"./graphicalItemSelectors-DGsomgl0.js";import"./index-CVthgwiF.js";import"./ChartSizeDimensions-CE_McqMG.js";import"./OffsetShower-DFFOsGB0.js";import"./PlotAreaShower-BNzfzgkR.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
