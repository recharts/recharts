import{R as r}from"./iframe-CuQfx1mh.js";import{R as c}from"./zIndexSlice-DATCiNk-.js";import{C as d}from"./ComposedChart-CT5dqqrP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dv1y9tpc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xvOlXZtC.js";import"./throttle-SAQUG4vb.js";import"./index-CvvvrEYr.js";import"./index-Bw8PVQ13.js";import"./RechartsWrapper-DE6EtITA.js";import"./axisSelectors-BY0kcEhz.js";import"./polarAxisSelectors-piadlyiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BW1Afi3u.js";import"./index-kT5VmTkQ.js";import"./index-BeCcpORD.js";import"./renderedTicksSlice-Ds69xoXU.js";import"./index-SztJ6oEx.js";import"./fillDefinitions-DUe233lT.js";import"./CartesianChart-BJj5wl32.js";import"./chartDataContext-pjMFjoUW.js";import"./CategoricalChart-DBOXRrXs.js";import"./Layer-YgN4J4tN.js";import"./dataEntryStyles-GFwLhdMi.js";import"./Label-GADa0aPm.js";import"./Text-BgHfu1GZ.js";import"./ZIndexLayer-W76HFIEY.js";import"./ActivePoints-D3cJ21Q9.js";import"./Dot-nIfHLv6J.js";import"./types-D3Hjk8Vl.js";import"./activeStyles-Ci_kz6ws.js";import"./useAnimationId-tXprvTar.js";import"./Symbols-Cfnu_9Am.js";import"./symbol-CeqqAB3e.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CgminRJ_.js";import"./getRadiusAndStrokeWidthFromDot-BGDq57jg.js";import"./ActiveShapeUtils-D5R6UpQP.js";import"./Curve-BBk73TGO.js";import"./step-BPhAxlHA.js";import"./useEffectiveDataKey-DTMm3t3E.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
