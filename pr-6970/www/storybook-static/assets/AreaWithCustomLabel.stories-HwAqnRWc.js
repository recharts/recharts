import{e as t}from"./iframe-DMofGbdh.js";import{R as c}from"./arrayEqualityCheck-CsoqXgVI.js";import{C as d}from"./ComposedChart-k3-ghRdj.js";import{A as l}from"./Area-D318B20H.js";import{R as h}from"./RechartsHookInspector-DJgQFG2f.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cr3Nq4ZU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7CsVMpm.js";import"./hooks-DQLTrr19.js";import"./axisSelectors-CeuWGW4U.js";import"./zIndexSlice-CsA5GGWo.js";import"./CartesianChart-DWOZMVOy.js";import"./chartDataContext-K-dQ-k-3.js";import"./CategoricalChart-D_GR9jLw.js";import"./Curve-Dep4Vom7.js";import"./types-DMK1Hrm-.js";import"./Layer-BiV0mvq6.js";import"./ReactUtils-Dv6d3MQ5.js";import"./Label-DxmFoslz.js";import"./Text-BOWHjgiZ.js";import"./DOMUtils-DCHqYg2a.js";import"./ZIndexLayer-CWIihq-M.js";import"./ActivePoints-CDeWGkl5.js";import"./Dot-_CebNPSK.js";import"./RegisterGraphicalItemId-D7ibYuhl.js";import"./GraphicalItemClipPath-mCG1gtli.js";import"./SetGraphicalItem-ttx2b7Qz.js";import"./useAnimationId-CkpaA0hy.js";import"./getRadiusAndStrokeWidthFromDot-a8uwl8jU.js";import"./graphicalItemSelectors-BKG7KUv5.js";import"./index-B5a3_tnM.js";import"./ChartSizeDimensions-qqjl0QHD.js";import"./OffsetShower-E8NqoCsg.js";import"./PlotAreaShower-DPYwAHFd.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
