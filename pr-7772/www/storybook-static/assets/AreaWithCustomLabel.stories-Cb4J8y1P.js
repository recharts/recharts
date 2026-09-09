import{R as r}from"./iframe-DOP-jAxw.js";import{R as c}from"./zIndexSlice-iZLT4mgM.js";import{C as d}from"./ComposedChart-Cja5a53J.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CVI1YTu3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7DQi97E.js";import"./index-CCuF4-CL.js";import"./index-zAmCVOdn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C42OrRbv.js";import"./isWellBehavedNumber-aeEmpyhq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Q1Jm5bKD.js";import"./axisSelectors-B_fxjvJU.js";import"./d3-scale-DzSw552P.js";import"./index-bWqnTni2.js";import"./index-DtoMVaOV.js";import"./renderedTicksSlice-CNec-Jhj.js";import"./index-D_24CIxZ.js";import"./CartesianChart-PeHZ3LWB.js";import"./chartDataContext-CuKpjHMI.js";import"./CategoricalChart-CByA_zEa.js";import"./Layer-CsLYPkNS.js";import"./AnimatedItems-D09OLiJi.js";import"./Label-BQxh1muY.js";import"./Text-BM4OLvWb.js";import"./DOMUtils-hJnM7D4i.js";import"./useId-DriqVEjQ.js";import"./useBackwardsCompatibleTheme-lpZr1fce.js";import"./ZIndexLayer-CERsRXD7.js";import"./useAnimationId-DvdWCYQm.js";import"./ActivePoints-BBWJLt59.js";import"./Dot-4jCuUfJZ.js";import"./types-Bd_t3tQp.js";import"./RegisterGraphicalItemId-a8qjrkCj.js";import"./GraphicalItemClipPath-BIJRZhz8.js";import"./SetGraphicalItem-BdxyruZp.js";import"./getRadiusAndStrokeWidthFromDot-1Y9AsD59.js";import"./ActiveShapeUtils-DE-7R1j_.js";import"./Curve-_tgXMq7w.js";import"./step-DlXDgVUU.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B60cO35L.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
