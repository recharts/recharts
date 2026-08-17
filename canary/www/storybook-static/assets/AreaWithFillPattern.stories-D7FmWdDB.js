import{R as t}from"./iframe-5rlHu5E0.js";import{R as p}from"./zIndexSlice-Dvv9j-PL.js";import{C as m}from"./ComposedChart-02LDQCPf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BJ_385Du.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEcUjoVL.js";import"./index-De9KIq3f.js";import"./index-CPjGkxRF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMzoBuFc.js";import"./isWellBehavedNumber-CtQc_19S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_1S-WX9.js";import"./index-CRexnrp9.js";import"./index-CgDVIgvd.js";import"./axisSelectors-XpGDVkFI.js";import"./d3-scale-DQPeDNzN.js";import"./renderedTicksSlice-BU2rLD4L.js";import"./CartesianChart-CTBAwDjg.js";import"./chartDataContext-_d8W5FBB.js";import"./CategoricalChart-fg3LMOIt.js";import"./Layer-B7qTvwXJ.js";import"./AnimatedItems-CcRowb6W.js";import"./Label-dTTzfWAl.js";import"./Text-BWBZmFaQ.js";import"./DOMUtils-Cgsp7qZK.js";import"./useBackwardsCompatibleTheme-CU4QNWlg.js";import"./ZIndexLayer-CC4VGBXC.js";import"./useAnimationId-9v2us4V5.js";import"./ActivePoints-uOYRpmEx.js";import"./Dot-jf28pyfo.js";import"./types-_FdMQlV7.js";import"./RegisterGraphicalItemId-DiVn-hPt.js";import"./GraphicalItemClipPath-BY5WrhEA.js";import"./SetGraphicalItem-B4wCJH3k.js";import"./getRadiusAndStrokeWidthFromDot-DgCt5gXI.js";import"./ActiveShapeUtils-DcbSHq-a.js";import"./Curve-D7O-jO1k.js";import"./step-BcoQtodi.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7tXAQg_z.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
