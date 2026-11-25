import{R as t}from"./iframe-DkUPJ-sS.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-12UiSTLm.js";import{B as p}from"./BarChart-DR10Vcry.js";import{X as l}from"./XAxis-BWwIFA6B.js";import{Y as h}from"./YAxis-DUp2X2GH.js";import{B as x}from"./Brush-B-VRJH2Z.js";import{B as c}from"./Bar-BWBhdnwM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R0X1asWy.js";import"./get-CjriyByo.js";import"./throttle-B27eHaYH.js";import"./index-CRD-EhW_.js";import"./index-t-OvK83N.js";import"./RechartsWrapper-mRcsep52.js";import"./axisSelectors-DXomLufj.js";import"./polarAxisSelectors-BXszvLGt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CycPPIVV.js";import"./index-C1Em399f.js";import"./index-Cvlsg4mt.js";import"./renderedTicksSlice-DufVH7D7.js";import"./index-BSGDHpsm.js";import"./fillDefinitions-z6sEEzMG.js";import"./CartesianChart-DoFuwDSF.js";import"./chartDataContext-90C9fl16.js";import"./CategoricalChart-B3U5Ej9_.js";import"./CartesianAxis-CPfh-d6g.js";import"./Layer-Dz0e5F_f.js";import"./Text-ChMlRx0j.js";import"./ZIndexLayer-BEv6P927.js";import"./Label-8ZjagO8_.js";import"./types-BwlCxTmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BCBCgPLo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BG9rqJG5.js";import"./useAnimationId-2gl_z5Fx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dnx5Vb0n.js";import"./tooltipContext-zL5LcCIw.js";import"./ErrorBarContext-MZRvuvrv.js";import"./activeStyles-DgOrLWSA.js";import"./SetGraphicalItem-D8P9Tqtn.js";import"./getZIndexFromUnknown-DIfsP9xn.js";import"./useEffectiveDataKey-CN20ww8a.js";import"./omit-DJKGho52.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
