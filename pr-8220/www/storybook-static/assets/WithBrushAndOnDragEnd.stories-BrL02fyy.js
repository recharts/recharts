import{R as t}from"./iframe-DNXhgPY2.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C_G2hm8X.js";import{B as p}from"./BarChart-BHjqy5JX.js";import{X as l}from"./XAxis-CJs7Huhu.js";import{Y as h}from"./YAxis-DAJ4SxQ-.js";import{B as x}from"./Brush-CDqPWwZw.js";import{B as c}from"./Bar-ClfnPIYa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DX55Ajk9.js";import"./throttle-OaXA1Z9W.js";import"./index-CfUX9U3P.js";import"./index-BHfOcO_x.js";import"./RechartsWrapper-C4y6DVLx.js";import"./axisSelectors-CTPBeHC3.js";import"./polarAxisSelectors-z81ryBra.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8LWxob5.js";import"./index-BF5Wrxm3.js";import"./index-BBIEjaB7.js";import"./renderedTicksSlice-By9MTVsP.js";import"./index-CjdFEwMf.js";import"./fillDefinitions-DJ3S14WH.js";import"./CartesianChart-Czh_fqoQ.js";import"./chartDataContext-BJtoY4FG.js";import"./CategoricalChart-DPAZKGgc.js";import"./CartesianAxis-Dr28b-wt.js";import"./Layer-EsfR_jDG.js";import"./Text-_51Pk49J.js";import"./ZIndexLayer-wMGGFAui.js";import"./Label-Ds6wWWz7.js";import"./types-DuvV7zSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Wu6ggnF0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BDMoKugF.js";import"./useAnimationId-CljrEDcm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7gfZ4ip.js";import"./tooltipContext-CfXnMrjv.js";import"./ErrorBarContext-j0Aj2Uq7.js";import"./activeStyles-DSoUr8Vz.js";import"./SetGraphicalItem-COzEpMHH.js";import"./getZIndexFromUnknown-DRvebi0r.js";import"./useEffectiveDataKey-CcJJJpcL.js";import"./omit-Dp3F79MV.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
