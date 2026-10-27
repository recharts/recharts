import{R as r}from"./iframe-0XL0sthS.js";import{R as c}from"./zIndexSlice-C9Fui9SZ.js";import{C as d}from"./ComposedChart-Deu_CMYg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BxuKmtae.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B2CF9oTN.js";import"./throttle-Dos2q2R1.js";import"./index-DegwUHs-.js";import"./index-gHC2byd2.js";import"./RechartsWrapper-B-mX6d9D.js";import"./axisSelectors-CET1BM1x.js";import"./polarAxisSelectors-CMX_6MDU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8BAYDAt.js";import"./index-CNFugj9o.js";import"./index-B0PFYJY5.js";import"./renderedTicksSlice-DlFk7AA9.js";import"./index-BMiqWoCM.js";import"./CartesianChart-z2XN6mAy.js";import"./ZIndexPortal-B05UBlZu.js";import"./CategoricalChart-Dgl45H07.js";import"./Layer-3mPd111u.js";import"./LabelList-Bxms0g1E.js";import"./Label-CuZoViK1.js";import"./Text-B44V9o4J.js";import"./pageBackground-_xbcj9Xx.js";import"./ZIndexLayer--QQjyIzp.js";import"./dataEntryStyles-jYd5_Tui.js";import"./ActivePoints-jtZNkg-Y.js";import"./Dot-BnJWJFTm.js";import"./types-B6SF8UCq.js";import"./activeStyles-DtmDpwwD.js";import"./useAnimationId-RVbaj9rd.js";import"./Symbols-Xvp_CByj.js";import"./symbol-BTMAekB6.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-B0SAEIM0.js";import"./SetGraphicalItem-CYypWh5i.js";import"./getRadiusAndStrokeWidthFromDot-BMKT-chW.js";import"./ActiveShapeUtils-_BjD4go-.js";import"./Curve-B4Yxq0yJ.js";import"./step-BGDQTRvK.js";import"./useEffectiveDataKey-OloeJtRb.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
