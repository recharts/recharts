import{e as t}from"./iframe-CxdcV2iU.js";import{R as c}from"./arrayEqualityCheck-DE5QCts1.js";import{C as d}from"./ComposedChart-5IQX-f6S.js";import{A as l}from"./Area-yvEL_mqw.js";import{R as h}from"./RechartsHookInspector-Cmn_3oAZ.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BPgO4-u0.js";import"./immer-DbqgSjuj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xlhT3EQD.js";import"./index-DQ1yjceL.js";import"./hooks-yyrPm8Tk.js";import"./axisSelectors-DYgSuTD7.js";import"./d3-scale-C-pis2q-.js";import"./zIndexSlice-DIhuoP2j.js";import"./renderedTicksSlice-DjqA2mFu.js";import"./CartesianChart-DuL6NNnl.js";import"./chartDataContext-yNk83f89.js";import"./CategoricalChart-3r6RgUng.js";import"./Curve-BibSVypT.js";import"./types-d6h03Wgd.js";import"./step-D4kO6QN2.js";import"./Layer-C-TFz9Vn.js";import"./ReactUtils-BTiU_wBS.js";import"./Label-BgXSQpWc.js";import"./Text-gpiQWITt.js";import"./DOMUtils-C9YYP4cZ.js";import"./ZIndexLayer-CWN6c1mH.js";import"./ActivePoints-wIbpr4RN.js";import"./Dot-fd7eIvkn.js";import"./RegisterGraphicalItemId-Cdy6MSjO.js";import"./GraphicalItemClipPath-CIKZm01y.js";import"./SetGraphicalItem-C9igpr7g.js";import"./useAnimationId-LJTPfExM.js";import"./getRadiusAndStrokeWidthFromDot-BgclTB9C.js";import"./graphicalItemSelectors-Bs-xZQV7.js";import"./index-8erOpdWv.js";import"./ChartSizeDimensions-yUCjMHhs.js";import"./OffsetShower-BFUvvsPo.js";import"./PlotAreaShower-BtFJQ4W6.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
