import{R as t}from"./iframe-CiEll_hl.js";import{R as p}from"./zIndexSlice-BWUZw0HV.js";import{C as m}from"./ComposedChart-BclLBL5K.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B-L9yJkB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D31XxRNM.js";import"./index-C6gwqJSk.js";import"./index-CWa27twE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-duavw9Kl.js";import"./isWellBehavedNumber-ry_onT8i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8qI1d7ig.js";import"./axisSelectors-Czhrsmz1.js";import"./d3-scale-CoahAzwi.js";import"./index-DPEbYR3l.js";import"./index-d_0OIgID.js";import"./renderedTicksSlice-CDeLucdV.js";import"./index-RfC6TSb7.js";import"./CartesianChart-YzLYuA0Z.js";import"./chartDataContext-A6K28S5n.js";import"./CategoricalChart-yzrwRYbH.js";import"./Layer-Bl66F1TU.js";import"./AnimatedItems-ABeUxSrb.js";import"./Label-2sILoPl9.js";import"./Text-C5G8lazz.js";import"./DOMUtils-HtrcCiap.js";import"./useId-BF2rDIp_.js";import"./useBackwardsCompatibleTheme-B38ON0Kc.js";import"./ZIndexLayer-DOTS06hC.js";import"./useAnimationId-DB2VCJ-C.js";import"./ActivePoints-Dc8U7ztD.js";import"./Dot-D6RGfzzu.js";import"./types-MiZov7mG.js";import"./RegisterGraphicalItemId-V_3RkT2Z.js";import"./GraphicalItemClipPath-CNKUlu4p.js";import"./SetGraphicalItem-BGxIGAFZ.js";import"./getRadiusAndStrokeWidthFromDot-IdnOPtwR.js";import"./ActiveShapeUtils-CIEveTom.js";import"./Curve-bnxtETge.js";import"./step-CMCW6W2-.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DPacc47z.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
