import{R as r}from"./iframe-B-SNMp2P.js";import{R as c}from"./zIndexSlice-MJVhEUVa.js";import{C as d}from"./ComposedChart-CkeRhKHK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DZwLkyEM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7fi-ZXpb.js";import"./index-BIs-1f0J.js";import"./index-BZQvw8Sg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D6GIFGnh.js";import"./isWellBehavedNumber-0l1sLwCq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gPNydgch.js";import"./axisSelectors-_pmBWC24.js";import"./d3-scale-CF8UPnnv.js";import"./index-Dj60m7pl.js";import"./index-DGXVsrKV.js";import"./renderedTicksSlice-2xqGDKha.js";import"./index-CvUwvd6n.js";import"./CartesianChart-K-vFTXTH.js";import"./chartDataContext-BccgPSEz.js";import"./CategoricalChart-BNp-LaIc.js";import"./Layer-CVSv3BXM.js";import"./AnimatedItems-D-Mi-zOF.js";import"./Label-yF0NhCgr.js";import"./Text-3FjWr6Un.js";import"./DOMUtils-CVvGSXS1.js";import"./useId-DCI_CeQs.js";import"./useBackwardsCompatibleTheme-CE1PvRpo.js";import"./ZIndexLayer-DTIKWgf_.js";import"./useAnimationId-CiVfXoZZ.js";import"./ActivePoints-0GRfHXwb.js";import"./Dot-CFiUGY51.js";import"./types-BNVaobqj.js";import"./dataEntryStyles-Bq_a6L7W.js";import"./GraphicalItemClipPath-C3pTbqJ4.js";import"./SetGraphicalItem-B2JrzKrx.js";import"./getRadiusAndStrokeWidthFromDot-BOwP_unw.js";import"./ActiveShapeUtils-BCJOz4d0.js";import"./Curve-CJXjFqV6.js";import"./step-HC0u4nw9.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DsWLL8GU.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
