import{R as t}from"./iframe-NSpsGxr3.js";import{R as p}from"./zIndexSlice-CegrvH4P.js";import{C as m}from"./ComposedChart-BSbO4QCj.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BSAdN7Pe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-oOh5DhdY.js";import"./index-4AzzKt7j.js";import"./index-0HEoT-e5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlFb5h3I.js";import"./isWellBehavedNumber-pwlbiGoO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtJCjJYR.js";import"./axisSelectors-BkwFONEa.js";import"./d3-scale-C3gnRv6y.js";import"./index-BsIlyQNm.js";import"./index-DWO3hHqn.js";import"./renderedTicksSlice-DYxvbfog.js";import"./index-CYtbOF9C.js";import"./CartesianChart-CvLKYupN.js";import"./chartDataContext-DJ-2f6vo.js";import"./CategoricalChart-Dg01q-nM.js";import"./Layer-BnG363as.js";import"./AnimatedItems-BkT2_sP2.js";import"./Label-BIdOyJIr.js";import"./Text-BtwC4msG.js";import"./DOMUtils-CWTrI1E5.js";import"./useId-BVXNnfLZ.js";import"./useBackwardsCompatibleTheme-C2Bmbb6o.js";import"./ZIndexLayer-C4urMDBy.js";import"./useAnimationId-N_fuM4i0.js";import"./ActivePoints-KPsJbcKk.js";import"./Dot-DjaeVWdC.js";import"./types-Co_GWDov.js";import"./RegisterGraphicalItemId-wt0KspV9.js";import"./GraphicalItemClipPath-CcSo6wES.js";import"./SetGraphicalItem-C1qAtScX.js";import"./getRadiusAndStrokeWidthFromDot-DkEHurz6.js";import"./ActiveShapeUtils-pIseDvg-.js";import"./Curve-CaqAetYK.js";import"./step-Drtb2meU.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-MpFTBnWD.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
