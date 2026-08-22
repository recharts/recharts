import{R as t}from"./iframe-Ca32ubBP.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-dHiwLFUj.js";import{B as p}from"./BarChart-CDxgTlRL.js";import{X as l}from"./XAxis-Doj-lEYw.js";import{Y as h}from"./YAxis-wOxJ_8VY.js";import{B as x}from"./Brush-C3vKZGRT.js";import{B as c}from"./Bar-D_h5ncsg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B0sCMXOK.js";import"./index-8HLzHw6r.js";import"./index-CHnduxoF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FNg74tNy.js";import"./isWellBehavedNumber-C-9KtVDX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_dCGHdd.js";import"./index-CHNh1dey.js";import"./index-Dge3NWQD.js";import"./axisSelectors-A6ndeoHc.js";import"./d3-scale-Do2gUorH.js";import"./renderedTicksSlice-CpRpGU6M.js";import"./CartesianChart-D1u_uw1Q.js";import"./chartDataContext-Dgyo9muf.js";import"./CategoricalChart-CBCGNfzQ.js";import"./CartesianAxis-Dfpoi9-r.js";import"./Layer-B0UktO7Z.js";import"./Text-i5MeFzWV.js";import"./DOMUtils-BJ447lE9.js";import"./useId-BjxuxzLj.js";import"./useBackwardsCompatibleTheme-Ddp8u6f9.js";import"./Label-DD1RmAzE.js";import"./ZIndexLayer-BAqimWYO.js";import"./types-_9LccsBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CDoRaH70.js";import"./useAnimationId-B8VHZUPO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLCrIZbS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-x7koemir.js";import"./tooltipContext-YohOR6ew.js";import"./RegisterGraphicalItemId-B_2qN3HQ.js";import"./ErrorBarContext-CAeoPaJo.js";import"./GraphicalItemClipPath-CrTkoGhX.js";import"./SetGraphicalItem-CnmA_FOG.js";import"./getZIndexFromUnknown-BvTB6FBq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DxjfMUKN.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
