import{R as t}from"./iframe-Bh4IukvS.js";import{R as p}from"./zIndexSlice-BnhPp-nh.js";import{C as m}from"./ComposedChart-qa2sMwNO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-ZRNxVHoY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CXYaw1-J.js";import"./index-BAvBYzvL.js";import"./index-Bd7C7KEc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CS55fj5A.js";import"./isWellBehavedNumber-COGARIBs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CloVGpsi.js";import"./axisSelectors-C8F9z3Z9.js";import"./d3-scale-BYEA786G.js";import"./index-BSsixbSb.js";import"./index-Xb0OYFJE.js";import"./renderedTicksSlice-DKLC06E4.js";import"./index-BoLfeuKb.js";import"./CartesianChart-BfQhJC72.js";import"./chartDataContext-BtR7OiSm.js";import"./CategoricalChart-Cv2qqsYa.js";import"./Layer-O2qI8LTc.js";import"./AnimatedItems-D-YvBlp4.js";import"./Label-B71mUMe3.js";import"./Text-ByHw94zt.js";import"./DOMUtils-jG16kJ-0.js";import"./useId-DUPaFVMq.js";import"./useBackwardsCompatibleTheme-BGwCHVGE.js";import"./ZIndexLayer-HUNPQO7Y.js";import"./useAnimationId-DwO0dP0K.js";import"./ActivePoints-DirNCRmn.js";import"./Dot-C6mQoDM6.js";import"./types-kFpO5oed.js";import"./RegisterGraphicalItemId-_cXLNg8O.js";import"./GraphicalItemClipPath-B9NNnVgG.js";import"./SetGraphicalItem-DSGRIbG0.js";import"./getRadiusAndStrokeWidthFromDot-B2N3Oqao.js";import"./ActiveShapeUtils-DP7EI6-I.js";import"./Curve-CAOammAF.js";import"./step-Dbp5foHF.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Dsj7jE7N.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
