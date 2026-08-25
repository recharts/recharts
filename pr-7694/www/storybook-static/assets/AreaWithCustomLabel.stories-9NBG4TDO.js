import{R as r}from"./iframe-CkYMKdj_.js";import{R as c}from"./zIndexSlice-BYtB_o4a.js";import{C as d}from"./ComposedChart-aFeYXy0e.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D8Jc6JqZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BoLMdPdD.js";import"./index-C3dUdvXE.js";import"./index-DXIKdrQ_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cash8-Wc.js";import"./isWellBehavedNumber-D3nu-dTg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nO0TmJ-v.js";import"./index-E2SMYanO.js";import"./index-DL62tWXC.js";import"./axisSelectors-C8zY5_Jl.js";import"./d3-scale-DbX3n6Vg.js";import"./renderedTicksSlice-BQ9kQeWp.js";import"./CartesianChart-CFe3I3j0.js";import"./chartDataContext-B1d2oGRw.js";import"./CategoricalChart-ceXzvbTP.js";import"./Layer-DM-j75FJ.js";import"./AnimatedItems-DOwp1bhS.js";import"./Label-nwXUgC1e.js";import"./Text-DLxJgi7q.js";import"./DOMUtils-CRMwsydF.js";import"./useId-vngItXwU.js";import"./useBackwardsCompatibleTheme-BDT9ZxVM.js";import"./ZIndexLayer-CYcyrDOa.js";import"./useAnimationId-BMO_95FO.js";import"./ActivePoints-SNTIAa6X.js";import"./Dot-DTKTIC4o.js";import"./types-lWnA8D12.js";import"./RegisterGraphicalItemId-xAUQoTNg.js";import"./GraphicalItemClipPath-65lu28GO.js";import"./SetGraphicalItem-BDY3wpRw.js";import"./getRadiusAndStrokeWidthFromDot-B4vOHjlt.js";import"./ActiveShapeUtils-DdvFeJee.js";import"./Curve-BKPB57y0.js";import"./step-CVVw7_T2.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DtWqI1-3.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
