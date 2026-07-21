import{R as t}from"./iframe-2CSQwnzh.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BFAyLu2K.js";import{B as p}from"./BarChart-12L-SlRE.js";import{X as l}from"./XAxis-Q_FxDFmH.js";import{Y as h}from"./YAxis-CGxWNSi-.js";import{B as x}from"./Brush-U3ADiyQG.js";import{B as c}from"./Bar-CF2fkP6o.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D6AnBAnr.js";import"./index-Cea4V0if.js";import"./index-DaE0ahnp.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BHTXK_Jm.js";import"./isWellBehavedNumber-Dcam8SOU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DBVst9hu.js";import"./index-cEZOrgfU.js";import"./index-DiEzMPwb.js";import"./renderedTicksSlice-HMFum7ql.js";import"./axisSelectors-svppWMH6.js";import"./d3-scale-Dt9cpg9w.js";import"./CartesianChart-DSNUg0OG.js";import"./chartDataContext-CjOi85nN.js";import"./CategoricalChart-DtXBMgKk.js";import"./CartesianAxis-B1LfcQH3.js";import"./Layer-whPw80AU.js";import"./Text-D8BcLzfv.js";import"./DOMUtils-CR7HkqrI.js";import"./Label-BgiiW0df.js";import"./ZIndexLayer-BmQ9stZJ.js";import"./types-Co_C0j8x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-C3F9nzcw.js";import"./AnimatedItems-Ba6tXj_A.js";import"./useAnimationId-CkCcxDPT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BogSoKYG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CiureFp6.js";import"./RegisterGraphicalItemId-D-cwWngY.js";import"./ErrorBarContext-B19vexPG.js";import"./GraphicalItemClipPath-DcZNtOEm.js";import"./SetGraphicalItem-DiGKkNAO.js";import"./getZIndexFromUnknown-BEj2dVmx.js";import"./graphicalItemSelectors-CLyvKTVM.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
