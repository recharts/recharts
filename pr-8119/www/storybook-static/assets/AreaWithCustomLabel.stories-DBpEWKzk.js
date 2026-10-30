import{R as r}from"./iframe-D4SWC0C9.js";import{R as c}from"./zIndexSlice-DtLu2rz0.js";import{C as d}from"./ComposedChart-CixY_uah.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BRL7b50-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuPg7ygH.js";import"./throttle-i1uEXwfS.js";import"./index-o5eRcHSQ.js";import"./index-Bm9m5_PU.js";import"./RechartsWrapper-B-nLjLBG.js";import"./axisSelectors-D7bj-nZi.js";import"./polarAxisSelectors-5Is9yWXM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CqqO4xMX.js";import"./index-BzqOahcD.js";import"./index-BdcBqhlp.js";import"./renderedTicksSlice-BWlvISfj.js";import"./index-BOyzEbCc.js";import"./CartesianChart-D2bJStRT.js";import"./ZIndexPortal-Dz8Csonx.js";import"./CategoricalChart-Cyf0p9sz.js";import"./Layer--YLSv_ie.js";import"./LabelList-D_z7ECQv.js";import"./Label-B4GKK3W-.js";import"./Text-K3oqQ0qr.js";import"./DOMUtils-_TTo3kuP.js";import"./ZIndexLayer-DpB3cuZ0.js";import"./ActivePoints-D3cp_ck3.js";import"./Dot-fLjTiyXC.js";import"./types-BULmlw12.js";import"./activeStyles-DGXStsvL.js";import"./useAnimationId-DKXEwRJj.js";import"./dataEntryStyles-Df562HAt.js";import"./Symbols-mjJ7TtB9.js";import"./symbol-IW8UYWs4.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CmNEMHt3.js";import"./getRadiusAndStrokeWidthFromDot-DOd7rr-G.js";import"./ActiveShapeUtils-CKN1RXI0.js";import"./Curve-CLAbzDX3.js";import"./step-DJAY54DS.js";import"./useEffectiveDataKey-B-O25Qiu.js";import"./themeFill-BkM1x4hA.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
