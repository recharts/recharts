import{R as r}from"./iframe-CUvNAvus.js";import{R as c}from"./zIndexSlice-D-rH8vD1.js";import{C as d}from"./ComposedChart-CpK6zK-b.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BiL6H6EW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-3SUBoYwM.js";import"./throttle-CYllgfiW.js";import"./index-Cp_pTOca.js";import"./index-CAWn2Z9i.js";import"./RechartsWrapper-BjljmlV4.js";import"./axisSelectors-Xjgkf-2T.js";import"./polarAxisSelectors-B2l_kUqX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CA_D1sKG.js";import"./index-BMOBZiEl.js";import"./index-58JkOBJX.js";import"./renderedTicksSlice-A7Y2iS9L.js";import"./index-BkH-1jYD.js";import"./fillDefinitions-Dr0Z3ytP.js";import"./CartesianChart-cFWvwfAO.js";import"./chartDataContext-CYuQBQZt.js";import"./CategoricalChart-BW_ZnICB.js";import"./getRadiusAndStrokeWidthFromDot-BfiOw2M0.js";import"./Layer-CoFmyLu_.js";import"./dataEntryStyles-C_QXXqcb.js";import"./Label-B7OEZM_6.js";import"./Text-BRc4p81h.js";import"./ZIndexLayer-CPI_Yi1m.js";import"./ActivePoints-d-D6hIRO.js";import"./Dot-Dg1tnWhx.js";import"./types-CsWgfhSt.js";import"./activeStyles-DPihfCdA.js";import"./useAnimationId-BneLXqad.js";import"./Symbols-CmJ419_u.js";import"./symbol-CLRUs3HG.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-DRGWCaTd.js";import"./ActiveShapeUtils-Davo8QQp.js";import"./Curve-C_xw8Bh0.js";import"./step-DRuHJRtS.js";import"./useEffectiveDataKey-BAjzW2qT.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
