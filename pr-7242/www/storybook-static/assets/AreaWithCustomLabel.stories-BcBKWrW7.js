import{e as t}from"./iframe-DvnDov4A.js";import{R as c}from"./arrayEqualityCheck-C9lnY2Jk.js";import{C as d}from"./ComposedChart-Dakl-_yO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ed4fgJ_M.js";import{R as u}from"./RechartsHookInspector-4zpoQdEh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-G5H4W-ZU.js";import"./immer-sZpCrch2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TcHv2uQV.js";import"./index-C2oOJWkO.js";import"./hooks-BvQWUlQP.js";import"./axisSelectors-CqBaekTZ.js";import"./d3-scale-BcO2Qy0K.js";import"./zIndexSlice-SWDQ-CoV.js";import"./renderedTicksSlice-031iG6wN.js";import"./CartesianChart-B_ZS3e1w.js";import"./chartDataContext-i-tilv0W.js";import"./CategoricalChart-D_33J7_3.js";import"./Curve-BY4G9kL5.js";import"./types-TD_Bh_Hf.js";import"./step-hQY7d3_H.js";import"./Layer-nkTMaplG.js";import"./ReactUtils-CIfEwxbL.js";import"./Label-DplSYrhy.js";import"./Text-spNYJ-qR.js";import"./DOMUtils-DdQ6eDLq.js";import"./ZIndexLayer-CM0jcixQ.js";import"./ActivePoints-Bp_xfLdA.js";import"./Dot-1PiERTp-.js";import"./RegisterGraphicalItemId-BIRi2jKj.js";import"./GraphicalItemClipPath-kvMDTclB.js";import"./SetGraphicalItem-tfmCk3IV.js";import"./useAnimationId-6CABSB-X.js";import"./getRadiusAndStrokeWidthFromDot-ZR3HPK81.js";import"./graphicalItemSelectors-CLVI2Tyq.js";import"./index-DCGexNIF.js";import"./ChartSizeDimensions-CTHGO4oG.js";import"./OffsetShower-DvcNQrDC.js";import"./PlotAreaShower-DoBolyp8.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
