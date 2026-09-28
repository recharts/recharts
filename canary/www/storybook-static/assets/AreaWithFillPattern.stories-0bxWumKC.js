import{R as t}from"./iframe-B-FpQGVE.js";import{R as p}from"./zIndexSlice-Be4STqbb.js";import{C as m}from"./ComposedChart-1tjyas2t.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BSCfNiGI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fO2SI_hD.js";import"./index-Bwqm2cxX.js";import"./index-zzhJWva7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dtl_SfnV.js";import"./isWellBehavedNumber-DgH__KwF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1D1pk27.js";import"./axisSelectors-BKBkYNOt.js";import"./d3-scale-BVd2nsAD.js";import"./index-BOg1JrYi.js";import"./index-DrqVEo4b.js";import"./renderedTicksSlice-C87TKpMP.js";import"./index-BSKvdyte.js";import"./CartesianChart-CZbjQu0s.js";import"./chartDataContext-BgCxNtXs.js";import"./CategoricalChart-DYpdXtUy.js";import"./Layer-CC5u66Wi.js";import"./AnimatedItems-e1etCO8j.js";import"./Label-CsGEr2R8.js";import"./Text-Djuu9tRj.js";import"./DOMUtils-miVyGpMZ.js";import"./useId-DAIuZYFe.js";import"./useBackwardsCompatibleTheme-CLDALELV.js";import"./ZIndexLayer-BnTzkaQy.js";import"./useAnimationId-BcCVwFd_.js";import"./ActivePoints-DdCBd2pZ.js";import"./Dot-B9Hx6qjI.js";import"./types-DD3qZx3A.js";import"./RegisterGraphicalItemId-1yR8tuVZ.js";import"./GraphicalItemClipPath-Cm6Nokyc.js";import"./SetGraphicalItem-Bih-NG2S.js";import"./getRadiusAndStrokeWidthFromDot-DjdOmN1y.js";import"./ActiveShapeUtils-DC9lclqW.js";import"./Curve-CAoBmZPA.js";import"./step-C2pk31G8.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DhhteXck.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
