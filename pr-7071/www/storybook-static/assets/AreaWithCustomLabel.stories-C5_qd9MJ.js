import{e as t}from"./iframe-KIGRIIb5.js";import{R as c}from"./arrayEqualityCheck-BpdZ7hwi.js";import{C as d}from"./ComposedChart-DvEDkjwM.js";import{A as l}from"./Area-C8BzJlyw.js";import{R as h}from"./RechartsHookInspector-Bt2WJDB1.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_adPZ-8.js";import"./immer-WG6U2D_d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHe9ZVa4.js";import"./index-ClQqk-oX.js";import"./hooks-CB3QlvSf.js";import"./axisSelectors-BkzxsiaE.js";import"./d3-scale-DgRq4lUU.js";import"./zIndexSlice-_VCrDw0P.js";import"./renderedTicksSlice-eT4Ivs1b.js";import"./CartesianChart-qCsQp1Vm.js";import"./chartDataContext-D4pNrPnz.js";import"./CategoricalChart-e7-cm4mq.js";import"./Curve-BndPQnOp.js";import"./types-w2IwZ3Nn.js";import"./step-CQsLqeZl.js";import"./Layer-DuIzwjaR.js";import"./ReactUtils-CkQKUzGb.js";import"./Label-CkUDjV7L.js";import"./Text-BoAeRYTN.js";import"./DOMUtils-CBEI-OH0.js";import"./ZIndexLayer-CBYmGw4W.js";import"./ActivePoints-CoEyozmc.js";import"./Dot-DgubKZir.js";import"./RegisterGraphicalItemId-DsmENlGz.js";import"./GraphicalItemClipPath-CZoI5FBE.js";import"./SetGraphicalItem-DmMr7UzB.js";import"./useAnimationId-Bv85JSPp.js";import"./getRadiusAndStrokeWidthFromDot-Dh8fbv0-.js";import"./graphicalItemSelectors-Dnow2LTy.js";import"./index-CoeeyBxi.js";import"./ChartSizeDimensions-BY9JAKDy.js";import"./OffsetShower-DhxtKv-n.js";import"./PlotAreaShower-DjAl-bbb.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
