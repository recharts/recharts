import{r as p,R as t}from"./iframe-DkUPJ-sS.js";import{L as n}from"./LineChart-MrbYuqQw.js";import{R as s}from"./zIndexSlice-12UiSTLm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-wrIIvehP.js";import{X as d}from"./XAxis-BWwIFA6B.js";import{Y as y}from"./YAxis-DUp2X2GH.js";import{L as u}from"./Legend-DKjZAMK9.js";import{L as h}from"./Line-C2hOgETN.js";import{T as g}from"./Tooltip-CWW4V7pP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mRcsep52.js";import"./resolveDefaultProps-R0X1asWy.js";import"./get-CjriyByo.js";import"./axisSelectors-DXomLufj.js";import"./throttle-B27eHaYH.js";import"./index-CRD-EhW_.js";import"./index-t-OvK83N.js";import"./polarAxisSelectors-BXszvLGt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CycPPIVV.js";import"./index-C1Em399f.js";import"./index-Cvlsg4mt.js";import"./renderedTicksSlice-DufVH7D7.js";import"./index-BSGDHpsm.js";import"./fillDefinitions-z6sEEzMG.js";import"./CartesianChart-DoFuwDSF.js";import"./chartDataContext-90C9fl16.js";import"./CategoricalChart-B3U5Ej9_.js";import"./CartesianAxis-CPfh-d6g.js";import"./Layer-Dz0e5F_f.js";import"./Text-ChMlRx0j.js";import"./ZIndexLayer-BEv6P927.js";import"./Label-8ZjagO8_.js";import"./types-BwlCxTmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-u4sk2XTY.js";import"./symbol-C2La0w81.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Bn3uQ3yx.js";import"./uniqBy-BDWNlPAq.js";import"./iteratee-WjMYvucc.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CiiVoAk9.js";import"./Curve-CbuCUFZQ.js";import"./step-BRslF1pk.js";import"./dataEntryStyles-BCBCgPLo.js";import"./ActivePoints-D6Ig6JoZ.js";import"./Dot-1lM7GFo1.js";import"./activeStyles-DgOrLWSA.js";import"./useAnimationId-2gl_z5Fx.js";import"./ErrorBarContext-MZRvuvrv.js";import"./SetGraphicalItem-D8P9Tqtn.js";import"./ActiveShapeUtils-Dnx5Vb0n.js";import"./useEffectiveDataKey-CN20ww8a.js";import"./Cross-BtLlyYev.js";import"./Rectangle-BG9rqJG5.js";import"./util-Dxo8gN5i.js";import"./Sector-jJcJmYqW.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
