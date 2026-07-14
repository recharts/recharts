import{R as e}from"./iframe-CxG2PZXj.js";import{R as c}from"./zIndexSlice-DAD_xoRY.js";import{C as d}from"./ComposedChart-D2cTWPQC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BTmRK0-A.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BLzUd2wF.js";import"./index-DToZBGKP.js";import"./index-DiKZrp18.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DUaFgx3m.js";import"./isWellBehavedNumber-8T9tdyF1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0t_sSZG.js";import"./index-5B0X8Ccq.js";import"./index-DK4BYQS1.js";import"./renderedTicksSlice-DK3Qh-AH.js";import"./axisSelectors-BOLkCBrq.js";import"./d3-scale-LDX-W-e5.js";import"./CartesianChart-DqtDQP9t.js";import"./chartDataContext-Cw7l7MNk.js";import"./CategoricalChart-Dozh9-kX.js";import"./Layer-Cge6P4R-.js";import"./AnimatedItems-DqWCyLkw.js";import"./Label-Z4HB-UJ_.js";import"./Text-Cndr_sMa.js";import"./DOMUtils-D8hCt3_g.js";import"./ZIndexLayer-kEwpMnQu.js";import"./useAnimationId-D_YXQiTc.js";import"./ActivePoints-Dtvrk-n_.js";import"./Dot-B9yiNv-3.js";import"./types-Da-j7B5o.js";import"./RegisterGraphicalItemId-Cn9-4_hp.js";import"./GraphicalItemClipPath-m4xLKPFC.js";import"./SetGraphicalItem-C-4LQBhg.js";import"./getRadiusAndStrokeWidthFromDot-3b51JfXm.js";import"./ActiveShapeUtils-CVhA8l6O.js";import"./Curve-e0q54Fup.js";import"./step-wD8k8EBt.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DIn3ebUY.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
