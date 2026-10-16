import{R as r}from"./iframe-D9OaE0-D.js";import{R as c}from"./zIndexSlice-C6kYgFGy.js";import{C as d}from"./ComposedChart-7wLgVQR2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DrUNqhiB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C2SndTCZ.js";import"./index-CPbI-VNQ.js";import"./index-Dk0thkU_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BdEIFooo.js";import"./isWellBehavedNumber-BGqhKh1u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2JOV4OxH.js";import"./axisSelectors-D_Wp4SpS.js";import"./d3-scale-C7A9n28f.js";import"./index-BY4SHn_n.js";import"./index-Bvh82Xr6.js";import"./renderedTicksSlice-PaBI4ux9.js";import"./index-Dd8asFuH.js";import"./CartesianChart-FZa6BBKS.js";import"./chartDataContext-Cp5Fg0uV.js";import"./CategoricalChart-CEVp6apd.js";import"./Layer-D4toxw-K.js";import"./activeStyles-8VQiBHQs.js";import"./Label-DM3WzLWy.js";import"./Text-BzPsoW0G.js";import"./pageBackground-Cv-86bVo.js";import"./useId-DeYBD4I8.js";import"./useBackwardsCompatibleTheme-ClikVWmk.js";import"./ZIndexLayer-D_H7NPBA.js";import"./useAnimationId-D-wfB7qE.js";import"./dataEntryStyles-Bho6MXC7.js";import"./ActivePoints-BxgbZhZA.js";import"./Dot-B6z8g14w.js";import"./types-CXdLVzsF.js";import"./GraphicalItemClipPath-DMgrRmW6.js";import"./SetGraphicalItem-jAe7eVS9.js";import"./getRadiusAndStrokeWidthFromDot-CakziVew.js";import"./ActiveShapeUtils-Dsfqnr6i.js";import"./Curve-BeWRx8o8.js";import"./step-BNV5-s-4.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-B44sET-2.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
