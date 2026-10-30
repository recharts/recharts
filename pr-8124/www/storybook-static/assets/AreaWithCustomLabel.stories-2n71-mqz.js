import{R as r}from"./iframe-CO2wyIFg.js";import{R as c}from"./zIndexSlice-B1dwy21o.js";import{C as d}from"./ComposedChart-BcXhG0tA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DcCC59eo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-WHnVIT2p.js";import"./throttle-Bs5LuV_m.js";import"./index-jOLD2CcF.js";import"./index-Ctoi-28y.js";import"./RechartsWrapper-BPn-EIY7.js";import"./axisSelectors-6mrCXm_L.js";import"./polarAxisSelectors-BTrk53y9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CG4Qydf0.js";import"./index-DihKhs0V.js";import"./index-Bz0Oikv7.js";import"./renderedTicksSlice-BUJ996QC.js";import"./index-Bf8x0XIR.js";import"./CartesianChart-Bz4eFVMM.js";import"./ZIndexPortal-Ca53grIf.js";import"./CategoricalChart-hTdn61VM.js";import"./Layer-3FBX9WCC.js";import"./LabelList-ZxVwNU5Y.js";import"./Label-DwmonuSB.js";import"./Text-9LTzebQz.js";import"./DOMUtils-BcfmvW5B.js";import"./ZIndexLayer-Bvl6Rs1y.js";import"./ActivePoints-C0WjGSw3.js";import"./Dot-1KNmnTx0.js";import"./types-l0n7UaRD.js";import"./activeStyles-C1uCXth5.js";import"./useAnimationId-80VZwTZw.js";import"./dataEntryStyles-DJf9CEZB.js";import"./Symbols-CiaG31nz.js";import"./symbol-DdfWm2fk.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DzHXsKbf.js";import"./getRadiusAndStrokeWidthFromDot-DxWBVjs4.js";import"./ActiveShapeUtils-CJm59VzC.js";import"./Curve-Bk39tyeQ.js";import"./step-DLHEgf4y.js";import"./fillDefinitions-BgaObCNr.js";import"./useEffectiveDataKey-0oKoD9E-.js";import"./themeFill-BkM1x4hA.js";const st={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},nt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,nt as __namedExportsOrder,st as default};
