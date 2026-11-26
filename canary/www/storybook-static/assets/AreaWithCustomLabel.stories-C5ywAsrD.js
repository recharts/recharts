import{R as r}from"./iframe-cV3SAodv.js";import{R as c}from"./zIndexSlice-Cjgp2TXV.js";import{C as d}from"./ComposedChart-Bqs-Kl5O.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Btwse0VF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4GEEUb1.js";import"./get-CjriyByo.js";import"./throttle-CMi-pHht.js";import"./index-DNgMIzR1.js";import"./index-CaZV8WiE.js";import"./RechartsWrapper-CyX-rkWs.js";import"./axisSelectors-C9H2pU_G.js";import"./polarAxisSelectors--xQAorkv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-y_crYDj7.js";import"./index-yYdNmmg6.js";import"./index-DTNI7e-E.js";import"./renderedTicksSlice-BtGm49YF.js";import"./index-Dt1fVd2j.js";import"./fillDefinitions-DbiqT5_A.js";import"./CartesianChart-BWo1r9td.js";import"./chartDataContext-Da1Grc9c.js";import"./CategoricalChart-CWv6udzl.js";import"./getRadiusAndStrokeWidthFromDot-C4ogZ01-.js";import"./Layer-zGQNaeEg.js";import"./dataEntryStyles-Cky1CNqk.js";import"./Label-CQK_czyp.js";import"./Text-DIOCtNrm.js";import"./ZIndexLayer-C_9SlmyF.js";import"./ActivePoints-C5tqNSRW.js";import"./Dot-DlXY1cPq.js";import"./types-CxXTSyDH.js";import"./activeStyles-BPuHxpJZ.js";import"./useAnimationId-DD8tFxYJ.js";import"./Symbols-Sv15_QUP.js";import"./symbol-rfkqyrPT.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B6xdOYOb.js";import"./ActiveShapeUtils-kkzOPQE8.js";import"./Curve-CeApDEIq.js";import"./step-miPDfXCq.js";import"./useEffectiveDataKey-DBeKKq_r.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
