import{e as t}from"./iframe-DFPwKozO.js";import{R as c}from"./arrayEqualityCheck-BO0FMWsB.js";import{C as d}from"./ComposedChart-BAhOAMBQ.js";import{A as l}from"./Area-UNfTsti-.js";import{R as h}from"./RechartsHookInspector-y9SAwPh-.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8sM-C45.js";import"./immer-Cq-7IBeQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjOfOtkl.js";import"./index-BM-iP6jK.js";import"./hooks-bta4c9FS.js";import"./axisSelectors-Fye4v2An.js";import"./d3-scale-DC5SBv4a.js";import"./zIndexSlice-uamkKpnq.js";import"./renderedTicksSlice-BKeP3MvG.js";import"./CartesianChart-Dzwf7i_k.js";import"./chartDataContext-o1PhfYVG.js";import"./CategoricalChart-B84p6B_R.js";import"./Curve-Cr2jXmDN.js";import"./types-DHDJ8gyd.js";import"./step-CD2gspfu.js";import"./Layer-UW-3uLDu.js";import"./ReactUtils-iN1uHd88.js";import"./Label-BfeOO_bU.js";import"./Text-BuTP6JNp.js";import"./DOMUtils-XVY0zsXA.js";import"./ZIndexLayer-DyDzR_iO.js";import"./ActivePoints-D7vvpkK8.js";import"./Dot-BAdyos6T.js";import"./RegisterGraphicalItemId-ISC1Bh-u.js";import"./GraphicalItemClipPath-CH9onNSH.js";import"./SetGraphicalItem-D8F49Ifw.js";import"./useAnimationId-DMMdhd1b.js";import"./getRadiusAndStrokeWidthFromDot-m10-ynrS.js";import"./graphicalItemSelectors-CKp7rBmt.js";import"./index-BKyMZNGM.js";import"./ChartSizeDimensions-tYevmH5B.js";import"./OffsetShower-CuJwjf0e.js";import"./PlotAreaShower-CheWi7Y7.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
