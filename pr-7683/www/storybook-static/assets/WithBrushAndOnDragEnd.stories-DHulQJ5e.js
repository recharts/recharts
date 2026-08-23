import{R as t}from"./iframe-1kyud43n.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cz5lyADs.js";import{B as p}from"./BarChart-Dj4H1t1Y.js";import{X as l}from"./XAxis-hMDf8ppU.js";import{Y as h}from"./YAxis-CNW7YlNA.js";import{B as x}from"./Brush-zn-qEANA.js";import{B as c}from"./Bar-wYL5j-f0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Hu0TR0tN.js";import"./index-DSXagRxi.js";import"./index-_AXMDP6s.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuZ_Ktq7.js";import"./isWellBehavedNumber-CN4_9Vj1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6lw4dqn.js";import"./index-C2be1uTX.js";import"./index-XjPcI5ms.js";import"./axisSelectors-l88JnyTW.js";import"./d3-scale-CyS0eQ4Y.js";import"./renderedTicksSlice-DyP9_snd.js";import"./CartesianChart-DvAV2_6S.js";import"./chartDataContext-CIvFsnLa.js";import"./CategoricalChart-BmX_T4yF.js";import"./CartesianAxis-ClVpcem5.js";import"./Layer-BIHn5b7O.js";import"./Text-DH0wfypU.js";import"./DOMUtils-PMyjxqYh.js";import"./useId-9eWNRi00.js";import"./useBackwardsCompatibleTheme-CSH7ZS6o.js";import"./Label-C1lR5ca8.js";import"./ZIndexLayer-JkDBeXjs.js";import"./types-CTti3ygY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DeTQYvPq.js";import"./useAnimationId-RVCSWKWu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BxKv-jXG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-rwurj85y.js";import"./tooltipContext-DuGvi8Du.js";import"./RegisterGraphicalItemId-BzVYbG1B.js";import"./ErrorBarContext-k5tsvNfO.js";import"./GraphicalItemClipPath-CPrhIVsz.js";import"./SetGraphicalItem-ydaT6l1I.js";import"./getZIndexFromUnknown-Br8r1zB2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BRoA24w2.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
