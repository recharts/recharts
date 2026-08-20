import{R as r}from"./iframe-D9AiK7MA.js";import{R as c}from"./zIndexSlice-DhQQTweq.js";import{C as d}from"./ComposedChart-DRe_fBXL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DRwzbCc7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CqrKdGFn.js";import"./index-u8J4Prlj.js";import"./index-B_iylBpT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BrjTargu.js";import"./isWellBehavedNumber-NbAnwMd8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FkIEBIEk.js";import"./index-CBrmEfkl.js";import"./index-DhLn_wsy.js";import"./axisSelectors-CD31PgCw.js";import"./d3-scale-CwcWyPDB.js";import"./renderedTicksSlice-D9WbyrEd.js";import"./CartesianChart-BPglXXGd.js";import"./chartDataContext-DNFxmTn3.js";import"./CategoricalChart-BiDsY9G3.js";import"./Layer-nhRynhYN.js";import"./AnimatedItems-DbRJrrAP.js";import"./Label-DaTR-VJZ.js";import"./Text-C_gczTx7.js";import"./DOMUtils-C3E39plZ.js";import"./useId-CoGOq4Zh.js";import"./useBackwardsCompatibleTheme-D9vqIt6-.js";import"./ZIndexLayer-XiAaecg1.js";import"./useAnimationId-C-WCGbVo.js";import"./ActivePoints--lqdywIN.js";import"./Dot-CbHR5Oi7.js";import"./types-Cl8UDNBF.js";import"./RegisterGraphicalItemId-ihVYTcTs.js";import"./GraphicalItemClipPath-CE-RXk6S.js";import"./SetGraphicalItem-dm3-HqvX.js";import"./getRadiusAndStrokeWidthFromDot-CTRnAYuX.js";import"./ActiveShapeUtils-Cx_4S3nX.js";import"./Curve-wdmzEcHN.js";import"./step-DlhrK73A.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-ed7jlxwP.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
