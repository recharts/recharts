import{e as t}from"./iframe-BSb16JoR.js";import{R as p}from"./arrayEqualityCheck-CKi6Epe4.js";import{C as m}from"./ComposedChart-BAoNDz5r.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CriF3674.js";import{R as l}from"./RechartsHookInspector-DGV6Ct7j.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cg9Aa6Xm.js";import"./immer-BeuBwnCt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-z7IieHp6.js";import"./index-Bpi9g4Xy.js";import"./hooks-CGl6g5Kn.js";import"./axisSelectors-CQJQ3hKV.js";import"./d3-scale-BCQZ4ydZ.js";import"./zIndexSlice-Bd2Z7-yF.js";import"./renderedTicksSlice-ZjnECHzq.js";import"./CartesianChart-B4OwK7Ni.js";import"./chartDataContext-Cmf9_heI.js";import"./CategoricalChart-b3cJbLQD.js";import"./Curve-CJKywfJT.js";import"./types-BvVKlSL_.js";import"./step-g_dGXwfI.js";import"./Layer-DZYtcC2w.js";import"./ReactUtils-v-8YVmpF.js";import"./Label-tcp5Z6P8.js";import"./Text-GlnZRYGI.js";import"./DOMUtils-B7NSRuk7.js";import"./ZIndexLayer-8dStJwlU.js";import"./ActivePoints-CXu9VOq4.js";import"./Dot-CVpd23iI.js";import"./RegisterGraphicalItemId-C80kvS_1.js";import"./GraphicalItemClipPath-DRfMkQNb.js";import"./SetGraphicalItem-Drb-mPqH.js";import"./useAnimationId-BRGMijHA.js";import"./getRadiusAndStrokeWidthFromDot-CY2Vn6BR.js";import"./graphicalItemSelectors-BxDLltGA.js";import"./index-ZiErzFNv.js";import"./ChartSizeDimensions-BpGSMkxu.js";import"./OffsetShower-C7hr8qqJ.js";import"./PlotAreaShower-CvbFoVDy.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
