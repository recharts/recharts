import{R as r}from"./iframe-EeI-1j8u.js";import{R as c}from"./zIndexSlice-DHZxeEos.js";import{C as d}from"./ComposedChart-pRvTQeS0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D8FCbo8s.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-nYBnVSVd.js";import"./throttle-CXPRMSpL.js";import"./index-pgwVXRJO.js";import"./index-jJDdBZp4.js";import"./RechartsWrapper-BS1aWGo0.js";import"./axisSelectors-Cv1-8nVO.js";import"./polarAxisSelectors-D7djmlhq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DCtxOwfO.js";import"./index-BylysGcb.js";import"./index-BCOZ7QjH.js";import"./renderedTicksSlice-Y-CkzfGU.js";import"./index-DKT02nAj.js";import"./CartesianChart-e1TnBbHn.js";import"./ZIndexPortal-pivMB2CQ.js";import"./CategoricalChart-BQ46uFlP.js";import"./Layer-U6GYHWx5.js";import"./LabelList-D0m07rKR.js";import"./Label-BhnhNpXu.js";import"./Text-BY4Mp6iu.js";import"./DOMUtils-CO7WypWi.js";import"./ZIndexLayer-D_EbKSUX.js";import"./ActivePoints-BbQX7U_s.js";import"./Dot-LqOCFWRI.js";import"./types-DqUdmTjU.js";import"./activeStyles-T-Ne1kjI.js";import"./useAnimationId-CIis84-o.js";import"./dataEntryStyles-RarJtqD3.js";import"./Symbols-CDnC4YnR.js";import"./symbol-DRSGvgE-.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DIh7Z4HQ.js";import"./getRadiusAndStrokeWidthFromDot-C5z_N8Pp.js";import"./ActiveShapeUtils-B2Xd3mgO.js";import"./Curve-CyFTZwtt.js";import"./step-DC-9QXp9.js";import"./useEffectiveDataKey-Ce4gQ9XU.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
