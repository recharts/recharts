import{R as r}from"./iframe-BH_ynjC4.js";import{R as c}from"./zIndexSlice-BI1ysfjy.js";import{C as d}from"./ComposedChart-CZ5mgmPm.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-nYcQAkYW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B92nZ18Y.js";import"./index-RF2vHOS8.js";import"./index-DbazBVJ8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlxwprZn.js";import"./isWellBehavedNumber-BHoIJZLy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BODbUaHb.js";import"./axisSelectors-BuZGyw5u.js";import"./d3-scale-3O5mTbCq.js";import"./index-C7z_bQHY.js";import"./index-B2CUqXvo.js";import"./renderedTicksSlice-AZvUrajM.js";import"./index-483Wu6hp.js";import"./CartesianChart-x2wpl3h2.js";import"./chartDataContext-D5KYfl9L.js";import"./CategoricalChart-CQ3zK25U.js";import"./Layer-BZJOgrQn.js";import"./AnimatedItems-BzetGmJU.js";import"./Label-FZu_WDSG.js";import"./Text-DIx256cP.js";import"./DOMUtils-Cq_tvs96.js";import"./useId-POUb9F1l.js";import"./useBackwardsCompatibleTheme-BDKfSYgg.js";import"./ZIndexLayer-DJFUyPkd.js";import"./useAnimationId-dKpzhWqB.js";import"./ActivePoints-BK4U7PBG.js";import"./Dot-T-B_JEuw.js";import"./types-BCqSdCtd.js";import"./RegisterGraphicalItemId-BaYVXJgS.js";import"./GraphicalItemClipPath-CJUrTS9M.js";import"./SetGraphicalItem-CVCJo--0.js";import"./getRadiusAndStrokeWidthFromDot-La0lgpRv.js";import"./ActiveShapeUtils-vPOXs-PX.js";import"./Curve-C9UO5Z1_.js";import"./step-ClVzp-XC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CmFW8bhj.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
