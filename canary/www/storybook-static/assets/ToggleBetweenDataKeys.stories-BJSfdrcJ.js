import{r as n,R as t}from"./iframe-Czgh02fE.js";import{L as p}from"./LineChart-CjM5anvS.js";import{R as s}from"./zIndexSlice-Do8f9YWK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-8J7rlyPn.js";import{X as d}from"./XAxis-C2Mn3Na8.js";import{Y as y}from"./YAxis-B9WbRmEP.js";import{L as u}from"./Legend-C3UeOl1B.js";import{L as h}from"./Line-BEYssJ_8.js";import{T as g}from"./Tooltip-Cd1ARCyE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIxKKW90.js";import"./index-BjeOf0Dt.js";import"./index-B1amEOit.js";import"./index-BzAJTpLC.js";import"./index-BnAmj1WN.js";import"./throttle-D1C4cigO.js";import"./get-C2VjdU0L.js";import"./axisSelectors-H5jwzs9R.js";import"./resolveDefaultProps-D61FhKsp.js";import"./isWellBehavedNumber-BenVrlkW.js";import"./d3-scale-DjzQ61DY.js";import"./renderedTicksSlice-DljNETqX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BAydra3V.js";import"./chartDataContext-9fwvPw2D.js";import"./CategoricalChart-BgAf9cWH.js";import"./CartesianAxis-B4k6OJQ9.js";import"./Layer-zCmZcP2I.js";import"./Text-CR_8UZPv.js";import"./DOMUtils-CFgNHwO1.js";import"./useBackwardsCompatibleTheme-CqikxVTG.js";import"./Label-4BEQg_vH.js";import"./ZIndexLayer-s-28Q74q.js";import"./types-BOqsceM0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-3zu5f5DX.js";import"./symbol-BkB6eAni.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cCtdJ_2d.js";import"./uniqBy-DH6vkAOH.js";import"./iteratee-dtD612zi.js";import"./Curve--OBRtabt.js";import"./step-BjIepLza.js";import"./AnimatedItems-DQ5WKLo7.js";import"./useAnimationId-CBLxCaT-.js";import"./ActivePoints-D5lyHxm4.js";import"./Dot-BPNUB50S.js";import"./RegisterGraphicalItemId-_1lxrS6Z.js";import"./ErrorBarContext-Cjm5t7eM.js";import"./GraphicalItemClipPath-BFEL_l8x.js";import"./SetGraphicalItem-BSCJBMvO.js";import"./getRadiusAndStrokeWidthFromDot-DSA1Map0.js";import"./ActiveShapeUtils-DxWOnmm2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-bL23mcd1.js";import"./Rectangle-BuJcrudB.js";import"./util-Dxo8gN5i.js";import"./Sector-Dbvha4hq.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
