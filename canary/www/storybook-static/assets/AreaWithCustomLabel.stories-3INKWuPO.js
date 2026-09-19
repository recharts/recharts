import{R as r}from"./iframe-RJgsiaPL.js";import{R as c}from"./zIndexSlice-CaPb3BS1.js";import{C as d}from"./ComposedChart-De4rYWqF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DXxPyYVD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-2XjV57Y3.js";import"./index-CUt9-oqi.js";import"./index-CYBMXNtj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7TAC97Z.js";import"./isWellBehavedNumber-BCdm_Taf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-rp6dEN_z.js";import"./axisSelectors-BvLTD4U6.js";import"./d3-scale-a8xW28JY.js";import"./index-DvWZFtCS.js";import"./index-Bde12l31.js";import"./renderedTicksSlice-AZZMQyv9.js";import"./index-CETpxp5N.js";import"./CartesianChart-DJVuJ2_B.js";import"./chartDataContext-DMrvaJTD.js";import"./CategoricalChart-BIS8XmXt.js";import"./Layer-CDx7YXT6.js";import"./AnimatedItems-Ct76uSB6.js";import"./Label-DPnPk4i3.js";import"./Text-DZ5ZEdji.js";import"./DOMUtils-BwBerndY.js";import"./useId-D3absDYU.js";import"./useBackwardsCompatibleTheme-DcNVN6Kh.js";import"./ZIndexLayer-BoWVhfOi.js";import"./useAnimationId-DsRwG-rm.js";import"./ActivePoints-B4kNxET0.js";import"./Dot-RwYGEtPS.js";import"./types-C_mapbFf.js";import"./RegisterGraphicalItemId-CnzhIxcb.js";import"./GraphicalItemClipPath-BmrXFZmB.js";import"./SetGraphicalItem-D4Kx71sv.js";import"./getRadiusAndStrokeWidthFromDot-BnbceeR1.js";import"./ActiveShapeUtils-BQ-YCn0D.js";import"./Curve-CFCl1kCW.js";import"./step-K1SJUhGX.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BL8Yfc_I.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
