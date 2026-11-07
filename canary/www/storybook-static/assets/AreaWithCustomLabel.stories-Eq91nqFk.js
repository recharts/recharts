import{R as r}from"./iframe-CAwz8uN7.js";import{R as c}from"./zIndexSlice-TMbeSoaw.js";import{C as d}from"./ComposedChart-DEKm5Gk_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BHfNjzsa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DMIb7SBs.js";import"./throttle-DghoigHv.js";import"./index-DgXSxR_f.js";import"./index-Bzw5OmaH.js";import"./RechartsWrapper-Dxg_wm9v.js";import"./axisSelectors-CpwbL3Oz.js";import"./polarAxisSelectors-Cc_qYj6o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CIIJy1t9.js";import"./index-Bn6lI9jh.js";import"./index-DXtXm7rl.js";import"./renderedTicksSlice-GqHDAcQt.js";import"./index-D4t20APB.js";import"./fillDefinitions-CB-_Qdnq.js";import"./CartesianChart-Cfm778D2.js";import"./chartDataContext-BqdYE3y4.js";import"./CategoricalChart-BV8BHimy.js";import"./Layer-LEH2Le6G.js";import"./dataEntryStyles-BvT9zs0X.js";import"./Label-CdS579rS.js";import"./Text-B8IGolEi.js";import"./ZIndexLayer-BXCDLr1d.js";import"./ActivePoints-CVXTLllc.js";import"./Dot-CLdEzait.js";import"./types-BWdHpl7S.js";import"./activeStyles-WxNZ0DKg.js";import"./useAnimationId-p8KP1za0.js";import"./Symbols-B_L6SHWg.js";import"./symbol-EvKS_tYy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BpveB_1U.js";import"./getRadiusAndStrokeWidthFromDot-E1a8C94b.js";import"./ActiveShapeUtils-CWtt7knh.js";import"./Curve-S9C-Z9CI.js";import"./step-D__pRIvp.js";import"./useEffectiveDataKey-DBkqmySO.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
