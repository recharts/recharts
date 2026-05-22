import{e as t}from"./iframe-BzghaLEp.js";import{g as c}from"./arrayEqualityCheck-CS3de1t5.js";import{C as d}from"./ComposedChart-CN0B5sck.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-mUDHzxO3.js";import{R as u}from"./RechartsHookInspector-BuYwcCb3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BVZsWnmP.js";import"./immer-BXETI75S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR3m1DYe.js";import"./index-DQ335CG7.js";import"./hooks-BRSXFpN3.js";import"./axisSelectors-aIIB8FuD.js";import"./d3-scale-qhwlSf_5.js";import"./zIndexSlice-DCGzB6PO.js";import"./renderedTicksSlice-STF43WXb.js";import"./CartesianChart-DcVmos4e.js";import"./chartDataContext-D4_qA_s_.js";import"./CategoricalChart-BnPKkEWG.js";import"./Curve-DBC2v7ce.js";import"./types-DUQUBotY.js";import"./step-Cb7NJXQj.js";import"./path-DyVhHtw_.js";import"./Layer-BJAfo-lt.js";import"./ReactUtils-DCWlBgg2.js";import"./Label-DpeHQT41.js";import"./Text-B8a7yFIp.js";import"./DOMUtils-Du7GfFqb.js";import"./ZIndexLayer-Bqel3NP6.js";import"./ActivePoints-B-bDqxYx.js";import"./Dot-DOp6zc7l.js";import"./RegisterGraphicalItemId-BXJ3uWYw.js";import"./GraphicalItemClipPath-CjgICd57.js";import"./SetGraphicalItem-c7OZec2D.js";import"./useAnimationId-DtC5i2fv.js";import"./getRadiusAndStrokeWidthFromDot-r9y5eo4i.js";import"./graphicalItemSelectors-C6wmbeIc.js";import"./index-BG2QvuV2.js";import"./ChartSizeDimensions-hfJquHEG.js";import"./OffsetShower-_lbWu0gQ.js";import"./PlotAreaShower-CKhzQKyo.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{e as CustomizedLabel,pt as __namedExportsOrder,mt as default};
