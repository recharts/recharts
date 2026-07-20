import{R as e}from"./iframe-DSiB0Y2h.js";import{R as c}from"./zIndexSlice-DXbXK2p0.js";import{C as d}from"./ComposedChart-VI9g2q1H.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D8ug5883.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B3UghvKT.js";import"./index-N88jlccS.js";import"./index-BxYFwyjs.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-dV1CHodA.js";import"./isWellBehavedNumber-CZNGJ9iq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CKOYxrgU.js";import"./index-DX0fo1e7.js";import"./index-BwXkalY4.js";import"./renderedTicksSlice-BPUsumAR.js";import"./axisSelectors-m-5JnBq3.js";import"./d3-scale-DOzMXTTX.js";import"./CartesianChart-BjQVh-35.js";import"./chartDataContext-DRuezjZY.js";import"./CategoricalChart-GJIpj0Il.js";import"./Layer-GefPfHKN.js";import"./AnimatedItems-DcXITJ0o.js";import"./Label-SBQmZETs.js";import"./Text-CK2osH-3.js";import"./DOMUtils-DPI9rQIs.js";import"./ZIndexLayer-DpR0ZeoC.js";import"./useAnimationId-CcRzR4wj.js";import"./ActivePoints-B6ujEarC.js";import"./Dot-h09Lg4V6.js";import"./types-Ctc34oVc.js";import"./RegisterGraphicalItemId-ZES9vfqK.js";import"./GraphicalItemClipPath-CUbr_GNl.js";import"./SetGraphicalItem-CMw9Vzf1.js";import"./getRadiusAndStrokeWidthFromDot-D73h4AtU.js";import"./ActiveShapeUtils-BbSbze6M.js";import"./Curve-CSkrO1uF.js";import"./step-D7_MEDCW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-T8-ppBBu.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
