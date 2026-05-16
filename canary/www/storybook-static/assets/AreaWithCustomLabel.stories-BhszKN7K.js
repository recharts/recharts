import{e as t}from"./iframe-De3AYcmL.js";import{g as c}from"./arrayEqualityCheck-8J4d381_.js";import{C as d}from"./ComposedChart-BkLYbBCh.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-CCVjOofx.js";import{R as u}from"./RechartsHookInspector-D_q1sFah.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CcM6EHAr.js";import"./immer-B3IrcYoh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-zGbVOYaW.js";import"./index-uL_5FIKS.js";import"./hooks-B6mrGJaY.js";import"./axisSelectors-0INLWORQ.js";import"./d3-scale-C-QBsPkn.js";import"./zIndexSlice-pmRq5Z0K.js";import"./renderedTicksSlice-CJRhDBm9.js";import"./CartesianChart-BqrRTf2N.js";import"./chartDataContext-CqPzveAf.js";import"./CategoricalChart-7Ea_WF3s.js";import"./Curve-C6hmNTxr.js";import"./types-B0moMXXW.js";import"./step-CaS84Y98.js";import"./Layer-CvP2ZRzB.js";import"./ReactUtils-smyHXU-m.js";import"./Label-BNrDAtep.js";import"./Text-C6Iq6Q5F.js";import"./DOMUtils-CspO4-oS.js";import"./ZIndexLayer-CofVuiDD.js";import"./ActivePoints-DLYoMrZC.js";import"./Dot-B4Ai6LOf.js";import"./RegisterGraphicalItemId-DAYanOqB.js";import"./GraphicalItemClipPath-CJOH5ivR.js";import"./SetGraphicalItem-Cu0fWv08.js";import"./useAnimationId-DfOYRRzz.js";import"./getRadiusAndStrokeWidthFromDot-CyShnh2z.js";import"./graphicalItemSelectors-ClrANwM6.js";import"./index-5m3zpj_N.js";import"./ChartSizeDimensions-DhJtSzTW.js";import"./OffsetShower-C6EyWY-L.js";import"./PlotAreaShower-Ddz7JCST.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
