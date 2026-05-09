import{e as t}from"./iframe-DCkCb3cL.js";import{R as c}from"./arrayEqualityCheck-Cyv8hSdj.js";import{C as d}from"./ComposedChart-DNMO5eaz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ByYZSVDX.js";import{R as u}from"./RechartsHookInspector-GywlJnGS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Brvb-unE.js";import"./immer-CJIR5Dxo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ysnAkpcY.js";import"./index-DmTf6G0P.js";import"./hooks-rTm4XK8H.js";import"./axisSelectors-DLVZqdCy.js";import"./d3-scale-cKex8xs_.js";import"./zIndexSlice-C2SLAmdu.js";import"./renderedTicksSlice-dBR_dEs7.js";import"./CartesianChart-U8I4mwYO.js";import"./chartDataContext-BB8jRTpM.js";import"./CategoricalChart-sLprv-i8.js";import"./Curve-0mQU3lN2.js";import"./types-BN3BphoZ.js";import"./step-CFTOTHh4.js";import"./Layer-DdpUaJ6z.js";import"./ReactUtils-UnUZnhmf.js";import"./Label-DgXvgibU.js";import"./Text-C0rSCzeg.js";import"./DOMUtils-D_52ZroA.js";import"./ZIndexLayer-DmR4HC_4.js";import"./ActivePoints-Be0P0LgS.js";import"./Dot-H-WiFDrq.js";import"./RegisterGraphicalItemId-D6ZXTRMS.js";import"./GraphicalItemClipPath-CSx6dkEB.js";import"./SetGraphicalItem-DyLJ3K98.js";import"./useAnimationId-CqiSzw9P.js";import"./getRadiusAndStrokeWidthFromDot-DH5ceNx-.js";import"./graphicalItemSelectors-BGSDKvIz.js";import"./index-tKLwA4MY.js";import"./ChartSizeDimensions-3SLqT2DF.js";import"./OffsetShower-DuCJOCxi.js";import"./PlotAreaShower-DYkpYr6V.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
