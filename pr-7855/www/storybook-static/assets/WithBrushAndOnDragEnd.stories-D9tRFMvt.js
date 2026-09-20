import{R as t}from"./iframe-DqQsSS-D.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DEwzQEF1.js";import{B as p}from"./BarChart-FT7CqovG.js";import{X as l}from"./XAxis-BKSYmnyE.js";import{Y as h}from"./YAxis-Ci8o-AKr.js";import{B as x}from"./Brush-wAylXye2.js";import{B as c}from"./Bar-Du4mLF88.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dfb6FQUp.js";import"./index-Dbmbbyfr.js";import"./index-DhKVfvgy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BBiJzE-S.js";import"./isWellBehavedNumber-DnbbC0Ec.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFStnfMW.js";import"./axisSelectors-B52U77Z-.js";import"./d3-scale-DCqqE6RI.js";import"./index-B8fZ1s7u.js";import"./index-B4bGAE3u.js";import"./renderedTicksSlice-TJkJQb3w.js";import"./index-O7IqxgVs.js";import"./CartesianChart-DxivySAt.js";import"./chartDataContext-BlgeEOzh.js";import"./CategoricalChart-BaEimrAw.js";import"./CartesianAxis-BYaiVNcC.js";import"./Layer-D_OCfv3y.js";import"./Text-C5ELFOWd.js";import"./DOMUtils-DfpUN1kn.js";import"./useId-CY4qsl1d.js";import"./useBackwardsCompatibleTheme-BgrGij6q.js";import"./Label-B79akpip.js";import"./ZIndexLayer-CAYm_Ybv.js";import"./types-Dtf5SFP2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DE7FMoaT.js";import"./useAnimationId-YdFm9roE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B7LBQ_X5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-_QhNTD3X.js";import"./tooltipContext-ESHq1ACD.js";import"./RegisterGraphicalItemId-B_u3-RKa.js";import"./ErrorBarContext-Bvj5AtLG.js";import"./GraphicalItemClipPath-CH5UCRjx.js";import"./SetGraphicalItem-DiUOXkHE.js";import"./getZIndexFromUnknown-CqMt4SIm.js";import"./useGraphicalItemIdentity-DdD2mi7M.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
