import{R as r}from"./iframe-N2_k56Bi.js";import{R as c}from"./zIndexSlice-C2n8MH5C.js";import{C as d}from"./ComposedChart-BNYP_tMQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DFLgXnZQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DqwpxfQ6.js";import"./throttle-wqOW3oZ2.js";import"./index-DW0bz290.js";import"./index-CE3twcP3.js";import"./RechartsWrapper-Dp1Mzfqy.js";import"./axisSelectors-CAEFlKfw.js";import"./polarAxisSelectors-BJLn-yPG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXPoqAuA.js";import"./index-BDOvrbcw.js";import"./index-C9ctZ6JT.js";import"./renderedTicksSlice-tTdjxG_s.js";import"./index-ByH8O9KC.js";import"./fillDefinitions-dJCuHQYF.js";import"./CartesianChart-CoYa15-4.js";import"./ZIndexPortal-C8tnP8Pm.js";import"./CategoricalChart-CrnXV7kh.js";import"./Layer-CJpZrgpd.js";import"./LabelList-CpgHxPqB.js";import"./Label-BtTjy9h1.js";import"./Text-CtPksR9D.js";import"./DOMUtils-DcUCUVaa.js";import"./ZIndexLayer-C9mVRhjd.js";import"./ActivePoints-DdYZUJkv.js";import"./Dot-D37s9B75.js";import"./types-DGUdIwXy.js";import"./activeStyles-CM4N_FMo.js";import"./useAnimationId-LBywhlWd.js";import"./dataEntryStyles-C-YlvJRH.js";import"./Symbols-jQ5nGruQ.js";import"./symbol-tKDu3Sq7.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CsZSO0ag.js";import"./getRadiusAndStrokeWidthFromDot-BENo0Gmv.js";import"./ActiveShapeUtils-CdIqoiTp.js";import"./Curve-DgWUxnsC.js";import"./step-DyI48c2G.js";import"./useEffectiveDataKey-D760KGHv.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
