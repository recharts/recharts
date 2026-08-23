import{R as t}from"./iframe-CJ35PD5A.js";import{R as p}from"./zIndexSlice-CXvAqe1u.js";import{C as m}from"./ComposedChart-fAwm7BMd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-OwiN4hc4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvFenjAj.js";import"./index-DCTwsO2l.js";import"./index-BTcur_ii.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B4ysfGm0.js";import"./isWellBehavedNumber-DCFZS65F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxyVG0mr.js";import"./index-D5VY6D4m.js";import"./index-DuaQKKCa.js";import"./axisSelectors-BMiLu3pU.js";import"./d3-scale-BMNy9LMQ.js";import"./renderedTicksSlice-BOsENmMF.js";import"./CartesianChart-M-BqrDCQ.js";import"./chartDataContext-3LBg74Yj.js";import"./CategoricalChart-CE-ZSJzH.js";import"./Layer-DSIl_tFJ.js";import"./AnimatedItems-DkvJpJ1L.js";import"./Label-cSvk2bVk.js";import"./Text-C5ltUD8c.js";import"./DOMUtils-DuAj34SJ.js";import"./useId-BZocWyjW.js";import"./useBackwardsCompatibleTheme-BQ1enFxD.js";import"./ZIndexLayer-BbmNpztl.js";import"./useAnimationId-BrX_XnAR.js";import"./ActivePoints-Ch1REeHD.js";import"./Dot-BpKSJ4gZ.js";import"./types-C2sHPoqW.js";import"./RegisterGraphicalItemId-B595cwUV.js";import"./GraphicalItemClipPath-DCmI04ho.js";import"./SetGraphicalItem-y646d7k1.js";import"./getRadiusAndStrokeWidthFromDot-DIhYmtUO.js";import"./ActiveShapeUtils-B17w6t33.js";import"./Curve-T8FgtlQU.js";import"./step-Bm6k0KcJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BlAHB7pR.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
