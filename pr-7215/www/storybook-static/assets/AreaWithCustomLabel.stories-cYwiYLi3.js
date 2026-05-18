import{e as t}from"./iframe-BziMfoUa.js";import{g as c}from"./arrayEqualityCheck-jGW3YXEm.js";import{C as d}from"./ComposedChart-DS1ZldOY.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-bQtBXA1m.js";import{R as u}from"./RechartsHookInspector-C7iBq9Tv.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqM-Yvij.js";import"./immer-Bs1CBStC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Duw6h7Bm.js";import"./index-BIuRyLTB.js";import"./hooks-_tZAqQmm.js";import"./axisSelectors-CAcjMuVN.js";import"./d3-scale-GlbhO23R.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-lEo1dtRN.js";import"./renderedTicksSlice-v3j9k7Mr.js";import"./CartesianChart-Cq-jUzWL.js";import"./chartDataContext-Cp7Sw1KM.js";import"./CategoricalChart-BjhCCKH7.js";import"./Layer-CoMuIaZe.js";import"./AnimatedItems-BBuXONSK.js";import"./Label-Qwg870Bc.js";import"./Text-fxmSEe5L.js";import"./DOMUtils-c_Zm-hwi.js";import"./ZIndexLayer-CIYsspBg.js";import"./useAnimationId-kTU4vPRt.js";import"./ActivePoints-C6-CaXlM.js";import"./Dot-3fkMyAwB.js";import"./types-CX5BQ__A.js";import"./RegisterGraphicalItemId-BtgM2BJV.js";import"./GraphicalItemClipPath-CUoKAv3d.js";import"./SetGraphicalItem-DsxyvyCs.js";import"./getRadiusAndStrokeWidthFromDot-Co7Fg86a.js";import"./ActiveShapeUtils-BFwVaQU9.js";import"./isPlainObject-DmPDszQ3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cqckp2nr.js";import"./Trapezoid-m2Wlm-zm.js";import"./Sector-Gm8VToLD.js";import"./Symbols-DXSNT6Hm.js";import"./symbol-DOCk2oSo.js";import"./step-CeZV8hny.js";import"./Curve-CBntFit6.js";import"./graphicalItemSelectors-B06k7LJ4.js";import"./index-Cu69lm6g.js";import"./ChartSizeDimensions-DfprWSX6.js";import"./OffsetShower-Cr3DxjzZ.js";import"./PlotAreaShower-OmwxkN4u.js";const ut={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:e,y:o}=n;return t.createElement("text",{key:s,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},r={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ft=["CustomizedLabel"];export{r as CustomizedLabel,ft as __namedExportsOrder,ut as default};
