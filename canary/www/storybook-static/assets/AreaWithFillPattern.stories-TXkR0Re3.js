import{R as t}from"./iframe-Dt7VmJVd.js";import{R as p}from"./zIndexSlice-CsJRlQGe.js";import{C as m}from"./ComposedChart-BEVdjL9z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Dm4p9O-P.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./throttle-DKLEp5Cv.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./RechartsWrapper-DmetyJsw.js";import"./axisSelectors-DsQjGGXt.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DKSFl2hd.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./getRadiusAndStrokeWidthFromDot-Gis92voa.js";import"./Layer-CKqAbqeS.js";import"./dataEntryStyles-BTAsZYzb.js";import"./Label-DBOYMKjR.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./ActivePoints-rxDVwUzw.js";import"./Dot-BNusXcbA.js";import"./types-D6xyOnmX.js";import"./activeStyles-CXzu6olF.js";import"./useAnimationId-CZxgU6AP.js";import"./Symbols-CEcN4H71.js";import"./symbol-BNyIiosb.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-meI4aCtS.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./Curve-zF9ULVmH.js";import"./step-C8vG3ka0.js";import"./useEffectiveDataKey-DfkEl2f7.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
