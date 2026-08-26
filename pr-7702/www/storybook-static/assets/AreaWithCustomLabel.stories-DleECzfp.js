import{R as r}from"./iframe-NQEVGrWF.js";import{R as c}from"./zIndexSlice-CP33F7KF.js";import{C as d}from"./ComposedChart-Cgzz0lSa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B_t7Sx-B.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CkddbLRN.js";import"./index-B9NPWI0k.js";import"./index-CRVzIMtc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGKk3whs.js";import"./isWellBehavedNumber-Dsnr4nI4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7RacVym.js";import"./axisSelectors-5o3NJxix.js";import"./d3-scale-C0DHVJ_t.js";import"./index-aCLowHDg.js";import"./index-B8SC5NXw.js";import"./renderedTicksSlice-Cd3xmYKN.js";import"./index-DGDKtdxG.js";import"./CartesianChart-BeI0IYJq.js";import"./chartDataContext-CvCTBKTZ.js";import"./CategoricalChart-CoPL0zMa.js";import"./Layer-BG4rdiih.js";import"./AnimatedItems-DrvzgAVh.js";import"./Label-B9UYxviU.js";import"./Text-DakXKvvI.js";import"./DOMUtils-CiNl2Unk.js";import"./useId-DDLNeh8Q.js";import"./useBackwardsCompatibleTheme-B1LwAuqZ.js";import"./ZIndexLayer-n1tytnrA.js";import"./useAnimationId-CyMrVWUy.js";import"./ActivePoints-jIqLZQku.js";import"./Dot-BomDn2NI.js";import"./types-BJqKvaYz.js";import"./RegisterGraphicalItemId-DJee5cpk.js";import"./GraphicalItemClipPath-Bh5K_QLr.js";import"./SetGraphicalItem-D8Gbozo5.js";import"./getRadiusAndStrokeWidthFromDot-B6sJlwAv.js";import"./ActiveShapeUtils-DwrA3FQy.js";import"./Curve-Do1Fb_jm.js";import"./step-ByZJsQBm.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BjkPEz73.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const st=["CustomizedLabel"];export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
