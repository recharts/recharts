import{e as t}from"./iframe-BRqvrPpX.js";import{R as c}from"./arrayEqualityCheck-DDSezW49.js";import{C as d}from"./ComposedChart-CsblHqYu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-oHUu1qHc.js";import{R as u}from"./RechartsHookInspector-DZUw7Ce3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C4ONjF6w.js";import"./immer-DXV4etqU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbCr_zla.js";import"./index-DUtVgLrP.js";import"./hooks-rzyNGUcJ.js";import"./axisSelectors-DItQVmXo.js";import"./d3-scale-BRJXbGMx.js";import"./zIndexSlice-DNL_rR3e.js";import"./renderedTicksSlice-rp2kTmjY.js";import"./CartesianChart-BrkX4WEt.js";import"./chartDataContext-nwhDY5FS.js";import"./CategoricalChart-CODQ6PLu.js";import"./Curve-CtnWwKXB.js";import"./types-2nLFc4aE.js";import"./step-G_hwVzeG.js";import"./Layer-KJ5xksxy.js";import"./ReactUtils-BAJ1kPIP.js";import"./Label-_Khr6uJ_.js";import"./Text-c5kux5xS.js";import"./DOMUtils-GlaEK2cB.js";import"./ZIndexLayer-Cc4doPfJ.js";import"./ActivePoints--bg5w8iT.js";import"./Dot-Db-uTVSA.js";import"./RegisterGraphicalItemId-RZfbywjl.js";import"./GraphicalItemClipPath-oDzU52PH.js";import"./SetGraphicalItem-BAyig2Fq.js";import"./useAnimationId-CvzXleYE.js";import"./getRadiusAndStrokeWidthFromDot-BeKpyACI.js";import"./graphicalItemSelectors-D6QdulDI.js";import"./index-BPkAalLa.js";import"./ChartSizeDimensions-DojjfuX5.js";import"./OffsetShower-Cx7s2ylo.js";import"./PlotAreaShower-CGKQg4jU.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
