import{R as r}from"./iframe-KWoDlvv0.js";import{R as c}from"./zIndexSlice-D6_TQa48.js";import{C as d}from"./ComposedChart-BNaAIAHQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bz0BZNpk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fIhDXQnx.js";import"./throttle-BvqCZ8Vh.js";import"./index-Li49Ujhl.js";import"./index-D_eG4QRf.js";import"./RechartsWrapper-Cd2ytf7V.js";import"./axisSelectors-CV2At8Yo.js";import"./polarAxisSelectors-8HEoWBh0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oWIqdaah.js";import"./index-BfCybvCF.js";import"./index-CCYlIY-z.js";import"./renderedTicksSlice-C40hju2e.js";import"./index-Dv3wNeKm.js";import"./fillDefinitions-BahzxKfc.js";import"./CartesianChart-D1x7M7Ji.js";import"./chartDataContext-CRRlgIpa.js";import"./CategoricalChart-539yhc35.js";import"./Layer-waQQT3dP.js";import"./dataEntryStyles-B50QbiA3.js";import"./Label-BPcs5PEB.js";import"./Text-DoeJcgDd.js";import"./ZIndexLayer-UqbdP99s.js";import"./ActivePoints-DgWtUVYM.js";import"./Dot-8l7EA-ok.js";import"./types-DGnljtoN.js";import"./activeStyles-DdJ_j3KP.js";import"./useAnimationId-Dr1qu-UX.js";import"./Symbols-etFAQ42y.js";import"./symbol-DnM84iFX.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C36UrnCq.js";import"./getRadiusAndStrokeWidthFromDot-CjrqjHcw.js";import"./ActiveShapeUtils-C8mQk9io.js";import"./Curve-B7-98jub.js";import"./step-e6HwNXpN.js";import"./useEffectiveDataKey-Dnh6CHxJ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
