import{e as t}from"./iframe-HklBE7vu.js";import{g as c}from"./arrayEqualityCheck-CG9NM7M7.js";import{C as d}from"./ComposedChart-BGfN3j9r.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-CKTyfNsD.js";import{R as u}from"./RechartsHookInspector-CROecA9e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CmkmsSRd.js";import"./immer-B5bJcxrJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYIG_iFP.js";import"./index-QkgaeSYl.js";import"./hooks-CnW7pryE.js";import"./axisSelectors-DQ1WchLm.js";import"./d3-scale-ByKoA0zW.js";import"./zIndexSlice-CVyG9qRx.js";import"./renderedTicksSlice--_3RJj48.js";import"./CartesianChart-DtRgi5pX.js";import"./chartDataContext-I9Ggk7nE.js";import"./CategoricalChart-BN63kSx-.js";import"./Curve-CrXnBsHg.js";import"./types-D0dCN7Ox.js";import"./step-BUDT2jIN.js";import"./path-DyVhHtw_.js";import"./Layer-D8ZS5vyC.js";import"./ReactUtils-mFr3j9RO.js";import"./Label-ClB5KqOQ.js";import"./Text-Dt3ARXcw.js";import"./DOMUtils-BwtPQYwq.js";import"./ZIndexLayer-BPeCIwGs.js";import"./ActivePoints-D0HNFK49.js";import"./Dot-C8qeBV5T.js";import"./RegisterGraphicalItemId-BaLxd7fn.js";import"./GraphicalItemClipPath-Xc6uO7Vp.js";import"./SetGraphicalItem-CjWW7GpL.js";import"./useAnimationId-Yfa74zNK.js";import"./getRadiusAndStrokeWidthFromDot-Bqn73jYn.js";import"./graphicalItemSelectors-CqMvFzRu.js";import"./index-DO5d7GKD.js";import"./ChartSizeDimensions-GhqI97PU.js";import"./OffsetShower-CEG4HECi.js";import"./PlotAreaShower-utUcCZ-k.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{e as CustomizedLabel,pt as __namedExportsOrder,mt as default};
