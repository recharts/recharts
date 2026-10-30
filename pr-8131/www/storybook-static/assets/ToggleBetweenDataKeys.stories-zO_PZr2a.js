import{r as p,R as t}from"./iframe-DRd8L1ij.js";import{L as n}from"./LineChart-CM1_G34w.js";import{R as s}from"./zIndexSlice-DWK0mKBW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-5glYr1GN.js";import{X as d}from"./XAxis-DYHP_qTD.js";import{Y as y}from"./YAxis-Dzj0j6ti.js";import{L as u}from"./Legend-Bzv9SWR0.js";import{L as h}from"./Line-CN_lgmVk.js";import{T as g}from"./Tooltip-CGl1c65o.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVHpNPrj.js";import"./resolveDefaultProps--2iGUKCh.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DKYErlU4.js";import"./throttle-BZHSEq8k.js";import"./index-DuLNwG6c.js";import"./index-GNzKGxFd.js";import"./polarAxisSelectors-B7CzXU5n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Degm7ixx.js";import"./index-BOBLZBKw.js";import"./index-BnUkaxQb.js";import"./renderedTicksSlice-VRZysoJN.js";import"./index-DZh8SmTQ.js";import"./fillDefinitions-BcJsDDFO.js";import"./CartesianChart-xzJeK0ZT.js";import"./ZIndexPortal-BX35EtJy.js";import"./CategoricalChart-C3H_aI_M.js";import"./CartesianAxis-BCEsA_1Q.js";import"./Layer-C-w_mvnX.js";import"./Text-DOqNkwx7.js";import"./DOMUtils-BMkGHkgN.js";import"./ZIndexLayer-BYH3DLDW.js";import"./Label-Dlqk38Aa.js";import"./types-99rmuj1o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C10Tu53k.js";import"./symbol-CYG96CRr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvtLZm2w.js";import"./uniqBy-CQ6eO9fT.js";import"./iteratee-0XuJHBpI.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B3UG50Pe.js";import"./step-CVL70ILG.js";import"./LabelList-C56jidjO.js";import"./ActivePoints-DpFFg10s.js";import"./Dot-Dinx-ymZ.js";import"./activeStyles-N3dA5laV.js";import"./useAnimationId-C1EYHtHK.js";import"./dataEntryStyles-CMr7JuEI.js";import"./ErrorBarContext-DGvI8kwC.js";import"./SetGraphicalItem-Cted8rHa.js";import"./getRadiusAndStrokeWidthFromDot-CcwRzSoX.js";import"./ActiveShapeUtils-Dj9_Xfwc.js";import"./useEffectiveDataKey-C0wXpfOI.js";import"./Cross-C3EgGr3a.js";import"./Rectangle-DdQ2_4X9.js";import"./util-Dxo8gN5i.js";import"./Sector-BQUVlDaO.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
