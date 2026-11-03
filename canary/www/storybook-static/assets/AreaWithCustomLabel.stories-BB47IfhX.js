import{R as r}from"./iframe-Dveh6XC4.js";import{R as c}from"./zIndexSlice-CHGKLvUt.js";import{C as d}from"./ComposedChart-BOsUMJ6o.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CC8tXwSA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuxVF1QF.js";import"./throttle-CRxbwEvt.js";import"./index-Cbmt_wIf.js";import"./index-CG-oseCj.js";import"./RechartsWrapper-BjJrVVo_.js";import"./axisSelectors-BNJiRWtc.js";import"./polarAxisSelectors-DOXrMTYm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XJHyjNta.js";import"./index-BC5sf_5c.js";import"./index-uMZJip00.js";import"./renderedTicksSlice-Cw-0pUCw.js";import"./index-Fu0XORfS.js";import"./fillDefinitions-BC_l7gtK.js";import"./CartesianChart-DPPEX1sp.js";import"./ZIndexPortal-yJs_hgSa.js";import"./CategoricalChart-BBllviTF.js";import"./Layer-BJKthE-c.js";import"./LabelList-C0azlQgx.js";import"./Label-Vwsx_sp3.js";import"./Text-DDi8tnpk.js";import"./DOMUtils-BsJwiviE.js";import"./ZIndexLayer-DbxRiqCY.js";import"./ActivePoints-B26bJhxw.js";import"./Dot-BnEEmk8R.js";import"./types-XJ7-EVuf.js";import"./activeStyles-C0UNB_bG.js";import"./useAnimationId-ClkvXH7X.js";import"./dataEntryStyles-CX9qr7B-.js";import"./Symbols-QXbi9vzZ.js";import"./symbol-CTWslb94.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-B2n4iSWY.js";import"./getRadiusAndStrokeWidthFromDot-BzBtfZmi.js";import"./ActiveShapeUtils-CXVbuCLN.js";import"./Curve-BFn8Gc1Y.js";import"./step-COK9gonL.js";import"./useEffectiveDataKey-CghzYeW7.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
