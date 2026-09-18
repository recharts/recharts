import{R as t}from"./iframe-DyNflmpD.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DcbzUDl1.js";import{B as p}from"./BarChart-DPcsB_e2.js";import{X as l}from"./XAxis-BRq0uwwt.js";import{Y as h}from"./YAxis-DRbcnQBN.js";import{B as x}from"./Brush-BWVotbbg.js";import{B as c}from"./Bar-Cqj-Xi0f.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JOKyqjkh.js";import"./index-CXOSBmJF.js";import"./index-b5COxMAZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEGyXQoP.js";import"./isWellBehavedNumber-Du2TBwtB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcT-g24f.js";import"./axisSelectors-D8oAfUCo.js";import"./d3-scale-rIUPnSoV.js";import"./index-CUSxx8_g.js";import"./index-D1o802DX.js";import"./renderedTicksSlice-D5roUEnp.js";import"./index-wtd-kRKG.js";import"./CartesianChart-SvhUL1zG.js";import"./chartDataContext-CccchDo-.js";import"./CategoricalChart-BmCM1Kvw.js";import"./CartesianAxis-FmtEoT3c.js";import"./Layer-BAK3mXOF.js";import"./Text-DubbQCtu.js";import"./DOMUtils-CnMp_f2C.js";import"./useId-CCFKlxj2.js";import"./useBackwardsCompatibleTheme-1TKRF9_G.js";import"./Label-8baFJ3SD.js";import"./ZIndexLayer-BkImCK5k.js";import"./types-BmhrOP68.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bg7iXKcU.js";import"./useAnimationId-B6Hjzqdy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ewchM9Jh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7Ik4Y1iY.js";import"./tooltipContext-DMH8dqMh.js";import"./RegisterGraphicalItemId-I1F5nEAR.js";import"./ErrorBarContext-0wgmY52F.js";import"./GraphicalItemClipPath-C6FvMp3W.js";import"./SetGraphicalItem-DjVLiBcR.js";import"./getZIndexFromUnknown-BgbHQNkS.js";import"./useGraphicalItemIdentity-BUorwys7.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
