import{R as r}from"./iframe-BRuR_Aem.js";import{R as c}from"./zIndexSlice-Bj7VXWF6.js";import{C as d}from"./ComposedChart-BfbWwovc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-JdgODoFE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CB_4huk8.js";import"./throttle-Bze-tpN5.js";import"./index-Znq_MKKU.js";import"./index-S2_wvhlN.js";import"./RechartsWrapper-Bn4G8r7u.js";import"./axisSelectors-vJ_QG27E.js";import"./polarAxisSelectors-DF3qQGPW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D-1jLUlb.js";import"./index-EeleNYI7.js";import"./index-MJdD-hjQ.js";import"./renderedTicksSlice-CuUE0Rg9.js";import"./index-DsnM3Ye-.js";import"./fillDefinitions-Dqk7JYY7.js";import"./CartesianChart-DUDwKsIR.js";import"./chartDataContext-Mr4wo4TR.js";import"./CategoricalChart-COCgmgkq.js";import"./getRadiusAndStrokeWidthFromDot-COuDjPMk.js";import"./Layer-DH8vqzA_.js";import"./dataEntryStyles-D3durKHg.js";import"./Label-BRU8Jowp.js";import"./Text-DCSoJ6K5.js";import"./ZIndexLayer-BW9AtQ0o.js";import"./ActivePoints-DjHxL6MU.js";import"./Dot-BB75ixWu.js";import"./types-LyIymARE.js";import"./activeStyles-ddHtcBjm.js";import"./useAnimationId-CqnKfWIo.js";import"./Symbols-TJS8yyiq.js";import"./symbol-DRudrdJt.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-hKkfdUSl.js";import"./ActiveShapeUtils-ByuL4hdp.js";import"./Curve-2VjViydv.js";import"./step-DSV5xix0.js";import"./useEffectiveDataKey-CJ_E1q2F.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
