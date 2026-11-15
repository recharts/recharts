import{R as t}from"./iframe-DehjRTS0.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Or93N-XC.js";import{B as p}from"./BarChart-aljzK3MX.js";import{X as l}from"./XAxis-Cg2bfD3w.js";import{Y as h}from"./YAxis-BGtv0j9s.js";import{B as x}from"./Brush-BKiKKxiA.js";import{B as c}from"./Bar-BGHmAtMD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CMD_wJjc.js";import"./throttle-DesffiZ0.js";import"./index-DETf35J4.js";import"./index-CwuhsW6L.js";import"./RechartsWrapper-CRtSS_eM.js";import"./axisSelectors-DZdKwAWL.js";import"./polarAxisSelectors-Ka3IcW3O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C22MolAx.js";import"./index-CXT-2IyT.js";import"./index-KpNlVNDm.js";import"./renderedTicksSlice-Ct6BbSAX.js";import"./index-kCr6N--m.js";import"./fillDefinitions-DhW3x4ou.js";import"./CartesianChart-CgHz7Gaf.js";import"./chartDataContext-BjcKNpHZ.js";import"./CategoricalChart-DkUvkRm5.js";import"./CartesianAxis-CwmDOfi4.js";import"./Layer-DlT20hA_.js";import"./Text-CTuG3Uwk.js";import"./ZIndexLayer-DkIV4AJ1.js";import"./Label-D6Z-0Dfn.js";import"./types-Be7PvpBk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DzT0ep5z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-w2oZ3J.js";import"./useAnimationId-DcJ3b19B.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D-equOl3.js";import"./tooltipContext-eFEUsm3a.js";import"./ErrorBarContext-CF1ouw75.js";import"./activeStyles-CTG2KgqA.js";import"./SetGraphicalItem-Doit17ow.js";import"./getZIndexFromUnknown-CtA--8Vx.js";import"./useEffectiveDataKey-7YBRaAIn.js";import"./omit-DbGvskck.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
