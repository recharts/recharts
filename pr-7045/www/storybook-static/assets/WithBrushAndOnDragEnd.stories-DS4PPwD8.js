import{e as t}from"./iframe-8sIubbdi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DbCj9c-Y.js";import{B as p}from"./BarChart-DXLA1GDV.js";import{X as l}from"./XAxis-IWyMdbO5.js";import{Y as h}from"./YAxis-CDYxK6mN.js";import{B as c}from"./Brush-C1W6rVlp.js";import{B as x}from"./Bar-wknO_GDz.js";import{R as u}from"./RechartsHookInspector-AlYSKZYm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuCQFLVY.js";import"./immer-BT2n2B7O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D30EcdBX.js";import"./index-CbU0dTJ6.js";import"./hooks-D_DW5Oi2.js";import"./axisSelectors-DxwSejiD.js";import"./d3-scale-DEnCLOEW.js";import"./zIndexSlice-VsYA40So.js";import"./renderedTicksSlice-CfkkEf9Z.js";import"./CartesianChart-CXlojrwJ.js";import"./chartDataContext-4cME9qvC.js";import"./CategoricalChart-C7NQof8g.js";import"./CartesianAxis-DgCpBkCM.js";import"./Layer-BRXiwqet.js";import"./Text-3TK1Y5vF.js";import"./DOMUtils-DytWm70I.js";import"./Label-DilR1ra4.js";import"./ZIndexLayer-Ts04gVrK.js";import"./types-Bp02LWfB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Do3gtYgl.js";import"./ReactUtils-BXvpQNi2.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils---ZXszSA.js";import"./isPlainObject-rB9NvpQh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2TS-ysJA.js";import"./useAnimationId-De5EZ4DF.js";import"./Trapezoid-DG6NQ2ho.js";import"./Sector-CO7y0BXS.js";import"./Symbols-DYzrjJ12.js";import"./symbol-CzQ70XR0.js";import"./step-CjuXRgh8.js";import"./Curve-BZpcUU-T.js";import"./RegisterGraphicalItemId-Cm3HEb7M.js";import"./ErrorBarContext-bky3Fevr.js";import"./GraphicalItemClipPath-C8kD9Qqm.js";import"./SetGraphicalItem-CsZep-cL.js";import"./getZIndexFromUnknown-BJWnkP_F.js";import"./graphicalItemSelectors-CPoOjEEq.js";import"./index-QIusEcOA.js";import"./ChartSizeDimensions-B-IxYWC1.js";import"./OffsetShower-CFWyxT0Z.js";import"./PlotAreaShower-CXMf_89y.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
