import{e as t}from"./iframe-BtT0SffI.js";import{R as p}from"./arrayEqualityCheck-CUZpg3gX.js";import{C as m}from"./ComposedChart-Bz4spIYG.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B55SCiv6.js";import{R as l}from"./RechartsHookInspector-CB7j-2_m.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D8J53oj2.js";import"./immer-BbVrPebv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-UxfXd4.js";import"./index-yehPfNJx.js";import"./hooks-DumFRXGT.js";import"./axisSelectors-BJ3ETvYB.js";import"./d3-scale-Crn8UFeD.js";import"./zIndexSlice-EIyEPPia.js";import"./renderedTicksSlice-DR61tOdZ.js";import"./CartesianChart-CmyYYHYF.js";import"./chartDataContext-D50adY5q.js";import"./CategoricalChart-CFyceSYG.js";import"./Curve-BjgRzFMd.js";import"./types-mmIvaWnd.js";import"./step-B__dH_Lt.js";import"./Layer-C7tDoNBc.js";import"./ReactUtils-BK_CWQIO.js";import"./Label-DMCJfrwq.js";import"./Text-CjXZVbw2.js";import"./DOMUtils-C0x823nG.js";import"./ZIndexLayer-Dsmg3QGj.js";import"./ActivePoints-cSdEfonb.js";import"./Dot-4SrqtSKy.js";import"./RegisterGraphicalItemId-DOATocTa.js";import"./GraphicalItemClipPath-CKGxUURQ.js";import"./SetGraphicalItem-y832ODij.js";import"./useAnimationId-Dq1v2kj_.js";import"./getRadiusAndStrokeWidthFromDot-SP98bMI8.js";import"./graphicalItemSelectors-ZGOGf_TD.js";import"./index-Da5q_Tsr.js";import"./ChartSizeDimensions-77XN8iRa.js";import"./OffsetShower-DzUOYmPE.js";import"./PlotAreaShower-CT5v2Ou7.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
