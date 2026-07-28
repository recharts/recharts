import{R as t}from"./iframe-BpGtcNOk.js";import{R as p}from"./zIndexSlice-BUkXJe7m.js";import{C as m}from"./ComposedChart-B3v6uaK5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BjWIbToj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7JHSkAt.js";import"./index-CHBEpFe4.js";import"./index-CEaO1Ily.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bzz9qGby.js";import"./isWellBehavedNumber-CgtKnfGk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8zW8Q-QW.js";import"./index-CWPU6MDT.js";import"./index-B2c9XwPD.js";import"./renderedTicksSlice-CgSHpo4d.js";import"./axisSelectors-DvNlgVd_.js";import"./d3-scale-BIg-AE9c.js";import"./CartesianChart-D_T5BGrl.js";import"./chartDataContext-BnIwxX66.js";import"./CategoricalChart-cfDxlkao.js";import"./Layer-CuHhWFqD.js";import"./AnimatedItems-I1ECyx5O.js";import"./Label-CVd1F7qG.js";import"./Text-C5eSQgGe.js";import"./DOMUtils-Bd2Qm1G_.js";import"./ZIndexLayer-Cu4Swk1f.js";import"./useAnimationId-B7_Ne5YB.js";import"./ActivePoints-Bk3RD_iz.js";import"./Dot-DC3GiKbg.js";import"./types-CFaUoyvU.js";import"./RegisterGraphicalItemId-fTSs4quI.js";import"./GraphicalItemClipPath-CBj-Oygo.js";import"./SetGraphicalItem-Dc3K4Fiu.js";import"./getRadiusAndStrokeWidthFromDot-DErAjZBx.js";import"./ActiveShapeUtils-BdR0GCmt.js";import"./Curve-DyH_liqO.js";import"./step-BGQUnAp4.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CxriLMeL.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
