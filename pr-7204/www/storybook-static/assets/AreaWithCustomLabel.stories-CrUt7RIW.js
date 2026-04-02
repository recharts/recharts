import{e as t}from"./iframe-DMXQsXpg.js";import{R as c}from"./arrayEqualityCheck-DpCaYOUy.js";import{C as d}from"./ComposedChart-C_9L2kYo.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Cy9Rs8nE.js";import{R as u}from"./RechartsHookInspector-DV0idGEz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BsNYhyCK.js";import"./immer-B5TQSQqr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChN5mZ6F.js";import"./index-DZj5OYW4.js";import"./hooks-C4vpoiWQ.js";import"./axisSelectors-X23Vd1nJ.js";import"./d3-scale-Bobv8k5F.js";import"./zIndexSlice-Dh14LjCV.js";import"./renderedTicksSlice-BIIBkKaJ.js";import"./CartesianChart-C5uIkm2y.js";import"./chartDataContext-B6GLUasA.js";import"./CategoricalChart-DG_cN0Ky.js";import"./Curve-GkC_ASL4.js";import"./types-B0XKp7Ez.js";import"./step-H2086VjI.js";import"./Layer-CsEtKw3I.js";import"./ReactUtils-L5lhC8e-.js";import"./Label-Bs69Id3P.js";import"./Text-DQkAUreQ.js";import"./DOMUtils-DhuzsS5O.js";import"./ZIndexLayer-DFpiev-3.js";import"./ActivePoints-DFVFlhAU.js";import"./Dot-CxhIYeV3.js";import"./RegisterGraphicalItemId-oMcfFNkt.js";import"./GraphicalItemClipPath-D6CWKVU-.js";import"./SetGraphicalItem-Cl2qZBgg.js";import"./useAnimationId-VTFMqu0p.js";import"./getRadiusAndStrokeWidthFromDot-ng_fUBoa.js";import"./graphicalItemSelectors-DYCPftIy.js";import"./index-vcH36-MF.js";import"./ChartSizeDimensions-DEoCz00F.js";import"./OffsetShower-BjIJhAjd.js";import"./PlotAreaShower-DKns50Z6.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
