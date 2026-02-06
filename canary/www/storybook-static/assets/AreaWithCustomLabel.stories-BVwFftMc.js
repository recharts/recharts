import{e as t}from"./iframe-Isp5DByQ.js";import{R as c}from"./arrayEqualityCheck-DcSZTGrK.js";import{C as d}from"./ComposedChart-8E_kMa2M.js";import{A as l}from"./Area-EKjDICt5.js";import{R as h}from"./RechartsHookInspector-BcUB3q5g.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CktQcWs0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJiHoXCP.js";import"./hooks-CPGRTKzd.js";import"./axisSelectors-DKneri-4.js";import"./zIndexSlice-Kir1u83y.js";import"./CartesianChart-Ad36dtSp.js";import"./chartDataContext-CCLXwYwB.js";import"./CategoricalChart-Cd3v81B-.js";import"./Curve-BVujXptJ.js";import"./types-BUXZfUBK.js";import"./Layer-BzTi7EcX.js";import"./ReactUtils-BG9wPH-d.js";import"./Label-BIeSPvzh.js";import"./Text-B3hJnr-O.js";import"./DOMUtils-DDV6GWvc.js";import"./ZIndexLayer-B7yLevK6.js";import"./ActivePoints-CEokwuvu.js";import"./Dot-CxDulsX9.js";import"./RegisterGraphicalItemId-C0G4e2t3.js";import"./GraphicalItemClipPath-DhI7dbsH.js";import"./SetGraphicalItem-CEyRhP7A.js";import"./useAnimationId-BH36Yv-4.js";import"./getRadiusAndStrokeWidthFromDot-DQQ1a1Ar.js";import"./graphicalItemSelectors-nt4h__7j.js";import"./index-DhR5oTPc.js";import"./ChartSizeDimensions-CbTBC7na.js";import"./OffsetShower-34zfbzoW.js";import"./PlotAreaShower-DPXygzPM.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
