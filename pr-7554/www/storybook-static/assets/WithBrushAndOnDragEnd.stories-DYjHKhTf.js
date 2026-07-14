import{R as t}from"./iframe-B5C9KTx6.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DWIJ7njb.js";import{B as p}from"./BarChart-aiXL-7MU.js";import{X as l}from"./XAxis-wVZq09ph.js";import{Y as h}from"./YAxis-DM3geQpa.js";import{B as x}from"./Brush-DmolvuYJ.js";import{B as c}from"./Bar-CSeXWpTg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BbpYnvP-.js";import"./index-DqoBz7Th.js";import"./index-2f6O6x8k.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CyjCxujM.js";import"./isWellBehavedNumber-D81K5xCr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-LcQsrP5q.js";import"./index-Cc-xdkS4.js";import"./index-CcYL9FAW.js";import"./renderedTicksSlice-C1Unvwoa.js";import"./axisSelectors-DNhpWmqM.js";import"./d3-scale-C_LGDl3j.js";import"./CartesianChart-CdAE6abg.js";import"./chartDataContext-BUicgLG9.js";import"./CategoricalChart-CxbxfGOc.js";import"./CartesianAxis-BJNemJkp.js";import"./Layer-B1gLrgGj.js";import"./Text-CAlHzKeZ.js";import"./DOMUtils-DWemK0zS.js";import"./Label-BqsOZO9Z.js";import"./ZIndexLayer-BjQPgVfD.js";import"./types-Ca2Hpkj5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DPXXKpbg.js";import"./AnimatedItems-CboUjumK.js";import"./useAnimationId-B9XgvcqX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zp4NG0t5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHp3h3tZ.js";import"./RegisterGraphicalItemId-C9s_9ELq.js";import"./ErrorBarContext-BUevHKDk.js";import"./GraphicalItemClipPath-DBJwGDNu.js";import"./SetGraphicalItem-DFLthVJ4.js";import"./getZIndexFromUnknown-CO4wiC2w.js";import"./graphicalItemSelectors-BpumiOSR.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
