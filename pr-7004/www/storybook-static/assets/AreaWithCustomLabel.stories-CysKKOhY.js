import{e as t}from"./iframe-8rINPBCK.js";import{R as c}from"./arrayEqualityCheck-C3wBHH11.js";import{C as d}from"./ComposedChart-Uze9vmcd.js";import{A as l}from"./Area-BQaqNlPw.js";import{R as h}from"./RechartsHookInspector-DhGNdH08.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-wjmL_qr9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_hkcN4D.js";import"./hooks-Bk__qHm-.js";import"./axisSelectors-CvWz5XTo.js";import"./zIndexSlice-DaWAVY1S.js";import"./CartesianChart-BO1mb6Fl.js";import"./chartDataContext-Djz4dVa4.js";import"./CategoricalChart-_BatnBQS.js";import"./Curve-D7sQ6QWi.js";import"./types-BtRlzhwr.js";import"./Layer-rS2qKox4.js";import"./ReactUtils-BygGLMXM.js";import"./Label-CPR5zbup.js";import"./Text-aD2aJQms.js";import"./DOMUtils-CWnqia8Q.js";import"./ZIndexLayer-BIlvRP3G.js";import"./ActivePoints-BLBDxNan.js";import"./Dot-DDl1biMb.js";import"./RegisterGraphicalItemId-BjvKjhdQ.js";import"./GraphicalItemClipPath-BLYpZTZk.js";import"./SetGraphicalItem-DdHorGvs.js";import"./useAnimationId-D141hJYN.js";import"./getRadiusAndStrokeWidthFromDot-K8DspZJi.js";import"./graphicalItemSelectors-eI3_Fu9E.js";import"./index--Y6JWCN_.js";import"./ChartSizeDimensions-CAkoMsi5.js";import"./OffsetShower-CYXSrIBv.js";import"./PlotAreaShower-PTRY2LvG.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
