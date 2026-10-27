import{R as r}from"./iframe-BKOly897.js";import{R as c}from"./zIndexSlice-MuW0IoWE.js";import{C as d}from"./ComposedChart-DNIn-1lF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B-PxPQ38.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DBtmfAg5.js";import"./throttle-Dj0bMbq4.js";import"./index-Bgsd-oxC.js";import"./index-CcRpQNf3.js";import"./RechartsWrapper-BR-O-n81.js";import"./axisSelectors-DAovfJtb.js";import"./polarAxisSelectors-Dd8oI3jG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FWOlMe5i.js";import"./index-BW-0cZWE.js";import"./index-DAFveYs2.js";import"./renderedTicksSlice-CNCxbMiN.js";import"./index-DlD_trIo.js";import"./CartesianChart-yrdLDQCk.js";import"./ZIndexPortal-DaAvwAYM.js";import"./CategoricalChart-BtQg_BZ4.js";import"./Layer-DdqSdn0F.js";import"./LabelList-CHIFisD0.js";import"./Label-BqeeWfBr.js";import"./Text-B-p-4nXu.js";import"./pageBackground-ByY2ru8v.js";import"./ZIndexLayer-BgIgZbDQ.js";import"./dataEntryStyles-DNa-AVoZ.js";import"./ActivePoints-mk-rZ28o.js";import"./Dot-fiFJQDUC.js";import"./types-BW57dsKE.js";import"./activeStyles-C5fI4Bwm.js";import"./useAnimationId-Dwkyu_pp.js";import"./Symbols-owfjK1Cg.js";import"./symbol-BffQEpZj.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DXgo6Kex.js";import"./SetGraphicalItem-BKFEq2Vz.js";import"./getRadiusAndStrokeWidthFromDot-B-_khl6D.js";import"./ActiveShapeUtils-CmV0wYzT.js";import"./Curve-DZlxAOiJ.js";import"./step-D0Rpy-Hs.js";import"./useEffectiveDataKey-BLEvHhBq.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
