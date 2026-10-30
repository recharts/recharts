import{R as t}from"./iframe-BmKqhsPF.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CBQM2Gyg.js";import{B as p}from"./BarChart-Di2IX8o4.js";import{X as l}from"./XAxis-B1Y97cNG.js";import{Y as h}from"./YAxis-Bib3dbnh.js";import{B as x}from"./Brush-2MfYyLSK.js";import{B as c}from"./Bar--SOdbZe-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./throttle-DFLwZbH7.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./RechartsWrapper-CdEiQwLq.js";import"./axisSelectors-De-QIQw0.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-66RSqjvR.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";import"./CartesianAxis-Ch4CXp2q.js";import"./Layer-DFK8Q48P.js";import"./Text-CrMJTYNw.js";import"./DOMUtils-DtycWmz8.js";import"./ZIndexLayer-E2zC26PS.js";import"./Label-DJuyIpr6.js";import"./types-8TEdLcfT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Cw7YYHKY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dph07-O4.js";import"./useAnimationId-Cw8-NrKa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmFmkU6o.js";import"./tooltipContext-qd_vPvGB.js";import"./dataEntryStyles-BYeCTEXf.js";import"./ErrorBarContext-DjFDtKDe.js";import"./activeStyles-B9WkYOlU.js";import"./SetGraphicalItem-DaR9Vkxk.js";import"./getZIndexFromUnknown-DrzkWzUs.js";import"./useEffectiveDataKey-etJHmmHX.js";import"./omit-OgdFWu6Y.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
