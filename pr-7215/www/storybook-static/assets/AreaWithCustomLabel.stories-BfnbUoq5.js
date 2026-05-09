import{e as t}from"./iframe-LVl3b4xQ.js";import{R as c}from"./arrayEqualityCheck-TRBYdTbW.js";import{C as d}from"./ComposedChart-DtWLSg2c.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CrHfFTt9.js";import{R as u}from"./RechartsHookInspector-CoEhmUtx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-sS_sTty7.js";import"./immer-BbMxIj75.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bu4njem6.js";import"./index-DpK2I5Z8.js";import"./hooks-M6iVHT7c.js";import"./axisSelectors-DOBrNYLg.js";import"./d3-scale-DZf6r7Db.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-bvE0U60U.js";import"./renderedTicksSlice-C1IOrkRp.js";import"./CartesianChart-B4Aoe2Gv.js";import"./chartDataContext-C_HtZ8Jd.js";import"./CategoricalChart-BY9PLUYv.js";import"./Layer-BDK9FNAf.js";import"./AnimatedItems-u-a6HbBD.js";import"./Label-Jb4Mxx6L.js";import"./Text-ByeLUm9f.js";import"./DOMUtils-DEoaEH8S.js";import"./ZIndexLayer-BcAyFnZg.js";import"./useAnimationId-aZVu4KkL.js";import"./ActivePoints-J2-wBKLN.js";import"./Dot-CLoMxYtv.js";import"./types-C5WHI9Oq.js";import"./RegisterGraphicalItemId-msSYtbNf.js";import"./GraphicalItemClipPath-DJ_qeJGz.js";import"./SetGraphicalItem-C3QtaGQ_.js";import"./getRadiusAndStrokeWidthFromDot-CHyMZ3bi.js";import"./ActiveShapeUtils-BFF6hf2y.js";import"./isPlainObject-B64torjy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUhT-B0R.js";import"./Trapezoid-ZdBmwUBu.js";import"./Sector-zScvcglH.js";import"./Symbols-Fu_kPQSr.js";import"./symbol-hh9GMAPc.js";import"./step-Fn6xoHVy.js";import"./Curve-BuzdDAXz.js";import"./graphicalItemSelectors-UOGAUwPm.js";import"./index-CZHbmvmq.js";import"./ChartSizeDimensions-Bx00VSUB.js";import"./OffsetShower-DPJMHPD2.js";import"./PlotAreaShower-DoIFP8gZ.js";const ut={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:e,y:o}=n;return t.createElement("text",{key:s,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},r={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
