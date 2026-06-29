import{R as e}from"./iframe-C8BOwi09.js";import{R as c}from"./zIndexSlice-BhlUeiz9.js";import{C as d}from"./ComposedChart-BOY6dDEf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D5idxNVS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKEMBEBf.js";import"./index-C1vV4PmY.js";import"./index-B-s74sFu.js";import"./get-Cxci_11r.js";import"./resolveDefaultProps-SXD4-6tw.js";import"./isWellBehavedNumber-lzhpgNRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-A-Jl6gDU.js";import"./index-CXTehsJH.js";import"./index-TdmA2U4u.js";import"./renderedTicksSlice-LkhfGRkv.js";import"./axisSelectors--BiFDCId.js";import"./d3-scale-Aru4SClR.js";import"./CartesianChart-CPjCvOHT.js";import"./chartDataContext-C3Wv6QtC.js";import"./CategoricalChart-qjM85PCb.js";import"./Layer--iJ-Hj_L.js";import"./AnimatedItems-DJI9G60d.js";import"./Label-D4SfTv0v.js";import"./Text-DAXgjhqJ.js";import"./DOMUtils-Bk8mghFc.js";import"./ZIndexLayer-CKEhnbZx.js";import"./useAnimationId-C1RCoeBd.js";import"./ActivePoints-BCpRhB6w.js";import"./Dot-Czqb6tax.js";import"./types-BPAGzNH6.js";import"./RegisterGraphicalItemId-D2rzI2r-.js";import"./GraphicalItemClipPath-DQUZZg6C.js";import"./SetGraphicalItem-544HumqF.js";import"./getRadiusAndStrokeWidthFromDot-Bhp0VpHF.js";import"./ActiveShapeUtils-DN8fg87N.js";import"./Curve-CCSLWrMV.js";import"./step-CUCFWzj3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bizb05lq.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
