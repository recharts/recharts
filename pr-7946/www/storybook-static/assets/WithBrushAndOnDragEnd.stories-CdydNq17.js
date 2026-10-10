import{R as t}from"./iframe-CbPFwm7l.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-cmGazbpI.js";import{B as p}from"./BarChart-BCVd8Nxo.js";import{X as l}from"./XAxis-I1Z8SlwP.js";import{Y as h}from"./YAxis-CFuZPq2O.js";import{B as x}from"./Brush-DXEPNSik.js";import{B as c}from"./Bar-DRoSBt67.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CsRm63w_.js";import"./index-DZkyIfi6.js";import"./index-BZRRun-o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BXcdiDsW.js";import"./isWellBehavedNumber-UGMkNa04.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C9c4OR_j.js";import"./axisSelectors-31esebaG.js";import"./d3-scale-CHJf7NcK.js";import"./index-Cvmqex35.js";import"./index-khK7m-8Q.js";import"./renderedTicksSlice-Ctq_TXqh.js";import"./index-CKBSX-em.js";import"./CartesianChart-DOYPm28C.js";import"./chartDataContext-CEmuSid6.js";import"./CategoricalChart-Cz2-7e9E.js";import"./CartesianAxis-CRYdmYpO.js";import"./Layer-BHHNaIH9.js";import"./Text-BOjecne3.js";import"./pageBackground-5oAWQhvG.js";import"./useId-BiS2TkJk.js";import"./useBackwardsCompatibleTheme-DZ_BE-m7.js";import"./Label-Dd7y5kyu.js";import"./ZIndexLayer-DJZ-23nf.js";import"./types-BHufKOgb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-C0PrsAC0.js";import"./useAnimationId-BoGopq3-.js";import"./dataEntryStyles-C9sHki_5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZKE4x95.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jfDQFPc2.js";import"./tooltipContext-CzUq4HA3.js";import"./ErrorBarContext-CuPWqX0o.js";import"./GraphicalItemClipPath-c8upVCA0.js";import"./SetGraphicalItem-D94Ocgsk.js";import"./getZIndexFromUnknown-CE1U09Kg.js";import"./useGraphicalItemIdentity-CyHX6ZiQ.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
