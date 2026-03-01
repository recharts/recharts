import{e as t}from"./iframe-KIGRIIb5.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BpdZ7hwi.js";import{B as p}from"./BarChart-B8-JMldF.js";import{X as l}from"./XAxis-CSvpHUvr.js";import{Y as h}from"./YAxis-Bh8V8qj-.js";import{B as c}from"./Brush-DrlAAUkc.js";import{B as x}from"./Bar-hz4dCygd.js";import{R as u}from"./RechartsHookInspector-Bt2WJDB1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_adPZ-8.js";import"./immer-WG6U2D_d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHe9ZVa4.js";import"./index-ClQqk-oX.js";import"./hooks-CB3QlvSf.js";import"./axisSelectors-BkzxsiaE.js";import"./d3-scale-DgRq4lUU.js";import"./zIndexSlice-_VCrDw0P.js";import"./renderedTicksSlice-eT4Ivs1b.js";import"./CartesianChart-qCsQp1Vm.js";import"./chartDataContext-D4pNrPnz.js";import"./CategoricalChart-e7-cm4mq.js";import"./CartesianAxis-Cra0xsE5.js";import"./Layer-DuIzwjaR.js";import"./Text-BoAeRYTN.js";import"./DOMUtils-CBEI-OH0.js";import"./Label-CkUDjV7L.js";import"./ZIndexLayer-CBYmGw4W.js";import"./types-w2IwZ3Nn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-bsfh6YT_.js";import"./ReactUtils-CkQKUzGb.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BbMpDdiq.js";import"./isPlainObject-CCJRIfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcYcowey.js";import"./useAnimationId-Bv85JSPp.js";import"./Trapezoid-6-PW5Hrl.js";import"./Sector-Dsu6XmgC.js";import"./Symbols-B6R2DiC2.js";import"./symbol-C10mZUN3.js";import"./step-CQsLqeZl.js";import"./Curve-BndPQnOp.js";import"./RegisterGraphicalItemId-DsmENlGz.js";import"./ErrorBarContext-Dm4Pi7GF.js";import"./GraphicalItemClipPath-CZoI5FBE.js";import"./SetGraphicalItem-DmMr7UzB.js";import"./getZIndexFromUnknown-B2gsXm6D.js";import"./graphicalItemSelectors-Dnow2LTy.js";import"./index-CoeeyBxi.js";import"./ChartSizeDimensions-BY9JAKDy.js";import"./OffsetShower-DhxtKv-n.js";import"./PlotAreaShower-DjAl-bbb.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
