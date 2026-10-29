import{r as p,R as t}from"./iframe-BmdtsHI1.js";import{L as n}from"./LineChart-Dt39tboA.js";import{R as s}from"./zIndexSlice-CLt9waUo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-kiNNWl2U.js";import{X as d}from"./XAxis-SiUufnTD.js";import{Y as y}from"./YAxis-D_YhB_w8.js";import{L as u}from"./Legend-ZellOFxE.js";import{L as h}from"./Line-BFAqQ4J_.js";import{T as g}from"./Tooltip-DQ6Ncotp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CW25TSBD.js";import"./resolveDefaultProps-D3fedd0f.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CWAMaE0j.js";import"./throttle-DIqkA_6B.js";import"./index-D1G26n6J.js";import"./index-BU9XUo1g.js";import"./polarAxisSelectors-DqiScafe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4n2-g_Q.js";import"./index-dsp9FHu2.js";import"./index-B-lO_Vmy.js";import"./renderedTicksSlice-Cbbwd8m4.js";import"./index-JJYVBYhC.js";import"./CartesianChart-Q5wSSY7L.js";import"./ZIndexPortal-BR-Xx9Bs.js";import"./CategoricalChart-BetF0ARA.js";import"./CartesianAxis-6ZKwTVD2.js";import"./Layer-uwW889ah.js";import"./Text-DgdwosBP.js";import"./DOMUtils-BrHrYr07.js";import"./ZIndexLayer-BPViM-b3.js";import"./Label-efFOyHP_.js";import"./types-TcTpNVA6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DTd7inGs.js";import"./symbol-OLqGol2l.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C7_rhOBH.js";import"./dataEntryStyles-C-VVWe1s.js";import"./useElementOffset-Dh1asSMz.js";import"./uniqBy-BUDfukUQ.js";import"./iteratee-B0xN_w6V.js";import"./isArguments-yB-y1yaH.js";import"./Curve-St2o1Zg2.js";import"./step-C3G0yHTA.js";import"./LabelList-BBJeoy6S.js";import"./ActivePoints-DOV6z7vt.js";import"./Dot-D4FfFK1V.js";import"./activeStyles-0PlrA4t0.js";import"./useAnimationId-C4l6OBef.js";import"./ErrorBarContext-C7bFffEo.js";import"./SetGraphicalItem-wZmxt-s3.js";import"./getRadiusAndStrokeWidthFromDot-J3eGzewL.js";import"./ActiveShapeUtils-Du3AePOl.js";import"./useEffectiveDataKey-Bt6hIrJm.js";import"./Cross-BJJumAQM.js";import"./Rectangle-oyaeTZIU.js";import"./util-Dxo8gN5i.js";import"./Sector-D68kMANZ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
