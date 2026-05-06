import{e as t}from"./iframe-C1XJGX3t.js";import{R as c}from"./arrayEqualityCheck-BpeTDNly.js";import{C as d}from"./ComposedChart-lM7HGj1N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B2X4_XMU.js";import{R as u}from"./RechartsHookInspector-GAphqeRz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DoOIdNyO.js";import"./immer-DdA_cEFp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Jcx6MylA.js";import"./index-BMIXdyLv.js";import"./hooks-DkyxLj8R.js";import"./axisSelectors-0L8Hl7-Q.js";import"./d3-scale-DfhtN67L.js";import"./zIndexSlice-YaBRx6kS.js";import"./renderedTicksSlice-ROonkpc2.js";import"./CartesianChart-DfX14VSl.js";import"./chartDataContext-COU-oqyF.js";import"./CategoricalChart-B6tCsX7-.js";import"./Curve-B6o2gEbs.js";import"./types-BO06-FVT.js";import"./step-BSNAUXbk.js";import"./Layer-Dk6O6-C9.js";import"./ReactUtils-DetlFOn3.js";import"./Label-B-UiuQeI.js";import"./Text-CHym7YYQ.js";import"./DOMUtils-PN4-Wh3o.js";import"./ZIndexLayer-f3tuaVy9.js";import"./ActivePoints-CpaNcRJG.js";import"./Dot-CY448ZsK.js";import"./RegisterGraphicalItemId-brpvqGPp.js";import"./GraphicalItemClipPath-BPrExOyo.js";import"./SetGraphicalItem-VIgAq4Q4.js";import"./useAnimationId-Bi2kUagW.js";import"./getRadiusAndStrokeWidthFromDot-wpqoSr7D.js";import"./graphicalItemSelectors-B1l2Nl-L.js";import"./index-FCQIpD8D.js";import"./ChartSizeDimensions-B31rA8_p.js";import"./OffsetShower-bDh9UTlF.js";import"./PlotAreaShower-ByyJWnzF.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
