import{R as t}from"./iframe-BJwrbqqi.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dgyv34Z4.js";import{B as p}from"./BarChart-9oYnAcIX.js";import{X as l}from"./XAxis-B7ZX8Kfa.js";import{Y as h}from"./YAxis-BRttk8mJ.js";import{B as x}from"./Brush-Ccw58ebQ.js";import{B as c}from"./Bar-CvzNsmkk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-pfeYxzRR.js";import"./index-G7qNEGy_.js";import"./index-DvHXQAWB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-uvAkWz.js";import"./isWellBehavedNumber-pfE5Q5mt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeuEZMtn.js";import"./axisSelectors-C5NObvkt.js";import"./d3-scale-DSWUCzXy.js";import"./index-DsGTB-aY.js";import"./index-WSINJmPt.js";import"./renderedTicksSlice-BnrduSeF.js";import"./index-BP4AOHzk.js";import"./CartesianChart-CLAnODbR.js";import"./chartDataContext-BDqLbH1o.js";import"./CategoricalChart-Db_HBiCU.js";import"./CartesianAxis-CmiU-XO8.js";import"./Layer-eN5gk5Rs.js";import"./Text-KHiJMqsX.js";import"./pageBackground-BIIIhWKR.js";import"./useId-DQUV3KXo.js";import"./useBackwardsCompatibleTheme-B8str_Tp.js";import"./Label-XjwS876P.js";import"./ZIndexLayer-BJ-hVFwd.js";import"./dataEntryStyles-D7ilp65R.js";import"./types-BBGLRMuE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-JM_riMMZ.js";import"./useAnimationId-Cz6ggmzR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DKcQQ7tK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSUQ40Ee.js";import"./tooltipContext-Ds0YQgby.js";import"./RegisterGraphicalItemId-CPxaQHtW.js";import"./ErrorBarContext-8FsJ_EHd.js";import"./GraphicalItemClipPath-D57dspwd.js";import"./SetGraphicalItem-Dgy41JCB.js";import"./getZIndexFromUnknown-8xBVpWQi.js";import"./useEffectiveDataKey-dwhPZ08z.js";import"./omit-ai2KogqZ.js";import"./isArguments-yB-y1yaH.js";const ct={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ut=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ut as __namedExportsOrder,ct as default};
