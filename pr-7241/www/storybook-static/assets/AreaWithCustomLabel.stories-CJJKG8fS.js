import{e as t}from"./iframe-BjsnxMFa.js";import{R as c}from"./arrayEqualityCheck-D79Z1Ft6.js";import{C as d}from"./ComposedChart-szjriw08.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DCt3bMW0.js";import{R as u}from"./RechartsHookInspector-BHBsN4Jq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C6oA156h.js";import"./immer-Be7tY_HI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CW1Hf6N5.js";import"./index-jIvfCkDE.js";import"./hooks-CrPS60z-.js";import"./axisSelectors-DQ8vP1dP.js";import"./d3-scale-DFeGtgyL.js";import"./zIndexSlice-CqY4Aros.js";import"./renderedTicksSlice-BRzJlOTm.js";import"./CartesianChart-D_ZObIBU.js";import"./chartDataContext-CN9xXS5D.js";import"./CategoricalChart-CTcIqTOw.js";import"./Curve-DKq8m8L2.js";import"./types-BiDeCyZf.js";import"./step-CB61oaUG.js";import"./Layer-iA63SD1n.js";import"./ReactUtils-BGdgbQc7.js";import"./Label-j2useUX0.js";import"./Text-B0WMAGdM.js";import"./DOMUtils-BmB9R95C.js";import"./ZIndexLayer-DSdMaSo2.js";import"./ActivePoints-CfR2rHSN.js";import"./Dot-CjenfdSB.js";import"./RegisterGraphicalItemId-BPn4ir3H.js";import"./GraphicalItemClipPath-DdpuzGUU.js";import"./SetGraphicalItem-CNGahdfh.js";import"./useAnimationId-B32Lfo5E.js";import"./getRadiusAndStrokeWidthFromDot-Dunai21J.js";import"./graphicalItemSelectors-DNH7hD2S.js";import"./index-Drwbgjrj.js";import"./ChartSizeDimensions-DSkMKFoU.js";import"./OffsetShower-DDkKAXZs.js";import"./PlotAreaShower-DJQQHQ-f.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
