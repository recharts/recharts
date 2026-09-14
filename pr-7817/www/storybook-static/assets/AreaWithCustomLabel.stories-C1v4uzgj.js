import{R as r}from"./iframe-C079Nsfx.js";import{R as c}from"./zIndexSlice-DLciVaZw.js";import{C as d}from"./ComposedChart-BOV6wT6A.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BGSu5SIq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D3s_o_Wq.js";import"./index-DexGzJ_q.js";import"./index-zk8Wcx4z.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CabyU6Oc.js";import"./isWellBehavedNumber-CDqNrIr8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrZlEkAN.js";import"./axisSelectors-BAri39V9.js";import"./d3-scale-BHoY9dLJ.js";import"./index-DADriLAa.js";import"./index-CQ3I_J9a.js";import"./renderedTicksSlice-DVdEowfn.js";import"./index-Duc3f3M9.js";import"./CartesianChart-BZirPUWR.js";import"./chartDataContext-VWCZx3p0.js";import"./CategoricalChart-DwP_vuON.js";import"./Layer-Kj8YrSbz.js";import"./AnimatedItems-DS39RbqN.js";import"./Label-DC63Ta0S.js";import"./Text-6vWGAU42.js";import"./DOMUtils-L7J-bYO6.js";import"./useId-DU03E5LM.js";import"./useBackwardsCompatibleTheme-DGGDmwyU.js";import"./ZIndexLayer-IY8xHCFB.js";import"./useAnimationId-MWHCnbEb.js";import"./ActivePoints-D6LcUBQa.js";import"./Dot-mGzGAe7T.js";import"./types-CUH5bwnf.js";import"./RegisterGraphicalItemId-jBLm1jna.js";import"./GraphicalItemClipPath-BbWylYdQ.js";import"./SetGraphicalItem-CzroE857.js";import"./getRadiusAndStrokeWidthFromDot-CGqoDsan.js";import"./ActiveShapeUtils-DRAmEoLS.js";import"./Curve-iBp1fVgP.js";import"./step-Chg4DONu.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D2ZyzXPv.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
