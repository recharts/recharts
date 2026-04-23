import{e as t}from"./iframe-C1fnHnKT.js";import{R as c}from"./arrayEqualityCheck-l6uT4Usv.js";import{C as d}from"./ComposedChart-DzEnoNHN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BMR-DL_k.js";import{R as u}from"./RechartsHookInspector-ewceuCfq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0awOkESO.js";import"./immer-hlXcvFio.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsoN9NQZ.js";import"./index-C2jDSQT9.js";import"./hooks-D4TdCpxu.js";import"./axisSelectors-AIxg2YTu.js";import"./d3-scale-Br8Qy1nV.js";import"./zIndexSlice-BoAv0LH1.js";import"./renderedTicksSlice-DAUXyaQX.js";import"./CartesianChart-DJhd_WoR.js";import"./chartDataContext-DOE3KdCn.js";import"./CategoricalChart-oohW2fAH.js";import"./Curve-CnB-6T_0.js";import"./types-C6vI6gcr.js";import"./step-BfW9Id0A.js";import"./Layer-BIYNx1xN.js";import"./ReactUtils-Dm1SJpk1.js";import"./Label-8_9z-Hx3.js";import"./Text-BUAHuXAg.js";import"./DOMUtils-CXwfjRJu.js";import"./ZIndexLayer-UU7tiK14.js";import"./ActivePoints-CLnaFdlX.js";import"./Dot-CuqwvLTE.js";import"./RegisterGraphicalItemId-BcT6ipJt.js";import"./GraphicalItemClipPath-_2MLatM1.js";import"./SetGraphicalItem-ByOhwbI-.js";import"./useAnimationId-mn0ugSXH.js";import"./getRadiusAndStrokeWidthFromDot-DMYxlHUI.js";import"./graphicalItemSelectors-BL-bJ5qU.js";import"./index-BXsfGSea.js";import"./ChartSizeDimensions-Dhy2eg61.js";import"./OffsetShower-C23rQ0FG.js";import"./PlotAreaShower-P9zfdMTd.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
