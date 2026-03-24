import{e as t}from"./iframe-B-0BbsAX.js";import{R as c}from"./arrayEqualityCheck-D0GIznF3.js";import{C as d}from"./ComposedChart-C4M_-QHd.js";import{A as l}from"./Area-C1O78oKj.js";import{R as h}from"./RechartsHookInspector-a5VIBXh4.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeHfSYTr.js";import"./immer-16Lk8WhM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdelftvL.js";import"./index-CC_jrfcS.js";import"./hooks-CLbcsvpt.js";import"./axisSelectors-B5M5y7tb.js";import"./d3-scale-CRpFVGXV.js";import"./zIndexSlice-k5NGco1R.js";import"./renderedTicksSlice-DrnPsf35.js";import"./CartesianChart-BzA52Q7h.js";import"./chartDataContext-ZzZnHAfn.js";import"./CategoricalChart-CiBn8gUj.js";import"./Curve-zb7_jZJr.js";import"./types-CmNjNiS4.js";import"./step-BJ3svLa1.js";import"./Layer-DmBsOgtN.js";import"./ReactUtils-Dc4L6Dcx.js";import"./Label-RKv-aJqQ.js";import"./Text-BDsrdoFV.js";import"./DOMUtils-ChlQnBsE.js";import"./ZIndexLayer-BS0cCdPh.js";import"./ActivePoints-D2jfQmP-.js";import"./Dot-DB3UZIXD.js";import"./RegisterGraphicalItemId-EYUIR0Rr.js";import"./GraphicalItemClipPath-j2FZHUrx.js";import"./SetGraphicalItem--6EOKRx7.js";import"./useAnimationId-C_pphjez.js";import"./getRadiusAndStrokeWidthFromDot-CIfccvwt.js";import"./graphicalItemSelectors-ChPy1Wqk.js";import"./index-BMYt7gcu.js";import"./ChartSizeDimensions-BoIgW8rA.js";import"./OffsetShower-DSqgSq0T.js";import"./PlotAreaShower-DqxXtLCD.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
