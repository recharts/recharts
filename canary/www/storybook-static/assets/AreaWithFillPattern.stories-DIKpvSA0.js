import{e as t}from"./iframe-m4iUvHHE.js";import{R as p}from"./arrayEqualityCheck-h_ZmhyNH.js";import{C as m}from"./ComposedChart-C6EOsY3Y.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D79HM4Qy.js";import{R as l}from"./RechartsHookInspector-DquHYSn_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyxbBsOP.js";import"./immer-g1bGLmSg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-F72CiqvA.js";import"./index-CrxMp6gE.js";import"./hooks-DWsntCpj.js";import"./axisSelectors-DfPlbHbP.js";import"./d3-scale-Y-jFDeRI.js";import"./zIndexSlice-CKy2olf2.js";import"./renderedTicksSlice-BEB6E7mo.js";import"./CartesianChart-_tfuwHZj.js";import"./chartDataContext-BiqezE3h.js";import"./CategoricalChart-9uAdVsVQ.js";import"./Curve-lACOSqJl.js";import"./types-ipm49NW_.js";import"./step-BaU1N5Sx.js";import"./Layer-CcrS99IB.js";import"./ReactUtils-BGxD9cqm.js";import"./Label-BCusTt26.js";import"./Text-B9di0q31.js";import"./DOMUtils-BJmvgBqy.js";import"./ZIndexLayer-DebxKBww.js";import"./ActivePoints-MuJUPiBM.js";import"./Dot-NbYBXchV.js";import"./RegisterGraphicalItemId-uusu-k8r.js";import"./GraphicalItemClipPath-BgZNml_V.js";import"./SetGraphicalItem-DEb8ASoe.js";import"./useAnimationId-CowdAHeu.js";import"./getRadiusAndStrokeWidthFromDot-uhw_xs2j.js";import"./graphicalItemSelectors-9l1_z7YU.js";import"./index-5r_S6fe4.js";import"./ChartSizeDimensions-L8mur3p1.js";import"./OffsetShower-BU7tduPK.js";import"./PlotAreaShower-C2wXuw9M.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
