import{R as r}from"./iframe-LvrC9cNQ.js";import{R as c}from"./zIndexSlice-Chla-YhC.js";import{C as d}from"./ComposedChart-DQuHGzhG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CKZ_ehfN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-yQwV084p.js";import"./throttle-BrACn0xJ.js";import"./index-Dqr70K98.js";import"./index-D77JjdwQ.js";import"./RechartsWrapper-CiGR2OiQ.js";import"./axisSelectors-C8xBMBuJ.js";import"./polarAxisSelectors-DMX56tfl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfvKpIbF.js";import"./index-LmwlvfKc.js";import"./index-Cxc9kCWG.js";import"./renderedTicksSlice-BsmmD3xm.js";import"./index-Bs0fdiGB.js";import"./CartesianChart-C9KorEin.js";import"./ZIndexPortal-DytdVxJW.js";import"./CategoricalChart-DgMeZkIA.js";import"./Layer-CcIpGH5s.js";import"./LabelList-DdXF3DfJ.js";import"./Label-DdT2eLCH.js";import"./Text-DGG_TkrL.js";import"./DOMUtils-CdIFc34u.js";import"./ZIndexLayer-Dv3aUmzs.js";import"./ActivePoints-CCaTRIyk.js";import"./Dot-C6CSCKrA.js";import"./types-Dk8bWHyp.js";import"./activeStyles-MYCrrU5C.js";import"./useAnimationId-BX5uo1zq.js";import"./dataEntryStyles-CJNDsNBI.js";import"./Symbols-Z0uJKVZu.js";import"./symbol-BDoGzdqc.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CEH73uPW.js";import"./getRadiusAndStrokeWidthFromDot-BgrGISNG.js";import"./ActiveShapeUtils-Dyl71ZcK.js";import"./Curve-CVAgTuhQ.js";import"./step-XOREPbKt.js";import"./useEffectiveDataKey-BIhhRaL_.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
