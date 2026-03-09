import{e as t}from"./iframe-C-iVd-D9.js";import{R as c}from"./arrayEqualityCheck-CykFyG3w.js";import{C as d}from"./ComposedChart-BhT7kidc.js";import{A as l}from"./Area-DXD_ipnP.js";import{R as h}from"./RechartsHookInspector-BmWQIBw0.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CaPMqnUf.js";import"./immer-9akI4mGC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OZYl-Tz6.js";import"./index-D7iAvCJZ.js";import"./hooks-DgAj9GmX.js";import"./axisSelectors-B51mUxQh.js";import"./d3-scale-BLCaIo2v.js";import"./zIndexSlice-DM0eYjRM.js";import"./renderedTicksSlice-XpTaEf7K.js";import"./CartesianChart-DCeJ5hMu.js";import"./chartDataContext-Dod_jDwP.js";import"./CategoricalChart-DQuyNjww.js";import"./Curve-6NVtDyjZ.js";import"./types-DAf5tiec.js";import"./step-Ca8O5Pe5.js";import"./Layer-PcuWobZF.js";import"./ReactUtils-nzFm5ghx.js";import"./Label-B2Hnjv9f.js";import"./Text-DV9U-A1x.js";import"./DOMUtils-CDMIcntA.js";import"./ZIndexLayer-CF1VRPo3.js";import"./ActivePoints-D0xySLpj.js";import"./Dot-BoKtt_Pl.js";import"./RegisterGraphicalItemId-DBYhzviE.js";import"./GraphicalItemClipPath-DlmVzEBx.js";import"./SetGraphicalItem-D9P8g2wE.js";import"./useAnimationId-DF-bmt8J.js";import"./getRadiusAndStrokeWidthFromDot-DYJAnKvi.js";import"./graphicalItemSelectors-CGXQJwpT.js";import"./index-4pvBd6R2.js";import"./ChartSizeDimensions-7dl-q0eS.js";import"./OffsetShower-DgEJieR9.js";import"./PlotAreaShower-Dw5kcDju.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
