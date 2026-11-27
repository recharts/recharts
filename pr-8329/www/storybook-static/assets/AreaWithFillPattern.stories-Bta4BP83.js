import{R as t}from"./iframe-D4kLWznI.js";import{R as p}from"./zIndexSlice-B28gm5Zj.js";import{C as m}from"./ComposedChart-D5eWF65_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BIeD6gVd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./throttle-q19G1wYU.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./RechartsWrapper-Brhd5wtn.js";import"./axisSelectors-ByHGSv-T.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-COuExidI.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-Cxoy9Bx4.js";import"./fillDefinitions-uAqib7o2.js";import"./CartesianChart-CYGJ7Vi6.js";import"./chartDataContext-ExwO8N-9.js";import"./CategoricalChart-lvaD8ywk.js";import"./getRadiusAndStrokeWidthFromDot-CZtOf2sh.js";import"./Layer-BiQ6tIpf.js";import"./dataEntryStyles-CQy-JarL.js";import"./Label-CC2QlraV.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./ActivePoints-CZBrkmRZ.js";import"./Dot-We9lW2eK.js";import"./types-C0VOENzr.js";import"./activeStyles-B6xOxwnr.js";import"./useAnimationId-Cda-LmXY.js";import"./Symbols-C71JHuMc.js";import"./symbol-q_YI2BlA.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BpVaXpzF.js";import"./ActiveShapeUtils-CmC5_l1r.js";import"./Curve-BIpyAZSM.js";import"./step-BWfRSULP.js";import"./useEffectiveDataKey-KQzX-PyK.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
