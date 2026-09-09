import{R as r}from"./iframe-ZxfiIiWi.js";import{R as c}from"./zIndexSlice-By0bZmpT.js";import{C as d}from"./ComposedChart-B6tALutk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CfRVh9XD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CfDYUS1N.js";import"./index-DZp6XoEo.js";import"./index-DLRIqKjc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1Uan2Hnp.js";import"./isWellBehavedNumber-DX24GKSm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UKbeDROs.js";import"./axisSelectors-DMQ84IJA.js";import"./d3-scale-Np9PFIYo.js";import"./index-DRuu78hr.js";import"./index-6NV0E9go.js";import"./renderedTicksSlice-nc0b0sSE.js";import"./index-BgcSxEKm.js";import"./CartesianChart-v34KMzUV.js";import"./chartDataContext-D2b6BjfF.js";import"./CategoricalChart-Ls_A9xeg.js";import"./Layer-SD6n1FzC.js";import"./AnimatedItems-C7ik5li4.js";import"./Label-C08NNQeO.js";import"./Text-BxPrjmzo.js";import"./DOMUtils-CTcVRqQO.js";import"./useId-DbFmynHI.js";import"./useBackwardsCompatibleTheme-iH09SwpV.js";import"./ZIndexLayer-MDZol7np.js";import"./useAnimationId-Bd76uFLI.js";import"./ActivePoints--DLJoCCT.js";import"./Dot-DBOOUc-e.js";import"./types-DfGxKHCw.js";import"./RegisterGraphicalItemId-BglnUmW_.js";import"./GraphicalItemClipPath-D7uJY0ae.js";import"./SetGraphicalItem-DfXzBFI9.js";import"./getRadiusAndStrokeWidthFromDot-CERp_c72.js";import"./ActiveShapeUtils-O5hE5x5h.js";import"./Curve-DPtlKYb4.js";import"./step-BSgEqbWI.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Cy74xmM1.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
