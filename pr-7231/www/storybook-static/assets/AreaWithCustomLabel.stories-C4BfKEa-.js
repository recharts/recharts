import{e as t}from"./iframe-ClXyKNgm.js";import{R as c}from"./arrayEqualityCheck-CyG4bWUs.js";import{C as d}from"./ComposedChart-GRruxady.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Be7O6dOU.js";import{R as u}from"./RechartsHookInspector-CDiaVfBA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-5xg8HJ.js";import"./immer-CtYLZrTd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UQqzQ8rP.js";import"./index-CwEdYiZd.js";import"./hooks-BkOTtN17.js";import"./axisSelectors-DQofLmtB.js";import"./d3-scale-PvLZ5v4V.js";import"./zIndexSlice-Dm0UpM_Z.js";import"./renderedTicksSlice-BNvm7omS.js";import"./CartesianChart-DPC4KDkL.js";import"./chartDataContext-Bjc2K54y.js";import"./CategoricalChart-BKNmBDhd.js";import"./Curve-gxNk9RQQ.js";import"./types-C9EK63kj.js";import"./step-hxAHDxbx.js";import"./Layer-BeDFs85c.js";import"./ReactUtils-Dlva77EJ.js";import"./Label-YkL7q8Nt.js";import"./Text-o1n-qtV3.js";import"./DOMUtils-CHkqX7Ip.js";import"./ZIndexLayer-cavkLRXR.js";import"./ActivePoints-BtoLWo_Y.js";import"./Dot-CTW0FmYa.js";import"./RegisterGraphicalItemId-BL_NupUm.js";import"./GraphicalItemClipPath-DtnEohhM.js";import"./SetGraphicalItem-taT8ii8S.js";import"./useAnimationId-C8K-aL18.js";import"./getRadiusAndStrokeWidthFromDot-DuLFzzBx.js";import"./graphicalItemSelectors-S3EKk4oX.js";import"./index-CMB9sNFg.js";import"./ChartSizeDimensions-DpOcPLnw.js";import"./OffsetShower-C3ti5__k.js";import"./PlotAreaShower-Ji8AleEw.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
