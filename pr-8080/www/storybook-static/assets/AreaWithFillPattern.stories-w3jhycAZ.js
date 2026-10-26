import{R as t}from"./iframe-BzJSp-Lb.js";import{R as p}from"./zIndexSlice-CpY4G_41.js";import{C as m}from"./ComposedChart-BGxC8J4N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Ik1Xdq5-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D32Nc0UY.js";import"./throttle-BdS6UYxD.js";import"./index-YB3txD15.js";import"./index-DEl98Bjo.js";import"./RechartsWrapper-LKbuKCMS.js";import"./axisSelectors-Dmo5ac34.js";import"./polarAxisSelectors-CKi8pQjD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BS7oaQgh.js";import"./index-GvdMQirt.js";import"./index-DTL6jccP.js";import"./renderedTicksSlice-DRNaA9Q_.js";import"./index-D2gj9RGS.js";import"./CartesianChart-BDSIE1-i.js";import"./chartDataContext-DNk2bkFc.js";import"./CategoricalChart-BXcX0RVa.js";import"./Layer-Ci5AF7LX.js";import"./activeStyles-B_Yk1DNA.js";import"./Label-CXAJ70oq.js";import"./Text-Di-RptE9.js";import"./pageBackground-8jgZJDd7.js";import"./useId-Cb7sX_a1.js";import"./ZIndexLayer-CGBlNVI9.js";import"./dataEntryStyles-eQjR1qV2.js";import"./useAnimationId-vzOulJcL.js";import"./ActivePoints-gL4Smrft.js";import"./Dot-Bedwt1R7.js";import"./types-DTueBMDQ.js";import"./Symbols-C3MESPx5.js";import"./symbol-BGHOeo3E.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DeENaGzF.js";import"./SetGraphicalItem-Cc_8d-ll.js";import"./getRadiusAndStrokeWidthFromDot-DI7kq6ii.js";import"./ActiveShapeUtils-CPEFsget.js";import"./Curve-DdA-p64w.js";import"./step-CKjxAWSD.js";import"./useEffectiveDataKey-Dlkdw6F3.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
