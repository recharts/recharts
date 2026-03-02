import{e as t}from"./iframe-VPJyTU3C.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CXN3l8IH.js";import{B as p}from"./BarChart-btV84cjJ.js";import{X as l}from"./XAxis-3pLP0gWY.js";import{Y as h}from"./YAxis-wNsuba1v.js";import{B as c}from"./Brush-cT1XZa1T.js";import{B as x}from"./Bar-DmG704sO.js";import{R as u}from"./RechartsHookInspector-vDuc6y-U.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvWNwQsu.js";import"./immer-BfJiACOe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCl2bEfe.js";import"./index-DQ7yK4Y3.js";import"./hooks-nSftgnTX.js";import"./axisSelectors-saXNBwIQ.js";import"./d3-scale-DGhAz-7E.js";import"./zIndexSlice-Dq9melht.js";import"./renderedTicksSlice-Eh1g0N0V.js";import"./CartesianChart-hKkJhyE8.js";import"./chartDataContext-cb_R-PX2.js";import"./CategoricalChart-Cn-cyvDx.js";import"./CartesianAxis-CiyiTEma.js";import"./Layer-7CDZtGSl.js";import"./Text-DR-p8moo.js";import"./DOMUtils-CEVaRraF.js";import"./Label-9AdH7Mzz.js";import"./ZIndexLayer-Bu1rH0K3.js";import"./types-CXB2nDIk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BKAt1yN3.js";import"./ReactUtils-DXFU76qs.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BDCuCLeM.js";import"./isPlainObject-Cb28tfBr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cpr74bo7.js";import"./useAnimationId-83t5rQCc.js";import"./Trapezoid-CegYn91N.js";import"./Sector-CrGccqha.js";import"./Symbols-ByNtTTT8.js";import"./symbol-DppUUTIu.js";import"./step-AwB8z33l.js";import"./Curve-C7OUetYn.js";import"./RegisterGraphicalItemId-Ba6mil3n.js";import"./ErrorBarContext-DWym-0i0.js";import"./GraphicalItemClipPath-CQ7JIwC5.js";import"./SetGraphicalItem-Dq4tocaN.js";import"./getZIndexFromUnknown-qX6WqeUk.js";import"./graphicalItemSelectors-6cqjPRUY.js";import"./index-C07bsWnd.js";import"./ChartSizeDimensions-CmjLLHly.js";import"./OffsetShower-3s1Vs-j5.js";import"./PlotAreaShower-B0po3Iq4.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
