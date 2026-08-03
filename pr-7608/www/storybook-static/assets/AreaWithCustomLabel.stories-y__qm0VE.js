import{R as e}from"./iframe-zGdozCQh.js";import{R as c}from"./zIndexSlice-CEf5y4wD.js";import{C as d}from"./ComposedChart-Dqdl2vPn.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Caw49n5i.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvYlmrcU.js";import"./index-Be9faTsQ.js";import"./index-BA1qNDAx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DGss-nCf.js";import"./isWellBehavedNumber-BpeZz3pN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-S6h0L_Sx.js";import"./index-Byuc73NK.js";import"./index-lgjWstKk.js";import"./renderedTicksSlice-BCsCwo08.js";import"./axisSelectors-BKjuK8lH.js";import"./d3-scale-MsmZCvzu.js";import"./CartesianChart-C5t9uLew.js";import"./chartDataContext-cAMS_PG1.js";import"./CategoricalChart-BpCZjXPz.js";import"./Layer-C16c9YM8.js";import"./AnimatedItems-jN_ADWTf.js";import"./Label-Cn4tQISS.js";import"./Text-BFD_FCb6.js";import"./DOMUtils-BJDR7s4v.js";import"./ZIndexLayer-BxlIB-HR.js";import"./useAnimationId-ZvRvsbh2.js";import"./ActivePoints-CAJ4vJY1.js";import"./Dot-D23X09CK.js";import"./types-D_e406XV.js";import"./RegisterGraphicalItemId-COPie9tE.js";import"./GraphicalItemClipPath-DyeI25HQ.js";import"./SetGraphicalItem-CU1gvNiL.js";import"./graphicalItemIdentity-CDiHfDkn.js";import"./ActiveShapeUtils-9hROMAJM.js";import"./Curve-4P44R3Ym.js";import"./step-B84DZizD.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-DKHHji-l.js";import"./graphicalItemSelectors-CR6pnhzD.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
