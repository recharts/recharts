import{R as t}from"./iframe-Ct1svimm.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DuTNyMvu.js";import{B as p}from"./BarChart-DriHzqBo.js";import{X as l}from"./XAxis-DQtY80zm.js";import{Y as h}from"./YAxis-DJ-mdmri.js";import{B as x}from"./Brush-bF02PWgu.js";import{B as c}from"./Bar-NsEmdJ2C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DkFOW_Ct.js";import"./throttle-pNdBRgo_.js";import"./index-o9gN_zh3.js";import"./index-BvFwwoiY.js";import"./RechartsWrapper-D0VQQHcg.js";import"./axisSelectors-CIwgaX7y.js";import"./polarAxisSelectors-nz6HV1AE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BL9MDqqK.js";import"./index-LDd6dT7n.js";import"./index-CGKMaXkl.js";import"./renderedTicksSlice-LVzR_DNz.js";import"./index-CNkpQGrJ.js";import"./fillDefinitions-vVBAQBUA.js";import"./CartesianChart-fUt3zqCh.js";import"./chartDataContext-D2vVYZsu.js";import"./CategoricalChart-Darb6O46.js";import"./CartesianAxis-D0Zofcf0.js";import"./Layer-CbeDBXuD.js";import"./Text-VSzLHfPE.js";import"./ZIndexLayer-BltRI-Nr.js";import"./Label-B2Mk85O5.js";import"./types-EANqWthO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CHH9ur-w.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sIigVXDT.js";import"./useAnimationId-CDKCdXQz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BuOJWJdn.js";import"./tooltipContext-CjOvsAyy.js";import"./ErrorBarContext-CQBLFEFh.js";import"./activeStyles-DWgBPDlx.js";import"./SetGraphicalItem-inprgaSw.js";import"./getZIndexFromUnknown-CLDmdJG2.js";import"./useEffectiveDataKey-CW73rX9I.js";import"./omit-BUxAPCMO.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
