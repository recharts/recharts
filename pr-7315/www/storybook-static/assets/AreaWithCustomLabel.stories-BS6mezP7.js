import{e as t}from"./iframe-yOl7ebEO.js";import{R as c}from"./arrayEqualityCheck-UuJDb-yR.js";import{C as d}from"./ComposedChart-BVedwSw5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C6to-2IG.js";import{R as u}from"./RechartsHookInspector-DtC7uthn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Gw_jyAz4.js";import"./immer-CYF84rOh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1ybgTyA.js";import"./index-D-Did3Jy.js";import"./hooks-BE8JLfvF.js";import"./axisSelectors-B5yQSsls.js";import"./d3-scale-CZWGMAWB.js";import"./zIndexSlice-PEvl5-9d.js";import"./renderedTicksSlice-CnX-tuq-.js";import"./CartesianChart-CI8VxjgA.js";import"./chartDataContext-DWA37a9L.js";import"./CategoricalChart-DTvKZB6u.js";import"./Curve-zYBm6Ox7.js";import"./types-DQaZd2AR.js";import"./step-MC0Zc_ls.js";import"./Layer-DB7JxVnT.js";import"./ReactUtils-BYuoIEUf.js";import"./Label-CDk0YY7H.js";import"./Text-s8nxqTbU.js";import"./DOMUtils-Co3lMGfS.js";import"./ZIndexLayer-WvT2N6Nx.js";import"./ActivePoints-MVGoSZ5r.js";import"./Dot-DujX6iAu.js";import"./RegisterGraphicalItemId-yywJB84l.js";import"./GraphicalItemClipPath-BM3B2Cex.js";import"./SetGraphicalItem-BACVcxKo.js";import"./useAnimationId-Fp-fdxRQ.js";import"./getRadiusAndStrokeWidthFromDot-CPh76gsn.js";import"./graphicalItemSelectors-B4GkUJpL.js";import"./index-CeoEhrnk.js";import"./ChartSizeDimensions-B292NXgO.js";import"./OffsetShower-DAwTp_Xz.js";import"./PlotAreaShower-BJre87Gs.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
