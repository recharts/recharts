import{R as t}from"./iframe-DHiXiYOt.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-K2mOff9O.js";import{B as p}from"./BarChart-BMJBYWhM.js";import{X as l}from"./XAxis-D6ROrCNU.js";import{Y as h}from"./YAxis-CSlSkAf_.js";import{B as x}from"./Brush-D12y5jbw.js";import{B as c}from"./Bar-Ba51PmND.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZL46Cig.js";import"./throttle-9IxKLS84.js";import"./index-Zkovv_Mu.js";import"./index-D_YreF5U.js";import"./RechartsWrapper-CRTUKx29.js";import"./axisSelectors-BDB90zwk.js";import"./polarAxisSelectors-CfAL7aRK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-mRNKtGCI.js";import"./index-8ZsYbMQX.js";import"./index-coRvk7yp.js";import"./renderedTicksSlice-Bih8KR78.js";import"./index-CvPWQYz_.js";import"./CartesianChart-OeiKzUqX.js";import"./chartDataContext-NYE-dDPb.js";import"./CategoricalChart-Ddy3kJ44.js";import"./CartesianAxis-BSNVQcOz.js";import"./Layer-DJ7NPFY5.js";import"./Text-BC_B-bRG.js";import"./pageBackground-D2gDVXk4.js";import"./useId-C22RmVdj.js";import"./ZIndexLayer-DeVgP8h4.js";import"./Label-Gr9qDnB4.js";import"./dataEntryStyles-CfpC7ekH.js";import"./types-rgikEiEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CUDvtf42.js";import"./useAnimationId-Ca9jA2_m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cnk8SPPS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHG_GvWA.js";import"./tooltipContext-D_8qLvLa.js";import"./RegisterGraphicalItemId-BCzoSTNC.js";import"./ErrorBarContext-CZu1Y3hj.js";import"./SetGraphicalItem-BBSXIdI5.js";import"./getZIndexFromUnknown-BDHhJLHc.js";import"./useEffectiveDataKey-Gb-Ai2uq.js";import"./omit-ktetNWuD.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
