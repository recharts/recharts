import{e as t}from"./iframe-BO25Fukk.js";import{P as a}from"./PlotAreaShower-CI8tEgs8.js";import{c as p}from"./hooks-BpctELEd.js";import{R as s}from"./arrayEqualityCheck-8wdJ7bOW.js";import{C as n}from"./ComposedChart-CF-2nekN.js";import{L as l}from"./Line-Bi0Ivg5j.js";import{X as d}from"./XAxis-DX4QFDJP.js";import{Y as h}from"./YAxis-61kZJ1mt.js";import{L as c}from"./Legend-CDtV7Vp6.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-fwZ9XifO.js";import"./immer-3Wb7zWXo.js";import"./axisSelectors-Dte6k_F-.js";import"./d3-scale-CRavCQeQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Blb-qbdi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1GPclcm.js";import"./index-CKs9W-S6.js";import"./zIndexSlice-rXbN18td.js";import"./renderedTicksSlice-D6T9rHBE.js";import"./CartesianChart-Ctp6RTcm.js";import"./chartDataContext-Dq6vrtI3.js";import"./CategoricalChart-DUWKrKtp.js";import"./Layer-D1wKq7sO.js";import"./ReactUtils-CylM5YpB.js";import"./Label-OvGfCgyV.js";import"./Text-0_0jC2Y4.js";import"./DOMUtils-To1Mrhoa.js";import"./ZIndexLayer-BjFFXD-n.js";import"./ActivePoints-BcnF-Bb_.js";import"./Dot-Dgz_5xVA.js";import"./types-Z8gV0TDw.js";import"./RegisterGraphicalItemId-DY8fgSiR.js";import"./ErrorBarContext-Dhgcignt.js";import"./GraphicalItemClipPath-BHD8m-8S.js";import"./SetGraphicalItem-oqU0zW_W.js";import"./useAnimationId-DPvU_ojd.js";import"./getRadiusAndStrokeWidthFromDot-pfV1rYdW.js";import"./ActiveShapeUtils-DMKk4NNh.js";import"./isPlainObject-vu1l7QPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPh2MAIT.js";import"./Trapezoid-COnZiJVb.js";import"./Sector-Cum54SiJ.js";import"./Symbols-VedzsSET.js";import"./symbol-BjeyFY5i.js";import"./step-DfHck1mJ.js";import"./Curve-DoyX19t4.js";import"./CartesianAxis-BRmvxIOe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DNA5shck.js";import"./uniqBy-BVTfaSFn.js";import"./iteratee-C_6D29Qz.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
