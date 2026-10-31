import{R as t}from"./iframe-COxqCazb.js";import{z as p}from"./RechartsWrapper-MgEDcD8h.js";import{R as a}from"./zIndexSlice-B4X5qRzI.js";import{C as n}from"./ComposedChart-DWRPdfx_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-n5MGWX7b.js";import{X as l}from"./XAxis-DQrBzVHK.js";import{Y as h}from"./YAxis-ZsGxmqjy.js";import{L as c}from"./Legend-pYlKdEL-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./get-cF5BDHN6.js";import"./axisSelectors-uSjAZrah.js";import"./throttle-D4LJPOuI.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8xTnIof.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";import"./Layer-D2zViLNQ.js";import"./Curve-C7Cjm8FO.js";import"./fillDefinitions-HVISG19w.js";import"./pageBackground-zdIyeBG0.js";import"./types-3E7AO6tV.js";import"./step-CbCZbxFO.js";import"./path-DyVhHtw_.js";import"./LabelList-DLxGydTH.js";import"./Label-BiNM6_QG.js";import"./Text-C4rvSXOn.js";import"./DOMUtils-BLBk64WL.js";import"./ZIndexLayer-cSzqGwkX.js";import"./ActivePoints-DN4_EmYC.js";import"./Dot-DR7axIwT.js";import"./activeStyles-Dz5dwfdA.js";import"./useAnimationId-CI1eTN6X.js";import"./dataEntryStyles-DJkgxm7x.js";import"./Symbols-pJe31Clp.js";import"./symbol-DFh_91jg.js";import"./ErrorBarContext-CSA0hXTc.js";import"./SetGraphicalItem-DfnH2C1-.js";import"./getRadiusAndStrokeWidthFromDot-gHegAbBA.js";import"./ActiveShapeUtils-DhrWvn7z.js";import"./useEffectiveDataKey-DbCVmzAC.js";import"./CartesianAxis-CjYDk6nf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DaKnhcyx.js";import"./uniqBy-CV6Bdmxk.js";import"./iteratee-B9rlrEY4.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
