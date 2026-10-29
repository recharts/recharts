import{R as r}from"./iframe-CA9m8GYo.js";import{R as c}from"./zIndexSlice-DtH5keZE.js";import{C as d}from"./ComposedChart-Cxv2A6YY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-99hUKxBD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CyX6DFN8.js";import"./throttle-o0TVEzLp.js";import"./index-CErELZnL.js";import"./index-BmamNDCv.js";import"./RechartsWrapper-PB4GMrwR.js";import"./axisSelectors-BayOnfvg.js";import"./polarAxisSelectors-C9u8TkQ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C2dTdr93.js";import"./index-CqNMjBNA.js";import"./index-B2booWlS.js";import"./renderedTicksSlice-CIfh4CCk.js";import"./index-AvPiQd-I.js";import"./CartesianChart-BMo55UJv.js";import"./ZIndexPortal-CP5nbT1n.js";import"./CategoricalChart-CxzHbLbb.js";import"./Layer-Hxk-5S8n.js";import"./LabelList-CV5x_Azz.js";import"./Label-ekuzQLiz.js";import"./Text-BFxpfCQD.js";import"./pageBackground-O7JuB7S_.js";import"./ZIndexLayer-DnamAcTi.js";import"./ActivePoints-CEzGZ3l_.js";import"./Dot-CmRgS_7G.js";import"./types-Cvx_7iJj.js";import"./activeStyles-PpyfPCVq.js";import"./useAnimationId-CvualzzB.js";import"./dataEntryStyles-XE7WR2iA.js";import"./Symbols-BokwsXNu.js";import"./symbol-DmvnuhBw.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C9x_j8Aw.js";import"./getRadiusAndStrokeWidthFromDot-CYDrKKi3.js";import"./ActiveShapeUtils-DBAVXS8z.js";import"./Curve-DZjiB-zR.js";import"./step-DF34UguZ.js";import"./useEffectiveDataKey-VJMj_VC4.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
