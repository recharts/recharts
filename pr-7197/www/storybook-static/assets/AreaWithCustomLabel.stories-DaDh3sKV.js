import{e as t}from"./iframe-Bg9Z345n.js";import{R as c}from"./arrayEqualityCheck-CR8W5Kti.js";import{C as d}from"./ComposedChart-XHqgTgy-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-zsfliXcl.js";import{R as u}from"./RechartsHookInspector-DZje97zi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1kFCboKo.js";import"./immer-BVutyhQF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8iTtnHJd.js";import"./index-DmHLw308.js";import"./hooks-BQaOS62t.js";import"./axisSelectors-26bP4L-h.js";import"./d3-scale-Dqhx0vW7.js";import"./zIndexSlice-peT_55F_.js";import"./renderedTicksSlice-By7COYk0.js";import"./CartesianChart-LuczCI7G.js";import"./chartDataContext-UodH6WPb.js";import"./CategoricalChart-DxtCX4Pl.js";import"./Curve-CW_ra8M9.js";import"./types-B4W4ehrV.js";import"./step-DoGAfiJ-.js";import"./Layer-BdGV6vMM.js";import"./ReactUtils-BmxePv9D.js";import"./Label-CELZqSQs.js";import"./Text-DxC6lCk_.js";import"./DOMUtils-DkCGUMsy.js";import"./ZIndexLayer-DPL5778T.js";import"./ActivePoints-BR-WzUNj.js";import"./Dot-Bp1BlqgP.js";import"./RegisterGraphicalItemId-CQ218WRb.js";import"./GraphicalItemClipPath-DwPF2ph8.js";import"./SetGraphicalItem-H_2GMEv6.js";import"./useAnimationId-DlZyApEc.js";import"./getRadiusAndStrokeWidthFromDot-DAE3CzX3.js";import"./graphicalItemSelectors-Yc6FaWda.js";import"./index-CjwjTBDZ.js";import"./ChartSizeDimensions-Uo90Geyy.js";import"./OffsetShower-C3m1IvZt.js";import"./PlotAreaShower-CfpcGPOz.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
