import{e as t}from"./iframe-BDbjAAY0.js";import{R as c}from"./arrayEqualityCheck-DJY85fxA.js";import{C as d}from"./ComposedChart-DUpW5Dqy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CJrpvdB3.js";import{R as u}from"./RechartsHookInspector-l9vgHPs1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-Zx47ck.js";import"./immer-3ylQEXI_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Gh-MCRwt.js";import"./index-BhpTR8oZ.js";import"./hooks-C0v4GivV.js";import"./axisSelectors-DbWMAUln.js";import"./d3-scale-BNnaBGak.js";import"./zIndexSlice-CHJt3ZwD.js";import"./renderedTicksSlice-CKF1aMX1.js";import"./CartesianChart-CLKXkeKc.js";import"./chartDataContext-BKhnDKi8.js";import"./CategoricalChart-DHzD4_v9.js";import"./Curve-0uMvsclI.js";import"./types-rcyNgq1E.js";import"./step-EtEDGKHl.js";import"./Layer-ChHYMtjc.js";import"./ReactUtils-BoM_s_He.js";import"./Label-CjqdpviA.js";import"./Text-BIZLV0ge.js";import"./DOMUtils-BrS2Cx0f.js";import"./ZIndexLayer-DzwMAaCJ.js";import"./ActivePoints-ChWVh6u7.js";import"./Dot-CKhpqWMa.js";import"./RegisterGraphicalItemId-C7xusUhZ.js";import"./GraphicalItemClipPath-DAX0DDhK.js";import"./SetGraphicalItem-BNU0IRAh.js";import"./useAnimationId--rOGa3cY.js";import"./getRadiusAndStrokeWidthFromDot-DcUffzmW.js";import"./graphicalItemSelectors-D9W_uuYm.js";import"./index-s419WJjU.js";import"./ChartSizeDimensions-DpPbcXoW.js";import"./OffsetShower-0WW1yvr8.js";import"./PlotAreaShower-BpI_n9Qg.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
