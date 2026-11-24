import{r as p,R as t}from"./iframe-Be1JwYLB.js";import{L as n}from"./LineChart-BhpkTkru.js";import{R as s}from"./zIndexSlice-CgSPm-wc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cw6_LUYb.js";import{X as d}from"./XAxis-BsHOKRoe.js";import{Y as y}from"./YAxis-B8XW_V0R.js";import{L as u}from"./Legend-CdT5XdlY.js";import{L as h}from"./Line-BfWisHme.js";import{T as g}from"./Tooltip-CBedYJZV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BztyyuwI.js";import"./resolveDefaultProps-vtDVNmS9.js";import"./get-CjriyByo.js";import"./axisSelectors-rS5FKSRX.js";import"./throttle-DjxQctYo.js";import"./index-ueUT9Xj6.js";import"./index-Bkv44dvd.js";import"./polarAxisSelectors-petp68tp.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_iM0uvU.js";import"./index-Dg9s7T6j.js";import"./index-m2EJzzBW.js";import"./renderedTicksSlice-DiKCMxPA.js";import"./index-B-llFuKq.js";import"./fillDefinitions-Be1jCOoc.js";import"./CartesianChart-C7B4dY_Y.js";import"./chartDataContext-DDExTKyo.js";import"./CategoricalChart-C-aFkl_F.js";import"./CartesianAxis-CBnwQrVI.js";import"./Layer-L6JSSqUT.js";import"./Text-BqUDv62U.js";import"./ZIndexLayer-ByAD4IkB.js";import"./Label-Cm4G9M_4.js";import"./types-DiTos3ch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-34MkMdpP.js";import"./symbol-CfD9aVNT.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BXttSKBy.js";import"./uniqBy-CpAKF5a4.js";import"./iteratee-Bcb_cbmN.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-B_Y3WA9D.js";import"./Curve-DQRadQHz.js";import"./step-Dq96qlXf.js";import"./dataEntryStyles-BkzBQ6X2.js";import"./ActivePoints-BUYZbsLY.js";import"./Dot-C-gvMhjL.js";import"./activeStyles-CdOMMJXp.js";import"./useAnimationId-DZ7icYC0.js";import"./ErrorBarContext-CuYC5cVX.js";import"./SetGraphicalItem-CZx3vw8X.js";import"./ActiveShapeUtils-C6jNLipX.js";import"./useEffectiveDataKey-dwd_hOHx.js";import"./Cross-Bk-II5U1.js";import"./Rectangle-Bp6UvdPI.js";import"./util-Dxo8gN5i.js";import"./Sector-CdCkKvGS.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
