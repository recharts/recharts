import{e as t}from"./iframe-DA7dsAjt.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B2Tullra.js";import{B as p}from"./BarChart-D2uFWQzc.js";import{X as l}from"./XAxis-D3BVUN8u.js";import{Y as h}from"./YAxis-C4Bf-We3.js";import{B as c}from"./Brush-B9yLT_gJ.js";import{B as x}from"./Bar-2ZMY7Zqq.js";import{R as u}from"./RechartsHookInspector-DyuMbIeF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7E-EJR0.js";import"./immer-CgNeP4Cn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUd0AjRv.js";import"./index-CjGLS6_1.js";import"./hooks-D-1ZrX9e.js";import"./axisSelectors-BJkuMl5j.js";import"./d3-scale-vc3zo1Az.js";import"./zIndexSlice-QK0EAxoG.js";import"./renderedTicksSlice-izlEPV0Q.js";import"./CartesianChart-BGT6UcsB.js";import"./chartDataContext-COI91jzY.js";import"./CategoricalChart-OHcwZY8x.js";import"./CartesianAxis-5nCOjy0L.js";import"./Layer-CA2bGkBA.js";import"./Text-BDZGl2AG.js";import"./DOMUtils-g7EKoefO.js";import"./Label-BbSyBdDv.js";import"./ZIndexLayer-CtisNWGZ.js";import"./types-BGlT9ghA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BDZWwd_H.js";import"./ReactUtils-Cqv1MuoY.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-WqUyYvVV.js";import"./isPlainObject-BtsggNmX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-tNMC4o.js";import"./useAnimationId-Ow7TV2bH.js";import"./Trapezoid-CUQqnsJW.js";import"./Sector-CYPQyxpp.js";import"./Symbols-BhPyOpJM.js";import"./symbol-Cme7zaAq.js";import"./step-D3Kjh6oK.js";import"./Curve-CSUb-Mmt.js";import"./RegisterGraphicalItemId-Cw14-A1S.js";import"./ErrorBarContext-Exwfj4Ew.js";import"./GraphicalItemClipPath-CU2uvT1M.js";import"./SetGraphicalItem-M42qZfYw.js";import"./getZIndexFromUnknown-BKC3JpvL.js";import"./graphicalItemSelectors-D6QPi44o.js";import"./index-WFnamGGq.js";import"./ChartSizeDimensions-DOvk2LHO.js";import"./OffsetShower-G9RnNqRi.js";import"./PlotAreaShower-BULJQmBU.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
