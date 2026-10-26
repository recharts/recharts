import{R as t}from"./iframe-BKSHRT_S.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BLeuW80U.js";import{B as p}from"./BarChart-By1ogsQ0.js";import{X as l}from"./XAxis-BuoXjJQH.js";import{Y as h}from"./YAxis-DQujYqlQ.js";import{B as x}from"./Brush-CZr0owHS.js";import{B as c}from"./Bar-DAcYmQcN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DcYWqzkb.js";import"./throttle-BkygAiqr.js";import"./index-D7MQE7Za.js";import"./index-D-jrioKU.js";import"./RechartsWrapper-BDEQp4gV.js";import"./axisSelectors-8rGbG1Qd.js";import"./polarAxisSelectors-CQ3ogHuY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-A-Zbe_Tu.js";import"./index-rcRigKCu.js";import"./index-D9GCJXOs.js";import"./renderedTicksSlice-uVEXaARu.js";import"./index-Cjyk5lan.js";import"./CartesianChart-Bg8a12nJ.js";import"./chartDataContext-vZViOemf.js";import"./CategoricalChart-rdB1CfJb.js";import"./CartesianAxis-D2IkBv7G.js";import"./Layer-BzU6Nn69.js";import"./Text-B6tKJAid.js";import"./pageBackground-DKWjelca.js";import"./useId-PjG3o87t.js";import"./ZIndexLayer-Dc3T9ZED.js";import"./Label-DbF58v67.js";import"./dataEntryStyles-DoThh5sG.js";import"./types-DNwq_ZGY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BKkkdbj0.js";import"./useAnimationId-Nyn64y9A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-MxzM-nYG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPuoYgwg.js";import"./tooltipContext-DVEHwG57.js";import"./RegisterGraphicalItemId-D_NDQyK2.js";import"./ErrorBarContext-DwEbbuob.js";import"./SetGraphicalItem-DaNVol4K.js";import"./getZIndexFromUnknown-zY_U1eep.js";import"./useEffectiveDataKey-B8W36a2Q.js";import"./omit-DsdLshTs.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
