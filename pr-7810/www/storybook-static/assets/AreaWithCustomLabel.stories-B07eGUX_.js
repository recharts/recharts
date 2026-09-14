import{R as r}from"./iframe-bFSgLdPD.js";import{R as c}from"./zIndexSlice-D5upya8o.js";import{C as d}from"./ComposedChart-rnVwwIMy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CIrcGCg_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-u-v2gKhP.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BY-4gTQl.js";import"./axisSelectors-jpWGPgQR.js";import"./d3-scale-DJKaPyhK.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./index-DzQCF7Uo.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";import"./Layer-B9YPmvvS.js";import"./AnimatedItems-C1Ji84_q.js";import"./Label-CpotZ0Ob.js";import"./Text-BFarDq7U.js";import"./DOMUtils-DvIkXWfS.js";import"./useId-CXlgEyVd.js";import"./useBackwardsCompatibleTheme-DabWIItU.js";import"./ZIndexLayer-B1KbNkPu.js";import"./useAnimationId-C-HuNRtZ.js";import"./ActivePoints-t5f1lIKd.js";import"./Dot-DYaRHvIo.js";import"./types-D_jE8zAs.js";import"./RegisterGraphicalItemId-Ch2aaSbQ.js";import"./GraphicalItemClipPath-D0Gpm_sI.js";import"./SetGraphicalItem-BK4LEDF0.js";import"./getRadiusAndStrokeWidthFromDot-BeJ6jSsg.js";import"./ActiveShapeUtils-Tc7vH23C.js";import"./Curve-C65UunW2.js";import"./step-my7iJLmD.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BF3Qfnje.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
