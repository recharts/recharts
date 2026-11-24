import{R as t}from"./iframe-rnrsK-Eh.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D3HmR0ZR.js";import{B as p}from"./BarChart-6o8vQ-a6.js";import{X as l}from"./XAxis-DcA-2yah.js";import{Y as h}from"./YAxis-CebqVQrE.js";import{B as x}from"./Brush-ChsTNIt0.js";import{B as c}from"./Bar-BUeCKdYR.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-b1TTGhvT.js";import"./get-CjriyByo.js";import"./throttle-BHymO33n.js";import"./index-BSOAsjef.js";import"./index-D8r-4r4t.js";import"./RechartsWrapper-tBuCuUXe.js";import"./axisSelectors-CIZ-q5JG.js";import"./polarAxisSelectors-B1h4eON8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaDfMMmk.js";import"./index-BZjQac1j.js";import"./index-BcrgJFGN.js";import"./renderedTicksSlice-3O1E6NtI.js";import"./index-BWQTU1nE.js";import"./fillDefinitions-ooWue1m4.js";import"./CartesianChart-CdGDQA5c.js";import"./chartDataContext-BaXmKLtm.js";import"./CategoricalChart-B0mb1tZK.js";import"./CartesianAxis-ZiuFLH_J.js";import"./Layer-D4ktbd_J.js";import"./Text-WHgqMzAs.js";import"./ZIndexLayer-dsZ60IUc.js";import"./Label-DJYYuUsE.js";import"./types-CAJhQIqW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DPy91L9k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8OmFGHQb.js";import"./useAnimationId-COqzWo9S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O7QOH_04.js";import"./tooltipContext-DbU0ZZ86.js";import"./ErrorBarContext-YhaLsFzE.js";import"./activeStyles-9CDj_AEF.js";import"./SetGraphicalItem-Bhp-y0Ji.js";import"./getZIndexFromUnknown-CY1dy49c.js";import"./useEffectiveDataKey-DftwbdUx.js";import"./omit-Cn0MF7xB.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
