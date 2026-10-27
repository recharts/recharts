import{r as p,R as t}from"./iframe-i00IWHKS.js";import{L as n}from"./LineChart-DeHZMAtB.js";import{R as s}from"./zIndexSlice-CSTmF3GT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DbvmYexX.js";import{X as d}from"./XAxis-BA_nHJl6.js";import{Y as y}from"./YAxis-GmTTpsne.js";import{L as u}from"./Legend-DqBmZZp9.js";import{L as h}from"./Line-CdspcwSK.js";import{T as g}from"./Tooltip-Dl1AigS9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-HLZ5nOEz.js";import"./resolveDefaultProps-BglOfK6k.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CrzJ0No2.js";import"./throttle-VVsSQFBk.js";import"./index-CbwirX63.js";import"./index-CPuGrPsk.js";import"./polarAxisSelectors-krKyM9nF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fdx5emX3.js";import"./index-Cdxh422T.js";import"./index-CocutCkO.js";import"./renderedTicksSlice-DZPzUM4n.js";import"./index-Cpb1euZl.js";import"./CartesianChart-cAT52TQ5.js";import"./ZIndexPortal-DfOIGQM0.js";import"./CategoricalChart-CvwnoS-7.js";import"./CartesianAxis-EZZmQ9Qc.js";import"./Layer-DmbMEBZx.js";import"./Text-CB-MiyEA.js";import"./pageBackground-e_M9BLsj.js";import"./ZIndexLayer-C49fDhwr.js";import"./Label-C4qEKDUL.js";import"./types-BWYuSzJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DazPmVzQ.js";import"./symbol-BISg9N3x.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Df6LRa99.js";import"./uniqBy-3FD8HgkX.js";import"./iteratee-B5sUlY-H.js";import"./isArguments-yB-y1yaH.js";import"./Curve-hlUyfFhF.js";import"./step-fjQhdc2y.js";import"./LabelList-C1CnC_KK.js";import"./ActivePoints-CbH5u3fp.js";import"./Dot-kJUEeAuC.js";import"./activeStyles-DhZp3R57.js";import"./useAnimationId-COvKagcg.js";import"./dataEntryStyles-BgF2g0Ub.js";import"./ErrorBarContext-DjefL6kX.js";import"./SetGraphicalItem-Cn81nTMh.js";import"./getRadiusAndStrokeWidthFromDot-Ce2t7rlw.js";import"./ActiveShapeUtils-CYbFkl4W.js";import"./useEffectiveDataKey-Cy_6W0Je.js";import"./Cross-CMaQneCB.js";import"./Rectangle-BPmgsHsk.js";import"./util-Dxo8gN5i.js";import"./Sector-CesvKHcg.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
