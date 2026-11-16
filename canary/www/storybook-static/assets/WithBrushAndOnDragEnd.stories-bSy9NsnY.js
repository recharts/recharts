import{R as t}from"./iframe-KWoDlvv0.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D6_TQa48.js";import{B as p}from"./BarChart-CtAkrno1.js";import{X as l}from"./XAxis-Dha5DL-7.js";import{Y as h}from"./YAxis-BpsL_9nJ.js";import{B as x}from"./Brush-DVXq7Wz7.js";import{B as c}from"./Bar-DY0Bjdnb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fIhDXQnx.js";import"./throttle-BvqCZ8Vh.js";import"./index-Li49Ujhl.js";import"./index-D_eG4QRf.js";import"./RechartsWrapper-Cd2ytf7V.js";import"./axisSelectors-CV2At8Yo.js";import"./polarAxisSelectors-8HEoWBh0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oWIqdaah.js";import"./index-BfCybvCF.js";import"./index-CCYlIY-z.js";import"./renderedTicksSlice-C40hju2e.js";import"./index-Dv3wNeKm.js";import"./fillDefinitions-BahzxKfc.js";import"./CartesianChart-D1x7M7Ji.js";import"./chartDataContext-CRRlgIpa.js";import"./CategoricalChart-539yhc35.js";import"./CartesianAxis-CyfkCIs2.js";import"./Layer-waQQT3dP.js";import"./Text-DoeJcgDd.js";import"./ZIndexLayer-UqbdP99s.js";import"./Label-BPcs5PEB.js";import"./types-DGnljtoN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B50QbiA3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9Jhf_J89.js";import"./useAnimationId-Dr1qu-UX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8mQk9io.js";import"./tooltipContext-Bi_UGuPS.js";import"./ErrorBarContext-B7AiZePC.js";import"./activeStyles-DdJ_j3KP.js";import"./SetGraphicalItem-C36UrnCq.js";import"./getZIndexFromUnknown-U06pGQX_.js";import"./useEffectiveDataKey-Dnh6CHxJ.js";import"./omit-DgXFX6KH.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
