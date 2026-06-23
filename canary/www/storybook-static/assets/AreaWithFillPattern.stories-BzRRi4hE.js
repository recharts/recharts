import{R as t}from"./iframe-BNzhvzzJ.js";import{R as p}from"./zIndexSlice-7B2pJ9R1.js";import{C as m}from"./ComposedChart-C_iTu113.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D4H67wzm.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-_Il6apPt.js";import"./index-D7steQeu.js";import"./index-B9gOfTvg.js";import"./get-Bo6NWZXP.js";import"./resolveDefaultProps-D9iASVgR.js";import"./isWellBehavedNumber-Bpef6lI6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHcZLkJ-.js";import"./index-DJTE4prX.js";import"./index-7GSDLfD9.js";import"./renderedTicksSlice-EPo0eGyT.js";import"./axisSelectors-ceyKOVCq.js";import"./d3-scale-DfXMlVb2.js";import"./CartesianChart-CaZD9ouo.js";import"./chartDataContext-BcocN-0J.js";import"./CategoricalChart-C_ukC1b2.js";import"./Layer-xsjkSAFG.js";import"./AnimatedItems-DiPaozpi.js";import"./Label-Cch4VET0.js";import"./Text-B7J48mXb.js";import"./DOMUtils-C0rqppVh.js";import"./ZIndexLayer-DKk9ZSzt.js";import"./useAnimationId-DMdK3Lv6.js";import"./ActivePoints-DK7nKZD0.js";import"./Dot-CBy41HLo.js";import"./types-DwFKy1TI.js";import"./RegisterGraphicalItemId-Xkz1LIrr.js";import"./GraphicalItemClipPath-BB5MRsg5.js";import"./SetGraphicalItem-Di0ECEKf.js";import"./getRadiusAndStrokeWidthFromDot-TKmNfgfy.js";import"./ActiveShapeUtils-CfEExsMK.js";import"./Curve-CqMKytty.js";import"./step-DPliw2Y2.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BsfNmkQw.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
