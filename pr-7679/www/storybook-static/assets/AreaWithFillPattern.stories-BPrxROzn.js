import{R as t}from"./iframe-DXHKQ-h8.js";import{R as p}from"./zIndexSlice-CsQg_s5y.js";import{C as m}from"./ComposedChart-C6cxeCbV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C5JS_Uiu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSmQrAIR.js";import"./index-BoMz0vXG.js";import"./index-Bfb_F_qW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CH3DJ1U7.js";import"./isWellBehavedNumber-B2OYT9p4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NUOxXBTc.js";import"./index-D51whMVe.js";import"./index-DQazPbcg.js";import"./axisSelectors-C2FhXeDp.js";import"./d3-scale-x1kkipsN.js";import"./renderedTicksSlice-B6yr5Yhh.js";import"./CartesianChart-BAA2O-Wi.js";import"./chartDataContext-Co2nG42J.js";import"./CategoricalChart-njav6Y1l.js";import"./Layer-D8Of9gCi.js";import"./AnimatedItems-BnmUd_N9.js";import"./Label-BCe67yO0.js";import"./Text-Bb1JrkH_.js";import"./DOMUtils-BSgnm9w6.js";import"./useId-DlJk-nhm.js";import"./useBackwardsCompatibleTheme-DuqY5Wqi.js";import"./ZIndexLayer-DLuwldtV.js";import"./useAnimationId-WfbS1c84.js";import"./ActivePoints-BXDp0MVl.js";import"./Dot-yuxaqmcb.js";import"./types-C9KPOeuA.js";import"./RegisterGraphicalItemId-B_2bGmJg.js";import"./GraphicalItemClipPath-BZQLFBTi.js";import"./SetGraphicalItem-CODvRDn4.js";import"./getRadiusAndStrokeWidthFromDot-C7lzhg_f.js";import"./ActiveShapeUtils-C_tGIq0b.js";import"./Curve-CiIvzF30.js";import"./step-Bw_C9qgc.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Di3e24UN.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
