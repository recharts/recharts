import{e as t}from"./iframe-BVwI20TL.js";import{R as c}from"./arrayEqualityCheck-q35BrOAH.js";import{C as d}from"./ComposedChart-gqrKgpX-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B3UcJKt9.js";import{R as u}from"./RechartsHookInspector-DZcmofN9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-PLOIW3pB.js";import"./immer-CKYyw7I3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1ccuPti.js";import"./index-aBikmdLQ.js";import"./hooks-DZGA03xX.js";import"./axisSelectors-BSaMlK4p.js";import"./d3-scale-DIeSkgov.js";import"./zIndexSlice-CZKvoJNP.js";import"./renderedTicksSlice-B3vc9s72.js";import"./CartesianChart-B_CBLak0.js";import"./chartDataContext-yFkjRteM.js";import"./CategoricalChart-CfauKlBd.js";import"./Curve-Bi3if4gv.js";import"./types-BIqLm2SJ.js";import"./step-BWajvomR.js";import"./Layer-BmJqKhGN.js";import"./ReactUtils-dYl2dBOE.js";import"./Label-3Z8b_JxM.js";import"./Text-CcVVjC8p.js";import"./DOMUtils-aQVlIlVH.js";import"./ZIndexLayer-BZIg8_TU.js";import"./ActivePoints-B9lq65JZ.js";import"./Dot-DeCDV3Wq.js";import"./RegisterGraphicalItemId-8gcs_7Mt.js";import"./GraphicalItemClipPath-D5L_NXCW.js";import"./SetGraphicalItem-dD-mjnVv.js";import"./useAnimationId-CflNsn_7.js";import"./getRadiusAndStrokeWidthFromDot-DxWoOp80.js";import"./graphicalItemSelectors-D07Xjlnz.js";import"./index-DF74iLY4.js";import"./ChartSizeDimensions-BbmTVycb.js";import"./OffsetShower-DUJyuqc9.js";import"./PlotAreaShower-Dc_-yokV.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
