import{e as t}from"./iframe-BRfjO5eG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D8wbB52K.js";import{B as p}from"./BarChart-CvDoykx0.js";import{X as l}from"./XAxis-_RHNkAyf.js";import{Y as h}from"./YAxis-SYTBy6_O.js";import{B as c}from"./Brush-fs_Cm91f.js";import{B as x}from"./Bar-Lb8Yd1vA.js";import{R as u}from"./RechartsHookInspector-DqZpsbqV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJkK52Dr.js";import"./immer-6Mf_l_pR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-t74pKe.js";import"./index-Ds6oaLH2.js";import"./hooks-BpX4ZWOU.js";import"./axisSelectors-CiymgkMX.js";import"./d3-scale-QcLEkwbV.js";import"./zIndexSlice-DJoH0JSW.js";import"./renderedTicksSlice-BaIKxrOg.js";import"./CartesianChart-BILJUYgv.js";import"./chartDataContext-ffjZymjs.js";import"./CategoricalChart-D80geuJg.js";import"./CartesianAxis-DDdCZP34.js";import"./Layer-Djm95T9f.js";import"./Text-CAzsJ-UY.js";import"./DOMUtils-e5Yde7hA.js";import"./Label-C3-kCUB1.js";import"./ZIndexLayer-x9RJx9gY.js";import"./types-CJwNH7dd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-lBPR5WjG.js";import"./ReactUtils-Dg4XVGmm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-J6JOXjSY.js";import"./isPlainObject-BUdyPG4g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx7CcXS4.js";import"./useAnimationId-fkzgSDca.js";import"./Trapezoid-DNfmxhLW.js";import"./Sector-HbpHqeJ3.js";import"./Symbols-uMYMnubp.js";import"./symbol-DPSABYJO.js";import"./step-ylhKLd0a.js";import"./Curve-c7RsuyU-.js";import"./RegisterGraphicalItemId-CTGxX7GS.js";import"./ErrorBarContext-CHAdzrsL.js";import"./GraphicalItemClipPath-BNX-hUwf.js";import"./SetGraphicalItem-bUxjzC-C.js";import"./getZIndexFromUnknown-8TNhua3M.js";import"./graphicalItemSelectors-DYhjC6IF.js";import"./index-CKyyuDQs.js";import"./ChartSizeDimensions-BOoNMCuu.js";import"./OffsetShower-ChoSpo1k.js";import"./PlotAreaShower-BU5aAxms.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
