import{R as r}from"./iframe-CZhceScU.js";import{R as c}from"./zIndexSlice-6KQyntdT.js";import{C as d}from"./ComposedChart-o3A5Ws01.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-kSTB3jdI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4vdN6P2D.js";import"./index-CDuDfojR.js";import"./index-DpQK2wXv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DKz_FWjC.js";import"./isWellBehavedNumber-D-87yJTE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FSanOK4G.js";import"./index-BEy16_lK.js";import"./index-Blwm4_kv.js";import"./axisSelectors-8JBi47Qo.js";import"./d3-scale-C7Vm1zun.js";import"./renderedTicksSlice-Cf3Ebwgh.js";import"./CartesianChart-8qShj_eX.js";import"./chartDataContext-DJFrW4dv.js";import"./CategoricalChart-Cgj8wKUd.js";import"./Layer-Drn4JAex.js";import"./AnimatedItems-DXBAxv9p.js";import"./Label-CNgEIlwK.js";import"./Text-CmIo03No.js";import"./DOMUtils-DbT53TZn.js";import"./useId-BZ6DWjsO.js";import"./useBackwardsCompatibleTheme-DNlLIhqX.js";import"./ZIndexLayer-wFB7jUG1.js";import"./useAnimationId-Cx8RIuDl.js";import"./ActivePoints-B1Bif-Ou.js";import"./Dot-0p8__XhD.js";import"./types-B4F0kvck.js";import"./RegisterGraphicalItemId-DnHmtku0.js";import"./GraphicalItemClipPath-BzJCuoya.js";import"./SetGraphicalItem-DuTz6hix.js";import"./getRadiusAndStrokeWidthFromDot-CVlp7Tat.js";import"./ActiveShapeUtils-Dk1tODGi.js";import"./Curve-FuimFyqA.js";import"./step-H2rxpHgP.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DOfJK511.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
