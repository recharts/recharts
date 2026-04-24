import{e as t}from"./iframe-C3KLAr_X.js";import{R as p}from"./arrayEqualityCheck-DnI1m1N4.js";import{C as m}from"./ComposedChart-DlW39P_1.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-KRTHBepA.js";import{R as l}from"./RechartsHookInspector-CDrt9EHV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CDRZbdh0.js";import"./immer-7U5Tji_6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHSmfZwv.js";import"./index-C-7EyPyC.js";import"./hooks-DZuDX4va.js";import"./axisSelectors-CWLPDJ8I.js";import"./d3-scale-ZNDiiXCQ.js";import"./zIndexSlice-Cl9Q2qHp.js";import"./renderedTicksSlice-Y_XNygaP.js";import"./CartesianChart-CwI8QMMb.js";import"./chartDataContext-BIjR8iwE.js";import"./CategoricalChart-CWEKSGB2.js";import"./Curve-DuWzArMY.js";import"./types-CUBBvZMp.js";import"./step-nMlGD7PS.js";import"./Layer-gez65z60.js";import"./ReactUtils-Dl7XDcr4.js";import"./Label-D03TCqMA.js";import"./Text-CKsAfS2q.js";import"./DOMUtils-BTX_GG3X.js";import"./ZIndexLayer-ZwdT_RoZ.js";import"./ActivePoints-C0SjOUTr.js";import"./Dot-b607mIJy.js";import"./RegisterGraphicalItemId-uSngcEvn.js";import"./GraphicalItemClipPath-CrZc4JF3.js";import"./SetGraphicalItem-CgbMvRrw.js";import"./useAnimationId-BHPPVsUk.js";import"./getRadiusAndStrokeWidthFromDot-CfDNziOs.js";import"./graphicalItemSelectors-6HwYnr3b.js";import"./index-D4Ia_Qi8.js";import"./ChartSizeDimensions-BUMoLVC9.js";import"./OffsetShower-Bzqo_bHi.js";import"./PlotAreaShower-9mAhzD5z.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
