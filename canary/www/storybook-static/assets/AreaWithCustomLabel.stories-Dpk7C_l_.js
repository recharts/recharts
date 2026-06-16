import{R as e}from"./iframe-Dsugo_zg.js";import{R as c}from"./zIndexSlice-CQ8Dq6Rw.js";import{C as d}from"./ComposedChart-Clv-J78V.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BoubCE7t.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dn_ZGj_2.js";import"./index-hfwoyc40.js";import"./index-BltQKr7J.js";import"./get-B4-DsMlp.js";import"./resolveDefaultProps-ByiopbeA.js";import"./isWellBehavedNumber-BXhYPRs7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3mVticM.js";import"./index-B1HEKGfm.js";import"./index-B6DCYcPU.js";import"./renderedTicksSlice-CsDLwy59.js";import"./axisSelectors-DuSkawJ1.js";import"./d3-scale-C9TIKeBC.js";import"./string-B6fdYHAA.js";import"./CartesianChart-UK3tQwAh.js";import"./chartDataContext-D_whFwD4.js";import"./CategoricalChart-FdwMdvH0.js";import"./Layer-PDKsNXXB.js";import"./AnimatedItems-BcVxVlvs.js";import"./Label-Dv0ON-tn.js";import"./Text-BrgPWmaV.js";import"./DOMUtils-Bp38L-kM.js";import"./ZIndexLayer-CosUoOTg.js";import"./useAnimationId-BEJfwvjz.js";import"./ActivePoints-B-oBY2kZ.js";import"./Dot-zHN_KyIs.js";import"./types-BdpIxXW8.js";import"./RegisterGraphicalItemId-VkMnq2n0.js";import"./GraphicalItemClipPath-DVeVc-Gk.js";import"./SetGraphicalItem-CiVD-7Sz.js";import"./getRadiusAndStrokeWidthFromDot-BuDs2Yv2.js";import"./ActiveShapeUtils-DQiBB_Ml.js";import"./Curve-ZHf_GWFM.js";import"./step-BaYniHaQ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CtWRHLh-.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
