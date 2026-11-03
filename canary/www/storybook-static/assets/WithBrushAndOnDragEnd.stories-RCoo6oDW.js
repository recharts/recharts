import{R as t}from"./iframe-Dveh6XC4.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CHGKLvUt.js";import{B as p}from"./BarChart-D7mGAeyB.js";import{X as l}from"./XAxis-CRKEYqOq.js";import{Y as h}from"./YAxis-w9pVccwz.js";import{B as x}from"./Brush-CgKTh3wM.js";import{B as c}from"./Bar-B48vwr9w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuxVF1QF.js";import"./throttle-CRxbwEvt.js";import"./index-Cbmt_wIf.js";import"./index-CG-oseCj.js";import"./RechartsWrapper-BjJrVVo_.js";import"./axisSelectors-BNJiRWtc.js";import"./polarAxisSelectors-DOXrMTYm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XJHyjNta.js";import"./index-BC5sf_5c.js";import"./index-uMZJip00.js";import"./renderedTicksSlice-Cw-0pUCw.js";import"./index-Fu0XORfS.js";import"./fillDefinitions-BC_l7gtK.js";import"./CartesianChart-DPPEX1sp.js";import"./ZIndexPortal-yJs_hgSa.js";import"./CategoricalChart-BBllviTF.js";import"./CartesianAxis-DUZQMGP0.js";import"./Layer-BJKthE-c.js";import"./Text-DDi8tnpk.js";import"./DOMUtils-BsJwiviE.js";import"./ZIndexLayer-DbxRiqCY.js";import"./Label-Vwsx_sp3.js";import"./types-XJ7-EVuf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-C0azlQgx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-L-kKC_mf.js";import"./useAnimationId-ClkvXH7X.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXVbuCLN.js";import"./tooltipContext-CwdmFdSB.js";import"./dataEntryStyles-CX9qr7B-.js";import"./ErrorBarContext-DkBQ5rXz.js";import"./activeStyles-C0UNB_bG.js";import"./SetGraphicalItem-B2n4iSWY.js";import"./getZIndexFromUnknown-DnDKF1zo.js";import"./useEffectiveDataKey-CghzYeW7.js";import"./omit-D9-jmYb8.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
