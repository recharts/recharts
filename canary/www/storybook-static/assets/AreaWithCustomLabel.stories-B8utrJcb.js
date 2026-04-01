import{e as t}from"./iframe-DY46aw1T.js";import{R as c}from"./arrayEqualityCheck-0_K9klWl.js";import{C as d}from"./ComposedChart-xNspB-SJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Ct3pvEyB.js";import{R as u}from"./RechartsHookInspector-DkRCe0AE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cb7Us82j.js";import"./immer-BvCcuZ6o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSeg5AQz.js";import"./index-D_nfX1S8.js";import"./hooks-nf1zKR0g.js";import"./axisSelectors-C9B6Wugz.js";import"./d3-scale-DfNPAUjz.js";import"./zIndexSlice-CoVcCSuo.js";import"./renderedTicksSlice-D-nZzoJO.js";import"./CartesianChart-DO22hXPG.js";import"./chartDataContext-DXzlJMXH.js";import"./CategoricalChart-DUj4pKmY.js";import"./Curve-DQutT_ql.js";import"./types-Dtzv1a1O.js";import"./step-CyrTl9M_.js";import"./Layer-hFhQiM_L.js";import"./ReactUtils-Cz-9gufx.js";import"./Label-BXRSGziE.js";import"./Text-BzNExQTR.js";import"./DOMUtils-DGEQ3O38.js";import"./ZIndexLayer-DnZ_K0Nx.js";import"./ActivePoints-BQsjSyf0.js";import"./Dot-Bs5nAcv2.js";import"./RegisterGraphicalItemId-wZiFGjJl.js";import"./GraphicalItemClipPath-BxX-Y-FU.js";import"./SetGraphicalItem-V1giDG84.js";import"./useAnimationId-Zdg7gWN0.js";import"./getRadiusAndStrokeWidthFromDot-BlOwTSD5.js";import"./graphicalItemSelectors-l57etwjZ.js";import"./index-Bfh64D8_.js";import"./ChartSizeDimensions-Cyi7sjqL.js";import"./OffsetShower-Ci2ghI7q.js";import"./PlotAreaShower-DdXIA49x.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
