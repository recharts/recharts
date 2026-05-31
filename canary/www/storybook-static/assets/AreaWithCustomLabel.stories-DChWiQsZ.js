import{c as e}from"./iframe-fo49l_7F.js";import{g as c}from"./zIndexSlice-DRP-3MQ6.js";import{C as d}from"./ComposedChart-BGsB6qPQ.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-Ce_szkwB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cnd_vM0p.js";import"./index-Cq9JpdB2.js";import"./index-LHlEkonc.js";import"./get-BUAOm5zY.js";import"./resolveDefaultProps-CVMfvQ41.js";import"./isWellBehavedNumber-B0btAC56.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNEpPwFB.js";import"./index-3vxLE14G.js";import"./index-Dnm6qrQS.js";import"./renderedTicksSlice-DvOi1XF2.js";import"./axisSelectors-DA_mvJaq.js";import"./d3-scale-qag23egh.js";import"./CartesianChart-C_VrjQWn.js";import"./chartDataContext-DeCM2GRR.js";import"./CategoricalChart-Di0rvdap.js";import"./Curve-C8R-he6_.js";import"./types-Bblnl65_.js";import"./step-D7HygetQ.js";import"./path-DyVhHtw_.js";import"./Layer-Cshlv-Qa.js";import"./ReactUtils-Bb0TLcRV.js";import"./Label-B622NV2p.js";import"./Text-BTD0u6_t.js";import"./DOMUtils-7oUYJi4I.js";import"./ZIndexLayer-D6UFvHMF.js";import"./ActivePoints-Dt3Cg6Px.js";import"./Dot-C2AIzy-O.js";import"./RegisterGraphicalItemId-zZVZ96Iy.js";import"./GraphicalItemClipPath-qLKfObJe.js";import"./SetGraphicalItem-BMqVgIbs.js";import"./useAnimationId-AS8JtY64.js";import"./getRadiusAndStrokeWidthFromDot-BviS3R6P.js";import"./graphicalItemSelectors-D7c0zymu.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
