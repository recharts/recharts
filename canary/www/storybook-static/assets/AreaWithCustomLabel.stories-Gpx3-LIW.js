import{e as t}from"./iframe-CV07hTJo.js";import{R as c}from"./arrayEqualityCheck-DZYwMANi.js";import{C as d}from"./ComposedChart-DtynIp2o.js";import{A as l}from"./Area-Dw1GFpC2.js";import{R as h}from"./RechartsHookInspector-ouq6dPls.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps--Z_AJC6X.js";import"./immer-DZr-3B4h.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_A_zLwr.js";import"./index-BbPZUkKO.js";import"./hooks-hiQan1d_.js";import"./axisSelectors-Colr1FXT.js";import"./d3-scale-Dsv-X1x3.js";import"./zIndexSlice-bGazLamm.js";import"./renderedTicksSlice-BVud2Eit.js";import"./CartesianChart-DxPhfcnf.js";import"./chartDataContext-Diiede2r.js";import"./CategoricalChart-BXVtqco4.js";import"./Curve-6Ct2z4dM.js";import"./types-BW-iMsEE.js";import"./step-DxAhMwRF.js";import"./Layer-CjSu9kHg.js";import"./ReactUtils-C6WIusF5.js";import"./Label-DYpp1LIm.js";import"./Text-DQ9H0cYG.js";import"./DOMUtils-tjr3CYLs.js";import"./ZIndexLayer-Bsxd_xbk.js";import"./ActivePoints-DKxtfJTG.js";import"./Dot-CJkLJ9KV.js";import"./RegisterGraphicalItemId-C78YkPgS.js";import"./GraphicalItemClipPath-DbLJ1P35.js";import"./SetGraphicalItem-CWJSiYUF.js";import"./useAnimationId-DLuTmxa5.js";import"./getRadiusAndStrokeWidthFromDot-DlSSP4S2.js";import"./graphicalItemSelectors-B3j-xLsb.js";import"./index-NB669Q6L.js";import"./ChartSizeDimensions-DYT9YPss.js";import"./OffsetShower-CIa2yD69.js";import"./PlotAreaShower-Lc3Ppbaa.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
