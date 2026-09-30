import{R as t}from"./iframe-CDSer5wk.js";import{R as p}from"./zIndexSlice-B-lpBScO.js";import{C as m}from"./ComposedChart-b_m8lhmT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BFA5OsMY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fnP7_niv.js";import"./index-Mdu1MT_Q.js";import"./index-DPnG0BF_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DTBx4E7L.js";import"./isWellBehavedNumber-Cbiw2L0f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CkjZ8sdT.js";import"./axisSelectors-DSp6qoYe.js";import"./d3-scale-BNdPRZbv.js";import"./index-DV1Q8ly1.js";import"./index-SPPJq_2I.js";import"./renderedTicksSlice-Nk82yORn.js";import"./index-DbUyrogr.js";import"./CartesianChart-B7gL7VFT.js";import"./chartDataContext-SSvdGu54.js";import"./CategoricalChart-BazdXmMB.js";import"./Layer-BlrsPtdk.js";import"./AnimatedItems-C7ScRxUV.js";import"./Label-CDfUkOd_.js";import"./Text-B-qlIjrY.js";import"./DOMUtils-COEpD6x9.js";import"./useId-SR9QF0F6.js";import"./useBackwardsCompatibleTheme-zogGwhJH.js";import"./ZIndexLayer-BGJbwrqn.js";import"./useAnimationId-DsIt1eY5.js";import"./ActivePoints-6u2iLucI.js";import"./Dot-7OP2vIm4.js";import"./types-DCfhmQQy.js";import"./RegisterGraphicalItemId-BtK15Bh8.js";import"./GraphicalItemClipPath-DlXs2ztm.js";import"./SetGraphicalItem-b1y0Bklu.js";import"./getRadiusAndStrokeWidthFromDot-Bb_SzVF_.js";import"./ActiveShapeUtils-BNDheO9x.js";import"./Curve-BrORdZJH.js";import"./step-BIecx5Me.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DX00RNhI.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
