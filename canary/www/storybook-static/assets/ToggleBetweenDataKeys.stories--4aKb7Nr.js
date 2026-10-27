import{r as p,R as t}from"./iframe-BKOly897.js";import{L as n}from"./LineChart-Da4Hdt1p.js";import{R as s}from"./zIndexSlice-MuW0IoWE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DzIYFcZw.js";import{X as d}from"./XAxis-CAN01VgH.js";import{Y as y}from"./YAxis-B-vCHNYJ.js";import{L as u}from"./Legend-BY_4G6rL.js";import{L as h}from"./Line-D5arw7he.js";import{T as g}from"./Tooltip-DlABXhjR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BR-O-n81.js";import"./resolveDefaultProps-DBtmfAg5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DAovfJtb.js";import"./throttle-Dj0bMbq4.js";import"./index-Bgsd-oxC.js";import"./index-CcRpQNf3.js";import"./polarAxisSelectors-Dd8oI3jG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FWOlMe5i.js";import"./index-BW-0cZWE.js";import"./index-DAFveYs2.js";import"./renderedTicksSlice-CNCxbMiN.js";import"./index-DlD_trIo.js";import"./CartesianChart-yrdLDQCk.js";import"./ZIndexPortal-DaAvwAYM.js";import"./CategoricalChart-BtQg_BZ4.js";import"./CartesianAxis-B19wq6cj.js";import"./Layer-DdqSdn0F.js";import"./Text-B-p-4nXu.js";import"./pageBackground-ByY2ru8v.js";import"./ZIndexLayer-BgIgZbDQ.js";import"./Label-BqeeWfBr.js";import"./dataEntryStyles-DNa-AVoZ.js";import"./types-BW57dsKE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-owfjK1Cg.js";import"./symbol-BffQEpZj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D4wk1lFS.js";import"./uniqBy-QsHY--3m.js";import"./iteratee-C_CFKuDs.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DZlxAOiJ.js";import"./step-D0Rpy-Hs.js";import"./LabelList-CHIFisD0.js";import"./ActivePoints-mk-rZ28o.js";import"./Dot-fiFJQDUC.js";import"./activeStyles-C5fI4Bwm.js";import"./useAnimationId-Dwkyu_pp.js";import"./RegisterGraphicalItemId-DXgo6Kex.js";import"./ErrorBarContext-CQ65MipX.js";import"./SetGraphicalItem-BKFEq2Vz.js";import"./getRadiusAndStrokeWidthFromDot-B-_khl6D.js";import"./ActiveShapeUtils-CmV0wYzT.js";import"./useEffectiveDataKey-BLEvHhBq.js";import"./Cross-C7tEJC1H.js";import"./Rectangle-dSQZJlx4.js";import"./util-Dxo8gN5i.js";import"./Sector-sosRkgZY.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
