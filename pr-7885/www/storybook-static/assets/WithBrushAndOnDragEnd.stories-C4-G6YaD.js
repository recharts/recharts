import{R as t}from"./iframe-qocy1DQe.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-3RvOLzet.js";import{B as p}from"./BarChart-HZgiPn4E.js";import{X as l}from"./XAxis-DVDwgnrS.js";import{Y as h}from"./YAxis-BEBc8eQo.js";import{B as x}from"./Brush-D2c9FcFk.js";import{B as c}from"./Bar-BcCSAsSh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DL_zA7f1.js";import"./index-D6IIus7-.js";import"./index-BPqPq_lE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJBSV8gq.js";import"./isWellBehavedNumber-BIQIJEIr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Br0BGP0j.js";import"./axisSelectors-DDRTV0S0.js";import"./d3-scale-D0IFI5Iu.js";import"./index-CS-NV7Zp.js";import"./index-C4gwL4-s.js";import"./renderedTicksSlice-BgKiD8FK.js";import"./index-DYvx6oZP.js";import"./CartesianChart-DQFc2W7b.js";import"./chartDataContext-kqjRO4tk.js";import"./CategoricalChart-DuhZERvG.js";import"./CartesianAxis-MlycpDsd.js";import"./Layer-B3KOyccU.js";import"./Text-Da9B2kdK.js";import"./DOMUtils-6qqCmkCb.js";import"./useId-HrwTNVuH.js";import"./useBackwardsCompatibleTheme-IgaWvrkn.js";import"./Label-CT_NLtkb.js";import"./ZIndexLayer-CFBos5HM.js";import"./types-Bss1IWFA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-NvJhAvIW.js";import"./useAnimationId-BzcHu7-i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbjotOaB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BsQ4rgbJ.js";import"./tooltipContext-CdV-ZGTt.js";import"./RegisterGraphicalItemId-CjOhDwU5.js";import"./ErrorBarContext-B1oojupg.js";import"./GraphicalItemClipPath-CyLjJqVx.js";import"./SetGraphicalItem-CzGt4YnL.js";import"./getZIndexFromUnknown-kDZff2p4.js";import"./useGraphicalItemIdentity-Cs7JOztK.js";import"./dataEntryStyles-CDmcq6b7.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
