import{R as e}from"./iframe-DktoyP0I.js";import{R as c}from"./zIndexSlice-BqxjHKrS.js";import{C as d}from"./ComposedChart-BDFJsZWU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area--Mcf5Ugz.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-yOjEFYCA.js";import"./index-Be24bbvM.js";import"./index-BFyGHYnF.js";import"./get-DZQ4X22M.js";import"./resolveDefaultProps-Bs_-cxps.js";import"./isWellBehavedNumber-D7-lB0Sk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C48Z7D7H.js";import"./index-CjF-Q638.js";import"./index-B91yukul.js";import"./renderedTicksSlice-Cd_bo-5U.js";import"./axisSelectors-C830vntb.js";import"./d3-scale-BMKK7LPO.js";import"./CartesianChart-cbrKpDvd.js";import"./chartDataContext-BtRoA9Zg.js";import"./CategoricalChart-DGVvOUvV.js";import"./Layer-DxVIdqTA.js";import"./AnimatedItems-cIeOyNA6.js";import"./Label-BR89T_1_.js";import"./Text-DAKApr79.js";import"./DOMUtils-JSCS2paE.js";import"./ZIndexLayer-CSsqT-BM.js";import"./useAnimationId-Dyo3RN72.js";import"./ActivePoints-DwkLjVpS.js";import"./Dot-C1QvqJ8t.js";import"./types-CkRwSSe-.js";import"./RegisterGraphicalItemId-B1XaVUU9.js";import"./GraphicalItemClipPath-DYdMpFC-.js";import"./SetGraphicalItem-BCAQvLzI.js";import"./getRadiusAndStrokeWidthFromDot-ByATIymF.js";import"./ActiveShapeUtils-BN2Pn2NB.js";import"./Curve-BuI6DO-B.js";import"./step-8xNYZUMK.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-F-CLsjSh.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
