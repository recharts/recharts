import{r as p,R as t}from"./iframe-nnpNEl0c.js";import{L as n}from"./LineChart-CkeKSxFK.js";import{R as s}from"./zIndexSlice-BIxplyvp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DkQzXODW.js";import{X as d}from"./XAxis-DmxowzrZ.js";import{Y as y}from"./YAxis-EeSB_m0u.js";import{L as u}from"./Legend-DhFd6Kcx.js";import{L as h}from"./Line-BBeoyI6l.js";import{T as g}from"./Tooltip-BM0Kh55K.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VFnYK8V7.js";import"./resolveDefaultProps-D1Co5jVK.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DWnmhIgM.js";import"./throttle-CIO-2ra4.js";import"./index-B_vNRzQ4.js";import"./index-BjMcvTtw.js";import"./polarAxisSelectors-jvUDxmEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WiXCw0il.js";import"./index-Db30zo8R.js";import"./index-DcZvMf-G.js";import"./renderedTicksSlice-BMWsCoi3.js";import"./index-CONo-L8r.js";import"./CartesianChart-CujBFFkW.js";import"./ZIndexPortal-Cp9AMkdy.js";import"./CategoricalChart-BMMRGjAS.js";import"./CartesianAxis-BqAJOGeS.js";import"./Layer-CzHD4ald.js";import"./Text-D0rrhxSu.js";import"./pageBackground-BLVyr9N2.js";import"./ZIndexLayer-BDSIPNIK.js";import"./Label-tyPo7vJI.js";import"./dataEntryStyles-BmV4LTxI.js";import"./types-BmjMrM54.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B8oOAKpP.js";import"./symbol-OKw49DjP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D4m3W9N6.js";import"./uniqBy-BtFmVpwe.js";import"./iteratee-DDsc37Zm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BBlYovqd.js";import"./step-BJvIh3cb.js";import"./LabelList-BNO7oHuM.js";import"./ActivePoints-J_iA54Fy.js";import"./Dot-BfnVBDM9.js";import"./activeStyles-iZJvEVBW.js";import"./useAnimationId-CJPhZ8Cq.js";import"./RegisterGraphicalItemId-DWpzbaDo.js";import"./ErrorBarContext-BjOiJE8k.js";import"./SetGraphicalItem-CRQScpdw.js";import"./getRadiusAndStrokeWidthFromDot-DWNEs6NN.js";import"./ActiveShapeUtils-DRqheEEB.js";import"./useEffectiveDataKey-DTKrhjFl.js";import"./Cross-BG3dlVif.js";import"./Rectangle-bTnZwyFx.js";import"./util-Dxo8gN5i.js";import"./Sector-BDC49zEQ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
