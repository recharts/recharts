import{r as p,R as t}from"./iframe-C2y7-rH2.js";import{L as n}from"./LineChart-pYMyUpsP.js";import{R as s}from"./zIndexSlice-BQPOy7As.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CoBayb9K.js";import{X as d}from"./XAxis-BRv-fAhZ.js";import{Y as y}from"./YAxis-B28w59_W.js";import{L as u}from"./Legend-Bz20O50v.js";import{L as h}from"./Line-DB6VwbSy.js";import{T as g}from"./Tooltip-DjLxwRTA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BcfYPaoe.js";import"./resolveDefaultProps-vPK17mKC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bw0Qwigf.js";import"./throttle-BDe4zlG9.js";import"./index-Bz54eCtj.js";import"./index-ChrJmNNe.js";import"./isWellBehavedNumber-6_l4g7Xi.js";import"./d3-scale-D07iQYqn.js";import"./index-DyeRA5Td.js";import"./index-OvZqyYfZ.js";import"./renderedTicksSlice-DVIPHfrA.js";import"./index-DN97KnNV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1na8-qP.js";import"./chartDataContext-ClTM7zwW.js";import"./CategoricalChart-BgXqKpLI.js";import"./CartesianAxis-DwUPIt0X.js";import"./Layer-Y5hBKOyR.js";import"./Text-Dg2YZl1D.js";import"./DOMUtils-CYVmP7ld.js";import"./useId-rIBzQY0F.js";import"./useBackwardsCompatibleTheme-xd8BeFgY.js";import"./Label-CSUQJf-z.js";import"./ZIndexLayer-Cqkx5XlC.js";import"./types-DDulV5vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D5N7fhe9.js";import"./symbol-BfZZVleY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kO2xZAmN.js";import"./uniqBy-Cquckdt6.js";import"./iteratee-CbQmO-Fp.js";import"./Curve-Bc1dsSwG.js";import"./step-CDQ_m3Wy.js";import"./AnimatedItems-CrKX7S12.js";import"./useAnimationId-BlRPNYZD.js";import"./ActivePoints-DOuEp3Ot.js";import"./Dot-Di-XdVIz.js";import"./RegisterGraphicalItemId-CD4HP7HF.js";import"./ErrorBarContext-J0sVh-nS.js";import"./GraphicalItemClipPath-SSZXiCnp.js";import"./SetGraphicalItem-B36qE1ly.js";import"./getRadiusAndStrokeWidthFromDot-AXkwLV7A.js";import"./ActiveShapeUtils-CXM-saMn.js";import"./useGraphicalItemIdentity-B5eIfUAt.js";import"./Cross-Bw1RGGbC.js";import"./Rectangle-X3oIIIHx.js";import"./util-Dxo8gN5i.js";import"./Sector-BnOOyIft.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
