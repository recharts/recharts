import{R as t}from"./iframe-CVyYUHBB.js";import{R as p}from"./zIndexSlice-DQO5Hbgs.js";import{C as m}from"./ComposedChart-m9fhUeFB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BiTHMEzU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BBXZcEly.js";import"./index-DyYl91DI.js";import"./index-Bu-B5WMy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C7voaGK7.js";import"./isWellBehavedNumber-BkHFck3s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B47jb7Bg.js";import"./index-Ck0Bo50f.js";import"./index-DLItSsfJ.js";import"./axisSelectors-CMqkaAfm.js";import"./d3-scale-G2cHgOnr.js";import"./renderedTicksSlice-Cdp3Xg1W.js";import"./CartesianChart--y5fp4Ts.js";import"./chartDataContext-CkCkvPBB.js";import"./CategoricalChart-BzwwubIO.js";import"./Layer-BB5O4xlv.js";import"./AnimatedItems-Clv-mx2A.js";import"./Label-DUcJCWBn.js";import"./Text-CiA3AAlg.js";import"./DOMUtils-ukWQHZl5.js";import"./RechartsThemeContext-NTsyT9p1.js";import"./ZIndexLayer-DBw3xiu4.js";import"./useAnimationId-_KC_AMgU.js";import"./ActivePoints-D1NkQNgM.js";import"./Dot-D0NdtXSm.js";import"./types-DESxFXXj.js";import"./RegisterGraphicalItemId-BhQ648vE.js";import"./GraphicalItemClipPath-JgdFdpvQ.js";import"./SetGraphicalItem-C8TpD4Nn.js";import"./getRadiusAndStrokeWidthFromDot-OHCftA6z.js";import"./ActiveShapeUtils-D5nCu2Hc.js";import"./Curve-BDPvfmPk.js";import"./step-Be_wHVCe.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-UGBu3ofg.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
