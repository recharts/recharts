import{R as t}from"./iframe-CGBDVxE-.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dcoi5C6v.js";import{B as p}from"./BarChart-C6_9-bOu.js";import{X as l}from"./XAxis-Ynp2iGfo.js";import{Y as h}from"./YAxis-CATKcxKg.js";import{B as x}from"./Brush-CQZ2tZUk.js";import{B as c}from"./Bar-mxXDfl1D.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-r4SgwsRS.js";import"./index-hboVxxbY.js";import"./index-DBtrqjyz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFx1_FeE.js";import"./isWellBehavedNumber-BDUfwR7p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-R5wdE7Du.js";import"./axisSelectors-DpEiq2v9.js";import"./d3-scale-BEr64TMX.js";import"./index-BIKEo4sh.js";import"./index-WvwT3848.js";import"./renderedTicksSlice-D93v-Tca.js";import"./index-DyBKUzQK.js";import"./CartesianChart-DkeZbNrD.js";import"./chartDataContext-BUzll-9F.js";import"./CategoricalChart-_qdlKxZa.js";import"./CartesianAxis-BmUJzq6P.js";import"./Layer-BQpheWca.js";import"./Text-DzBijb3H.js";import"./DOMUtils-D0ua0v6z.js";import"./useId-BXTAvIyb.js";import"./useBackwardsCompatibleTheme-B_EiPeE9.js";import"./Label-rN0i5HX0.js";import"./ZIndexLayer-BQMQ-79w.js";import"./types-ALxpiXvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BodTqMda.js";import"./useAnimationId-Dg5PDt8u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BrNBFEk8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tQSQ8w1p.js";import"./tooltipContext-JrsZoYZm.js";import"./RegisterGraphicalItemId-B6GAZHe-.js";import"./ErrorBarContext-vv2ECrtE.js";import"./GraphicalItemClipPath-CHQFwdrq.js";import"./SetGraphicalItem-CIMjPr92.js";import"./getZIndexFromUnknown-BvlpvwUA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CeH-sbSH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
