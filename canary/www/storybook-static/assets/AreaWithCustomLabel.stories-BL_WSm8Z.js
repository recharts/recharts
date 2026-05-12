import{e as t}from"./iframe-1J0v0kJa.js";import{R as c}from"./arrayEqualityCheck-Crr3Dzh6.js";import{C as d}from"./ComposedChart-hk6GI-DP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-TAMDiu83.js";import{R as u}from"./RechartsHookInspector-D3XyLt9P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C05SE_tf.js";import"./immer-ZnQZAws8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NfAPn5nO.js";import"./index-CooR3W3l.js";import"./hooks-D7UD8X0t.js";import"./axisSelectors-DmWq6GuE.js";import"./d3-scale-WGdCtqiA.js";import"./zIndexSlice-DMwFl-HJ.js";import"./renderedTicksSlice-CcC_3ltP.js";import"./CartesianChart-T051KWch.js";import"./chartDataContext-CLazaXIr.js";import"./CategoricalChart-_SeB5FDZ.js";import"./Curve-MBHSj-Hn.js";import"./types-DbkoSsM0.js";import"./step-D8iwa8wm.js";import"./Layer-BVvsC5_K.js";import"./ReactUtils-DrCtqFWq.js";import"./Label-BoTwLtcO.js";import"./Text-DVd_qj4R.js";import"./DOMUtils-CddqG7G1.js";import"./ZIndexLayer-Bol6PWej.js";import"./ActivePoints-C2NgxcK8.js";import"./Dot-BM5MyVLI.js";import"./RegisterGraphicalItemId-Ds4EEh5p.js";import"./GraphicalItemClipPath-AV19Jsyu.js";import"./SetGraphicalItem-CdiSFPyl.js";import"./useAnimationId-AI_H7XbQ.js";import"./getRadiusAndStrokeWidthFromDot-DVwfrbNw.js";import"./graphicalItemSelectors-B5eXLn7d.js";import"./index-tjWZGZoc.js";import"./ChartSizeDimensions-DBgMadMY.js";import"./OffsetShower-L7gF9BZe.js";import"./PlotAreaShower-C_TnXU0T.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
