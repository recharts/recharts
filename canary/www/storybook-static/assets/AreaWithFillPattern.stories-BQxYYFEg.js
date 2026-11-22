import{R as t}from"./iframe-CGGZfnCV.js";import{R as p}from"./zIndexSlice-BqswsCB2.js";import{C as m}from"./ComposedChart-BcV6dG2I.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BDVXPd6y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DB16si7p.js";import"./throttle-CPPktxFr.js";import"./index-hNRKJP-1.js";import"./index-BFvwi7Fr.js";import"./RechartsWrapper-CBqoZXqJ.js";import"./axisSelectors-ClqRDW4l.js";import"./polarAxisSelectors-BM3r_eW-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH0gLY6W.js";import"./index-DZ2zDC6C.js";import"./index-gZNixUu0.js";import"./renderedTicksSlice-CQP8AqXM.js";import"./index-1Wp7cDto.js";import"./fillDefinitions-DVvVBqIn.js";import"./CartesianChart-Bh5zn2Cs.js";import"./chartDataContext-L797Ywu5.js";import"./CategoricalChart-DAMpVLQr.js";import"./getRadiusAndStrokeWidthFromDot-B05KFCuA.js";import"./Layer-BEhjTHM-.js";import"./dataEntryStyles-BLU3QW0Z.js";import"./Label-BodzTsEv.js";import"./Text-BWSViN8b.js";import"./ZIndexLayer-DLjlC1Ho.js";import"./ActivePoints-xFZqNI2F.js";import"./Dot-DwUXPQPe.js";import"./types-D01_wvtH.js";import"./activeStyles-C8mJMGZo.js";import"./useAnimationId-CKpnbEUf.js";import"./Symbols-BkuE8ueA.js";import"./symbol-CmPSaat-.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CpKKIpFz.js";import"./ActiveShapeUtils-Dr8eZSqA.js";import"./Curve-CCF7pO5F.js";import"./step-CUQPzItX.js";import"./useEffectiveDataKey-CaAnzbHC.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
