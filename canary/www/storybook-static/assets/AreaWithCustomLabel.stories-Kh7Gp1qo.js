import{c as e}from"./iframe-CR5xUcH4.js";import{g as c}from"./zIndexSlice-Coakq-0y.js";import{C as d}from"./ComposedChart-DbazSM9x.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area--Ktv_cOk.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MiNeKFai.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./get-CdpBIjqV.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./axisSelectors-GqEe5nOB.js";import"./d3-scale-Cr_JmSke.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./CategoricalChart-DNMItnv2.js";import"./Curve-7AAFvrE4.js";import"./types-vWyLmemb.js";import"./step-CBodA2th.js";import"./path-DyVhHtw_.js";import"./Layer-DDAYqTxx.js";import"./ReactUtils-D5HGwZm0.js";import"./Label-gV3sJO-c.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./ZIndexLayer-Br2sJvd3.js";import"./ActivePoints-BYKq7ayk.js";import"./Dot-DyT4z2sM.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./useAnimationId-qfC-4EnL.js";import"./getRadiusAndStrokeWidthFromDot-CVCg-N3i.js";import"./graphicalItemSelectors-BfOvLmPr.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
