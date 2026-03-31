import{e as t}from"./iframe-BOzdYMSK.js";import{R as c}from"./arrayEqualityCheck-C-L8EdU9.js";import{C as d}from"./ComposedChart-CMGQFiN-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B_ZGZNUz.js";import{R as u}from"./RechartsHookInspector-BxQ7npCV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2gE7AyU9.js";import"./immer-BswUgWWB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKlBI8B-.js";import"./index-DlDmkRAf.js";import"./hooks-DABVmJA-.js";import"./axisSelectors-D0SqUNzA.js";import"./d3-scale-BLmRkdBI.js";import"./zIndexSlice-C7XasEZZ.js";import"./renderedTicksSlice-Br0n-FAv.js";import"./CartesianChart-CYCDZmDe.js";import"./chartDataContext-CLnWO5Qo.js";import"./CategoricalChart-DnUtLsS8.js";import"./Curve-BClDVh5D.js";import"./types-o0ZEOggY.js";import"./step-C508TLAF.js";import"./Layer-B9qQTSv5.js";import"./ReactUtils-B7_pPpqU.js";import"./Label-Dx_BRROg.js";import"./Text-BrQPjMdx.js";import"./DOMUtils-BtSYpCvp.js";import"./ZIndexLayer-DSuS-vq3.js";import"./ActivePoints-pX3DuQoW.js";import"./Dot-B9xnb9v8.js";import"./RegisterGraphicalItemId-BExwrCQG.js";import"./GraphicalItemClipPath-CABkDL1Y.js";import"./SetGraphicalItem-CvulM7lS.js";import"./useAnimationId-DdiGbGls.js";import"./getRadiusAndStrokeWidthFromDot-DHr5ycqw.js";import"./graphicalItemSelectors-CFGD2c0Y.js";import"./index-DozVodwh.js";import"./ChartSizeDimensions-DfVhVyBn.js";import"./OffsetShower-Cv0VvbUT.js";import"./PlotAreaShower-DAwEQHde.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
