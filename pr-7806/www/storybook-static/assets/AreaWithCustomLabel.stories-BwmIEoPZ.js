import{R as r}from"./iframe-DMwBeJR9.js";import{R as c}from"./zIndexSlice-BP1SI4lk.js";import{C as d}from"./ComposedChart-C1dXdi20.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DXr7bFWr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JhdtWwel.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQf4ekbV.js";import"./axisSelectors-BzRm_10h.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./index-KvfSCZEN.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./Layer-DMhp_Srr.js";import"./AnimatedItems-H6knMzOg.js";import"./Label-B67df_fL.js";import"./Text-BAFoSTNm.js";import"./DOMUtils-DtiMQzYq.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./ZIndexLayer-CFNoJ68M.js";import"./useAnimationId-1Z-BMfjp.js";import"./ActivePoints-BaKtG9_T.js";import"./Dot-CC7p1g3t.js";import"./types-CMazcurm.js";import"./RegisterGraphicalItemId-D2Rdl-pC.js";import"./GraphicalItemClipPath-DH2vwsgS.js";import"./SetGraphicalItem-BmbkJBqp.js";import"./getRadiusAndStrokeWidthFromDot-MjPGd6X0.js";import"./ActiveShapeUtils-D9qWvVvy.js";import"./Curve-BLRaA_Xy.js";import"./step-DujtKqi5.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-1ETpT5kl.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
