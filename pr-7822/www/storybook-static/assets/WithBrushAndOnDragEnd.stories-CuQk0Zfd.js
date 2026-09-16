import{R as t}from"./iframe-BBXYJHV9.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DeV5nVkQ.js";import{B as p}from"./BarChart-CS39En3h.js";import{X as l}from"./XAxis-OTNhB7fI.js";import{Y as h}from"./YAxis-BTJMRiMh.js";import{B as x}from"./Brush-BN04T5cO.js";import{B as c}from"./Bar-DLUN89zU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_5C5TP0.js";import"./index-CKKng9rb.js";import"./index-DD1sJSjK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cuufas3t.js";import"./isWellBehavedNumber-Df9i-Xuh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--QMYLh37.js";import"./axisSelectors-ldrqaVXy.js";import"./d3-scale-Cim9t_7k.js";import"./index-C1POlg4L.js";import"./index-DaLQCs1D.js";import"./renderedTicksSlice-D2BRqvUe.js";import"./index-CyGTPXip.js";import"./CartesianChart-Sq09cuqY.js";import"./chartDataContext-CvGK2QEJ.js";import"./CategoricalChart-BQqZpjdB.js";import"./CartesianAxis-a8cTgv_e.js";import"./Layer-CLVZjsru.js";import"./Text-D82BKuR8.js";import"./DOMUtils-CzO3u12F.js";import"./useId-B4ofBqjM.js";import"./useBackwardsCompatibleTheme-DCcJalTw.js";import"./Label-lRXxfB4K.js";import"./ZIndexLayer-DTr1Fcax.js";import"./types-Bf4vH5cc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Szq-E2F-.js";import"./useAnimationId-CBIZAPE4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BdigyXl7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcqMOZEc.js";import"./tooltipContext-C8i3kdxv.js";import"./RegisterGraphicalItemId-B-07fAKx.js";import"./ErrorBarContext-CrrVco2B.js";import"./GraphicalItemClipPath-h1d35KAS.js";import"./SetGraphicalItem-Dp4v1WTr.js";import"./getZIndexFromUnknown-DTOzMFVG.js";import"./useGraphicalItemIdentity-DpGCweuE.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
