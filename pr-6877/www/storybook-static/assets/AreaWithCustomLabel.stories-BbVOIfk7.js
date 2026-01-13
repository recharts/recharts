import{e as t}from"./iframe-BIMs3Nj-.js";import{R as c}from"./arrayEqualityCheck-pDlZyWSR.js";import{C as d}from"./ComposedChart-DZntHa2l.js";import{A as l}from"./Area-kd-IdQnH.js";import{R as h}from"./RechartsHookInspector-DBOIj4qW.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_VwJ3u_.js";import"./PolarUtils-BWV_hv32.js";import"./RechartsWrapper-Bo8-B70G.js";import"./hooks-Bc7hX-2Z.js";import"./axisSelectors-NKchjqRS.js";import"./zIndexSlice-Cnolt5PP.js";import"./CartesianChart-BUJVTvnU.js";import"./chartDataContext-Dko-7FeN.js";import"./CategoricalChart-DCejedhJ.js";import"./Curve-DwuONHqE.js";import"./types-CnKH5I-b.js";import"./Layer-DBgzSzH_.js";import"./ReactUtils-3uFwj_TO.js";import"./Label-CIRwRBMZ.js";import"./Text-CgjsJcds.js";import"./DOMUtils-voeX-mFj.js";import"./ZIndexLayer-DJ3JTFRU.js";import"./ActivePoints-Dga_4R6z.js";import"./Dot-DH_B4APi.js";import"./RegisterGraphicalItemId-DeUg8eaE.js";import"./GraphicalItemClipPath-Bw0KLcwW.js";import"./SetGraphicalItem-D5C3EpbS.js";import"./useAnimationId-DJ77ibSq.js";import"./getRadiusAndStrokeWidthFromDot-Cc2fOwDf.js";import"./graphicalItemSelectors-BzaNkFBM.js";import"./index-CngAoIpS.js";import"./ChartSizeDimensions-C2UWIaZL.js";import"./OffsetShower-DVFE9F3Y.js";import"./PlotAreaShower-DBdBZo3w.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
