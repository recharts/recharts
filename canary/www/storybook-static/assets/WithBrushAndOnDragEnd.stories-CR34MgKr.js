import{R as t}from"./iframe-BquPZQZR.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DfoMGwwJ.js";import{B as p}from"./BarChart-T673k8w5.js";import{X as l}from"./XAxis-B0NTBS_i.js";import{Y as h}from"./YAxis-DU99c4NY.js";import{B as x}from"./Brush-DPzLF2nO.js";import{B as c}from"./Bar-nC6vNoFw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C1-PhdLj.js";import"./throttle-Ifciv68t.js";import"./index-BeXk3gq4.js";import"./index-CY_4egx2.js";import"./RechartsWrapper-BOh7Al31.js";import"./axisSelectors-Ra6SuVrn.js";import"./polarAxisSelectors-Bi2qo_WA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B2Z3tDr8.js";import"./index-BBIQOsY9.js";import"./index-DeLNFakb.js";import"./renderedTicksSlice-DkVmzd5W.js";import"./index-C389QzGe.js";import"./fillDefinitions-bKlUAuaq.js";import"./CartesianChart-DusmDSbk.js";import"./ZIndexPortal-ChcM8kac.js";import"./CategoricalChart-DY8SYWQ4.js";import"./CartesianAxis-G--oVlcc.js";import"./Layer-DgCLyWmw.js";import"./Text-Cz9Qm4K-.js";import"./DOMUtils-Hop2FGiK.js";import"./ZIndexLayer-BKwk9Ckz.js";import"./Label-QfyPAwEN.js";import"./types-HVxQrabK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-c67UtHfn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BR95K4Qq.js";import"./useAnimationId-BAgUZZzE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8wKgjG7.js";import"./tooltipContext-B_xO9A21.js";import"./dataEntryStyles-DcYBdp4K.js";import"./ErrorBarContext-LEjhprcI.js";import"./activeStyles-7MX0jGA5.js";import"./SetGraphicalItem-DVTOJBGj.js";import"./getZIndexFromUnknown-CiZWR6Xm.js";import"./useEffectiveDataKey-Dv0si8CY.js";import"./omit-BfnR89d3.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
