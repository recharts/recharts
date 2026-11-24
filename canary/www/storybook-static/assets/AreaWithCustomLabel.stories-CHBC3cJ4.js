import{R as r}from"./iframe-tfZrcrMF.js";import{R as c}from"./zIndexSlice-CC8kCstT.js";import{C as d}from"./ComposedChart-BCjiIJ4o.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BMyj-Gy0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpCpS2kK.js";import"./throttle-DycvlznN.js";import"./index-CCpPbL-G.js";import"./index-CQW0Ruw4.js";import"./RechartsWrapper-Mi5m4ATr.js";import"./axisSelectors-BkiuLlPZ.js";import"./polarAxisSelectors-D2vFLO2n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uLY3we2s.js";import"./index-0VCZupX4.js";import"./index-C00ri7pa.js";import"./renderedTicksSlice-DCheLSnn.js";import"./index-DC_tjhxs.js";import"./fillDefinitions-CQPwZfwM.js";import"./CartesianChart-Cxx6k3Ff.js";import"./chartDataContext-pD1W3H_C.js";import"./CategoricalChart-DGtxkSeD.js";import"./getRadiusAndStrokeWidthFromDot-Ch3PhdMy.js";import"./Layer-ru88AdSr.js";import"./dataEntryStyles-CpzODNOV.js";import"./Label-CrLdB5k3.js";import"./Text-DXjy-RzD.js";import"./ZIndexLayer-DnL-EDkP.js";import"./ActivePoints-BER6C4Du.js";import"./Dot-BulvKgA_.js";import"./types-CWW0D7cm.js";import"./activeStyles-CW3oynl8.js";import"./useAnimationId-CiRiV3_R.js";import"./Symbols-yui_aiRC.js";import"./symbol-ru9lBt2i.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BPWS4To0.js";import"./ActiveShapeUtils-Mflib2w7.js";import"./Curve-C3wk6TDN.js";import"./step-8uwKBSGh.js";import"./useEffectiveDataKey-Bate5zYb.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
