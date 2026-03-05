import{e as t}from"./iframe-Bhf_6EYG.js";import{R as c}from"./arrayEqualityCheck-B5hYgnzz.js";import{C as d}from"./ComposedChart-CXm17D-l.js";import{A as l}from"./Area-B_UCcDgO.js";import{R as h}from"./RechartsHookInspector-oY9r6aPa.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CltYoVM3.js";import"./immer-DsnYViPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjPXyIC1.js";import"./index-qC7M-hg-.js";import"./hooks-B-MoHLBQ.js";import"./axisSelectors-Dt9F6ywj.js";import"./d3-scale-BxqYPjsE.js";import"./zIndexSlice-C8FzPb5S.js";import"./renderedTicksSlice-DaDN5hFR.js";import"./CartesianChart-CpaNhZA2.js";import"./chartDataContext-D5Z43mUX.js";import"./CategoricalChart-DSURhBZI.js";import"./Curve-CcL59NDu.js";import"./types-B1Me3-i2.js";import"./step-B0zDApE1.js";import"./Layer-XFtQT-yw.js";import"./ReactUtils-BVVOmEmS.js";import"./Label-CzjtkYX8.js";import"./Text-D28roL_s.js";import"./DOMUtils-ribD7pvn.js";import"./ZIndexLayer-B0zk77US.js";import"./ActivePoints-CzS01Ls6.js";import"./Dot-1VAAYKhE.js";import"./RegisterGraphicalItemId-ama1TJ-6.js";import"./GraphicalItemClipPath-kNsFQRgF.js";import"./SetGraphicalItem-Ck1k9tQT.js";import"./useAnimationId-5DionbmP.js";import"./getRadiusAndStrokeWidthFromDot-Bbk5HhSJ.js";import"./graphicalItemSelectors-Nlwl8Y0A.js";import"./index-BqdYNfEr.js";import"./ChartSizeDimensions-BOmMsXET.js";import"./OffsetShower-syHcU848.js";import"./PlotAreaShower-BiEJY1Iw.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
