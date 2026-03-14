import{e as t}from"./iframe-Bv9A2uSW.js";import{R as c}from"./arrayEqualityCheck-40Pjb_0H.js";import{C as d}from"./ComposedChart-8suCaxCV.js";import{A as l}from"./Area-mMzj4BgV.js";import{R as h}from"./RechartsHookInspector-gKybnL4n.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Y5jGROg-.js";import"./immer-Ch1CAK4c.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BINnaSWf.js";import"./index-CYS6IjLh.js";import"./hooks-BFXhp1mb.js";import"./axisSelectors-C-Y5dRy9.js";import"./d3-scale-B-GeqdsZ.js";import"./zIndexSlice-BDVZwdE1.js";import"./renderedTicksSlice-fUxzen-N.js";import"./CartesianChart-DVCnbG_A.js";import"./chartDataContext-Cx-F6gwT.js";import"./CategoricalChart-BfArJY5o.js";import"./Curve-g-TKkld0.js";import"./types-BNfpUJFf.js";import"./step-Dhxu0QC9.js";import"./Layer-BOAumolw.js";import"./ReactUtils-Be8qMHP_.js";import"./Label-Dk_EOWAk.js";import"./Text-ByTWddCc.js";import"./DOMUtils-DLZp3yaw.js";import"./ZIndexLayer-DOKoEx6m.js";import"./ActivePoints-DpwJQ3PC.js";import"./Dot-BOg88zsH.js";import"./RegisterGraphicalItemId-Dztj5ea7.js";import"./GraphicalItemClipPath-Ce74-Utf.js";import"./SetGraphicalItem-CrMe5qpl.js";import"./useAnimationId-5b7iZFah.js";import"./getRadiusAndStrokeWidthFromDot-EXhvIgor.js";import"./graphicalItemSelectors-CJ_jibX-.js";import"./index-B_DT_wU1.js";import"./ChartSizeDimensions-DOZqpgqC.js";import"./OffsetShower-CWVYqkue.js";import"./PlotAreaShower-DuXT_1jY.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
