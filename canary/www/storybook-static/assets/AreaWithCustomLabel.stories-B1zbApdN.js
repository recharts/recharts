import{R as r}from"./iframe-lJBwbutv.js";import{R as c}from"./zIndexSlice-DOZGt0Xc.js";import{C as d}from"./ComposedChart-Cxisz18M.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B7aqdpdD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuoHmAis.js";import"./throttle-BD4ZOoVc.js";import"./index-D-yoUCLK.js";import"./index-DmjkyNBy.js";import"./RechartsWrapper-C4uciLnE.js";import"./axisSelectors-CiZzV4Ua.js";import"./polarAxisSelectors-g2gwazbI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrfLvVJ7.js";import"./index-BjclV3iC.js";import"./index-Bgy6zka-.js";import"./renderedTicksSlice-ChSQY0tz.js";import"./index-CPSRkKHN.js";import"./fillDefinitions-DgzgNWUG.js";import"./CartesianChart-BDxnsR9l.js";import"./chartDataContext-CuRy23UW.js";import"./CategoricalChart-CWJpCYvL.js";import"./Layer-CZzb4Onv.js";import"./dataEntryStyles-BXXFCsKs.js";import"./Label-C1XxCcqG.js";import"./Text-CH7ZTJa6.js";import"./ZIndexLayer-DMFEoW6r.js";import"./ActivePoints-De5xpIFf.js";import"./Dot-CHXRfIFb.js";import"./types-BR2T4QCa.js";import"./activeStyles-C_lJCdGG.js";import"./useAnimationId-Dj7sECHw.js";import"./Symbols-BrRhqa2q.js";import"./symbol-CHsvlSO9.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BjwhNxsW.js";import"./getRadiusAndStrokeWidthFromDot-4zFCm6-q.js";import"./ActiveShapeUtils-6HIsnjoS.js";import"./Curve-Dazce3Yn.js";import"./step-CVKg82eE.js";import"./useEffectiveDataKey-Bg5rFbYe.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
