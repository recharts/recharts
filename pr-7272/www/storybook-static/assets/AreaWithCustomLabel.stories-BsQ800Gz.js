import{e as t}from"./iframe-4M-PkSVA.js";import{R as c}from"./arrayEqualityCheck-9hxUK6as.js";import{C as d}from"./ComposedChart-BNbX-oyy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BLOdpIOE.js";import{R as u}from"./RechartsHookInspector-Bu2v4BgA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYaStK-U.js";import"./immer-CY9nZJ0O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ct_1KIIG.js";import"./index-QhWebp7-.js";import"./hooks-0Lo_6wsQ.js";import"./axisSelectors-DzylQYKT.js";import"./d3-scale-CUJe2CI0.js";import"./zIndexSlice-Bg894_FJ.js";import"./renderedTicksSlice-BOIzxlRf.js";import"./CartesianChart-Cd9DDcz_.js";import"./chartDataContext-D4ebhXUv.js";import"./CategoricalChart-DBff51gh.js";import"./Curve-DGVbHr3U.js";import"./types-BizJXa69.js";import"./step-r2s_c4Hj.js";import"./Layer-CSsW14jT.js";import"./ReactUtils-CI9blSHi.js";import"./Label-HHw2Wo4F.js";import"./Text-CVSiM3-K.js";import"./DOMUtils-BLTsClHS.js";import"./ZIndexLayer-BqzZgYR4.js";import"./ActivePoints-nfCLLA3v.js";import"./Dot-CBjfGKvy.js";import"./RegisterGraphicalItemId-D74ncS90.js";import"./GraphicalItemClipPath-ClTLLJGZ.js";import"./SetGraphicalItem-BO1ROXvb.js";import"./useAnimationId-AkEyWWXN.js";import"./getRadiusAndStrokeWidthFromDot-BjOpwIux.js";import"./graphicalItemSelectors-BTk3Cb8i.js";import"./index-1NSbHYzy.js";import"./ChartSizeDimensions-CyhagkHh.js";import"./OffsetShower-D5VKQHJL.js";import"./PlotAreaShower-CwVyk3um.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
