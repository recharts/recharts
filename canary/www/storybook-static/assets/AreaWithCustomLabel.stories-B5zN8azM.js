import{R as r}from"./iframe-DUAuhaDC.js";import{R as c}from"./zIndexSlice-CUoIUvAK.js";import{C as d}from"./ComposedChart-veB2s4XE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BIMMntrp.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./throttle-C34y-YGF.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./RechartsWrapper-C2YARZjw.js";import"./axisSelectors-DKypf8DU.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BzOzklff.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./getRadiusAndStrokeWidthFromDot-D_0qwyd0.js";import"./Layer-CfAsTpPf.js";import"./dataEntryStyles-ChkH59oB.js";import"./Label-BlZKxSKy.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./ActivePoints-V66Ltvnp.js";import"./Dot-BAVTGvfE.js";import"./types-BR7AAoV4.js";import"./activeStyles-joM0AtO_.js";import"./useAnimationId-B4mDEWzj.js";import"./Symbols-dKtAvw89.js";import"./symbol-L0CgFuJm.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Oey6ebQm.js";import"./ActiveShapeUtils-B0DXFowQ.js";import"./Curve-DZ4xVtop.js";import"./step-C7gBnBWw.js";import"./useEffectiveDataKey-CqgqLaRX.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
