import{R as r}from"./iframe-DIGZheBd.js";import{R as c}from"./zIndexSlice-_cU-ODvm.js";import{C as d}from"./ComposedChart-AI3knhdQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BeeDoZRF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BSuBUnwb.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZtBBFTk.js";import"./axisSelectors-D8SOTwsy.js";import"./d3-scale-DdurYsOp.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CiMP-PEk.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./Layer-CyJKyehG.js";import"./activeStyles-BNdVOgR8.js";import"./Label-DdnBRnzY.js";import"./Text-OwXAxNhC.js";import"./pageBackground-CxPMNoKP.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./ZIndexLayer-Csfe5z3g.js";import"./useAnimationId-ddL2Z7oo.js";import"./dataEntryStyles-B4e5hdgG.js";import"./ActivePoints-DCRcJ-JV.js";import"./Dot-Dr6-XXth.js";import"./types-MK9UFfTC.js";import"./GraphicalItemClipPath-DV_97DBL.js";import"./SetGraphicalItem-BLdBkmkm.js";import"./getRadiusAndStrokeWidthFromDot-CEhKuZ-K.js";import"./ActiveShapeUtils-Cn4dsa1I.js";import"./Curve-DTsvKbrn.js";import"./step-DnA-tUNV.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DDZKQvTb.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
