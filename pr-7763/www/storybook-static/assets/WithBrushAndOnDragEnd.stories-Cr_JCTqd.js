import{R as t}from"./iframe-CDv_hnlf.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-8EbRQ5DZ.js";import{B as p}from"./BarChart-wcFxwJQ5.js";import{X as l}from"./XAxis-Cn9K5n4J.js";import{Y as h}from"./YAxis-Dphgoyab.js";import{B as x}from"./Brush-HuWkfm7n.js";import{B as c}from"./Bar-2R_U4VKS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-RrwSa6SL.js";import"./index-ymtmGnRC.js";import"./index-Qa9FghTo.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CImqyn8n.js";import"./isWellBehavedNumber-ipIh2BqD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-lM1IufFg.js";import"./axisSelectors-FUoH9jZO.js";import"./d3-scale-8ktJJOVD.js";import"./index-EK-QJAGk.js";import"./index-7-TwA9Wc.js";import"./renderedTicksSlice-Cgj9tABh.js";import"./index-BJASh04Q.js";import"./CartesianChart-CW2SUDgI.js";import"./chartDataContext-C0h1ipKh.js";import"./CategoricalChart-BMDkLrmt.js";import"./CartesianAxis-Cub9Ba5o.js";import"./Layer-DzpNGvR7.js";import"./Text-g_z1pfXY.js";import"./DOMUtils-FVC4l968.js";import"./useId-M-A2L6Xg.js";import"./useBackwardsCompatibleTheme-HAgk0scL.js";import"./Label-BE6rd0_D.js";import"./ZIndexLayer-Drc_0i_v.js";import"./types-BoP1bnqQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BKW3YVwF.js";import"./useAnimationId-DiRDlhkC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IbtOhjas.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D2gPOJru.js";import"./tooltipContext-D6M-288Q.js";import"./RegisterGraphicalItemId-CNR4K2Kh.js";import"./ErrorBarContext-iNIezAqw.js";import"./GraphicalItemClipPath-BRvY79JN.js";import"./SetGraphicalItem-CbnjD7Sn.js";import"./getZIndexFromUnknown-D8pj6cZf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-kcsvF8X3.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
