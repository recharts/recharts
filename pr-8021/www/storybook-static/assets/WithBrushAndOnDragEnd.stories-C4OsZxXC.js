import{R as t}from"./iframe-wnwgjoCj.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BfQZJe7w.js";import{B as p}from"./BarChart-Cgvup-55.js";import{X as l}from"./XAxis-OfYaBnId.js";import{Y as h}from"./YAxis-DhrqAxya.js";import{B as x}from"./Brush-D0ZqUlz3.js";import{B as c}from"./Bar-DqyOK2Ts.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bu0PLbpB.js";import"./index--oPyKjHy.js";import"./index-B1dVEDKi.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CdGDq9Vj.js";import"./isWellBehavedNumber-DvYM1ftp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DrgosUQO.js";import"./axisSelectors-Dv0Cy_aQ.js";import"./d3-scale-n5yhpKoa.js";import"./index-C6zbwdmq.js";import"./index-2cwaP_WN.js";import"./renderedTicksSlice-Cn46HOnO.js";import"./index-Cq1ZqvVj.js";import"./CartesianChart-9oQUjO4z.js";import"./chartDataContext-CoZTTCWp.js";import"./CategoricalChart-CFXgb39d.js";import"./CartesianAxis-CUGdPJVD.js";import"./Layer-BgNSosTV.js";import"./Text-ObnDDpE8.js";import"./pageBackground-BTX1FgdM.js";import"./useId-Bld63G6d.js";import"./useBackwardsCompatibleTheme-CSSDROrC.js";import"./Label-BPPVHUQ9.js";import"./ZIndexLayer-BcVUzqGJ.js";import"./types-D9qqzEWR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-eWYsa4HP.js";import"./useAnimationId-B2QPH2im.js";import"./dataEntryStyles-_WoJg0hd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-P3uT3dWy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-YpG0tVZY.js";import"./tooltipContext-BVMH7WYj.js";import"./ErrorBarContext-cvkea_Ls.js";import"./GraphicalItemClipPath-B95PfJCu.js";import"./SetGraphicalItem-CAbcIlZe.js";import"./getZIndexFromUnknown-CHQ6R3a2.js";import"./useEffectiveDataKey-D9X2vego.js";import"./omit-QSyfoj1W.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
