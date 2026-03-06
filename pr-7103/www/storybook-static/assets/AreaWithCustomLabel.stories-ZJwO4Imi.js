import{e as t}from"./iframe-I81QGiZ0.js";import{R as c}from"./arrayEqualityCheck-DEF1A1K9.js";import{C as d}from"./ComposedChart-MHZt8Hih.js";import{A as l}from"./Area-DG-oCQeD.js";import{R as h}from"./RechartsHookInspector-CY8GaMGS.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CESK2sOz.js";import"./immer-Bx-m2dTE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhPN24j4.js";import"./index-MTHTVMV2.js";import"./hooks-BwARZfYC.js";import"./axisSelectors-D3NUsEze.js";import"./d3-scale-BKQywhX-.js";import"./zIndexSlice-BTQopzha.js";import"./renderedTicksSlice-DjaQJSKB.js";import"./CartesianChart-BgVpH7Hp.js";import"./chartDataContext-DLJ8LOtf.js";import"./CategoricalChart-Dhxptkdp.js";import"./Curve-COcp6alG.js";import"./types-CpBHwU86.js";import"./step-DCb-mqT3.js";import"./Layer-nQYqqIOO.js";import"./ReactUtils-bl8BpOYM.js";import"./Label-LA2ogkfT.js";import"./Text-CYvk9Z-R.js";import"./DOMUtils-DRotObOj.js";import"./ZIndexLayer-R3Wk8cgP.js";import"./ActivePoints-D75FV8Tu.js";import"./Dot-BGO9lVtU.js";import"./RegisterGraphicalItemId-ECNqkOOP.js";import"./GraphicalItemClipPath-BVS2WqeA.js";import"./SetGraphicalItem-D5u-UCbo.js";import"./useAnimationId-BTiaxNBH.js";import"./getRadiusAndStrokeWidthFromDot-dbaSmHwq.js";import"./graphicalItemSelectors-Bhl9ritq.js";import"./index-DG9lLNBE.js";import"./ChartSizeDimensions-BL05aSMc.js";import"./OffsetShower-B9su28DB.js";import"./PlotAreaShower-D0Rx9exC.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
