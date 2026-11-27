import{R as t}from"./iframe-CjYP3ojB.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cy7CLl9Z.js";import{B as p}from"./BarChart-DfPNuPcM.js";import{X as l}from"./XAxis-Blplutoc.js";import{Y as h}from"./YAxis-Bt-Cr0Xc.js";import{B as x}from"./Brush-C-FHkLXX.js";import{B as c}from"./Bar-C1FdboAL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKyPqSHv.js";import"./get-CjriyByo.js";import"./redux-toolkit.esm-DZ87n3n2.js";import"./index-Dxgip7sp.js";import"./index-ChIvmNbe.js";import"./RechartsWrapper-UTu-k1rT.js";import"./axisSelectors-CPJSjERY.js";import"./polarAxisSelectors-DdQAYS9z.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-HdrCxTIi.js";import"./index-cwlxkqz2.js";import"./index-CvkAYdqK.js";import"./renderedTicksSlice-CI60Ea5b.js";import"./index-CpZXho2T.js";import"./fillDefinitions-BUdB36JD.js";import"./CartesianChart-C5nFTC9G.js";import"./chartDataContext-ksA5CmmE.js";import"./CategoricalChart-zTEQjMMp.js";import"./CartesianAxis-5Yui6JuQ.js";import"./Layer-BI-kTcme.js";import"./Text-DjT8udYf.js";import"./ZIndexLayer-BebYx5XY.js";import"./Label-CaJS6zCA.js";import"./types-D4qLdpQF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BvceDOIn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cr5lBSuf.js";import"./useAnimationId-C3slNkW8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DicChUyh.js";import"./tooltipContext-Dqdg2Lnr.js";import"./ErrorBarContext-DD39jyt1.js";import"./activeStyles-D9A5DeQH.js";import"./SetGraphicalItem-B_iWrnd9.js";import"./getZIndexFromUnknown-XpsYo-5r.js";import"./useEffectiveDataKey-BSYT-tLD.js";import"./omit-DxBE6dV-.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
