import{R as t}from"./iframe-5h9djFbt.js";import{R as p}from"./zIndexSlice-BdIKrmmY.js";import{C as m}from"./ComposedChart-DzFMSgfQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CfUcqBIy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BRkWLUiC.js";import"./index-CEJvLeX_.js";import"./index-B9x0kJ-U.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-P7Da5mqR.js";import"./isWellBehavedNumber-DStaytIC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-QvnV0uNt.js";import"./axisSelectors-DjHfkPnH.js";import"./d3-scale-BcvXASmu.js";import"./index-BetN_RMo.js";import"./index-DkJjmLoR.js";import"./renderedTicksSlice-BUXo475V.js";import"./index-C__FEdkF.js";import"./CartesianChart-CEUQRdCg.js";import"./chartDataContext-Bq32LFRB.js";import"./CategoricalChart-DAp11J6f.js";import"./Layer-CyvtfT-W.js";import"./AnimatedItems-s0U1kgXJ.js";import"./Label-CP2XtCyN.js";import"./Text-KAAJmctl.js";import"./DOMUtils-ccwVme2-.js";import"./useId-C3MUzbkU.js";import"./useBackwardsCompatibleTheme-DY45QFX2.js";import"./ZIndexLayer-BBvGlV3x.js";import"./useAnimationId-B4WX31v5.js";import"./ActivePoints-W3o0JREG.js";import"./Dot-BTGCUhRH.js";import"./types-CcKw46qs.js";import"./RegisterGraphicalItemId-zWnNyz48.js";import"./GraphicalItemClipPath-DH9zOtRz.js";import"./SetGraphicalItem-CXIeHIB6.js";import"./getRadiusAndStrokeWidthFromDot-PgyeTlLk.js";import"./ActiveShapeUtils-VwknAe2e.js";import"./Curve-DtF4KeGP.js";import"./step-DzAe_mUU.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BGObpJ42.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
