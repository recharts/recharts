import{R as e}from"./iframe-B_vrQl8R.js";import{R as c}from"./zIndexSlice-Cxwz8Tl-.js";import{C as d}from"./ComposedChart-yc7O9hvj.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ByHbZ6uT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dyk5owXH.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6qr9rM4_.js";import"./index-DskW-dUs.js";import"./index-HEwSZYID.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./axisSelectors-DWL2EjSK.js";import"./d3-scale-ByBkJlb2.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";import"./Layer-Gd_R9sAX.js";import"./AnimatedItems-CSL9mSPk.js";import"./Label-CvVA6TIG.js";import"./Text-DHNSM_o8.js";import"./DOMUtils-BvPkU0IV.js";import"./ZIndexLayer-DUE9jsMX.js";import"./useAnimationId-DAjnsWww.js";import"./ActivePoints-DphU-K4M.js";import"./Dot-D8Lfcwc2.js";import"./types-B9Larr1k.js";import"./RegisterGraphicalItemId-Be581UAk.js";import"./GraphicalItemClipPath-Bv2rP4gQ.js";import"./SetGraphicalItem-BqgYDJXb.js";import"./getRadiusAndStrokeWidthFromDot-BJX3V8Wn.js";import"./ActiveShapeUtils-a0kgZEBq.js";import"./Curve-4ICuXbwR.js";import"./step-Ct9Ha3sC.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BKPq2-mP.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
