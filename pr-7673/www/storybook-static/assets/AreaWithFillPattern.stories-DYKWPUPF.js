import{R as t}from"./iframe-C93Nv-sG.js";import{R as p}from"./zIndexSlice-ByU1_vW7.js";import{C as m}from"./ComposedChart-CbNoaIAl.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CY0waHZr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKDTz13_.js";import"./index-CX4bLeAT.js";import"./index-WdxouXHE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5w327Ax.js";import"./isWellBehavedNumber-Cfr3MT4y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bd-lflJB.js";import"./index-2-1yVY-g.js";import"./index-BGWLrOy5.js";import"./axisSelectors-B_nw5bC_.js";import"./d3-scale-DPCHxtwr.js";import"./renderedTicksSlice-BfcPBBmI.js";import"./CartesianChart-DjN4sIo1.js";import"./chartDataContext-DgDj7d7B.js";import"./CategoricalChart-Ckb0xTkj.js";import"./Layer-C-yThQSL.js";import"./AnimatedItems-B9gSLTjZ.js";import"./Label-C3kKco4I.js";import"./Text-BwKXAAQh.js";import"./DOMUtils-BXMnIR4n.js";import"./useId-Dcf96ehM.js";import"./useBackwardsCompatibleTheme-LhXwVyLe.js";import"./ZIndexLayer-txp7Phg0.js";import"./useAnimationId-ChO4WR-0.js";import"./ActivePoints-C6Pzzzqs.js";import"./Dot-4IJHfCjD.js";import"./types-DSu39Mtk.js";import"./RegisterGraphicalItemId-DBNNmaKj.js";import"./GraphicalItemClipPath-DHw7w2MP.js";import"./SetGraphicalItem-BVLzKmF8.js";import"./getRadiusAndStrokeWidthFromDot-BKbcHmv5.js";import"./ActiveShapeUtils-CpLwkFCz.js";import"./Curve-C4EKfZxi.js";import"./step-DUN67lSa.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DVEtBU0R.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
