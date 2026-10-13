import{R as t}from"./iframe-BpQ7m7wo.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-MwSCz61s.js";import{B as p}from"./BarChart-WmXKrluN.js";import{X as l}from"./XAxis-DE6o4Zll.js";import{Y as h}from"./YAxis-DRCAJ4BY.js";import{B as x}from"./Brush-kPlgbt9k.js";import{B as c}from"./Bar-CI3acAoh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dkzrvgSW.js";import"./index-DAB_MUnB.js";import"./index-CD4MTvij.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-33rcogn6.js";import"./isWellBehavedNumber-BVcmp2ni.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BVbz7wfB.js";import"./axisSelectors-BYDkrwMW.js";import"./d3-scale-Byhs4CrR.js";import"./index-CXa8VbQ8.js";import"./index-BbHMTUSJ.js";import"./renderedTicksSlice-82sk-Quf.js";import"./index-ByFVwCBJ.js";import"./CartesianChart-DMhVIjmV.js";import"./chartDataContext-84s_zl93.js";import"./CategoricalChart-CxhuSAqC.js";import"./CartesianAxis-1RRtp3t2.js";import"./Layer-DlRoNKW0.js";import"./Text-QB9mhIk2.js";import"./pageBackground-jCojFoRf.js";import"./useId-Ba0OHruW.js";import"./useBackwardsCompatibleTheme-BV9LHmnt.js";import"./Label-BBIpfhf_.js";import"./ZIndexLayer-BrTVgKud.js";import"./types-XUWAitbU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-C2IhZeJz.js";import"./useAnimationId-D3uGeL-A.js";import"./dataEntryStyles-CFn7kNor.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVkCRlhI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiATo6ey.js";import"./tooltipContext-DDhPdX-u.js";import"./ErrorBarContext-DyJjK28E.js";import"./GraphicalItemClipPath-CDr7mMLr.js";import"./SetGraphicalItem-FOIPn71v.js";import"./getZIndexFromUnknown-Zpc6D4Is.js";import"./useEffectiveDataKey-yqjBtOm2.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
