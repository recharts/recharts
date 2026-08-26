import{R as t}from"./iframe-NQEVGrWF.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CP33F7KF.js";import{B as p}from"./BarChart-occs0F1C.js";import{X as l}from"./XAxis-C4UfJE-i.js";import{Y as h}from"./YAxis-8qH7fIq5.js";import{B as x}from"./Brush-Cbsx6Vd3.js";import{B as c}from"./Bar-FkVi__-R.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CkddbLRN.js";import"./index-B9NPWI0k.js";import"./index-CRVzIMtc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGKk3whs.js";import"./isWellBehavedNumber-Dsnr4nI4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7RacVym.js";import"./axisSelectors-5o3NJxix.js";import"./d3-scale-C0DHVJ_t.js";import"./index-aCLowHDg.js";import"./index-B8SC5NXw.js";import"./renderedTicksSlice-Cd3xmYKN.js";import"./index-DGDKtdxG.js";import"./CartesianChart-BeI0IYJq.js";import"./chartDataContext-CvCTBKTZ.js";import"./CategoricalChart-CoPL0zMa.js";import"./CartesianAxis-Ne7lbJuc.js";import"./Layer-BG4rdiih.js";import"./Text-DakXKvvI.js";import"./DOMUtils-CiNl2Unk.js";import"./useId-DDLNeh8Q.js";import"./useBackwardsCompatibleTheme-B1LwAuqZ.js";import"./Label-B9UYxviU.js";import"./ZIndexLayer-n1tytnrA.js";import"./types-BJqKvaYz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DrvzgAVh.js";import"./useAnimationId-CyMrVWUy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dp4_4O8h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DwrA3FQy.js";import"./tooltipContext-CFcU80iG.js";import"./RegisterGraphicalItemId-DJee5cpk.js";import"./ErrorBarContext-D6gOrQXq.js";import"./GraphicalItemClipPath-Bh5K_QLr.js";import"./SetGraphicalItem-D8Gbozo5.js";import"./getZIndexFromUnknown-CvWpadTN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BjkPEz73.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
