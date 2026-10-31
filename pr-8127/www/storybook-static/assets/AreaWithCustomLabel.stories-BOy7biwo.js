import{R as r}from"./iframe-l1Y42C0u.js";import{R as c}from"./zIndexSlice-B33nqsCb.js";import{C as d}from"./ComposedChart-0uZutU6k.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-8cEMqoxK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-1jZi99P0.js";import"./throttle-DAyvkz9h.js";import"./index-DIs184pY.js";import"./index-Cqq6zn6Z.js";import"./RechartsWrapper-DOuMjlQh.js";import"./axisSelectors-D7HUEi6M.js";import"./polarAxisSelectors-BQIs9A7o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5Y8SIz5.js";import"./index-Bn03Joy2.js";import"./index-BwfxQem6.js";import"./renderedTicksSlice-D6aSCZ50.js";import"./index-BL-lBVJK.js";import"./CartesianChart-DP0lCfag.js";import"./ZIndexPortal-DmDlsnpL.js";import"./CategoricalChart-CsG2T3-z.js";import"./Layer-euAv7Vlw.js";import"./LabelList-CqnzZffr.js";import"./Label-sWz5CiLk.js";import"./Text-B6K4_AwF.js";import"./DOMUtils-D4PcHABk.js";import"./ZIndexLayer-DxyEEQXG.js";import"./ActivePoints-C9qJ4yHK.js";import"./Dot-CvycDJmI.js";import"./types-CrZHDfLN.js";import"./activeStyles-De0IjX-U.js";import"./useAnimationId-Df3Y-xS6.js";import"./dataEntryStyles-D_KE_N47.js";import"./fillDefinitions-AHxQevDT.js";import"./themeFill-DQcF-Fqd.js";import"./Symbols-CQXeMdB_.js";import"./symbol-K2q-awoK.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Do2v7-d1.js";import"./getRadiusAndStrokeWidthFromDot-DDaIFX1-.js";import"./ActiveShapeUtils-CSx2HuI1.js";import"./Curve-B3MncDoj.js";import"./step-Be4HSYh6.js";import"./useEffectiveDataKey-Dv99CamK.js";const st={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},nt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,nt as __namedExportsOrder,st as default};
