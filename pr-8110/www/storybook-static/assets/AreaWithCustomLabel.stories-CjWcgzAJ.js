import{R as r}from"./iframe-Diz1MxK0.js";import{R as c}from"./zIndexSlice-De03ARmf.js";import{C as d}from"./ComposedChart-OhuMczYf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D6mTK4ib.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXx0w5ol.js";import"./throttle-D6Fnchfm.js";import"./index-BRB5AgXV.js";import"./index-BLbVat5F.js";import"./RechartsWrapper-Dua8Yzn2.js";import"./axisSelectors-DSSqtEqI.js";import"./polarAxisSelectors-Bv8wAAst.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DzLjpFUT.js";import"./index-F_sHq6h9.js";import"./index-B9EOw7DU.js";import"./renderedTicksSlice-BDuqmjwG.js";import"./index-B5mD0-P8.js";import"./CartesianChart-DgKauYA5.js";import"./ZIndexPortal-DkIbXTbh.js";import"./CategoricalChart-BQk2mTyl.js";import"./Layer-Bs_jv2-i.js";import"./LabelList-UNOP6jku.js";import"./Label-BN-_qB9f.js";import"./Text-Cd2gwijp.js";import"./DOMUtils-CLoOggbb.js";import"./ZIndexLayer-DarFSaif.js";import"./ActivePoints-CsnFafYW.js";import"./Dot-BJelZ-T3.js";import"./types-DOhta01o.js";import"./activeStyles-DMKa5gXh.js";import"./useAnimationId-DrJNkikT.js";import"./dataEntryStyles-D0onuRNm.js";import"./Symbols-wvGU_BGG.js";import"./symbol-DdzwEmp4.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-R77n_H2E.js";import"./getRadiusAndStrokeWidthFromDot-CVdmuuRJ.js";import"./ActiveShapeUtils-lZsBLYLZ.js";import"./Curve-DjbP1tEr.js";import"./step-BTIR3rT6.js";import"./useEffectiveDataKey-CP6w9Jk7.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
