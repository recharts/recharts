import{r as p,R as t}from"./iframe-ZxfiIiWi.js";import{L as n}from"./LineChart-_O5Kxyr-.js";import{R as s}from"./zIndexSlice-By0bZmpT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CSncOHrx.js";import{X as d}from"./XAxis-8M4LuTq0.js";import{Y as y}from"./YAxis-Ce1Cc64q.js";import{L as u}from"./Legend-7mLxfvaa.js";import{L as h}from"./Line-DdCEipwX.js";import{T as g}from"./Tooltip-DRa829Qg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UKbeDROs.js";import"./resolveDefaultProps-1Uan2Hnp.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DMQ84IJA.js";import"./throttle-CfDYUS1N.js";import"./index-DZp6XoEo.js";import"./index-DLRIqKjc.js";import"./isWellBehavedNumber-DX24GKSm.js";import"./d3-scale-Np9PFIYo.js";import"./index-DRuu78hr.js";import"./index-6NV0E9go.js";import"./renderedTicksSlice-nc0b0sSE.js";import"./index-BgcSxEKm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-v34KMzUV.js";import"./chartDataContext-D2b6BjfF.js";import"./CategoricalChart-Ls_A9xeg.js";import"./CartesianAxis-DHTAgCml.js";import"./Layer-SD6n1FzC.js";import"./Text-BxPrjmzo.js";import"./DOMUtils-CTcVRqQO.js";import"./useId-DbFmynHI.js";import"./useBackwardsCompatibleTheme-iH09SwpV.js";import"./Label-C08NNQeO.js";import"./ZIndexLayer-MDZol7np.js";import"./types-DfGxKHCw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-c_F5rIiR.js";import"./symbol-De182CBu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CtPYwSuY.js";import"./uniqBy-BC78fxA5.js";import"./iteratee-CPoLBgS5.js";import"./Curve-DPtlKYb4.js";import"./step-BSgEqbWI.js";import"./AnimatedItems-C7ik5li4.js";import"./useAnimationId-Bd76uFLI.js";import"./ActivePoints--DLJoCCT.js";import"./Dot-DBOOUc-e.js";import"./RegisterGraphicalItemId-BglnUmW_.js";import"./ErrorBarContext-lXhQP1y7.js";import"./GraphicalItemClipPath-D7uJY0ae.js";import"./SetGraphicalItem-DfXzBFI9.js";import"./getRadiusAndStrokeWidthFromDot-CERp_c72.js";import"./ActiveShapeUtils-O5hE5x5h.js";import"./useGraphicalItemIdentity-Cy74xmM1.js";import"./Cross-CZB0PSDR.js";import"./Rectangle-XQRP3xav.js";import"./util-Dxo8gN5i.js";import"./Sector-DztahhQ8.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
