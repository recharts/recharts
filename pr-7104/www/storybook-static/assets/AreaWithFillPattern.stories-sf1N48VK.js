import{e as t}from"./iframe-B_nHVd2r.js";import{R as p}from"./arrayEqualityCheck-DY9D726-.js";import{C as m}from"./ComposedChart-D26vWmHk.js";import{A as r}from"./Area-wD8y3E8R.js";import{R as s}from"./RechartsHookInspector-fNULTbt1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4kbUPRd1.js";import"./immer-BI8B3IAj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzqzeMkT.js";import"./index-Ccd-ueyn.js";import"./hooks-J0Oqh1od.js";import"./axisSelectors-BMRY7YQG.js";import"./d3-scale-B9XrMCDb.js";import"./zIndexSlice-CcXit2BS.js";import"./renderedTicksSlice-BzSKsfOY.js";import"./CartesianChart-DEWcUEuJ.js";import"./chartDataContext-CnxSTV7I.js";import"./CategoricalChart-BQ2UlDix.js";import"./Curve-RQsVLKEt.js";import"./types-BNmhs72m.js";import"./step-DYOoDPDf.js";import"./Layer-CuJ2fFlM.js";import"./ReactUtils-DvQ3Bihg.js";import"./Label-Dso9Y4kd.js";import"./Text-DiyzG_aV.js";import"./DOMUtils-DYxHXfua.js";import"./ZIndexLayer-BUYIYBsc.js";import"./ActivePoints-kvA6RkM9.js";import"./Dot-Bdj5CCRw.js";import"./RegisterGraphicalItemId-DYT3txR2.js";import"./GraphicalItemClipPath-rjxHDAAK.js";import"./SetGraphicalItem-BcnT6vB3.js";import"./useAnimationId-DeeI7Yuu.js";import"./getRadiusAndStrokeWidthFromDot-DJFnzptW.js";import"./graphicalItemSelectors-BHacZKyI.js";import"./index-D4ywjx6k.js";import"./ChartSizeDimensions-CZvd_Zg7.js";import"./OffsetShower-8fEwfkJg.js";import"./PlotAreaShower-DdlKlbvs.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
