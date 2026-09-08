import{R as t}from"./iframe-BVwma9wI.js";import{R as p}from"./zIndexSlice-VAlBdr6o.js";import{C as m}from"./ComposedChart-C1Hvl3k7.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-WTg5pTR-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bd_AFMQd.js";import"./index-BWPTe55v.js";import"./index-CKwoEIUF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DBpEOB4I.js";import"./isWellBehavedNumber-xliXy-xp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjIw9-OO.js";import"./axisSelectors-CvmqVILj.js";import"./d3-scale-D0UMq2S4.js";import"./index-Cx4u4fkc.js";import"./index-c3hGei__.js";import"./renderedTicksSlice-HCr6GQIq.js";import"./index-CVdaA3HQ.js";import"./CartesianChart-DTfvYFOe.js";import"./chartDataContext-BpzIcZqB.js";import"./CategoricalChart-B7_1KQpA.js";import"./Layer-B2gbCIpu.js";import"./AnimatedItems-CdRizhQr.js";import"./Label-CUW0HBf_.js";import"./Text-DRDxlPSO.js";import"./DOMUtils-DF9_GxSR.js";import"./useId-Dz979Lah.js";import"./useBackwardsCompatibleTheme-CbBx_yjE.js";import"./ZIndexLayer-CVdU6QQB.js";import"./useAnimationId-VU1EAhiC.js";import"./ActivePoints-DNnivkqK.js";import"./Dot-DFH0ovgl.js";import"./types-DEj_s5AW.js";import"./RegisterGraphicalItemId-BxG6QVhz.js";import"./GraphicalItemClipPath-VekWoIWW.js";import"./SetGraphicalItem-ByKu5cCs.js";import"./getRadiusAndStrokeWidthFromDot-BFJEVTHP.js";import"./ActiveShapeUtils-b9rh-Zt0.js";import"./Curve-CbKCSO8X.js";import"./step-J2-5bjqR.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CrHSei9p.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
