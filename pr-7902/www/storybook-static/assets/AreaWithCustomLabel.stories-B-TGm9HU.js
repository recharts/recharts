import{R as r}from"./iframe-BnuuYCdy.js";import{R as c}from"./zIndexSlice-BbvX8GRP.js";import{C as d}from"./ComposedChart-BSlw0HFk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D-hndM38.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-hzsPLVCI.js";import"./index-BBLVSC9o.js";import"./index-DGdfhc42.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKuWdgA8.js";import"./isWellBehavedNumber-Bo6YgW7B.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-yuVx-GfW.js";import"./axisSelectors-LqE-nBKd.js";import"./d3-scale-Xitmtu6a.js";import"./index-B7n-SwGH.js";import"./index-Bpn4eiX5.js";import"./renderedTicksSlice-BB-WXCKZ.js";import"./index-Co63ZXDS.js";import"./CartesianChart-Csg_49y8.js";import"./chartDataContext-Cfs5ZB_U.js";import"./CategoricalChart-D69sax0F.js";import"./Layer-CdUwTkt1.js";import"./AnimatedItems-DduhreQ3.js";import"./Label-B4GoECSR.js";import"./Text-CGVn4Fi7.js";import"./DOMUtils-uoptzxcb.js";import"./useId-DfmsLig3.js";import"./useBackwardsCompatibleTheme-B5XCxlLZ.js";import"./ZIndexLayer-exEMosZg.js";import"./useAnimationId-DPByLvsu.js";import"./ActivePoints-DSOuOqL1.js";import"./Dot-DZr8LyTD.js";import"./types-CkU7DeC5.js";import"./RegisterGraphicalItemId-DPzJCfll.js";import"./GraphicalItemClipPath-Dkj0uJsh.js";import"./SetGraphicalItem-DVMg4m0V.js";import"./getRadiusAndStrokeWidthFromDot-3avq4t8Q.js";import"./ActiveShapeUtils-7-0YNMZJ.js";import"./Curve-DLpdI-qq.js";import"./step-CQAloss-.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C2Y0PCNK.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
