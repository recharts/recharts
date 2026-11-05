import{R as t}from"./iframe-7ITK_SeI.js";import{R as p}from"./zIndexSlice-Bfez01E7.js";import{C as m}from"./ComposedChart-CXRmBdio.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B3gJZMGN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DPD-Ehfr.js";import"./throttle-DZAxS36c.js";import"./index-BWOYN4v6.js";import"./index-B6PSRbSm.js";import"./RechartsWrapper-Bg4i1fRK.js";import"./axisSelectors-BYlSNMl6.js";import"./polarAxisSelectors-D1t4qM7h.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgbIH62T.js";import"./index-CPO6Y0gx.js";import"./index-BX7LvsvC.js";import"./renderedTicksSlice-DWRnvg7c.js";import"./index-icjlISLt.js";import"./fillDefinitions-BLJHfD9l.js";import"./CartesianChart-BIfTf3EX.js";import"./chartDataContext-DsZ1g-wA.js";import"./CategoricalChart-DOHYP0Wg.js";import"./ZIndexPortal-BCW_CUyX.js";import"./Layer-x5ioE0yr.js";import"./LabelList-DyQMPI8I.js";import"./Label-CsN2_Owm.js";import"./Text-uEM3tCf7.js";import"./DOMUtils-B8HJjEQc.js";import"./ZIndexLayer-CUOO17YZ.js";import"./ActivePoints-CfvU-oNA.js";import"./Dot-H1TfH3hy.js";import"./types-CwLExx_V.js";import"./activeStyles-CTNWVDS5.js";import"./useAnimationId-DKK7KP9l.js";import"./dataEntryStyles-Dd39-khT.js";import"./Symbols-CGGO5VAJ.js";import"./symbol-CV73IRCS.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DVqvqVag.js";import"./getRadiusAndStrokeWidthFromDot-Cev_FaPT.js";import"./ActiveShapeUtils-CkUaBVCr.js";import"./Curve-SIwN0AJD.js";import"./step-DDoJ0d0M.js";import"./useEffectiveDataKey-EiVngFCy.js";const it={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},ot=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,ot as __namedExportsOrder,it as default};
