import{e as t}from"./iframe-D7aX3J5h.js";import{R as c}from"./arrayEqualityCheck-DLuUv4yo.js";import{C as d}from"./ComposedChart-CmEEfZPd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CXiD4O4D.js";import{R as u}from"./RechartsHookInspector-BTqr9y2h.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDSKwV2V.js";import"./immer-DIW08hxt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_XTZaGgp.js";import"./index-BM0_uYzm.js";import"./hooks-D1J8v2Uc.js";import"./axisSelectors-I1seAFnS.js";import"./d3-scale-Mn_kc0sV.js";import"./zIndexSlice-uyR3EFO5.js";import"./renderedTicksSlice-OcRGvYoz.js";import"./CartesianChart-CKcNyqW5.js";import"./chartDataContext-davdrOpe.js";import"./CategoricalChart-XTP8dVhI.js";import"./Curve-C0dUv9vi.js";import"./types-4ix9MfJ6.js";import"./step-lYGPVUHl.js";import"./Layer-CJYXhEUr.js";import"./ReactUtils-CbiuaN3U.js";import"./Label-UZajBuhN.js";import"./Text-CWxCeK9x.js";import"./DOMUtils-DCfT5r3n.js";import"./ZIndexLayer-CkNFgsWD.js";import"./ActivePoints-3vBr6ZBc.js";import"./Dot-BDZGqa2C.js";import"./RegisterGraphicalItemId-CN0LR0Zv.js";import"./GraphicalItemClipPath-DCnzaJaS.js";import"./SetGraphicalItem-BA9LnDto.js";import"./useAnimationId-m-yYskNq.js";import"./getRadiusAndStrokeWidthFromDot-TfJWcB_w.js";import"./graphicalItemSelectors-CrjsmUQK.js";import"./index-BUdbPquH.js";import"./ChartSizeDimensions-CBUuBi2H.js";import"./OffsetShower-YsWSeMxm.js";import"./PlotAreaShower-BsknmqpH.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
