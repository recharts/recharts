import{e as t}from"./iframe-CB3xDsCu.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BR3R0AIc.js";import{B as p}from"./BarChart-CZcbpLB3.js";import{X as l}from"./XAxis-DYQUx0ZR.js";import{Y as h}from"./YAxis-mQ0C3LQl.js";import{B as c}from"./Brush-CB9UASSy.js";import{B as x}from"./Bar-DVCLlwtH.js";import{R as u}from"./RechartsHookInspector-YR9f7y3a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D2yjNbgT.js";import"./immer-DVlX7gWW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzH2iSQ0.js";import"./index-dzLlUSBq.js";import"./hooks-DFjGEA5J.js";import"./axisSelectors-BD2wGdYf.js";import"./d3-scale-DBjacL5V.js";import"./zIndexSlice-BDUpIrxI.js";import"./renderedTicksSlice-DTGPDQhB.js";import"./CartesianChart-Cn7O9-Sb.js";import"./chartDataContext-BOo6jc00.js";import"./CategoricalChart-D8l_W_kj.js";import"./CartesianAxis-DkDylqpL.js";import"./Layer-Ch9gTjDA.js";import"./Text-UtkJ3ap3.js";import"./DOMUtils-D031Yf3A.js";import"./Label-Br8zkPUL.js";import"./ZIndexLayer-Cz6Wxl3N.js";import"./types-DISef9EU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-tc7O5rcu.js";import"./ReactUtils-VpSEOCqX.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bccy3ucd.js";import"./isPlainObject-YEY4Yrhn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5g_Hqxg.js";import"./useAnimationId-DK8UFsIQ.js";import"./Trapezoid-C2jtUOqg.js";import"./Sector-CIMNq_ez.js";import"./Symbols-BHAxghFO.js";import"./symbol-B_QpE6oW.js";import"./step-Dz5tlK5n.js";import"./Curve-BUSUbFqo.js";import"./RegisterGraphicalItemId-CB7Ow1C1.js";import"./ErrorBarContext-CBtIL5Hk.js";import"./GraphicalItemClipPath-CS8dxw6f.js";import"./SetGraphicalItem-gnY-9bMd.js";import"./getZIndexFromUnknown-fYbRUdy1.js";import"./graphicalItemSelectors-hsVcEB6B.js";import"./index-DOjZWx7H.js";import"./ChartSizeDimensions-B9c3BCsk.js";import"./OffsetShower-Cd2a_SDI.js";import"./PlotAreaShower-DozSiwxV.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
