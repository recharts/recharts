import{e as t}from"./iframe-BO25Fukk.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-8wdJ7bOW.js";import{B as p}from"./BarChart-Dk43f7Oo.js";import{X as l}from"./XAxis-DX4QFDJP.js";import{Y as h}from"./YAxis-61kZJ1mt.js";import{B as c}from"./Brush-D_24gU2O.js";import{B as x}from"./Bar-6PCkWjSd.js";import{R as u}from"./RechartsHookInspector-y6KR2L3P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Blb-qbdi.js";import"./immer-3Wb7zWXo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1GPclcm.js";import"./index-CKs9W-S6.js";import"./hooks-BpctELEd.js";import"./axisSelectors-Dte6k_F-.js";import"./d3-scale-CRavCQeQ.js";import"./zIndexSlice-rXbN18td.js";import"./renderedTicksSlice-D6T9rHBE.js";import"./CartesianChart-Ctp6RTcm.js";import"./chartDataContext-Dq6vrtI3.js";import"./CategoricalChart-DUWKrKtp.js";import"./CartesianAxis-BRmvxIOe.js";import"./Layer-D1wKq7sO.js";import"./Text-0_0jC2Y4.js";import"./DOMUtils-To1Mrhoa.js";import"./Label-OvGfCgyV.js";import"./ZIndexLayer-BjFFXD-n.js";import"./types-Z8gV0TDw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BYzqOEti.js";import"./ReactUtils-CylM5YpB.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DMKk4NNh.js";import"./isPlainObject-vu1l7QPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPh2MAIT.js";import"./useAnimationId-DPvU_ojd.js";import"./Trapezoid-COnZiJVb.js";import"./Sector-Cum54SiJ.js";import"./Symbols-VedzsSET.js";import"./symbol-BjeyFY5i.js";import"./step-DfHck1mJ.js";import"./Curve-DoyX19t4.js";import"./RegisterGraphicalItemId-DY8fgSiR.js";import"./ErrorBarContext-Dhgcignt.js";import"./GraphicalItemClipPath-BHD8m-8S.js";import"./SetGraphicalItem-oqU0zW_W.js";import"./getZIndexFromUnknown-ldVKv71H.js";import"./graphicalItemSelectors-AUomluSS.js";import"./index-BQMezaYM.js";import"./ChartSizeDimensions-fwZ9XifO.js";import"./OffsetShower-DKjDo15d.js";import"./PlotAreaShower-CI8tEgs8.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
