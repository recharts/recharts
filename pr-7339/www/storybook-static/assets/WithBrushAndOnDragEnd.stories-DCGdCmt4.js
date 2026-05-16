import{e as t}from"./iframe-hEzUtsMW.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-x5atMu4i.js";import{B as p}from"./BarChart-BXLm0ibr.js";import{X as l}from"./XAxis-CmasoGgc.js";import{Y as h}from"./YAxis-DogN-io6.js";import{B as c}from"./Brush-D7dNH47I.js";import{B as x}from"./Bar-BEFjXdli.js";import{R as u}from"./RechartsHookInspector-HGLK2tN5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DVL_2ynI.js";import"./immer-D2mt-X_3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-fdgiBftW.js";import"./index-B2wa4hnc.js";import"./hooks-BpIGMeVK.js";import"./axisSelectors-DpQuKI8d.js";import"./d3-scale-D4Rky8AA.js";import"./zIndexSlice-C-CqVCIy.js";import"./renderedTicksSlice-Dvxj7DTa.js";import"./CartesianChart-D_wgf81F.js";import"./chartDataContext-CIGqpd_s.js";import"./CategoricalChart-CUEc2NUM.js";import"./CartesianAxis-DW2tMO5n.js";import"./Layer-BzjUvoq3.js";import"./Text-7nbNQAIW.js";import"./DOMUtils-CHISDaUn.js";import"./Label-DAj1mr9j.js";import"./ZIndexLayer-D2roQss2.js";import"./types-CIvV1oOa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D_lIviak.js";import"./ReactUtils-CILnJ9bI.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CvZRJyk9.js";import"./isPlainObject-XAJ6_CVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrXQ0ZF2.js";import"./useAnimationId-nSTPw_c2.js";import"./Trapezoid-CP7Jy4rV.js";import"./Sector-DZ1bqHIH.js";import"./Symbols-DpJ4BPQH.js";import"./symbol-Bv6t7YtK.js";import"./step-nV8fFjWt.js";import"./Curve-DljUrqTb.js";import"./RegisterGraphicalItemId-DEIEDShO.js";import"./ErrorBarContext-BKh5vOop.js";import"./GraphicalItemClipPath-DztVjT6a.js";import"./SetGraphicalItem-JFejgF9M.js";import"./getZIndexFromUnknown-mCSxFpSu.js";import"./graphicalItemSelectors-D-zkTuhX.js";import"./index-umLltmbH.js";import"./ChartSizeDimensions-BYr3kQiS.js";import"./OffsetShower-ChvlcA1R.js";import"./PlotAreaShower-kf7JFG6K.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
