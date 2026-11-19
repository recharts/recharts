import{R as r}from"./iframe-Cr4SLAPG.js";import{R as c}from"./zIndexSlice-DyLLhom_.js";import{C as d}from"./ComposedChart-fx4m_TFy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C5MNl91f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CAE-kTw-.js";import"./throttle-m67LhZgN.js";import"./index-BnL3zeBq.js";import"./index-BdbAlbMj.js";import"./RechartsWrapper-BMMPlSoi.js";import"./axisSelectors-DrKqMaOQ.js";import"./polarAxisSelectors-Cu_1wigM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WAvM56kv.js";import"./index-kvmeuQQ0.js";import"./index-COeoIdkq.js";import"./renderedTicksSlice-tk5Ux2sx.js";import"./index-CjAQIOvx.js";import"./fillDefinitions-DOSp8ZTg.js";import"./CartesianChart-DLnqZjzO.js";import"./chartDataContext-Cv9hYa4A.js";import"./CategoricalChart-DQSQjBRM.js";import"./getRadiusAndStrokeWidthFromDot-D9aaECN7.js";import"./Layer-CWQ0f2zH.js";import"./dataEntryStyles-IfVv-8UK.js";import"./Label-iIhWQC5W.js";import"./Text-BBE8dgLe.js";import"./ZIndexLayer-B4fE1k7j.js";import"./ActivePoints-DnQ4FUYw.js";import"./Dot-BK-ZVoey.js";import"./types-B6oZtPsa.js";import"./activeStyles-aUydRVRE.js";import"./useAnimationId-kAVaPV6O.js";import"./Symbols-B0X99Sro.js";import"./symbol-HG06wgQN.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C9um0bAO.js";import"./ActiveShapeUtils-Mg3OqtQ-.js";import"./Curve-DJrcdmOM.js";import"./step-B4BPIBfx.js";import"./useEffectiveDataKey-CUJehQI3.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
