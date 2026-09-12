import{R as t}from"./iframe-BFM8x9PA.js";import{R as p}from"./zIndexSlice-Dx9mYmyj.js";import{C as m}from"./ComposedChart-kK9tUW2C.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-G355j-5N.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DqtHcGYb.js";import"./index-BWGXcjC4.js";import"./index-DVzpkoDY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bd_5xcSs.js";import"./isWellBehavedNumber-D4sYzu_F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYXkzF69.js";import"./axisSelectors-DiNaBi7F.js";import"./d3-scale-BV6eo-EO.js";import"./index-CngxH_6L.js";import"./index-BWjxNJoO.js";import"./renderedTicksSlice-CjeZk4XK.js";import"./index-CMQv9dM_.js";import"./CartesianChart-CkSZZlig.js";import"./chartDataContext-BTZBL-Eg.js";import"./CategoricalChart-Bte4O3H1.js";import"./Layer-Be0Rd-Q7.js";import"./AnimatedItems-B1_R-VqI.js";import"./Label-Br3cCz6i.js";import"./Text-D2FZ9-P8.js";import"./DOMUtils-eLbycdkH.js";import"./useId-BKuqsutR.js";import"./useBackwardsCompatibleTheme-BTrqDtcc.js";import"./ZIndexLayer-DP5puj9b.js";import"./useAnimationId-B4FOQMwj.js";import"./ActivePoints-BCJal-aM.js";import"./Dot-CpCQ4QvO.js";import"./types-CNyTn7M4.js";import"./RegisterGraphicalItemId-Cv5_OQqk.js";import"./GraphicalItemClipPath-jUcNwVzc.js";import"./SetGraphicalItem-CfBe4xfA.js";import"./getRadiusAndStrokeWidthFromDot-b4U3g1Ny.js";import"./ActiveShapeUtils-Ct3yDoqv.js";import"./Curve-C8AnJvF8.js";import"./step-BN1FmChO.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CRa1F1Pi.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
