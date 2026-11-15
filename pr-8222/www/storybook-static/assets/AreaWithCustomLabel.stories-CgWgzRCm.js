import{R as r}from"./iframe-Zh2ccugb.js";import{R as c}from"./zIndexSlice-DEmBd4ZB.js";import{C as d}from"./ComposedChart-Dd1MizuK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BNuyKLlo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fH52x6Wq.js";import"./throttle-B3lkaQcW.js";import"./index-DCPtMhny.js";import"./index-Bpm_0b-N.js";import"./RechartsWrapper-CwKOWqmW.js";import"./axisSelectors-CeETa2Oh.js";import"./polarAxisSelectors-ODY0eR4B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oTva27Ef.js";import"./index-BTZK7nKb.js";import"./index-WmNaFkcT.js";import"./renderedTicksSlice-DqNUbck1.js";import"./index-CMNAmNto.js";import"./fillDefinitions-CSMYcBHa.js";import"./CartesianChart-nM5gdBcu.js";import"./chartDataContext-CFkN0KVz.js";import"./CategoricalChart-DWn3sGtD.js";import"./Layer-C95YSbsg.js";import"./dataEntryStyles-BE_TnqZR.js";import"./Label-DiL3sO7Q.js";import"./Text-MWlHmKAn.js";import"./ZIndexLayer-Xr-T5Ltv.js";import"./ActivePoints-1_C8JWTD.js";import"./Dot-BIRUUIf4.js";import"./types-aszg7ufr.js";import"./activeStyles-D6kWvGgQ.js";import"./useAnimationId-CwFbYXoE.js";import"./Symbols-S44HEmao.js";import"./symbol-UAwU-psM.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Dg3wmm6w.js";import"./getRadiusAndStrokeWidthFromDot-B79813B8.js";import"./ActiveShapeUtils-wgF5Hj2i.js";import"./Curve-CyvbP0E9.js";import"./step-BGLmz3Kf.js";import"./useEffectiveDataKey-Ctjc01_U.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
