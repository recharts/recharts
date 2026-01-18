import{e as t}from"./iframe-DZy4Dead.js";import{R as c}from"./arrayEqualityCheck-ApBChTfQ.js";import{C as d}from"./ComposedChart-B1Kc7L3U.js";import{A as l}from"./Area-D5XNwEb-.js";import{R as h}from"./RechartsHookInspector-BQ2LFFE8.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bf5GaSqV.js";import"./PolarUtils-Dc-YJkTz.js";import"./RechartsWrapper-nPRv-TTN.js";import"./hooks-ajKNzoip.js";import"./axisSelectors-CNnm75NT.js";import"./zIndexSlice-BHURSyYA.js";import"./CartesianChart-C9Umwsg3.js";import"./chartDataContext-C_SJIf2I.js";import"./CategoricalChart-Da7z_ebg.js";import"./Curve-ChmxEyvD.js";import"./types-BfEpf9p_.js";import"./Layer-Bpoel1Lp.js";import"./ReactUtils-MfSKnK6Q.js";import"./Label-BnGgD6KR.js";import"./Text-68IXtrlK.js";import"./DOMUtils-DwLev0Y8.js";import"./ZIndexLayer-DncsytRr.js";import"./ActivePoints-Kh0sgV9R.js";import"./Dot-DpvXwtTp.js";import"./RegisterGraphicalItemId-DFrBVe2X.js";import"./GraphicalItemClipPath-DT3FtvpA.js";import"./SetGraphicalItem-6vLNF4l0.js";import"./useAnimationId-C4mX0K92.js";import"./getRadiusAndStrokeWidthFromDot-BGEPQyal.js";import"./graphicalItemSelectors-CKsL1OhO.js";import"./index-SrSy7NGQ.js";import"./ChartSizeDimensions-DagnIVtO.js";import"./OffsetShower-C8_o4Gkp.js";import"./PlotAreaShower-CJCyQCMM.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
