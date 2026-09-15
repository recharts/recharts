import{R as r}from"./iframe-WV_asirj.js";import{R as c}from"./zIndexSlice-GixElPZ_.js";import{C as d}from"./ComposedChart-BvVU85k-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dlpe2eOk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ba7gBaVO.js";import"./index-BTbJQRbi.js";import"./index-FtwXBSMR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CXdIXtb2.js";import"./isWellBehavedNumber-CU2jbRyM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsCMkadb.js";import"./axisSelectors-8uL09VjP.js";import"./d3-scale-Cy0pMHbr.js";import"./index-DNMQn43Q.js";import"./index-BrA93ln9.js";import"./renderedTicksSlice-Dr2G7YjO.js";import"./index-5piGZExt.js";import"./CartesianChart-BSNtd9by.js";import"./chartDataContext-DkG6gPSF.js";import"./CategoricalChart-DnjLzrnf.js";import"./Layer-D1F1s_Cb.js";import"./AnimatedItems-xMF2BQb6.js";import"./Label-Q870r3oo.js";import"./Text-Dsqc9k19.js";import"./DOMUtils-CnLU0pz8.js";import"./useId-CWlmqz6v.js";import"./useBackwardsCompatibleTheme-DtOSIckQ.js";import"./ZIndexLayer-rRlGaKvU.js";import"./useAnimationId-DlwLI8cF.js";import"./ActivePoints-BR8sRvdX.js";import"./Dot-CTbzWonC.js";import"./types-Cgo928Y8.js";import"./RegisterGraphicalItemId-B1qksrkN.js";import"./GraphicalItemClipPath-BBN-JnlO.js";import"./SetGraphicalItem-BpDA6gwY.js";import"./getRadiusAndStrokeWidthFromDot-DQScL_OV.js";import"./ActiveShapeUtils--kX-_F3I.js";import"./Curve-CiYmGtZr.js";import"./step-F8CMqi4G.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DUG11jyw.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
