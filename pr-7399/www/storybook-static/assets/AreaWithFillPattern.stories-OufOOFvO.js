import{c as t}from"./iframe-BRX46Ivk.js";import{g as p}from"./zIndexSlice-DWdWmCIF.js";import{C as m}from"./ComposedChart-CDM_AzxP.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-DZyyhLWq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-B8PXb0jM.js";import"./index-aVTX2b-6.js";import"./index-B93cWPAb.js";import"./get-Co_O7Bis.js";import"./resolveDefaultProps-yU7jT9_k.js";import"./isWellBehavedNumber-CB_DAa3f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2N_lXXj.js";import"./index-WXfBYNk1.js";import"./index-C_nDec_P.js";import"./renderedTicksSlice-B8vMnOQc.js";import"./axisSelectors-CxAtIunO.js";import"./d3-scale--l5c2rdM.js";import"./CartesianChart-CXTTTHcm.js";import"./chartDataContext-Liihjxia.js";import"./CategoricalChart-CQuPTVMV.js";import"./Curve-DevGF9dB.js";import"./types-BPLmhp3x.js";import"./step-DohD2rXx.js";import"./path-DyVhHtw_.js";import"./Layer-CnAnt2-w.js";import"./ReactUtils-CZBp5YIk.js";import"./Label-BF8y58w-.js";import"./Text-Dab8pblH.js";import"./DOMUtils-DYK5KdOd.js";import"./ZIndexLayer-CPddneQ7.js";import"./ActivePoints-zyPb8mdq.js";import"./Dot-DrpVqpH-.js";import"./RegisterGraphicalItemId-D97Nzm32.js";import"./GraphicalItemClipPath-BoMPcOm_.js";import"./SetGraphicalItem-Ddj-tLej.js";import"./useAnimationId-HcldwJQz.js";import"./getRadiusAndStrokeWidthFromDot-CjA9U0Zs.js";import"./graphicalItemSelectors-Uf-kajUJ.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
