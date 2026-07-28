import{R as e}from"./iframe-DuK0Qil1.js";import{R as c}from"./zIndexSlice-CDnfQqmd.js";import{C as d}from"./ComposedChart-CoDAatDa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BaPhLDe8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DSTeDcIR.js";import"./index-tfefZ_nO.js";import"./index-CKpzsMgh.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-oCmlrVLK.js";import"./isWellBehavedNumber-DX_vizwS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DniM3uOm.js";import"./index-DwA8b1Ou.js";import"./index-DhoW-uSW.js";import"./renderedTicksSlice-CSJ2A-w6.js";import"./axisSelectors-_6NgKNdR.js";import"./d3-scale-DuTdgHoH.js";import"./CartesianChart-BQw3D51-.js";import"./chartDataContext-CfvZMLTP.js";import"./CategoricalChart-D9Svi6qf.js";import"./Layer-DkfKlAwf.js";import"./AnimatedItems-CBhdDdvc.js";import"./Label-BVUrQ6r5.js";import"./Text-D4DIOP-8.js";import"./DOMUtils-n5aJojsY.js";import"./ZIndexLayer-BaKptJ0d.js";import"./useAnimationId-nnglBd7S.js";import"./ActivePoints-Dq5H8yZY.js";import"./Dot-C7D6mqds.js";import"./types-Ch2-4RAi.js";import"./RegisterGraphicalItemId-BqmtVyAz.js";import"./GraphicalItemClipPath-BN5jaNNE.js";import"./SetGraphicalItem-D4hSZyvD.js";import"./getRadiusAndStrokeWidthFromDot-DcB-LW-j.js";import"./ActiveShapeUtils-B7fe-RtC.js";import"./Curve-CAqM1U-K.js";import"./step-BW4Xq2ef.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D9CHw2Gm.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
