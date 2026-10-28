import{r as p,R as t}from"./iframe-PkW0ejx3.js";import{L as n}from"./LineChart-BWvxpRa5.js";import{R as s}from"./zIndexSlice-CtEWDdkW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-q8L3bfBU.js";import{X as d}from"./XAxis-CyABI53G.js";import{Y as y}from"./YAxis-B7QgfXKC.js";import{L as u}from"./Legend-DsY3co_s.js";import{L as h}from"./Line-DzHsVnQW.js";import{T as g}from"./Tooltip-CmeF5bAK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJcwwy7_.js";import"./resolveDefaultProps-CnX9VcG6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CBaUhvBl.js";import"./throttle-DhIpRp7y.js";import"./index-2kQDiEg9.js";import"./index-CthbcSOz.js";import"./polarAxisSelectors-DErot-vK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_GfRdoG.js";import"./index-bhfK5Tel.js";import"./index-DCKddudy.js";import"./renderedTicksSlice-BiYv8y7m.js";import"./index-DIk-TLTX.js";import"./CartesianChart-CtUUiyil.js";import"./ZIndexPortal-DB_x6J9o.js";import"./CategoricalChart-CFsdFZkP.js";import"./CartesianAxis-BJQP999U.js";import"./Layer-D2wEMTDW.js";import"./Text-DQ7hgPmk.js";import"./pageBackground-BxU5BZDR.js";import"./ZIndexLayer-wqGg5hkh.js";import"./Label-V19_IbKL.js";import"./types-iBZQammS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BgSbEpWI.js";import"./symbol-BJli0oSq.js";import"./path-DyVhHtw_.js";import"./useElementOffset--mFjDBED.js";import"./uniqBy-Bm4ZTWFv.js";import"./iteratee-C7s5c1SC.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DU0fyPxy.js";import"./step-Ckyxmzdw.js";import"./LabelList-BcjFKpxG.js";import"./ActivePoints-DYuBZm8s.js";import"./Dot-ByWXk2hq.js";import"./activeStyles-RIXOH0Ky.js";import"./useAnimationId-JttpOibe.js";import"./dataEntryStyles-BkC7RZGO.js";import"./ErrorBarContext-RvIB7RYt.js";import"./SetGraphicalItem-rvzc4GbA.js";import"./getRadiusAndStrokeWidthFromDot-DFz9CZPw.js";import"./ActiveShapeUtils-hU5Uvesj.js";import"./useEffectiveDataKey-UMh99VlP.js";import"./Cross-BKa6aCvQ.js";import"./Rectangle-DF26d-VT.js";import"./util-Dxo8gN5i.js";import"./Sector-DFqqiOiZ.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
