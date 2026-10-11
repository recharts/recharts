import{R as t}from"./iframe-PFnyvlis.js";import{R as p}from"./zIndexSlice-B0qSSbxG.js";import{C as m}from"./ComposedChart-CYoxv7K5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BmyR2Ehy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-GW0_gATC.js";import"./index-Bnt3KeU-.js";import"./index-sAeTipYl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-w5xflEp3.js";import"./isWellBehavedNumber-fJrag4D_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3E-J46N.js";import"./axisSelectors-DhkVgott.js";import"./d3-scale-Ct392CQc.js";import"./index-D5l8ABkB.js";import"./index-Cd7PqRR0.js";import"./renderedTicksSlice-CEcKwYs8.js";import"./index-Bz4JWd5z.js";import"./CartesianChart-CsLYaxaY.js";import"./chartDataContext-DOm0tmmB.js";import"./CategoricalChart-C-GflChV.js";import"./Layer-8HYYz2ZX.js";import"./activeStyles-DeGfiuQP.js";import"./Label-CHf8Dh9F.js";import"./Text-Bjtm-BnX.js";import"./pageBackground-D9EVWege.js";import"./useId-B6VTORgN.js";import"./useBackwardsCompatibleTheme-BHl7LW2d.js";import"./ZIndexLayer-B4ISEqyM.js";import"./useAnimationId-E_cgqRBb.js";import"./dataEntryStyles-DVpontPM.js";import"./ActivePoints-DOitargu.js";import"./Dot-FM4Coi4D.js";import"./types-Cdq40KHv.js";import"./GraphicalItemClipPath-Bhp27ob6.js";import"./SetGraphicalItem-TVDRdMaU.js";import"./getRadiusAndStrokeWidthFromDot-fHs-9w3x.js";import"./ActiveShapeUtils-1mgFNr1z.js";import"./Curve-BDK-Xp5l.js";import"./step-DeVCdmYq.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-YcO-x1ZM.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
