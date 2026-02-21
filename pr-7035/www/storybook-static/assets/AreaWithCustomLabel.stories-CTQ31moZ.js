import{e as t}from"./iframe-BJOlw-Op.js";import{R as c}from"./arrayEqualityCheck-DnusCzBD.js";import{C as d}from"./ComposedChart-CscrYVRt.js";import{A as l}from"./Area-BpZxEtoy.js";import{R as h}from"./RechartsHookInspector-CPO0M8Xx.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Wvn0zu9i.js";import"./immer-DfiRd44R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHn8DA_q.js";import"./index-Qcq4P_Nt.js";import"./hooks-CnmjgxEU.js";import"./axisSelectors-WpUYVbi6.js";import"./d3-scale-DYbsxYoA.js";import"./zIndexSlice-CeiBfx4M.js";import"./renderedTicksSlice-BL6GofNb.js";import"./CartesianChart-BMN72tVe.js";import"./chartDataContext-DTMD5Oqb.js";import"./CategoricalChart-linssQQb.js";import"./Curve-pTrnSDAj.js";import"./types-CnF3ZZeT.js";import"./step-DgvGX9zV.js";import"./Layer-BBwqN8Jm.js";import"./ReactUtils-BfARamF_.js";import"./Label-D8He3MwY.js";import"./Text-CtfAbWJb.js";import"./DOMUtils-OblLamz_.js";import"./ZIndexLayer-DYremzN-.js";import"./ActivePoints-CHOum2cR.js";import"./Dot-DwKpvT0b.js";import"./RegisterGraphicalItemId-Dp1CPZih.js";import"./GraphicalItemClipPath-EzqtyZLV.js";import"./SetGraphicalItem-BPcUI2au.js";import"./useAnimationId-C14qPNnG.js";import"./getRadiusAndStrokeWidthFromDot-BomTk5Ge.js";import"./graphicalItemSelectors-WjPEDVR6.js";import"./index-D9yuPKYy.js";import"./ChartSizeDimensions-C1LvrkRR.js";import"./OffsetShower-B4YdrASr.js";import"./PlotAreaShower-DXcv1_AG.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
