import{R as t}from"./iframe-BLIo_1nt.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DC3TJ2KH.js";import{B as p}from"./BarChart-BznBhc80.js";import{X as l}from"./XAxis-NUWW5fMr.js";import{Y as h}from"./YAxis-B-hKkgmv.js";import{B as x}from"./Brush-BVBK_uF_.js";import{B as c}from"./Bar-Bpd2Gawo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./throttle-BVtqo_9X.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./RechartsWrapper-DHKT5KBC.js";import"./axisSelectors-zp31unE3.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-0nS9y-pB.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./CartesianAxis-CednQB0X.js";import"./Layer-BmO--khP.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./Label-CFregkfn.js";import"./types-C-m9Hr0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B2sIlIGL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D4nL3Ndu.js";import"./useAnimationId-BgYtx5DV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./tooltipContext-C8JMsOca.js";import"./ErrorBarContext-GHF_OtFg.js";import"./activeStyles-CwggIO5e.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./getZIndexFromUnknown-cnBSox7j.js";import"./useEffectiveDataKey-CLP9K8e-.js";import"./omit-BIFVMJ9u.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
