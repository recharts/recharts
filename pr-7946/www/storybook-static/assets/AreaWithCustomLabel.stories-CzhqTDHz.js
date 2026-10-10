import{R as r}from"./iframe-CbPFwm7l.js";import{R as c}from"./zIndexSlice-cmGazbpI.js";import{C as d}from"./ComposedChart-sATzgU5r.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BGUnWwLo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CsRm63w_.js";import"./index-DZkyIfi6.js";import"./index-BZRRun-o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BXcdiDsW.js";import"./isWellBehavedNumber-UGMkNa04.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C9c4OR_j.js";import"./axisSelectors-31esebaG.js";import"./d3-scale-CHJf7NcK.js";import"./index-Cvmqex35.js";import"./index-khK7m-8Q.js";import"./renderedTicksSlice-Ctq_TXqh.js";import"./index-CKBSX-em.js";import"./CartesianChart-DOYPm28C.js";import"./chartDataContext-CEmuSid6.js";import"./CategoricalChart-Cz2-7e9E.js";import"./Layer-BHHNaIH9.js";import"./activeStyles-C0PrsAC0.js";import"./Label-Dd7y5kyu.js";import"./Text-BOjecne3.js";import"./pageBackground-5oAWQhvG.js";import"./useId-BiS2TkJk.js";import"./useBackwardsCompatibleTheme-DZ_BE-m7.js";import"./ZIndexLayer-DJZ-23nf.js";import"./useAnimationId-BoGopq3-.js";import"./dataEntryStyles-C9sHki_5.js";import"./ActivePoints-ED4u2pJ9.js";import"./Dot-D4Vk0xq6.js";import"./types-BHufKOgb.js";import"./GraphicalItemClipPath-c8upVCA0.js";import"./SetGraphicalItem-D94Ocgsk.js";import"./getRadiusAndStrokeWidthFromDot-DI6x_PKf.js";import"./ActiveShapeUtils-jfDQFPc2.js";import"./Curve-CJ_YkHWB.js";import"./step-BRl-9aNd.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CyHX6ZiQ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
