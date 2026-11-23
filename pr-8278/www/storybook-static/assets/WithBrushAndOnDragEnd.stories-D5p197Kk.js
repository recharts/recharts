import{R as t}from"./iframe-CsBzJ_oY.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DMNrA3gR.js";import{B as p}from"./BarChart-D6PgRT0i.js";import{X as l}from"./XAxis-DUfavQsq.js";import{Y as h}from"./YAxis-BcwvR8DG.js";import{B as x}from"./Brush-B1elwErO.js";import{B as c}from"./Bar-3tQtcM5V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DTmgUguK.js";import"./throttle-BC8XINhc.js";import"./index-ZIwCGu9j.js";import"./index-ANSegWuD.js";import"./RechartsWrapper-BbLnuVBa.js";import"./axisSelectors-C9oSyHKr.js";import"./polarAxisSelectors-DNMiXlqe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eAFxYw1v.js";import"./index-BQIdRebQ.js";import"./index-CyJaGzTs.js";import"./renderedTicksSlice-DmEF733K.js";import"./index-Dtk6Fc20.js";import"./fillDefinitions-CiGFpPDU.js";import"./CartesianChart-BkZkGsdO.js";import"./chartDataContext-C_pMILpz.js";import"./CategoricalChart-DGDB_d9-.js";import"./CartesianAxis-Ct89iDgP.js";import"./Layer-DasxrL-P.js";import"./Text-_hT2aORY.js";import"./ZIndexLayer-BgP2DxGj.js";import"./Label-BqIt3uIU.js";import"./types-BTltodPN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BxNkTaqU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BSyLp_F2.js";import"./useAnimationId-CwEH45Ii.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlQXgIQN.js";import"./tooltipContext-CrB6rlIN.js";import"./ErrorBarContext-DJQ_oRWY.js";import"./activeStyles-CWJgi0Pp.js";import"./SetGraphicalItem-Cd415TqE.js";import"./getZIndexFromUnknown-8xU1Q5SP.js";import"./useEffectiveDataKey-P2OtOQRT.js";import"./omit-ZE1N8yBE.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
