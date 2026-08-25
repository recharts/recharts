import{R as t}from"./iframe-C8vQGZXk.js";import{R as p}from"./zIndexSlice-ByprO6Sm.js";import{C as m}from"./ComposedChart-CHNyRbuw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DMedzpZD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-h__ZU4m4.js";import"./index-CPGq0YmD.js";import"./index-DcRT1P9Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-V67edAdk.js";import"./isWellBehavedNumber-C0Xo9Op-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8pTUTugH.js";import"./index-DGglMQ8l.js";import"./index-C62uqfyt.js";import"./axisSelectors-QRAfsrXG.js";import"./d3-scale-CtBXoG-U.js";import"./renderedTicksSlice-DsrGsPip.js";import"./CartesianChart-Tp1RpXRt.js";import"./chartDataContext-DHzBZ8lS.js";import"./CategoricalChart-3d5zHnsL.js";import"./Layer-sgegzG2x.js";import"./AnimatedItems-v0KEsWrQ.js";import"./Label-CYWEtH1_.js";import"./Text-4tQX4Uia.js";import"./DOMUtils-CYXp4dKG.js";import"./useId-BhWWyhoE.js";import"./useBackwardsCompatibleTheme-WNjwGM1x.js";import"./ZIndexLayer-DTaI93aT.js";import"./useAnimationId-CCh5p5CL.js";import"./ActivePoints-DpUGItzr.js";import"./Dot-D-cyWkmh.js";import"./types-Cx0FcaGa.js";import"./RegisterGraphicalItemId-Cui1oLRd.js";import"./GraphicalItemClipPath-BrujiRiU.js";import"./SetGraphicalItem-CLgoHfzk.js";import"./getRadiusAndStrokeWidthFromDot-CYNakwFb.js";import"./ActiveShapeUtils-B1Mwe2wI.js";import"./Curve-BHwHIA5E.js";import"./step-BEmml1DS.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BIKowErt.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
