import{R as t}from"./iframe-C63NoaDu.js";import{R as p}from"./zIndexSlice-BcMwSK9m.js";import{C as m}from"./ComposedChart-DM4H6PYa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BuDa-01m.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dl1YLV6q.js";import"./index-C9CjOEex.js";import"./index-8uJ0bE2o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjxgFVah.js";import"./isWellBehavedNumber-BfhF-72O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTWFoE3n.js";import"./axisSelectors-LGmM4kiC.js";import"./d3-scale-CcYn43Vo.js";import"./index-DKS0oalo.js";import"./index-DO3tFlOP.js";import"./renderedTicksSlice-DIKEWQne.js";import"./index-CqricD4t.js";import"./CartesianChart-ENzs0KXc.js";import"./chartDataContext-CfPmzzSW.js";import"./CategoricalChart-DHxPQS0Z.js";import"./Layer-Ckr3gw9l.js";import"./AnimatedItems-DHS6gEFX.js";import"./Label-1Vc72EU1.js";import"./Text-D_RBmkbp.js";import"./DOMUtils-DA0ZRZ5p.js";import"./useId-BncxSM4U.js";import"./useBackwardsCompatibleTheme-DEjA-f8D.js";import"./ZIndexLayer-Cc9mNp0T.js";import"./useAnimationId-DcWGIqWl.js";import"./ActivePoints-oZErJUce.js";import"./Dot-DkFiM3ON.js";import"./types-DUwSb1pu.js";import"./RegisterGraphicalItemId-CrhgcGtn.js";import"./GraphicalItemClipPath-DNBzuX5X.js";import"./SetGraphicalItem-CsljS9zr.js";import"./getRadiusAndStrokeWidthFromDot-DGM-tqki.js";import"./ActiveShapeUtils-DIOp6OW3.js";import"./Curve-DkWZvTAe.js";import"./step-C-IAzoA3.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-WzLoYH7A.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
