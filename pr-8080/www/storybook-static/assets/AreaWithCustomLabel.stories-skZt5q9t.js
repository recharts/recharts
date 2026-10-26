import{R as r}from"./iframe-BzJSp-Lb.js";import{R as c}from"./zIndexSlice-CpY4G_41.js";import{C as d}from"./ComposedChart-BGxC8J4N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Ik1Xdq5-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D32Nc0UY.js";import"./throttle-BdS6UYxD.js";import"./index-YB3txD15.js";import"./index-DEl98Bjo.js";import"./RechartsWrapper-LKbuKCMS.js";import"./axisSelectors-Dmo5ac34.js";import"./polarAxisSelectors-CKi8pQjD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BS7oaQgh.js";import"./index-GvdMQirt.js";import"./index-DTL6jccP.js";import"./renderedTicksSlice-DRNaA9Q_.js";import"./index-D2gj9RGS.js";import"./CartesianChart-BDSIE1-i.js";import"./chartDataContext-DNk2bkFc.js";import"./CategoricalChart-BXcX0RVa.js";import"./Layer-Ci5AF7LX.js";import"./activeStyles-B_Yk1DNA.js";import"./Label-CXAJ70oq.js";import"./Text-Di-RptE9.js";import"./pageBackground-8jgZJDd7.js";import"./useId-Cb7sX_a1.js";import"./ZIndexLayer-CGBlNVI9.js";import"./dataEntryStyles-eQjR1qV2.js";import"./useAnimationId-vzOulJcL.js";import"./ActivePoints-gL4Smrft.js";import"./Dot-Bedwt1R7.js";import"./types-DTueBMDQ.js";import"./Symbols-C3MESPx5.js";import"./symbol-BGHOeo3E.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DeENaGzF.js";import"./SetGraphicalItem-Cc_8d-ll.js";import"./getRadiusAndStrokeWidthFromDot-DI7kq6ii.js";import"./ActiveShapeUtils-CPEFsget.js";import"./Curve-DdA-p64w.js";import"./step-CKjxAWSD.js";import"./useEffectiveDataKey-Dlkdw6F3.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
