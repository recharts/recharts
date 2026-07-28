import{R as t}from"./iframe-DuK0Qil1.js";import{R as p}from"./zIndexSlice-CDnfQqmd.js";import{C as m}from"./ComposedChart-CoDAatDa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BaPhLDe8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DSTeDcIR.js";import"./index-tfefZ_nO.js";import"./index-CKpzsMgh.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-oCmlrVLK.js";import"./isWellBehavedNumber-DX_vizwS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DniM3uOm.js";import"./index-DwA8b1Ou.js";import"./index-DhoW-uSW.js";import"./renderedTicksSlice-CSJ2A-w6.js";import"./axisSelectors-_6NgKNdR.js";import"./d3-scale-DuTdgHoH.js";import"./CartesianChart-BQw3D51-.js";import"./chartDataContext-CfvZMLTP.js";import"./CategoricalChart-D9Svi6qf.js";import"./Layer-DkfKlAwf.js";import"./AnimatedItems-CBhdDdvc.js";import"./Label-BVUrQ6r5.js";import"./Text-D4DIOP-8.js";import"./DOMUtils-n5aJojsY.js";import"./ZIndexLayer-BaKptJ0d.js";import"./useAnimationId-nnglBd7S.js";import"./ActivePoints-Dq5H8yZY.js";import"./Dot-C7D6mqds.js";import"./types-Ch2-4RAi.js";import"./RegisterGraphicalItemId-BqmtVyAz.js";import"./GraphicalItemClipPath-BN5jaNNE.js";import"./SetGraphicalItem-D4hSZyvD.js";import"./getRadiusAndStrokeWidthFromDot-DcB-LW-j.js";import"./ActiveShapeUtils-B7fe-RtC.js";import"./Curve-CAqM1U-K.js";import"./step-BW4Xq2ef.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D9CHw2Gm.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
