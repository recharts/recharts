import{R as t}from"./iframe-BS2EKBCb.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DgCHBsPF.js";import{B as p}from"./BarChart-D0klzlUt.js";import{X as l}from"./XAxis-BjDgsza5.js";import{Y as h}from"./YAxis-BOuW76NE.js";import{B as x}from"./Brush-BjNgDhqr.js";import{B as c}from"./Bar-DU2jBt8K.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-N5ne0m8p.js";import"./index-DqlRD72w.js";import"./index-CV_3LUuL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-TcviW97c.js";import"./isWellBehavedNumber-DC3UycXE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMyz7hVE.js";import"./axisSelectors-CyWNF9Af.js";import"./d3-scale-Weld_qs_.js";import"./index-Bzi9FVcX.js";import"./index-CzKnnb1A.js";import"./renderedTicksSlice-F9VbCDyF.js";import"./index-D5fLjVxw.js";import"./CartesianChart-qCzL_6hu.js";import"./chartDataContext-CO5JDURO.js";import"./CategoricalChart-C5K9SC6Q.js";import"./CartesianAxis-CKj7lC_q.js";import"./Layer-GWt7eqqf.js";import"./Text-mzbpVVI1.js";import"./DOMUtils-WOBZE1NB.js";import"./useId-caAF7v61.js";import"./useBackwardsCompatibleTheme-qcvR2xn0.js";import"./Label-DXa6-y8E.js";import"./ZIndexLayer-B7lLwLGi.js";import"./types-BQYuG1d5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CyRMeM58.js";import"./useAnimationId-DT-PTug0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DEzYnzUI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ZcrlVc5g.js";import"./tooltipContext-D3n1U0sf.js";import"./RegisterGraphicalItemId-B1R9LLxS.js";import"./ErrorBarContext-Cw8TKYFj.js";import"./GraphicalItemClipPath-1wc1zrjW.js";import"./SetGraphicalItem-0zivWSPx.js";import"./getZIndexFromUnknown-DLegqRGd.js";import"./useGraphicalItemIdentity-D12-TlkG.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
