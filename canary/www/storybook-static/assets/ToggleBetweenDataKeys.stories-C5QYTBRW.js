import{r as p,R as t}from"./iframe-2TbE3qYT.js";import{L as n}from"./LineChart-tm61HVF4.js";import{R as s}from"./zIndexSlice-CDl_l-89.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Br04DuFw.js";import{X as d}from"./XAxis-J5474B1k.js";import{Y as y}from"./YAxis-DJiyoeoo.js";import{L as u}from"./Legend-zcd4ylac.js";import{L as h}from"./Line-C0MGKIx5.js";import{T as g}from"./Tooltip-DhqtrPJ9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DSdhDIUK.js";import"./resolveDefaultProps-CmNgnsrp.js";import"./get-CjriyByo.js";import"./axisSelectors-BRsQeeHB.js";import"./throttle-AC4zKKET.js";import"./index-zPMeTUky.js";import"./index-CF9MDp9v.js";import"./polarAxisSelectors-BVGWIciz.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-gVDFTlHt.js";import"./index-vCQ15aHt.js";import"./index-DZAwbT7O.js";import"./renderedTicksSlice-hzdTS8Zy.js";import"./index-Cp7R3dKQ.js";import"./fillDefinitions-DTcu8a6k.js";import"./CartesianChart-Doi0i7F0.js";import"./chartDataContext-zU1PANlW.js";import"./CategoricalChart-BlCkd7eS.js";import"./CartesianAxis-DY1zMkgy.js";import"./Layer-7DEP56Bj.js";import"./Text-BBu6qFds.js";import"./ZIndexLayer-CZh1ghPv.js";import"./Label-BqpWbzgg.js";import"./types-Dx30sS-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BqG7sYmQ.js";import"./symbol-CUR1FaxD.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D9QIVvZV.js";import"./uniqBy-B9J3txXo.js";import"./iteratee-BLZOulYj.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DrA60Arr.js";import"./Curve-Z7vcnGYC.js";import"./step-DFCmv64b.js";import"./dataEntryStyles-T1g5qPBF.js";import"./ActivePoints-D8FfETBR.js";import"./Dot-_rUk0L2M.js";import"./activeStyles-Rm_R6i1P.js";import"./useAnimationId-D_GZEFYT.js";import"./ErrorBarContext-D7D-MJNc.js";import"./SetGraphicalItem-Dl3lwAU1.js";import"./ActiveShapeUtils-Bsp6lbzE.js";import"./useEffectiveDataKey-CWpkrBwa.js";import"./Cross-DBCSj7Wj.js";import"./Rectangle-DnludKWy.js";import"./util-Dxo8gN5i.js";import"./Sector-dUg13oG9.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
