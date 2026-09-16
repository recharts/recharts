import{R as t}from"./iframe-yFYT_zN7.js";import{R as p}from"./zIndexSlice-D0SqWiCA.js";import{C as m}from"./ComposedChart-DxJEOi6H.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CL2gyqeg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6GNdBpm.js";import"./index-CuJJm_Tn.js";import"./index-Du7yNjke.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CTg3N4RV.js";import"./isWellBehavedNumber-CbA6SpN0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BK2Nqghc.js";import"./axisSelectors-Cz3aPbz8.js";import"./d3-scale--DHWqn1j.js";import"./index-DMtch-zH.js";import"./index-DrQda-y9.js";import"./renderedTicksSlice-DwWtQ1Di.js";import"./index-DI6gPrhu.js";import"./CartesianChart-Ck9zKM_U.js";import"./chartDataContext-CrNdyu-C.js";import"./CategoricalChart-DBil3fX0.js";import"./Layer-Dy_GX6yW.js";import"./AnimatedItems-Ck-1wErl.js";import"./Label-99DUDCMD.js";import"./Text-CYbp4Bob.js";import"./DOMUtils-6VQmbUCR.js";import"./useId-CBpR1fpo.js";import"./useBackwardsCompatibleTheme-BN2mwgRc.js";import"./ZIndexLayer-CHhs3r11.js";import"./useAnimationId-DeDzp5yx.js";import"./ActivePoints-BrgN9jKH.js";import"./Dot-UFOmxDS-.js";import"./types-B35KvzC0.js";import"./RegisterGraphicalItemId-CaKRVAB3.js";import"./GraphicalItemClipPath-StVjduOg.js";import"./SetGraphicalItem-DwYip7WF.js";import"./getRadiusAndStrokeWidthFromDot-B44_s7et.js";import"./ActiveShapeUtils-liUtTmHf.js";import"./Curve-BBFKRsTK.js";import"./step-Dfa3kdsE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CrfN38Fv.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
