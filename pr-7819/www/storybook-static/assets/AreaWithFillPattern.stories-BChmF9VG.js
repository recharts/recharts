import{R as t}from"./iframe-iz9dRDhe.js";import{R as p}from"./zIndexSlice-BdPqcxx_.js";import{C as m}from"./ComposedChart-DjYayHbw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DBoUsRnp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DE0tlCdA.js";import"./index-DxHaJGfQ.js";import"./index-Bl-8dy8S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtNPAsTQ.js";import"./isWellBehavedNumber--SX7jZAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUdNLZqv.js";import"./axisSelectors-2huN7QkS.js";import"./d3-scale-DHC9WiBl.js";import"./index-mn3tws3H.js";import"./index-8jy5f1Un.js";import"./renderedTicksSlice-CEU3EycZ.js";import"./index-Bn7rp-xI.js";import"./CartesianChart-DOgw209l.js";import"./chartDataContext-CeQ-Tm4w.js";import"./CategoricalChart-D__Jof4a.js";import"./Layer-DYGhC4_B.js";import"./AnimatedItems-Dc8Ivobd.js";import"./Label-C1iyqFpa.js";import"./Text-CUS7a8VN.js";import"./DOMUtils-lupu9nOG.js";import"./useId-HDpOWxLn.js";import"./useBackwardsCompatibleTheme-BDaqedqa.js";import"./ZIndexLayer-TqmbKYqx.js";import"./useAnimationId-7yr0q3Dd.js";import"./ActivePoints-DShx2jgH.js";import"./Dot-B7QvGJur.js";import"./types-LFzxVX1I.js";import"./RegisterGraphicalItemId-CDExOK2J.js";import"./GraphicalItemClipPath-C5R-amEZ.js";import"./SetGraphicalItem-CMqF7RNk.js";import"./getRadiusAndStrokeWidthFromDot-CQjtIaHq.js";import"./ActiveShapeUtils-DFPOUViC.js";import"./Curve-D2o1LRz2.js";import"./step-C36qcU_Q.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-MtWjlwkT.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
