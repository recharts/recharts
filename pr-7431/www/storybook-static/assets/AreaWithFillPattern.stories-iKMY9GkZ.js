import{R as t}from"./iframe-CuVm1Ncb.js";import{R as p}from"./zIndexSlice-BZOjM71k.js";import{C as m}from"./ComposedChart-Jqs4ulRL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BsQCDNsO.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-qI_Lx1cT.js";import"./index-DS-VAELW.js";import"./index-ezvYWD77.js";import"./get-mh9AHsYH.js";import"./resolveDefaultProps-DXODA9k0.js";import"./isWellBehavedNumber-Cs5mv3EE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT5GAsrf.js";import"./index-2Eta-fPv.js";import"./index-CIKLroCx.js";import"./renderedTicksSlice-Cq4cXI7l.js";import"./axisSelectors-BqRugZOv.js";import"./d3-scale-DhSEg32F.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BLDYaQ2w.js";import"./chartDataContext-CM4lnGiM.js";import"./CategoricalChart-BJmxSqzB.js";import"./Layer-CQ8j0Llf.js";import"./AnimatedItems-D-7ryyyq.js";import"./Label-CyUXMRAJ.js";import"./Text-LNz2FUpv.js";import"./DOMUtils-C4aU1diQ.js";import"./ZIndexLayer-HG2Tdc6L.js";import"./useAnimationId-DGicD8fh.js";import"./ActivePoints-rNykwE9f.js";import"./Dot-Dt98x6dx.js";import"./types-DjM_wMjP.js";import"./RegisterGraphicalItemId-Ji3BKNxF.js";import"./GraphicalItemClipPath-BofgE1jJ.js";import"./SetGraphicalItem-DDjVRXYZ.js";import"./getRadiusAndStrokeWidthFromDot-DDhP_K7H.js";import"./ActiveShapeUtils-ClNcGcwL.js";import"./Curve-CK2N7RgZ.js";import"./step-BGKZVTtP.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C83oLtwe.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
