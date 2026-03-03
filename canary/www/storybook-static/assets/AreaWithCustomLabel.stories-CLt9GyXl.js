import{e as t}from"./iframe-DrGUwCNH.js";import{R as c}from"./arrayEqualityCheck-B-thuthJ.js";import{C as d}from"./ComposedChart-BhneGLLj.js";import{A as l}from"./Area-CaubPDzf.js";import{R as h}from"./RechartsHookInspector-DVkoldVn.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8l4f8zq.js";import"./immer-BtgqId3I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5QstiPk.js";import"./index-BPQwAQcQ.js";import"./hooks-MsD78rw6.js";import"./axisSelectors-DWkWWbr7.js";import"./d3-scale-ByzzBKwW.js";import"./zIndexSlice-C-eL6wuf.js";import"./renderedTicksSlice-BCPFeSIm.js";import"./CartesianChart-BEBwYk77.js";import"./chartDataContext-DU0L_61O.js";import"./CategoricalChart-CUzGTCjp.js";import"./Curve-ywtP4oOQ.js";import"./types-P3EO869A.js";import"./step-DKLDrfb1.js";import"./Layer-DOWBbL5h.js";import"./ReactUtils-C94_zE_J.js";import"./Label-B7C6-KkD.js";import"./Text-D0fVjYHK.js";import"./DOMUtils-Jzh5BZY9.js";import"./ZIndexLayer-CBw-SdHg.js";import"./ActivePoints-jvJhuq8B.js";import"./Dot-BB3Ssy69.js";import"./RegisterGraphicalItemId-CU0Tu66M.js";import"./GraphicalItemClipPath-DHoOCBG2.js";import"./SetGraphicalItem-BU2rvKVc.js";import"./useAnimationId-CM7jQqD0.js";import"./getRadiusAndStrokeWidthFromDot-Cc6LxlfS.js";import"./graphicalItemSelectors-DdKGU9xu.js";import"./index-3x6YcQkr.js";import"./ChartSizeDimensions-DRKtapfC.js";import"./OffsetShower-7BYMSgLY.js";import"./PlotAreaShower-BXy-ESLg.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
