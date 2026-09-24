import{R as r}from"./iframe-oenQDkae.js";import{R as c}from"./zIndexSlice-BolP6taR.js";import{C as d}from"./ComposedChart-CTlu4MhW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CCa1JXyI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-MDW_1VLh.js";import"./index-BSFq4RG1.js";import"./index-MHyjaTC8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMJPtlp2.js";import"./isWellBehavedNumber-D7fX2EcX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzSj_Srx.js";import"./axisSelectors-DouK1BqP.js";import"./d3-scale-DtmS-GpC.js";import"./index-BMWVfK_z.js";import"./index-ZmrPVgl6.js";import"./renderedTicksSlice-CXVO1QKM.js";import"./index-CZXeDDYw.js";import"./CartesianChart-Chu1Jshw.js";import"./chartDataContext-CJ85p7Fi.js";import"./CategoricalChart-BmbR8bdU.js";import"./Layer-IdKk3EZa.js";import"./AnimatedItems-DDFphvv3.js";import"./Label-BCANxpap.js";import"./Text-D5ThFr-V.js";import"./DOMUtils-Cj13ECRs.js";import"./useId-CdRDsFJI.js";import"./useBackwardsCompatibleTheme-BdI5Azyq.js";import"./ZIndexLayer-D9GKmy2X.js";import"./useAnimationId-BXnU9mnj.js";import"./ActivePoints-BSQAnEDd.js";import"./Dot-C-Nopngh.js";import"./types-DhnB6M_7.js";import"./RegisterGraphicalItemId-CysjmqkX.js";import"./GraphicalItemClipPath-D7deAvGW.js";import"./SetGraphicalItem-BPqapuvy.js";import"./getRadiusAndStrokeWidthFromDot-D9taOjnP.js";import"./ActiveShapeUtils-C5gHJrTE.js";import"./Curve-BSb99er_.js";import"./step-Bev09Hzp.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-ygWefbro.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
