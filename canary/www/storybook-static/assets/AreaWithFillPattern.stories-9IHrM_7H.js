import{R as t}from"./iframe-BW71A1Nl.js";import{R as p}from"./zIndexSlice-D0nATGhG.js";import{C as m}from"./ComposedChart-CoIWpLYJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C4ICf1Rf.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-iZdzJVDj.js";import"./index-qgRbHTql.js";import"./index-CUqZ5NZx.js";import"./get-BsK8Vst9.js";import"./resolveDefaultProps-BwvNNDLm.js";import"./isWellBehavedNumber-6M6ThiRO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0unhTn-.js";import"./index-7I5wiu9M.js";import"./index-BeMOkAqZ.js";import"./renderedTicksSlice-BObQrIhG.js";import"./axisSelectors-CGn4mfga.js";import"./d3-scale-vdMRCf0o.js";import"./CartesianChart-CGswDKyQ.js";import"./chartDataContext-DixWbQnN.js";import"./CategoricalChart-C428T1Jl.js";import"./Layer-BmYZzoaR.js";import"./AnimatedItems-D3llU_s4.js";import"./Label-7Nd_0-bw.js";import"./Text-DDeu8cp3.js";import"./DOMUtils-mo8tevis.js";import"./ZIndexLayer-B4CcndAw.js";import"./useAnimationId-L1gInTUa.js";import"./ActivePoints-C3kyVPB9.js";import"./Dot-CymeOwpM.js";import"./types-CoBkUvrA.js";import"./RegisterGraphicalItemId-DpVIzNFe.js";import"./GraphicalItemClipPath-C8hys0YQ.js";import"./SetGraphicalItem-DVIO0q7q.js";import"./getRadiusAndStrokeWidthFromDot-Dv0_9MPJ.js";import"./ActiveShapeUtils-DnbIkStc.js";import"./Curve-DRyRFJEG.js";import"./step-m-kUV5sp.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B_CHNNOp.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
