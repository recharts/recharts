import{e as t}from"./iframe-BxnpLNlI.js";import{R as c}from"./arrayEqualityCheck-Ev4pEcaj.js";import{C as d}from"./ComposedChart-B09NG58-.js";import{A as l}from"./Area-CkIf-4mR.js";import{R as h}from"./RechartsHookInspector-BB1lEmoR.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-znjuu04v.js";import"./immer-BkCi42RL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_MSRa_Ei.js";import"./index-b30Cmp9V.js";import"./hooks-C-flJ6p6.js";import"./axisSelectors-CNXspQbT.js";import"./d3-scale-ClZ26DSd.js";import"./zIndexSlice--EK8Um__.js";import"./renderedTicksSlice-BJPmxvjH.js";import"./CartesianChart-C-nBds0D.js";import"./chartDataContext-j05r-NuJ.js";import"./CategoricalChart-DZvzXAdF.js";import"./Curve-Cd2m7ztB.js";import"./types-gZ1RVbMB.js";import"./step-ClrTL6ck.js";import"./Layer-CjPvoy9w.js";import"./ReactUtils-BdNEbP_1.js";import"./Label-BJJgujul.js";import"./Text-lfWzmX-o.js";import"./DOMUtils-BwcWjDda.js";import"./ZIndexLayer-BFJ6fW_I.js";import"./ActivePoints-BBEugXOU.js";import"./Dot-yJDT37nk.js";import"./RegisterGraphicalItemId-D2g_8__I.js";import"./GraphicalItemClipPath-BWEZTu7p.js";import"./SetGraphicalItem-legQuKyA.js";import"./useAnimationId-BkMfgj6S.js";import"./getRadiusAndStrokeWidthFromDot-TgdqzR3J.js";import"./graphicalItemSelectors-D-2Vs4Am.js";import"./index-D27xip60.js";import"./ChartSizeDimensions-CkjlP-Hw.js";import"./OffsetShower-tOvUkh5S.js";import"./PlotAreaShower-IShq8O5s.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
