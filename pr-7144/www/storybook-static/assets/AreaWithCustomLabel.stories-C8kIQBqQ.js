import{e as t}from"./iframe-C_RKSEYG.js";import{R as c}from"./arrayEqualityCheck-XhN9n2BV.js";import{C as d}from"./ComposedChart-BzOUY-Ur.js";import{A as l}from"./Area-BV1-Rv3Y.js";import{R as h}from"./RechartsHookInspector-2DLThljJ.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wWOI_tEY.js";import"./immer-BXvw-sb6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJ6mrGyY.js";import"./index-BRt1FalZ.js";import"./hooks-BUBBsNP0.js";import"./axisSelectors-octxjJ6L.js";import"./d3-scale-Bly9GB_U.js";import"./zIndexSlice-Dau3iHk3.js";import"./renderedTicksSlice-BsnvkrRv.js";import"./CartesianChart-Dpt-Gkc_.js";import"./chartDataContext-Dj8ePN8G.js";import"./CategoricalChart-BeDTe7Ft.js";import"./Curve-C9iWhVEb.js";import"./types-DsqucEgb.js";import"./step-CZqcHwF_.js";import"./Layer-Bdbbvous.js";import"./ReactUtils-CN-zxxkn.js";import"./Label-DjnSNkR5.js";import"./Text-DZ8oBtno.js";import"./DOMUtils-D3avAUhw.js";import"./ZIndexLayer-C2eZ7492.js";import"./ActivePoints-CR4cquNR.js";import"./Dot-DdhwcviA.js";import"./RegisterGraphicalItemId-BrlGhgM7.js";import"./GraphicalItemClipPath-mtAKD-sR.js";import"./SetGraphicalItem-DAHF2TwR.js";import"./useAnimationId-A_rRmY4T.js";import"./getRadiusAndStrokeWidthFromDot-wxvSaUa-.js";import"./graphicalItemSelectors-DBJYgnRR.js";import"./index-CYNR1kH5.js";import"./ChartSizeDimensions-Du4NUIhU.js";import"./OffsetShower-B118pl0X.js";import"./PlotAreaShower-BicDzRP-.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
