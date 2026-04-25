import{e as t}from"./iframe-BtT0SffI.js";import{R as c}from"./arrayEqualityCheck-CUZpg3gX.js";import{C as d}from"./ComposedChart-Bz4spIYG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B55SCiv6.js";import{R as u}from"./RechartsHookInspector-CB7j-2_m.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D8J53oj2.js";import"./immer-BbVrPebv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-UxfXd4.js";import"./index-yehPfNJx.js";import"./hooks-DumFRXGT.js";import"./axisSelectors-BJ3ETvYB.js";import"./d3-scale-Crn8UFeD.js";import"./zIndexSlice-EIyEPPia.js";import"./renderedTicksSlice-DR61tOdZ.js";import"./CartesianChart-CmyYYHYF.js";import"./chartDataContext-D50adY5q.js";import"./CategoricalChart-CFyceSYG.js";import"./Curve-BjgRzFMd.js";import"./types-mmIvaWnd.js";import"./step-B__dH_Lt.js";import"./Layer-C7tDoNBc.js";import"./ReactUtils-BK_CWQIO.js";import"./Label-DMCJfrwq.js";import"./Text-CjXZVbw2.js";import"./DOMUtils-C0x823nG.js";import"./ZIndexLayer-Dsmg3QGj.js";import"./ActivePoints-cSdEfonb.js";import"./Dot-4SrqtSKy.js";import"./RegisterGraphicalItemId-DOATocTa.js";import"./GraphicalItemClipPath-CKGxUURQ.js";import"./SetGraphicalItem-y832ODij.js";import"./useAnimationId-Dq1v2kj_.js";import"./getRadiusAndStrokeWidthFromDot-SP98bMI8.js";import"./graphicalItemSelectors-ZGOGf_TD.js";import"./index-Da5q_Tsr.js";import"./ChartSizeDimensions-77XN8iRa.js";import"./OffsetShower-DzUOYmPE.js";import"./PlotAreaShower-CT5v2Ou7.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
