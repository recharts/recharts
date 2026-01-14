import{e as t}from"./iframe-DYFx2r-j.js";import{R as c}from"./arrayEqualityCheck-DCVaqN9G.js";import{C as d}from"./ComposedChart-BDMAP_Xz.js";import{A as l}from"./Area-DZRHfYUS.js";import{R as h}from"./RechartsHookInspector-8HiD6XU_.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTmxXdy3.js";import"./PolarUtils-C1zbAlbA.js";import"./RechartsWrapper-C83nyDwr.js";import"./hooks-DjCJ821w.js";import"./axisSelectors-CNJps_KV.js";import"./zIndexSlice-CSYHepNq.js";import"./CartesianChart-CZCpz_Bc.js";import"./chartDataContext-BcNxXqiP.js";import"./CategoricalChart-D0ijd2iH.js";import"./Curve-7IBZZol0.js";import"./types-Cik9NZHM.js";import"./Layer-BC3vDM2H.js";import"./ReactUtils-B5hh0nCE.js";import"./Label-DjuisPzU.js";import"./Text-CehOywt1.js";import"./DOMUtils-dzsDioow.js";import"./ZIndexLayer-CCFXe3ig.js";import"./ActivePoints-D9sD73LE.js";import"./Dot-Bp4mtK_T.js";import"./RegisterGraphicalItemId-CuPr_ukv.js";import"./GraphicalItemClipPath-CYj9KQXB.js";import"./SetGraphicalItem-BLQ-q15z.js";import"./useAnimationId-xTCLSGwz.js";import"./getRadiusAndStrokeWidthFromDot-CdsImqpX.js";import"./graphicalItemSelectors-hED77aIZ.js";import"./index-BqI5oxI8.js";import"./ChartSizeDimensions-CyZcFbe9.js";import"./OffsetShower-D26sUntH.js";import"./PlotAreaShower--zaCCVLK.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
