import{R as t}from"./iframe-C3cMgs7N.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D-L1krEw.js";import{B as p}from"./BarChart-DPCQ0-mO.js";import{X as l}from"./XAxis-FEXGRCPo.js";import{Y as h}from"./YAxis-CPQEML-M.js";import{B as x}from"./Brush-BTqkiuVG.js";import{B as c}from"./Bar-Bb8D2wYN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwKbnzuB.js";import"./index-mPjB9LZ5.js";import"./index-DWDQXKDL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VIGlyQ4Q.js";import"./isWellBehavedNumber-loxwPj_L.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BBL8LSCF.js";import"./axisSelectors-CyFo4akS.js";import"./d3-scale-D9HAsSWg.js";import"./index-iS8UOd73.js";import"./index-CbpSVjN5.js";import"./renderedTicksSlice-BLxMgK4j.js";import"./index-CK2o4ASw.js";import"./CartesianChart-BYHp5epD.js";import"./chartDataContext-CUGiPJA1.js";import"./CategoricalChart-BrdbHA9J.js";import"./CartesianAxis-Cm_mWvUj.js";import"./Layer-B4ssOgoe.js";import"./Text-BJKUimah.js";import"./DOMUtils-DEPBoe7u.js";import"./useId-B00C84E0.js";import"./useBackwardsCompatibleTheme-yxpwTzAk.js";import"./Label-p42oyH6O.js";import"./ZIndexLayer-Beq1j20z.js";import"./types-BRZWQnVt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CeXZD4iR.js";import"./useAnimationId-Bsfqf9JH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfdBkyVH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CBqTe_nx.js";import"./tooltipContext-Cv7XVnGl.js";import"./RegisterGraphicalItemId-Ce557wgI.js";import"./ErrorBarContext-Bcyk1pto.js";import"./GraphicalItemClipPath-6iwmqxiy.js";import"./SetGraphicalItem-NnzstWhO.js";import"./getZIndexFromUnknown-BYoczOZs.js";import"./useGraphicalItemIdentity-BrYniqkC.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
