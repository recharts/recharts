import{R as t}from"./iframe-C7tNsTpK.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-T7oa9RdZ.js";import{B as p}from"./BarChart-DcPA-f-i.js";import{X as l}from"./XAxis-C2gvQZpV.js";import{Y as h}from"./YAxis-aXsdWW2g.js";import{B as x}from"./Brush-DRq_5Eqt.js";import{B as c}from"./Bar-Coi7-76v.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DNLiVZh5.js";import"./index-BESlF8Z2.js";import"./index-swZv8iIV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DbdXlzmI.js";import"./isWellBehavedNumber-w95Ql-ta.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BucpRp_7.js";import"./axisSelectors-CxImXzGX.js";import"./d3-scale-CAID8NmZ.js";import"./index-BolqH0tk.js";import"./index-CS0OILw8.js";import"./renderedTicksSlice-j7Pa5BYg.js";import"./index-DDzOQsUA.js";import"./CartesianChart-B_1K3lTu.js";import"./chartDataContext-B0xxoqnf.js";import"./CategoricalChart-Lk1sxOY3.js";import"./CartesianAxis-BaDX4wf1.js";import"./Layer-DP-YoZN_.js";import"./Text-UOL45mL4.js";import"./pageBackground-B-TVGQhf.js";import"./useId-6XeKOM79.js";import"./useBackwardsCompatibleTheme-BtQBwdq6.js";import"./Label-CEwaTgR3.js";import"./ZIndexLayer-jLHUg-ly.js";import"./types-OUsJcmF8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-gSeOcFSg.js";import"./useAnimationId-Bb7S2zXD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B75oFVmx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5hficCmD.js";import"./tooltipContext-Czplw5CS.js";import"./RegisterGraphicalItemId-CplM38Xw.js";import"./ErrorBarContext-Z3h8hxY9.js";import"./GraphicalItemClipPath-nv6N7UDG.js";import"./SetGraphicalItem-CiL25rkH.js";import"./getZIndexFromUnknown-DbGzk3bP.js";import"./useGraphicalItemIdentity-wn6P8Qk2.js";import"./dataEntryStyles-nGReLrVP.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
