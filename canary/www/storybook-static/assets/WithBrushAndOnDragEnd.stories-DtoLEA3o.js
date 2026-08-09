import{R as t}from"./iframe-D_UL8fjK.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B8f2hTRD.js";import{B as p}from"./BarChart-CQNYN4jT.js";import{X as l}from"./XAxis-CazN9wRX.js";import{Y as h}from"./YAxis-Dd6vSYjv.js";import{B as x}from"./Brush-ryzmUc1D.js";import{B as c}from"./Bar-v6D2yd4P.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EbH1y2w7.js";import"./index-DNxkBCVe.js";import"./index-h-g40TxG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Byb1qXS0.js";import"./isWellBehavedNumber-iC5WXlxZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnUEvc6-.js";import"./index-DmYZtYvi.js";import"./index-Bs4KGwv6.js";import"./axisSelectors-BNsSlswM.js";import"./d3-scale-5WraxJWy.js";import"./renderedTicksSlice-DZH5dqFY.js";import"./CartesianChart-C-1LzzB9.js";import"./chartDataContext-BZOn_6n4.js";import"./CategoricalChart-CtOYQTRo.js";import"./CartesianAxis-BrHAq2Nx.js";import"./Layer-DErQ8LWn.js";import"./Text-bynAhtfX.js";import"./DOMUtils-y3mUx3tY.js";import"./Label-efHFABNJ.js";import"./ZIndexLayer-CzKUyCGh.js";import"./types-D8jMk9wl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DF-Xzw8d.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-C6DZzLkn.js";import"./AnimatedItems-ZBM6OyTb.js";import"./useAnimationId-1dDzdKc5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bpl55SbL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-JCOSF6Qb.js";import"./RegisterGraphicalItemId-CO_dSij1.js";import"./ErrorBarContext-MTEcEnWo.js";import"./graphicalItemIdentity-DUedU3Gi.js";import"./SetGraphicalItem-Bv1waFvM.js";import"./getZIndexFromUnknown-DzPyoXdE.js";import"./graphicalItemSelectors-DSFRQ2mt.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
