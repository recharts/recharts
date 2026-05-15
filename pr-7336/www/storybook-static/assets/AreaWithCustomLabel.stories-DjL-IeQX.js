import{e as t}from"./iframe-C_AsYugi.js";import{R as c}from"./arrayEqualityCheck-xvllERIt.js";import{C as d}from"./ComposedChart-cY0MWVeZ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CneO-qYN.js";import{R as u}from"./RechartsHookInspector-BZMd9r0w.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CerPTbDf.js";import"./immer-BPZQF6xW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0wr5dja.js";import"./index-DBNDbbEj.js";import"./hooks-DRvuAM61.js";import"./axisSelectors-D6N9K5pJ.js";import"./d3-scale-bPIVgrq4.js";import"./zIndexSlice-CVos1qNt.js";import"./renderedTicksSlice-CULSuwf6.js";import"./CartesianChart-Bf-pcG1N.js";import"./chartDataContext-DxmOKRxG.js";import"./CategoricalChart-C3pZv0iV.js";import"./Curve-DqcNZQQ9.js";import"./types-DFzRwbJd.js";import"./step-BNGIjVY6.js";import"./Layer-Dz5BSX-y.js";import"./ReactUtils-BIcQ9LuG.js";import"./Label-Ck2nWAbG.js";import"./Text-CQ7cV61I.js";import"./DOMUtils-BnflEJNu.js";import"./ZIndexLayer-Dpd4MxoT.js";import"./ActivePoints-D_gOxfcF.js";import"./Dot-E0S9rOFh.js";import"./RegisterGraphicalItemId-Br_TTAem.js";import"./GraphicalItemClipPath-DUplZfGU.js";import"./SetGraphicalItem-DnFjb-ph.js";import"./useAnimationId-GLik1JQl.js";import"./getRadiusAndStrokeWidthFromDot-CMmixfMt.js";import"./graphicalItemSelectors-DddBo3nY.js";import"./index-DCPl85jO.js";import"./ChartSizeDimensions-Dh66BsMo.js";import"./OffsetShower-vaJOlCun.js";import"./PlotAreaShower-CMsAoFdB.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
