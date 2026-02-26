import{e as t}from"./iframe-Ch2H383w.js";import{R as c}from"./arrayEqualityCheck-CcoXvTIe.js";import{C as d}from"./ComposedChart-IGKBWSvp.js";import{A as l}from"./Area-BseANbsd.js";import{R as h}from"./RechartsHookInspector-BJIWLpAN.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ce5Vf20-.js";import"./immer-CuzWzTfz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B4us9W1h.js";import"./index-B83dRs4n.js";import"./hooks-CSqGm2Vh.js";import"./axisSelectors-D5kbvOqb.js";import"./d3-scale--P9_UiJN.js";import"./zIndexSlice-D0Km72rD.js";import"./renderedTicksSlice-Cpaoi516.js";import"./CartesianChart-Bsy01o0m.js";import"./chartDataContext-Dkm8eTMR.js";import"./CategoricalChart-DRsF6Hco.js";import"./Curve-BBxbYyGH.js";import"./types-yO-TS24R.js";import"./step-BoAzBu0R.js";import"./Layer-yB3Q88eR.js";import"./ReactUtils-BnK3eejK.js";import"./Label-h8Lj8ZpR.js";import"./Text-CMCGaMex.js";import"./DOMUtils-DvEd-B07.js";import"./ZIndexLayer-Bo-lDWay.js";import"./ActivePoints-DcrHd6tF.js";import"./Dot-CviiMKw7.js";import"./RegisterGraphicalItemId-DrnJwnvQ.js";import"./GraphicalItemClipPath-rQxmGc46.js";import"./SetGraphicalItem-BZ3_hlL3.js";import"./useAnimationId-dRwxXRVb.js";import"./getRadiusAndStrokeWidthFromDot-D-cthvwF.js";import"./graphicalItemSelectors-CbMnGhzf.js";import"./index-DtZkbyPi.js";import"./ChartSizeDimensions-7l9XUt5L.js";import"./OffsetShower-DDeP8nwr.js";import"./PlotAreaShower-CC7ji8nO.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
