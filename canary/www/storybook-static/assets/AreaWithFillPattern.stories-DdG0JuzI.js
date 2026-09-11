import{R as t}from"./iframe-CMVuz_WR.js";import{R as p}from"./zIndexSlice-Bu9BgD7f.js";import{C as m}from"./ComposedChart-BHXT81yI.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C1xv60eg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BD5EEuEt.js";import"./index-8182fU53.js";import"./index-bZstop0p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DlgO1mgX.js";import"./isWellBehavedNumber-DZvjV6rT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i8SteWdh.js";import"./axisSelectors-D6i4LlUB.js";import"./d3-scale-BJGJFwwk.js";import"./index-t37cwTj5.js";import"./index-BjTWdNOV.js";import"./renderedTicksSlice-CIeJUrxO.js";import"./index-CqRVWfEr.js";import"./CartesianChart-C05zOa_e.js";import"./chartDataContext-zZnvxmy2.js";import"./CategoricalChart-C-sUxYeh.js";import"./Layer-BNHnjhAQ.js";import"./AnimatedItems-BtNlpq_I.js";import"./Label-BusuXXbv.js";import"./Text-_Yf6eN5X.js";import"./DOMUtils-ClFVphvT.js";import"./useId-BNZP75Mi.js";import"./useBackwardsCompatibleTheme-YE2IG8yO.js";import"./ZIndexLayer-CC6O4jFa.js";import"./useAnimationId-DpagfNvu.js";import"./ActivePoints-Ct1HkDqz.js";import"./Dot-BH3mzIrp.js";import"./types-C-qBJNve.js";import"./RegisterGraphicalItemId-CX_ikIzR.js";import"./GraphicalItemClipPath-Dm_wDd6O.js";import"./SetGraphicalItem-B2N4WPPi.js";import"./getRadiusAndStrokeWidthFromDot-D4x4O6vv.js";import"./ActiveShapeUtils-Ce44UUga.js";import"./Curve-Br63M5mM.js";import"./step-D1p4WhbU.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Czg2hm9T.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
