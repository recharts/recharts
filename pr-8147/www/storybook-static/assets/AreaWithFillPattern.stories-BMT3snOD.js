import{R as t}from"./iframe-BQY4vSXy.js";import{R as p}from"./zIndexSlice-BdzVgEW0.js";import{C as m}from"./ComposedChart-B-_Frpte.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-By95nAwy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-G77sf460.js";import"./throttle-CE5heSva.js";import"./index-CQxQDYts.js";import"./index-D-_6MOIc.js";import"./RechartsWrapper-BcRxM-Av.js";import"./axisSelectors-B45QX1Cb.js";import"./polarAxisSelectors-Bx2aNCzN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-tF01g-yC.js";import"./index-CLE53NQ2.js";import"./index-CyLNMVoO.js";import"./renderedTicksSlice-xQ-Bbda9.js";import"./index-Bx1R-goW.js";import"./fillDefinitions-DSK0YdxC.js";import"./CartesianChart-r0bwZB67.js";import"./ZIndexPortal-CnsPtZ0q.js";import"./CategoricalChart-DH0FyAFC.js";import"./Layer-AUPxKI27.js";import"./LabelList-CALPxAES.js";import"./Label-mx5Rr5JL.js";import"./Text-CLBNZPUe.js";import"./DOMUtils-fCmVDggT.js";import"./ZIndexLayer-CAJurUsW.js";import"./ActivePoints-BFRx_fxi.js";import"./Dot-Cds0GrCQ.js";import"./types-Mj5dcoaz.js";import"./activeStyles-BMraSVhQ.js";import"./useAnimationId-qEoZ-4tT.js";import"./dataEntryStyles-CGibnImn.js";import"./Symbols-yVk86yax.js";import"./symbol-DVGalN_0.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DSqeiOP9.js";import"./getRadiusAndStrokeWidthFromDot-DVA4wgZi.js";import"./ActiveShapeUtils-jWDRV1_r.js";import"./Curve-Prn3xfVK.js";import"./step-BwGNQI61.js";import"./useEffectiveDataKey-DjptVWbj.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
