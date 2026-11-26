import{R as t}from"./iframe-J6essBJs.js";import{R as p}from"./zIndexSlice-BsmeZsA8.js";import{C as m}from"./ComposedChart-Bs7sztQ5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Bae11mIU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0dQjUYN.js";import"./get-CjriyByo.js";import"./throttle-rB4iKGhW.js";import"./index-BfoAYr9-.js";import"./index-B048aLjq.js";import"./RechartsWrapper-CQZiUgoa.js";import"./axisSelectors-COh-2QwC.js";import"./polarAxisSelectors-DoWbS56a.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-mCWeQZGc.js";import"./index-CDhxvRQi.js";import"./index-B6b_sXBt.js";import"./renderedTicksSlice-CxD0Hqd-.js";import"./index-CrSQFTfs.js";import"./fillDefinitions-DxPSgWUP.js";import"./CartesianChart-89WXJ_-l.js";import"./chartDataContext-BzXVBn_L.js";import"./CategoricalChart-BsPicsjO.js";import"./getRadiusAndStrokeWidthFromDot-Jh2oIQpE.js";import"./Layer-ePHruQv_.js";import"./dataEntryStyles-BOxNMiFO.js";import"./Label-DrwYb9eR.js";import"./Text-Ik43AMmT.js";import"./ZIndexLayer-CqPJfsaa.js";import"./ActivePoints-C9YqKELU.js";import"./Dot-CUXpspz7.js";import"./types-B8ASDW8U.js";import"./activeStyles-Bv4vkUPt.js";import"./useAnimationId-TXNHUPXz.js";import"./Symbols-DkB_uy8_.js";import"./symbol-CVLBGIRz.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-DrwlXMoh.js";import"./ActiveShapeUtils-CpyR9gHD.js";import"./Curve-BL_nBUj1.js";import"./step-B4vSzXfO.js";import"./useEffectiveDataKey-XIQJdOoE.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
