import{R as e}from"./iframe-BieQWE3D.js";import{R as c}from"./zIndexSlice-BYxygo-S.js";import{C as d}from"./ComposedChart-NGCBYeb_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Db0TqEVQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C6pqxX0n.js";import"./index-DS0rELK-.js";import"./index-CiDtTrDL.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-0J6uDFJb.js";import"./isWellBehavedNumber-By2uQy27.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQPdhE90.js";import"./index-BK9-NO1n.js";import"./index-D3zDokgn.js";import"./renderedTicksSlice-BWxb2yva.js";import"./axisSelectors-CKN_GV_q.js";import"./d3-scale-Sw7i2UsL.js";import"./CartesianChart-D6JA1RXb.js";import"./chartDataContext-DiNSnyrd.js";import"./CategoricalChart-BTFUnlUn.js";import"./Layer-NUCJMvF3.js";import"./AnimatedItems-fhCf9-7A.js";import"./Label-D0PWYGmJ.js";import"./Text-DkEmFVu0.js";import"./DOMUtils-B828G3hP.js";import"./ZIndexLayer-BHodRoAu.js";import"./useAnimationId-3OlCfqca.js";import"./ActivePoints-DO-UWoAa.js";import"./Dot-80pmkl_3.js";import"./types-CIzADBdv.js";import"./RegisterGraphicalItemId-DxgNfXcN.js";import"./GraphicalItemClipPath-O6SSxJbU.js";import"./SetGraphicalItem-ucOefQZ-.js";import"./getRadiusAndStrokeWidthFromDot-BzkGhJ7K.js";import"./ActiveShapeUtils-CZK7c2Ij.js";import"./Curve-SVdp-0Yk.js";import"./step-DHAVsB3S.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CY30Tz3v.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
