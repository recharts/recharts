import{R as r}from"./iframe-DGsKi3sD.js";import{R as c}from"./zIndexSlice-KX0_yctO.js";import{C as d}from"./ComposedChart-ZhGI63Ch.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CQ4xYBBJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DCh63S7N.js";import"./index-Dco7y41f.js";import"./index-Bp6gYlCO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-WH78MRVQ.js";import"./isWellBehavedNumber-O5p8iLqQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYCPiSo2.js";import"./axisSelectors-DtyBM-5t.js";import"./d3-scale-D5k0CP0B.js";import"./index-BcRP16iL.js";import"./index-C3o7ztbZ.js";import"./renderedTicksSlice-BV6OKQcy.js";import"./index-BUKcBCac.js";import"./CartesianChart-DqPq6dfa.js";import"./chartDataContext-YSpCe_4G.js";import"./CategoricalChart-kDHsGv00.js";import"./Layer-BEEnYnIh.js";import"./AnimatedItems-oaPm5uVb.js";import"./Label-kB9Gr9Je.js";import"./Text-ChCNWouT.js";import"./DOMUtils-Bj-nNPQP.js";import"./useId-DbfF67AC.js";import"./useBackwardsCompatibleTheme-CdHfIa1f.js";import"./ZIndexLayer-C-hUG3-A.js";import"./useAnimationId-CpfROKBj.js";import"./ActivePoints-ALRvVDi0.js";import"./Dot-BfPTVnro.js";import"./types-BYQ55WzM.js";import"./RegisterGraphicalItemId-Ci3kKosu.js";import"./GraphicalItemClipPath-DAhebsqX.js";import"./SetGraphicalItem-TmtzSo0n.js";import"./getRadiusAndStrokeWidthFromDot-D62b7kUR.js";import"./ActiveShapeUtils-D1-7_dRK.js";import"./Curve-Jm82kUWT.js";import"./step-B-VK-dxT.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C4ge5-Nz.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
