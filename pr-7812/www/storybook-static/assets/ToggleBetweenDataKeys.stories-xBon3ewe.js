import{r as p,R as t}from"./iframe-D6i__LoP.js";import{L as n}from"./LineChart-epH5kAiy.js";import{R as s}from"./zIndexSlice-CyKHeydM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-rlzR1UsV.js";import{X as d}from"./XAxis-CAx1pIhU.js";import{Y as y}from"./YAxis-B5XPYz7e.js";import{L as u}from"./Legend-bzmj0gXI.js";import{L as h}from"./Line-vAyDldKH.js";import{T as g}from"./Tooltip-B2sIES0q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCWzk6aO.js";import"./resolveDefaultProps-CqzBSPJb.js";import"./get-C2VjdU0L.js";import"./axisSelectors-LrJn1RIt.js";import"./throttle-DZkWvGbR.js";import"./index-DMFV_hOu.js";import"./index--kg1cBe0.js";import"./isWellBehavedNumber-CluTirfv.js";import"./d3-scale-CPAx7ill.js";import"./index-TOqTf9p4.js";import"./index-B0NZAO6k.js";import"./renderedTicksSlice-Cqr2zXs_.js";import"./index-CfSh3_es.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-SH0Bt_l8.js";import"./chartDataContext-DoSIIG4T.js";import"./CategoricalChart-CQsWyxzZ.js";import"./CartesianAxis-DBbQlRic.js";import"./Layer-g6kXe5Or.js";import"./Text-hZV3tmbb.js";import"./DOMUtils-DeYJTEnJ.js";import"./useId-tMVNWk8Z.js";import"./useBackwardsCompatibleTheme-CQpTINsS.js";import"./Label-CcM-HFI6.js";import"./ZIndexLayer-Cgr5Sbcn.js";import"./types-BferblG2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C7sIDB3S.js";import"./symbol-CCdPpWBc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tYvBFPP4.js";import"./uniqBy-DBt7WG7j.js";import"./iteratee-q1Bz0EWx.js";import"./Curve-BAgXbvIK.js";import"./step-D_yNlVES.js";import"./AnimatedItems-BhOCoOsB.js";import"./useAnimationId-Bi456v-E.js";import"./ActivePoints-BQ7megxl.js";import"./Dot-M_mEsxZK.js";import"./RegisterGraphicalItemId-DMF9sTtn.js";import"./ErrorBarContext-CpDc2JTq.js";import"./GraphicalItemClipPath-C4ZotnNz.js";import"./SetGraphicalItem-B41pEGJW.js";import"./getRadiusAndStrokeWidthFromDot-BXIDSkMw.js";import"./ActiveShapeUtils-p-Z4MyM6.js";import"./useGraphicalItemIdentity-CVzdXzJV.js";import"./Cross-Dm5OOX8L.js";import"./Rectangle-Cv4A529c.js";import"./util-Dxo8gN5i.js";import"./Sector-CcGdp1iE.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
