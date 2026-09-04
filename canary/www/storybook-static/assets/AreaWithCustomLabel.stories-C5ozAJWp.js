import{R as r}from"./iframe-C60CeSr1.js";import{R as c}from"./zIndexSlice-OJv_DQrU.js";import{C as d}from"./ComposedChart-BzAN8QDH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CIrU_sTr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4y-zsF2K.js";import"./index-CLcnbG-9.js";import"./index-Bqwda9Fq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGY8S9MU.js";import"./isWellBehavedNumber-ps2XZnBQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GqvtI-xq.js";import"./axisSelectors-8LjSDh6r.js";import"./d3-scale-CKiULClT.js";import"./index-BORXIxjx.js";import"./index-BpZ-_TsI.js";import"./renderedTicksSlice-tOvQVNJQ.js";import"./index-BHPplqCM.js";import"./CartesianChart-Dx5XpQWF.js";import"./chartDataContext-wxbL5Q17.js";import"./CategoricalChart-DorDSMvO.js";import"./Layer-BkafIlY5.js";import"./AnimatedItems-BorEvTXc.js";import"./Label-D00_RuVZ.js";import"./Text-DbOMyqnY.js";import"./DOMUtils-DGbVIUY3.js";import"./useId-DOhjH30T.js";import"./useBackwardsCompatibleTheme-NWguYV1j.js";import"./ZIndexLayer-DZjPHzll.js";import"./useAnimationId-SZ0HilGc.js";import"./ActivePoints-5H7EYI7d.js";import"./Dot-DqDbCkrn.js";import"./types-Bt5cyCk_.js";import"./RegisterGraphicalItemId-TGLRvyhw.js";import"./GraphicalItemClipPath-D_FqHT2B.js";import"./SetGraphicalItem-BDVcT93s.js";import"./getRadiusAndStrokeWidthFromDot-1touBkwt.js";import"./ActiveShapeUtils-D3L9NjGk.js";import"./Curve-Dnnwa-VF.js";import"./step-7U-QL9rs.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C7UE_d1E.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
