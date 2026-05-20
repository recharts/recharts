import{e as t}from"./iframe-BExdC6gN.js";import{g as c}from"./arrayEqualityCheck-DOMqUAof.js";import{C as d}from"./ComposedChart-CfHGhx4q.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-DDOa5D2B.js";import{R as u}from"./RechartsHookInspector-jedlPGVn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BABy-fAx.js";import"./immer-fLQu0D5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./index-dnhQRVhY.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./zIndexSlice-DqK4zht4.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./CartesianChart-DEFw3dUf.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./Curve-BAgcgHZR.js";import"./types-DfAw3uAA.js";import"./step-D4OvHG8Z.js";import"./path-DyVhHtw_.js";import"./Layer-Bn8zfoRz.js";import"./ReactUtils-Dgl8JF7u.js";import"./Label-BEYaNe1v.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./ActivePoints-BRlCo6wv.js";import"./Dot-DeXpLXf5.js";import"./RegisterGraphicalItemId-CGA7gaf-.js";import"./GraphicalItemClipPath-B5kn33G8.js";import"./SetGraphicalItem-DVUCQsv1.js";import"./useAnimationId-DlRyv4oq.js";import"./getRadiusAndStrokeWidthFromDot-CEsaKSHL.js";import"./graphicalItemSelectors-BxkHt0qJ.js";import"./index-Bb8SVNOL.js";import"./ChartSizeDimensions-DVous5ni.js";import"./OffsetShower-DTmFDKEr.js";import"./PlotAreaShower-D_ibhKaV.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{e as CustomizedLabel,pt as __namedExportsOrder,mt as default};
