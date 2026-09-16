import{r as p,R as t}from"./iframe-W65oqx8q.js";import{L as n}from"./LineChart-DIn0h_A3.js";import{R as s}from"./zIndexSlice-9l_Vrwwa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bj1XN4C7.js";import{X as d}from"./XAxis-CsMm9ERi.js";import{Y as y}from"./YAxis-C8LbyJnB.js";import{L as u}from"./Legend-BQI0KbUc.js";import{L as h}from"./Line-BfwQZfLz.js";import{T as g}from"./Tooltip-Dgk-6D6x.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ClDY-hB5.js";import"./resolveDefaultProps-CwFz2OMw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-cQBo3spf.js";import"./throttle-JXtXSY4E.js";import"./index-6OGByTjb.js";import"./index-Cot536dN.js";import"./isWellBehavedNumber-BObY9Idx.js";import"./d3-scale-BnWVEuzd.js";import"./index-BoHv5hv2.js";import"./index-DKR6QUcv.js";import"./renderedTicksSlice-QXgti3JC.js";import"./index-B3pQb6na.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ouG1NDpR.js";import"./chartDataContext-f_o9cnw9.js";import"./CategoricalChart-BwdQTjaO.js";import"./CartesianAxis-CClqdcGJ.js";import"./Layer-CHct5fsC.js";import"./Text-C9pLMK0A.js";import"./DOMUtils-CakF13Ql.js";import"./useId-BxDXx6uj.js";import"./useBackwardsCompatibleTheme-uDuKMgEe.js";import"./Label-Be3blqiA.js";import"./ZIndexLayer-C3J7XzqC.js";import"./types-DGC2KXCF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CEV4tfBQ.js";import"./symbol-CvH-9qIk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CGAEjhf0.js";import"./uniqBy-bQIzI03X.js";import"./iteratee-2Iqaw7xV.js";import"./Curve-DBfMZQpl.js";import"./step-DIoBi2CN.js";import"./AnimatedItems-FyFUBU19.js";import"./useAnimationId-CZj4ZR7y.js";import"./ActivePoints-GiGlS0gl.js";import"./Dot-aLSP80WO.js";import"./RegisterGraphicalItemId-pvmrnM3x.js";import"./ErrorBarContext-B0GH1zEy.js";import"./GraphicalItemClipPath-CegTcjor.js";import"./SetGraphicalItem-I8O9Dd_O.js";import"./getRadiusAndStrokeWidthFromDot-D_6Md5To.js";import"./ActiveShapeUtils-8OE4Q_dK.js";import"./useGraphicalItemIdentity-CZ9WsBDJ.js";import"./Cross-BrqZ4Oz9.js";import"./Rectangle-CD8-QDsq.js";import"./util-Dxo8gN5i.js";import"./Sector-BNbNkFNt.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
