import{R as r}from"./iframe-C_yGAyrl.js";import{R as c}from"./zIndexSlice-BJ-JuQhh.js";import{C as d}from"./ComposedChart-CFLgoo8z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DchYIqh7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B8DgtWv7.js";import"./throttle-BAXAw3D6.js";import"./index-DrbolqVI.js";import"./index-ddpbYnm-.js";import"./RechartsWrapper-BSGXC4_F.js";import"./axisSelectors-5FYthY9Y.js";import"./polarAxisSelectors-ut8KXzAo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PQcr3dQu.js";import"./index-C36DrKNt.js";import"./index-RS1OPqlJ.js";import"./renderedTicksSlice-DkVAJH0_.js";import"./index-ClVDXgD6.js";import"./CartesianChart-CokpCbyl.js";import"./ZIndexPortal-BbHy9i_X.js";import"./CategoricalChart-vhidTTy9.js";import"./Layer-DRwTYvg4.js";import"./LabelList-o4uUgS5K.js";import"./Label-BnQGI-qv.js";import"./Text-DzacdUSY.js";import"./DOMUtils-DAgrf4y-.js";import"./ZIndexLayer-B7Tlmy9n.js";import"./ActivePoints-CjSi-VTr.js";import"./Dot-M2gDFPx3.js";import"./types-Cxyr58RE.js";import"./activeStyles-B0RsKEFJ.js";import"./useAnimationId-HAfaQzyp.js";import"./dataEntryStyles-DACXFNb8.js";import"./Symbols-Bbax-3ST.js";import"./symbol-CWSoe6BS.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-ByCBXbFB.js";import"./getRadiusAndStrokeWidthFromDot-COLPDuwt.js";import"./ActiveShapeUtils-CHVm68Z9.js";import"./Curve-B5j0Jet-.js";import"./step-DDESiMvu.js";import"./fillDefinitions-BmGKFoo3.js";import"./useEffectiveDataKey-DU6lMzAC.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
