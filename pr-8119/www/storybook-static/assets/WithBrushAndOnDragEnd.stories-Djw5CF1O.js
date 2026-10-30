import{R as t}from"./iframe-C3rzwJQL.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-6U0v4l7r.js";import{B as p}from"./BarChart-DhdxRVhv.js";import{X as l}from"./XAxis-DiB8sdSh.js";import{Y as h}from"./YAxis-Bi88dWrW.js";import{B as x}from"./Brush-Cbjfni4h.js";import{B as c}from"./Bar-Og-SEJod.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BMfVJcK1.js";import"./throttle-B7FABENa.js";import"./index-CqOvaYTW.js";import"./index-PmjQNdGh.js";import"./RechartsWrapper--Ro5bVbm.js";import"./axisSelectors-_YduxGmH.js";import"./polarAxisSelectors-BUo1SW6c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C-_ks2ZK.js";import"./index-BmfKzQXT.js";import"./index-Bhn-1pm4.js";import"./renderedTicksSlice-D3LNjura.js";import"./index-Dht9kxea.js";import"./CartesianChart-DMkGZMTo.js";import"./ZIndexPortal-x0Q6q0h0.js";import"./CategoricalChart-DxpiyG_I.js";import"./CartesianAxis-CD4CCpjb.js";import"./Layer-B6-xlzoZ.js";import"./Text-X-wYRMmx.js";import"./DOMUtils-PuY_kSj_.js";import"./ZIndexLayer-NyRG-f9x.js";import"./Label-CBpcK4i6.js";import"./types-BKor_cCv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CqZcLqEs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRaBEnAs.js";import"./useAnimationId-Dn06_oTK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4p3bqvh.js";import"./tooltipContext-BO2FOIgQ.js";import"./dataEntryStyles-CekGYxzv.js";import"./ErrorBarContext-BUzY2WBc.js";import"./activeStyles-DlQJ4xNs.js";import"./SetGraphicalItem-CPBOF30a.js";import"./getZIndexFromUnknown-CezflR8V.js";import"./useEffectiveDataKey-CP5SXjqP.js";import"./fillDefinitions-Cpwg_wUg.js";import"./omit-hSAuZZsR.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
