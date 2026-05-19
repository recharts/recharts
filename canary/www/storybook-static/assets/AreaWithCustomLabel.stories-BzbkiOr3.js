import{e as t}from"./iframe-Dm92CwFH.js";import{g as c}from"./arrayEqualityCheck-CILmZ2ng.js";import{C as d}from"./ComposedChart-8hVtFBq4.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-BH_rzYes.js";import{R as u}from"./RechartsHookInspector-DjDPWpLA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-URK34NLy.js";import"./immer-C2lunnZL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CcwR86Ee.js";import"./index-BZhNoNV_.js";import"./hooks-BzHpEskF.js";import"./axisSelectors-BHYp1qXz.js";import"./d3-scale-irW0mVOo.js";import"./zIndexSlice-CZsiKlhz.js";import"./renderedTicksSlice-Cbab3bWB.js";import"./CartesianChart-mnMBiiJP.js";import"./chartDataContext-BodkpG5F.js";import"./CategoricalChart-VO60zbCA.js";import"./Curve-gF21399W.js";import"./types-CksUkFiR.js";import"./step-BOUe13iO.js";import"./Layer-CpozC2HI.js";import"./ReactUtils-vWuNVuHD.js";import"./Label-C3d_UHx_.js";import"./Text-DeU0frga.js";import"./DOMUtils-CrpDH3yL.js";import"./ZIndexLayer-BRpAcZD_.js";import"./ActivePoints-CqTWkagC.js";import"./Dot-D9ItCAkE.js";import"./RegisterGraphicalItemId-Bgnu5jtR.js";import"./GraphicalItemClipPath-C8gejsmY.js";import"./SetGraphicalItem-C8FWpJGs.js";import"./useAnimationId-DN3FgicD.js";import"./getRadiusAndStrokeWidthFromDot-EjdN7dQP.js";import"./graphicalItemSelectors-BeyTcZ1c.js";import"./index-BuoG88Tj.js";import"./ChartSizeDimensions-f0wD3mfa.js";import"./OffsetShower-VDfu5cmL.js";import"./PlotAreaShower-DIqDk6Vd.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
