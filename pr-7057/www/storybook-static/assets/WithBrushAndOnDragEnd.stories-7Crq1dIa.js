import{e as t}from"./iframe-D4_kWiik.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B3HrMvOJ.js";import{B as p}from"./BarChart-B9jERNwk.js";import{X as l}from"./XAxis-DYXsWNnz.js";import{Y as h}from"./YAxis-DgOR7wnS.js";import{B as c}from"./Brush-DCmbnEQL.js";import{B as x}from"./Bar-C6aa1WXv.js";import{R as u}from"./RechartsHookInspector-CKRvII-U.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DooOk0ZG.js";import"./immer-0ruqGMtg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CPReM4TO.js";import"./index-DoPLCw_p.js";import"./hooks-6jZB3yL2.js";import"./axisSelectors-BmHnRFxW.js";import"./d3-scale-n7QD4WrB.js";import"./zIndexSlice-C4SzCaYD.js";import"./renderedTicksSlice-CIXKwc0U.js";import"./CartesianChart-sfWAfsuQ.js";import"./chartDataContext-jjjOdAEg.js";import"./CategoricalChart-Csqo5QVJ.js";import"./CartesianAxis-Lz5XVqBq.js";import"./Layer-hulGBcYw.js";import"./Text-CoLcKwL4.js";import"./DOMUtils-Dzu75jG0.js";import"./Label-CWL13-o_.js";import"./ZIndexLayer-sXRztW1g.js";import"./types-BCRPpXrS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-JicCWQGV.js";import"./ReactUtils-B0Tr3Kw3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DVInz7Qi.js";import"./isPlainObject-Bzk1EvI7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGtDGrdk.js";import"./useAnimationId-Dur5dtsq.js";import"./Trapezoid-BH067hRN.js";import"./Sector-D-XRTfZm.js";import"./Symbols-CHUFq9Ay.js";import"./symbol-BoxvpimM.js";import"./step-9zWUSiR2.js";import"./Curve-DIMr1GZI.js";import"./RegisterGraphicalItemId-DxmtI7AP.js";import"./ErrorBarContext-KX3UjoPN.js";import"./GraphicalItemClipPath-VQWjMwSl.js";import"./SetGraphicalItem-B_khJyid.js";import"./getZIndexFromUnknown-D6kJ6UZM.js";import"./graphicalItemSelectors-B4ttmFru.js";import"./index-Dx5VrxvW.js";import"./ChartSizeDimensions-DSAP6Fpc.js";import"./OffsetShower-DTklH8sW.js";import"./PlotAreaShower-Cqlm22k_.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
