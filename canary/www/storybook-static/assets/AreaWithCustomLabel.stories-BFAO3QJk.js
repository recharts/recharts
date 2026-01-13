import{e as t}from"./iframe-bYFtU2gB.js";import{R as c}from"./arrayEqualityCheck-BHNF6PA7.js";import{C as d}from"./ComposedChart-CUjgMZ9l.js";import{A as l}from"./Area-Cp149McB.js";import{R as h}from"./RechartsHookInspector-Cgqq1XBh.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RCRz3E4-.js";import"./PolarUtils-BwgqFbq3.js";import"./RechartsWrapper-Cr_qDhUZ.js";import"./hooks-ZDdJpBw-.js";import"./axisSelectors-Bz_L1ZR6.js";import"./zIndexSlice-UFbR30dZ.js";import"./CartesianChart-lWIloUy5.js";import"./chartDataContext-CbNClMtX.js";import"./CategoricalChart-ByKQIpLz.js";import"./Curve-CtUoNekQ.js";import"./types-rMmo8sSI.js";import"./Layer-BBEIeca0.js";import"./ReactUtils-C_A_edxl.js";import"./Label-CFtnFUI6.js";import"./Text-DGNM2np6.js";import"./DOMUtils-BRFWW1JK.js";import"./ZIndexLayer-BgNsQjiU.js";import"./ActivePoints-C3YdUCR7.js";import"./Dot-BouV6qyY.js";import"./RegisterGraphicalItemId-BrxUTcxA.js";import"./GraphicalItemClipPath-BBMk50de.js";import"./SetGraphicalItem-nU2Wrmlo.js";import"./useAnimationId-DJ17eyu2.js";import"./getRadiusAndStrokeWidthFromDot-BU75fsQJ.js";import"./graphicalItemSelectors-DzdAJcbD.js";import"./index-DOxosQgk.js";import"./ChartSizeDimensions-RFkmb5Zl.js";import"./OffsetShower-CjBekQlW.js";import"./PlotAreaShower-DwHvcBqq.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
