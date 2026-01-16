import{e as t}from"./iframe-BmaSkXVD.js";import{R as c}from"./arrayEqualityCheck-DFn-H49U.js";import{C as d}from"./ComposedChart-BHfLW0JN.js";import{A as l}from"./Area-lgTr6mqT.js";import{R as h}from"./RechartsHookInspector-C0qStJOJ.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cjwd7qt6.js";import"./PolarUtils-fSNmW3dt.js";import"./RechartsWrapper-CKnhTxOl.js";import"./hooks-DXbNb-JH.js";import"./axisSelectors-CSGKwTAZ.js";import"./zIndexSlice-DNtltYbu.js";import"./CartesianChart-D0l2Cukl.js";import"./chartDataContext-CSlbi7PQ.js";import"./CategoricalChart-BDvQLJnr.js";import"./Curve-Ct1DVFB9.js";import"./types-B1enpQ2U.js";import"./Layer-kGCv99f8.js";import"./ReactUtils-DF_Mupxs.js";import"./Label-Ba2fKD7_.js";import"./Text-D7kjMnBu.js";import"./DOMUtils-Ci6czfq_.js";import"./ZIndexLayer-B0Nv_sMb.js";import"./ActivePoints-Sil-gRtM.js";import"./Dot-arjLiHUj.js";import"./RegisterGraphicalItemId-DmnuQhvD.js";import"./GraphicalItemClipPath-BaRcGmKq.js";import"./SetGraphicalItem-Dkq9thq_.js";import"./useAnimationId-CSP1LMrK.js";import"./getRadiusAndStrokeWidthFromDot-BJgr5w4N.js";import"./graphicalItemSelectors-B6sYLObk.js";import"./index-D8VqDYui.js";import"./ChartSizeDimensions-BIJ2rdc4.js";import"./OffsetShower-CSh__zJW.js";import"./PlotAreaShower-B9ocgXZz.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
