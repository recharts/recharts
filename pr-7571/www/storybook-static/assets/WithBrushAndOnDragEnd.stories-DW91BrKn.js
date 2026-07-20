import{R as t}from"./iframe-CV15e7az.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CjGsmEi1.js";import{B as p}from"./BarChart-C-yVFSyH.js";import{X as l}from"./XAxis-DLZMrQJA.js";import{Y as h}from"./YAxis-BGgz64vm.js";import{B as x}from"./Brush-XSeQSW2f.js";import{B as c}from"./Bar-D-uDpkBF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CHzP70vu.js";import"./index-93JCPKbn.js";import"./index-CVAE3ToH.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C-NTBoJu.js";import"./isWellBehavedNumber-ieBgpEor.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDXDvVK3.js";import"./index-BoM1UPcR.js";import"./index-BBpab-Hd.js";import"./renderedTicksSlice-fTbz0eeh.js";import"./axisSelectors-CI8TiAbs.js";import"./d3-scale-BchuFtEx.js";import"./CartesianChart-CvIpxzyO.js";import"./chartDataContext-BjsNRzum.js";import"./CategoricalChart-Cjf4C7PM.js";import"./CartesianAxis-C65u4Bt5.js";import"./Layer-D7-BURxK.js";import"./Text-DlLjmiQX.js";import"./DOMUtils-DvhMIjVB.js";import"./Label-CWZ2l2lA.js";import"./ZIndexLayer-D33L973J.js";import"./types-CWD3xXR9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-DGJzCTsW.js";import"./AnimatedItems-CwcBVWiQ.js";import"./useAnimationId-CAqTHHd1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bx-fAemw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D4G9dWIO.js";import"./RegisterGraphicalItemId-CTyQ2SsK.js";import"./ErrorBarContext-DbIUjAn0.js";import"./GraphicalItemClipPath-Cho1rLIH.js";import"./SetGraphicalItem-BMbMD-I2.js";import"./getZIndexFromUnknown-BOHkLAoh.js";import"./graphicalItemSelectors-Dh0N2TsJ.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
