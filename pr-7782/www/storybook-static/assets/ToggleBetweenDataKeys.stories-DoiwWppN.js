import{r as p,R as t}from"./iframe-SqguF_NX.js";import{L as n}from"./LineChart-CX6fFVTH.js";import{R as s}from"./zIndexSlice-BkiV0otE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bt3LKIpL.js";import{X as d}from"./XAxis-P_and3Qh.js";import{Y as y}from"./YAxis-BezMzOf0.js";import{L as u}from"./Legend-DEaXUNjH.js";import{L as h}from"./Line-D3r5tZJE.js";import{T as g}from"./Tooltip-1kqVnrO0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtX1Azw0.js";import"./resolveDefaultProps-BXjF7TxP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-zCi_DHLv.js";import"./throttle-BK_PPAk1.js";import"./index-B3GChKJN.js";import"./index-DZzaZipo.js";import"./isWellBehavedNumber-BVNp7Lfk.js";import"./d3-scale-HQIXvxJU.js";import"./index-GGoi087z.js";import"./index-BzPNjXR5.js";import"./renderedTicksSlice-CMNm7EBg.js";import"./index-BH7LBhiS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-0Tm9s_Qh.js";import"./chartDataContext-Cw_Hfd-o.js";import"./CategoricalChart--bg0gB1r.js";import"./CartesianAxis-IyngpyO5.js";import"./Layer-DMTzFJJY.js";import"./Text-CGVR5o-9.js";import"./DOMUtils-C7uSFAMW.js";import"./useId-DDimChZF.js";import"./useBackwardsCompatibleTheme-Csth7N6u.js";import"./Label-Ln0updaQ.js";import"./ZIndexLayer-2JAxRQj0.js";import"./types-C4DG-fsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BQOXgP30.js";import"./symbol-DpzEWaQ_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfFEQnoo.js";import"./uniqBy-BQBFpjJ7.js";import"./iteratee-qNi8Ps_g.js";import"./Curve-TumiDsb0.js";import"./step-DI1tw62n.js";import"./AnimatedItems-CVudD1tP.js";import"./useAnimationId-Cnc3ou0l.js";import"./ActivePoints-BdsoqPbh.js";import"./Dot-D7HgwkXZ.js";import"./RegisterGraphicalItemId-B2ssVdOY.js";import"./ErrorBarContext-CKOKE4j7.js";import"./GraphicalItemClipPath-DQVG9W_P.js";import"./SetGraphicalItem-DnieI-cg.js";import"./getRadiusAndStrokeWidthFromDot-C8zV7Km-.js";import"./ActiveShapeUtils-C8315rjX.js";import"./useGraphicalItemIdentity-CEMH6EIi.js";import"./Cross-BDK-fWel.js";import"./Rectangle-CjC7DOQ8.js";import"./util-Dxo8gN5i.js";import"./Sector-BwVtv9wk.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
