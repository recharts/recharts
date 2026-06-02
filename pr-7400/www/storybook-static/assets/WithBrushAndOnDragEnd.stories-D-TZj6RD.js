import{c as t}from"./iframe-Dy-e7pIM.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-BAzwug6r.js";import{B as p}from"./BarChart-Ce1ZW1XE.js";import{X as l}from"./XAxis-CumYrXMb.js";import{Y as h}from"./YAxis-BX0V94CN.js";import{B as x}from"./Brush-CHCZplcr.js";import{B as c}from"./Bar-DHD2fmgU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-kVBDWM7h.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./get-D_U-7Kmb.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./CartesianAxis-kW3aoD-D.js";import"./Layer-BQggJIEv.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./Label-Bd4SV5Lr.js";import"./ZIndexLayer-DgxZOhGb.js";import"./types-B745wbwD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Bpda8jyn.js";import"./ReactUtils-DdYRakW1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BL03ALcW.js";import"./useAnimationId-D1tL6Rir.js";import"./ActiveShapeUtils-FFunzflv.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./ErrorBarContext-N7PuOz_i.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./getZIndexFromUnknown-CaKlRU4E.js";import"./graphicalItemSelectors-CfFMNq7_.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const dt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,dt as __namedExportsOrder,ot as default};
