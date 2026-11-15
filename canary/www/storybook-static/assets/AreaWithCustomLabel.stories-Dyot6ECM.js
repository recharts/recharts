import{R as r}from"./iframe-pamQLAuY.js";import{R as c}from"./zIndexSlice-BlDUGc8d.js";import{C as d}from"./ComposedChart-D29eHQa-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BX13jX7u.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kiiYJYN_.js";import"./throttle-C_B1UjR8.js";import"./index-Cr46aqlt.js";import"./index-WeK6OXUT.js";import"./RechartsWrapper-ub_WEUz3.js";import"./axisSelectors-DKhGUp-k.js";import"./polarAxisSelectors-DoSBNlO9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eIG0jwTX.js";import"./index-m8mQ2_y4.js";import"./index-QF6L8m8x.js";import"./renderedTicksSlice-BaFBICsx.js";import"./index-Dkcp91gd.js";import"./fillDefinitions-BDZZPSU3.js";import"./CartesianChart-CH5OILiC.js";import"./chartDataContext-B156a3vg.js";import"./CategoricalChart-C57OyuNX.js";import"./Layer-Cm9mi55v.js";import"./dataEntryStyles-Cjt_fwSW.js";import"./Label-53Y237WA.js";import"./Text-CgAHMzD3.js";import"./ZIndexLayer-DY36flUP.js";import"./ActivePoints-D3TY6zpk.js";import"./Dot-Ocwx86Cy.js";import"./types-DIKPUmB7.js";import"./activeStyles-BKbfAIaZ.js";import"./useAnimationId-BGgwVpYD.js";import"./Symbols-BHovV0ds.js";import"./symbol-OE1C7JWw.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CAx5rLIN.js";import"./getRadiusAndStrokeWidthFromDot-C-R45OAI.js";import"./ActiveShapeUtils-CLFAkUa0.js";import"./Curve-CBzOhU6V.js";import"./step-BpEAsRCc.js";import"./useEffectiveDataKey-DQOO5VHk.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
