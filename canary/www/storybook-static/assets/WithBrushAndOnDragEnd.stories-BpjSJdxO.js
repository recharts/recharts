import{R as t}from"./iframe-Qmct8dPL.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DXIqEK91.js";import{B as p}from"./BarChart-m0Q472mQ.js";import{X as l}from"./XAxis-9J-zU-e3.js";import{Y as h}from"./YAxis-DhnYemPX.js";import{B as x}from"./Brush-B4hXv87-.js";import{B as c}from"./Bar-CaSrxjTK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OLGJV50e.js";import"./index-BiNiAG-8.js";import"./index-Y-_D5N0e.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1ACdwYcX.js";import"./isWellBehavedNumber-B8_5eiwl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CA8gYP8X.js";import"./axisSelectors-DQj7dDoX.js";import"./d3-scale-BxubizPM.js";import"./index-JkwU9wUv.js";import"./index-Cl8DEeo-.js";import"./renderedTicksSlice-C_XZvXHS.js";import"./index-yzCwrxwp.js";import"./CartesianChart-BKFAhLSe.js";import"./chartDataContext-phyyW0XT.js";import"./CategoricalChart-kEDlcm2-.js";import"./CartesianAxis-BRUXhqMv.js";import"./Layer-DivV_9FZ.js";import"./Text-CqCSaO_p.js";import"./DOMUtils-CVrddbmH.js";import"./useId-BXFGZ7WB.js";import"./useBackwardsCompatibleTheme-BkhTNX9-.js";import"./Label-B1HxkUUU.js";import"./ZIndexLayer-1SjAyyP_.js";import"./types-R1YvGwXP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bqna9ZlZ.js";import"./useAnimationId-DreFRpzI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZ8eY7t4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-QE8CXMAG.js";import"./tooltipContext-CiPbyUsc.js";import"./RegisterGraphicalItemId-xOabcHeQ.js";import"./ErrorBarContext-C9Rble42.js";import"./GraphicalItemClipPath-B4CCgAUu.js";import"./SetGraphicalItem-Dm7pFyfQ.js";import"./getZIndexFromUnknown-Bpj5GULj.js";import"./useGraphicalItemIdentity-BCZesqSu.js";import"./dataEntryStyles-sSZ6unG7.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
