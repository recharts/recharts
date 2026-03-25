import{e as t}from"./iframe-CYwaFdjn.js";import{R as c}from"./arrayEqualityCheck-h7hJTZeM.js";import{C as d}from"./ComposedChart-Bhc9oZML.js";import{A as l}from"./Area-CsQ9nyCF.js";import{R as h}from"./RechartsHookInspector-Cc3cBFx4.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4Ca1v930.js";import"./immer-5b19dBsP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cjgjDUYZ.js";import"./index-DPTx4Thk.js";import"./hooks-GLHTS7XJ.js";import"./axisSelectors-EAo2gJk2.js";import"./d3-scale-DeBKatuR.js";import"./zIndexSlice-Ccl7S4Cq.js";import"./renderedTicksSlice-CJ6ZtBLo.js";import"./CartesianChart-C448597b.js";import"./chartDataContext-Cd6g7rnb.js";import"./CategoricalChart-DF3SypHH.js";import"./Curve-DtLfkKFm.js";import"./types-DF6SdF0Y.js";import"./step-BGhwLfjY.js";import"./Layer-B_rFu8MB.js";import"./ReactUtils-DjhHO1D7.js";import"./Label-C4yjQiQy.js";import"./Text-BJUH7gc5.js";import"./DOMUtils-PiUaL3gF.js";import"./ZIndexLayer-Bzm3_eCs.js";import"./ActivePoints-lICUnLRA.js";import"./Dot-C9RSUdFa.js";import"./RegisterGraphicalItemId-p7bSWKiK.js";import"./GraphicalItemClipPath-Csh7Z4rj.js";import"./SetGraphicalItem-B2q6sSST.js";import"./useAnimationId-CHCcDWBw.js";import"./getRadiusAndStrokeWidthFromDot-anW380QN.js";import"./graphicalItemSelectors-CXcRU96P.js";import"./index-CEnowju6.js";import"./ChartSizeDimensions-CH8vjifh.js";import"./OffsetShower-DG_CC1wX.js";import"./PlotAreaShower-CPSVbCba.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
