import{R as t}from"./iframe-DwT3zBcw.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B1c8R-o4.js";import{B as p}from"./BarChart-sw18gp8Z.js";import{X as l}from"./XAxis-DDMS_4GY.js";import{Y as h}from"./YAxis-Blmef7Zk.js";import{B as x}from"./Brush-ChK899u9.js";import{B as c}from"./Bar-BqReAFK0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zQvI5ucF.js";import"./index-DaIIHj-7.js";import"./index-HzTW079l.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cd4ZPAw9.js";import"./isWellBehavedNumber-sM73_qxP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-ytYCFw.js";import"./axisSelectors-C7AasPYQ.js";import"./d3-scale-DKCZEfGq.js";import"./index-C8mRu_Mi.js";import"./index-BGcjFl-p.js";import"./renderedTicksSlice-CIz6Ndsz.js";import"./index-Bk7-Tdy1.js";import"./CartesianChart-brTBebdD.js";import"./chartDataContext-UYYS7Vdp.js";import"./CategoricalChart-z4qVmpWN.js";import"./CartesianAxis-BOCUxksG.js";import"./Layer-DTu28EsQ.js";import"./Text-aRPMe4ci.js";import"./pageBackground-DsM-Z0Rr.js";import"./useId-Dw49XwJm.js";import"./useBackwardsCompatibleTheme-7icVFW3Y.js";import"./Label-BJdAgAze.js";import"./ZIndexLayer-DYMRbOsR.js";import"./dataEntryStyles-BzuS2ZGG.js";import"./types-CLejyp8C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-0kotXHCs.js";import"./useAnimationId-BjdF1-gz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLCOL5Gn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DY08WDqW.js";import"./tooltipContext-Zx6HZVwu.js";import"./RegisterGraphicalItemId-BXXaOAlY.js";import"./ErrorBarContext-HVEt8c-6.js";import"./SetGraphicalItem-BwU9qQSh.js";import"./getZIndexFromUnknown-BmpsiiYo.js";import"./useEffectiveDataKey-BsFyVvUD.js";import"./omit-CqiIsrs9.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
