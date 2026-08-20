import{R as r}from"./iframe-DsANpUmI.js";import{R as c}from"./zIndexSlice-DvbQ_xRM.js";import{C as d}from"./ComposedChart-CC1tviS_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-A9wsEu38.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-vYgBP45f.js";import"./index-DLEQ2NY5.js";import"./index-D3xqrgS8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VCXcnZ86.js";import"./isWellBehavedNumber-Dg3vRfwI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDrHj0U2.js";import"./index-5L0AuTID.js";import"./index-BNBrr31l.js";import"./axisSelectors-B-1KrEKd.js";import"./d3-scale-_QauBjGX.js";import"./renderedTicksSlice-BUDGobd4.js";import"./CartesianChart-Cwf-uiEG.js";import"./chartDataContext-C2aYZmpD.js";import"./CategoricalChart-Di7Ri-zj.js";import"./Layer-DYWDW_71.js";import"./AnimatedItems-rVlz1FJX.js";import"./Label-B4DeKwN7.js";import"./Text-CjTSiniW.js";import"./DOMUtils-kNujPIKB.js";import"./useId-B0Q44yTc.js";import"./useBackwardsCompatibleTheme-BBpmGxx6.js";import"./ZIndexLayer-MPr2tp5c.js";import"./useAnimationId-DetthuUW.js";import"./ActivePoints-B0q4xgtH.js";import"./Dot-DxPtGh3x.js";import"./types-CnYkNLV_.js";import"./RegisterGraphicalItemId-Cpe7Zv2c.js";import"./GraphicalItemClipPath-YjZkau9w.js";import"./SetGraphicalItem-BGt3myf-.js";import"./getRadiusAndStrokeWidthFromDot-Dxn9p5np.js";import"./ActiveShapeUtils-nZLcFoMw.js";import"./Curve-CRdwjUaH.js";import"./step-BYrDDVtV.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors--ZUkVueJ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
