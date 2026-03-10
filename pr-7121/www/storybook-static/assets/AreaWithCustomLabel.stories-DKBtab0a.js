import{e as t}from"./iframe-B0RBHKhv.js";import{R as c}from"./arrayEqualityCheck-CUrlIiZa.js";import{C as d}from"./ComposedChart-DP9VXl43.js";import{A as l}from"./Area-DYZlQC1k.js";import{R as h}from"./RechartsHookInspector-BW5IS2xz.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-COjtEafr.js";import"./immer-4Zn5elZn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJ9Ttq8o.js";import"./index-CJLF0Mhh.js";import"./hooks-D2D_3Kbz.js";import"./axisSelectors-fGBidpaE.js";import"./d3-scale-DmOZwrln.js";import"./zIndexSlice-CVs48kDF.js";import"./renderedTicksSlice-BWSAiWSy.js";import"./CartesianChart-CJLV3cRG.js";import"./chartDataContext-C8RmHr1V.js";import"./CategoricalChart-DjdfrcyP.js";import"./Curve-OyQHTjUf.js";import"./types-Cr4gQIo8.js";import"./step-tovYZaNJ.js";import"./Layer-DKG_J2lX.js";import"./ReactUtils-4VVLboep.js";import"./Label-zCnoVUoE.js";import"./Text-cX_Ucvjm.js";import"./DOMUtils-DRSD_e_k.js";import"./ZIndexLayer-D0KeT139.js";import"./ActivePoints-B132Duv-.js";import"./Dot-D0OoiCd5.js";import"./RegisterGraphicalItemId-B4LFnea8.js";import"./GraphicalItemClipPath-CUPJIuLc.js";import"./SetGraphicalItem-BFputAxA.js";import"./useAnimationId-BhQIBdFI.js";import"./getRadiusAndStrokeWidthFromDot-C52wdnda.js";import"./graphicalItemSelectors-D4t-p4R5.js";import"./index-CAjd4rxZ.js";import"./ChartSizeDimensions-Dn4uFPS3.js";import"./OffsetShower-6Ks2UPdd.js";import"./PlotAreaShower-CXPk0Esn.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
