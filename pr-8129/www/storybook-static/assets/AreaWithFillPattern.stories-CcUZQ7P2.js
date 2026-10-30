import{R as t}from"./iframe-BvC_nX2I.js";import{R as p}from"./zIndexSlice-Deux2KLj.js";import{C as m}from"./ComposedChart-D6o-RTOM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-bJ2prupW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DT691zhh.js";import"./throttle-CirueaOA.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./RechartsWrapper-YXBLwPUp.js";import"./axisSelectors-D1Op89Ra.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oQwuANVt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-C59oTpld.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./Layer-BgbmxeTS.js";import"./LabelList-CRaDVB5f.js";import"./Label-CNqVbewr.js";import"./Text-3ao1DtcI.js";import"./DOMUtils-DlV8uPCF.js";import"./pageBackground-BygNKisP.js";import"./ZIndexLayer-CJcw2vh_.js";import"./ActivePoints-K5tloKEU.js";import"./Dot-B0BFGoSP.js";import"./fillDefinitions-CZGVPI6N.js";import"./types-CcK0_WR7.js";import"./activeStyles-D5yKyFeN.js";import"./useAnimationId-CfSQBeBZ.js";import"./dataEntryStyles-DH8AExSk.js";import"./Symbols-DHQWc_0k.js";import"./symbol-BOIFwd4y.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-P596Nxos.js";import"./getRadiusAndStrokeWidthFromDot-BvCb0Nrn.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./Curve-Dwq2onbG.js";import"./step-MgrEs1-v.js";import"./useEffectiveDataKey-B9rISrD-.js";const it={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},ot=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
