import{e as t}from"./iframe-BNMXyeq9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Beh0vaeo.js";import{B as p}from"./BarChart-CUiUX3Od.js";import{X as l}from"./XAxis-BQQS4Uyr.js";import{Y as h}from"./YAxis-BzqiKsmD.js";import{B as c}from"./Brush-C4B9AgcN.js";import{B as x}from"./Bar-CrMBXMJQ.js";import{R as u}from"./RechartsHookInspector-DoNDmCSP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqK5jQb8.js";import"./immer-DLDegpHz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-p99nh58x.js";import"./index-CqHAUX4Y.js";import"./hooks-CxmJQzvA.js";import"./axisSelectors-Bjzn5CZG.js";import"./d3-scale-jx-p6VOM.js";import"./zIndexSlice-BXAFsMol.js";import"./renderedTicksSlice-BOGp2GeV.js";import"./CartesianChart-BotaMIv-.js";import"./chartDataContext-C7KiXxa1.js";import"./CategoricalChart-Ced0NDVQ.js";import"./CartesianAxis-CFKApKAY.js";import"./Layer-9B5krggT.js";import"./Text-DpT8fH0_.js";import"./DOMUtils-bKs0Y9ns.js";import"./Label-CmY8D_Vk.js";import"./ZIndexLayer-rfj-vOql.js";import"./types-C7VY0BRq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CPO90tOl.js";import"./ReactUtils-BiDFqrgq.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D0ia5i81.js";import"./isPlainObject-B18GKfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DjmVhQIC.js";import"./useAnimationId-BIOuiTZH.js";import"./Trapezoid-CbRqZG4l.js";import"./Sector-CWORy7MA.js";import"./Symbols-BX6LNW-t.js";import"./symbol-CO4n4duV.js";import"./step-BVNiQCr9.js";import"./Curve-CIYQTlJO.js";import"./RegisterGraphicalItemId-qopa_Nsy.js";import"./ErrorBarContext-DocAQmKI.js";import"./GraphicalItemClipPath-BN3M0qNc.js";import"./SetGraphicalItem-CpGjwelu.js";import"./getZIndexFromUnknown-Dbc1l5PO.js";import"./graphicalItemSelectors-CZYO0Blr.js";import"./index-Dh6m6MB-.js";import"./ChartSizeDimensions-CH4qJAUd.js";import"./OffsetShower-CtjINnVg.js";import"./PlotAreaShower-BAtsa-GO.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
