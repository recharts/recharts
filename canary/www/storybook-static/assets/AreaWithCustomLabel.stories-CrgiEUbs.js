import{R as r}from"./iframe-BpBItmb8.js";import{R as c}from"./zIndexSlice-Cjb21_4Z.js";import{C as d}from"./ComposedChart-Cz9o1ftP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Da1sF5_l.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cdo2rlHX.js";import"./index-CeEoeaxD.js";import"./index-BHZp9bX2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BIOpi0B9.js";import"./isWellBehavedNumber-Q3FqKNV7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaBorYia.js";import"./axisSelectors-DhTQuZeq.js";import"./d3-scale-B2krDzkw.js";import"./index-B9ogi8SM.js";import"./index-Do7_Vkj1.js";import"./renderedTicksSlice-BqaS8KpG.js";import"./index-C1AeM7Yu.js";import"./CartesianChart-DDWDYlWD.js";import"./chartDataContext-CgZ-KInW.js";import"./CategoricalChart-9xHNb1kz.js";import"./Layer-DJh0sOtA.js";import"./activeStyles-BpJuNb5z.js";import"./Label-D427CKrx.js";import"./Text-BsqzutiJ.js";import"./pageBackground-Dn3J6qJY.js";import"./useId-DaRO87cF.js";import"./useBackwardsCompatibleTheme-CZ-OPOyh.js";import"./ZIndexLayer-8Y_K5uPK.js";import"./dataEntryStyles-CqfS8fAi.js";import"./useAnimationId-B0lGZ7N8.js";import"./ActivePoints-DOY_2oPT.js";import"./Dot-DQOKyqZV.js";import"./types-Dpz8_0OY.js";import"./RegisterGraphicalItemId-CrKPJKPG.js";import"./SetGraphicalItem-CJwlJ3sC.js";import"./getRadiusAndStrokeWidthFromDot-BPVDV2Ck.js";import"./ActiveShapeUtils-BOsiS21F.js";import"./Curve-pkSnYbQi.js";import"./step-CWAoAVng.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-UghoeVMt.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
