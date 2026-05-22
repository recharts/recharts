import{e as t}from"./iframe-Cag7wSRv.js";import{g as c}from"./arrayEqualityCheck-DIS5wzHQ.js";import{C as d}from"./ComposedChart-D8vYd6dl.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-BRCV3hrL.js";import{R as u}from"./RechartsHookInspector-BY5Jlwrh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xc1HLF5N.js";import"./immer-284wn8VQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwHua0WY.js";import"./index-g0QlUGKs.js";import"./hooks-BrXnztNy.js";import"./axisSelectors-m8f3aizN.js";import"./d3-scale-e6S4jaCB.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-D-tflLzN.js";import"./renderedTicksSlice-CDJVjsUp.js";import"./CartesianChart-z1NmO9ak.js";import"./chartDataContext-WcgYQIEB.js";import"./CategoricalChart-CRN8hCqy.js";import"./Layer-BKYLP7Ft.js";import"./AnimatedItems-CluPQFSi.js";import"./Label-C9zkgYEJ.js";import"./Text-5aD9nx6b.js";import"./DOMUtils-BK1rzgLA.js";import"./ZIndexLayer-DmSAjehE.js";import"./useAnimationId-DTrmZnPm.js";import"./ActivePoints-CnGlv9Fu.js";import"./Dot-DnmND_ux.js";import"./types-VwRdPpC4.js";import"./RegisterGraphicalItemId-CXcdRHxm.js";import"./GraphicalItemClipPath-BLjl5NXz.js";import"./SetGraphicalItem-UxGNHPNY.js";import"./getRadiusAndStrokeWidthFromDot-BiYvEIsX.js";import"./ActiveShapeUtils-36BEpEpw.js";import"./Curve-DBPrYDrF.js";import"./step-CkDKckf6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CD1Yjtik.js";import"./index-BKRpgk4a.js";import"./ChartSizeDimensions-DvhfRAM1.js";import"./OffsetShower-_fcX7Can.js";import"./PlotAreaShower-DCoj4aUc.js";const nt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:e,y:o}=n;return t.createElement("text",{key:s,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},r={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const st=["CustomizedLabel"];export{r as CustomizedLabel,st as __namedExportsOrder,nt as default};
