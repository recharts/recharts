import{R as r}from"./iframe-DloB-Tup.js";import{R as c}from"./zIndexSlice-DkoSoypq.js";import{C as d}from"./ComposedChart-gu5T_l93.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bd95ehuZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXiVg1qQ.js";import"./throttle-DHxiFtgA.js";import"./index-DV-zLmFt.js";import"./index-Bjn59J1w.js";import"./RechartsWrapper-C7KZ4AFC.js";import"./axisSelectors-5JufQAoG.js";import"./polarAxisSelectors-BA-2pRlP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cp_uhw02.js";import"./index-sAdADp0M.js";import"./index-BpHVs9OQ.js";import"./renderedTicksSlice-QBBzvaXk.js";import"./index-BpFDYg8A.js";import"./CartesianChart-juZJjY88.js";import"./ZIndexPortal-B99ywjs0.js";import"./CategoricalChart-BfiBF3Vo.js";import"./Layer-S6G7_nQD.js";import"./LabelList-B_3Vas12.js";import"./Label-BCZcSJT3.js";import"./Text-BM9EdhAp.js";import"./pageBackground-uaKlEO31.js";import"./ZIndexLayer-bWANmXVo.js";import"./dataEntryStyles-DO0_QeZe.js";import"./ActivePoints-Baun6K6R.js";import"./Dot-CiBIq_Wk.js";import"./types-BVm9IbXw.js";import"./activeStyles-B8TQJkxp.js";import"./useAnimationId-B4JCM27x.js";import"./Symbols-OqBqpZTo.js";import"./symbol-D_Qfgjrw.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-BdcH7fWn.js";import"./SetGraphicalItem-lsA-IuJf.js";import"./getRadiusAndStrokeWidthFromDot-ymvOuKSP.js";import"./ActiveShapeUtils-O1dlG29g.js";import"./Curve-Dw8-x6-u.js";import"./step-CNEatR3g.js";import"./useEffectiveDataKey-B7m-hO1Q.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
