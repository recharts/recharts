import{R as r}from"./iframe-B07BHG7b.js";import{R as c}from"./zIndexSlice-DMtdtU0H.js";import{C as d}from"./ComposedChart-VKrjcxhK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B1jxdkLH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DTIoaHkO.js";import"./index-C_4gdDDP.js";import"./index-OowKJhbY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BRBRD9Wj.js";import"./isWellBehavedNumber-BwS8-SkC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CbwTx7DF.js";import"./axisSelectors-Nr5xjaNb.js";import"./d3-scale-C1HygQvU.js";import"./index-CnnKafP5.js";import"./index-Ch334nIE.js";import"./renderedTicksSlice-D6Y0A1v8.js";import"./index-Cay4G1Oz.js";import"./CartesianChart-DjafEMNG.js";import"./chartDataContext-L5OvEFVH.js";import"./CategoricalChart-Dsa2Qc1B.js";import"./Layer-DGsDthuj.js";import"./AnimatedItems-BPQiX0OY.js";import"./Label-DT0SDRud.js";import"./Text-CNYJT0YU.js";import"./DOMUtils-BYXyET0J.js";import"./useId-DpSDwQO_.js";import"./useBackwardsCompatibleTheme-BSstlxbW.js";import"./ZIndexLayer-BWiNey_Z.js";import"./useAnimationId-D8wc_hUQ.js";import"./ActivePoints-qVEGkbRi.js";import"./Dot-D5b4Rj0p.js";import"./types-BfpKaUoc.js";import"./RegisterGraphicalItemId-r8grTaJr.js";import"./GraphicalItemClipPath-CDDJymit.js";import"./SetGraphicalItem-CN2Fj3zB.js";import"./getRadiusAndStrokeWidthFromDot-CWtkFiVw.js";import"./ActiveShapeUtils-DunyI-30.js";import"./Curve-Co_OugcN.js";import"./step-EbjsK9_B.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BewjVzSI.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
