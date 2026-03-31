import{e as t}from"./iframe-R35hz9hm.js";import{R as p}from"./arrayEqualityCheck-l_dnVtmw.js";import{C as m}from"./ComposedChart-4PYTru1q.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-zckAXuFP.js";import{R as l}from"./RechartsHookInspector-DP3Qs2H_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DfULgVhS.js";import"./immer-CFK8uJ_y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BzZW_8cp.js";import"./index-BFs7fXnY.js";import"./hooks-DwD3G30p.js";import"./axisSelectors-BZF7ob4Z.js";import"./d3-scale-DK92Q0IA.js";import"./zIndexSlice-DymzsNPY.js";import"./renderedTicksSlice-DFK-mhd6.js";import"./CartesianChart-dKVKHPad.js";import"./chartDataContext-B0058VjU.js";import"./CategoricalChart-BeKpYgsM.js";import"./Curve-C1o9Us3j.js";import"./types-CncuKFdL.js";import"./step-BTcv05YG.js";import"./Layer-NhMRn63k.js";import"./ReactUtils-CnWgF_pv.js";import"./Label-CVLCzJ8S.js";import"./Text-CIuibZ8V.js";import"./DOMUtils-CUUuW9k8.js";import"./ZIndexLayer-BeTprR_g.js";import"./ActivePoints-CEGTpw3Q.js";import"./Dot-DYh4HsOt.js";import"./RegisterGraphicalItemId-CFhaP5Xg.js";import"./GraphicalItemClipPath-C9lbZ9U9.js";import"./SetGraphicalItem-CXTqk9fv.js";import"./useAnimationId-bDa-RfQI.js";import"./getRadiusAndStrokeWidthFromDot-DdT_lr8z.js";import"./graphicalItemSelectors-B4uC_GkR.js";import"./index-Dr19aGzn.js";import"./ChartSizeDimensions-CNipumKi.js";import"./OffsetShower-BtN_LmjI.js";import"./PlotAreaShower-DeWLuHk-.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
