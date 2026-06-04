import{R as t}from"./iframe-D7yt-ZhS.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B3_xMC6k.js";import{B as p}from"./BarChart-DOT3JlJK.js";import{X as l}from"./XAxis-dYNJxVBm.js";import{Y as h}from"./YAxis-C5MIsZgm.js";import{B as x}from"./Brush-BW82H6wv.js";import{B as c}from"./Bar-Bz8odb4B.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-HxqS16dW.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./get-Cebs6l6-.js";import"./resolveDefaultProps-BUJk688E.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./index-8zJni8A2.js";import"./renderedTicksSlice-DNerh-qI.js";import"./axisSelectors-CW8UYJLW.js";import"./d3-scale-BUBb-XjW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C6SOYYpl.js";import"./chartDataContext-_IqHUZU5.js";import"./CategoricalChart-CMCxIWsh.js";import"./CartesianAxis-CuPdOLrD.js";import"./Layer-B34T8oTs.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./Label-C0p1CWe9.js";import"./ZIndexLayer-BjlE0UF2.js";import"./types-CuLQosun.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-C7RfWuHE.js";import"./AnimatedItems-CUAQ84gk.js";import"./useAnimationId-gSm0_FsD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KnaRg_aq.js";import"./ActiveShapeUtils-C4okiOLS.js";import"./RegisterGraphicalItemId-Bj0awerq.js";import"./ErrorBarContext-BCc7VHSV.js";import"./GraphicalItemClipPath-CSwP3plz.js";import"./SetGraphicalItem-BFSgsIRt.js";import"./getZIndexFromUnknown-CYFadKVd.js";import"./graphicalItemSelectors-C0X08UDC.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
