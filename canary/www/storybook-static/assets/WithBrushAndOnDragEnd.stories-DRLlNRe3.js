import{R as t}from"./iframe-WNWxHA5w.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BVgHV45y.js";import{B as p}from"./BarChart-CWbqA_ct.js";import{X as l}from"./XAxis-DfMY5qBP.js";import{Y as h}from"./YAxis-C2XMsDVi.js";import{B as x}from"./Brush-DT1tzMp4.js";import{B as c}from"./Bar-BDZtsY-j.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./throttle-DWlA00LM.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./RechartsWrapper-MLPBuzwi.js";import"./axisSelectors-DqPRQxzX.js";import"./polarAxisSelectors-CgU14Zha.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-zFOgTZT_.js";import"./index-CWM66Coj.js";import"./index-CN82-OMW.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./CartesianAxis-BHmhgeQf.js";import"./Layer-DaOdaJ8o.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./Label-CezBD4yi.js";import"./types-jc9vmIop.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dk4XNyaK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bHpKFJEG.js";import"./useAnimationId-PYVmWLIg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-MT88_CXC.js";import"./tooltipContext-KIFqTDI5.js";import"./ErrorBarContext-Bqg4FQ8M.js";import"./activeStyles-CeKhNTWp.js";import"./SetGraphicalItem-Cb_G_uW5.js";import"./getZIndexFromUnknown-BSCGJkFK.js";import"./useEffectiveDataKey-Dv_aTiOG.js";import"./omit-Czg6ajmW.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
