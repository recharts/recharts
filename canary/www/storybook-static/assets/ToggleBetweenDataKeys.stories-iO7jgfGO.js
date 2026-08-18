import{r as n,R as t}from"./iframe-CLMMwevR.js";import{L as p}from"./LineChart-Dxce1Pvm.js";import{R as s}from"./zIndexSlice-C07rknep.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CArlkuOk.js";import{X as d}from"./XAxis-DkO77iT7.js";import{Y as y}from"./YAxis-Cs8CAcTx.js";import{L as u}from"./Legend-BqxvSdh-.js";import{L as h}from"./Line-clh9u8Fq.js";import{T as g}from"./Tooltip-BljQHSzs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZjp8UCv.js";import"./index-DXBvk1ZI.js";import"./index-fePXAV8a.js";import"./index-iZ7_9Rw4.js";import"./index-DTmItnBv.js";import"./throttle--WJjmRve.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bue48vwC.js";import"./resolveDefaultProps-C-YHYhRk.js";import"./isWellBehavedNumber-DSl6gFKS.js";import"./d3-scale-DOlcECPa.js";import"./renderedTicksSlice-wRkzPU5z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Q0nxu5Mh.js";import"./chartDataContext-CTT-NX_B.js";import"./CategoricalChart-C94CRL_w.js";import"./CartesianAxis-DUmQAHmM.js";import"./Layer-Cu_Jods-.js";import"./Text-CiZ_8rvc.js";import"./DOMUtils-Cj7lsnlo.js";import"./useBackwardsCompatibleTheme-DuadFd-n.js";import"./Label-BtFWigtA.js";import"./ZIndexLayer-DMkUVhQg.js";import"./types-BzNgNoqU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-U0YZNd6R.js";import"./symbol-DOolnNi0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0ZnUPhxq.js";import"./uniqBy-EzYVTFGO.js";import"./iteratee-DMZj6OWx.js";import"./Curve-CxAOzKab.js";import"./step-DNzx8Vvb.js";import"./AnimatedItems-BI16k_x1.js";import"./useAnimationId-B3zwLWVY.js";import"./ActivePoints-BK5BwbKA.js";import"./Dot-BvfeX907.js";import"./RegisterGraphicalItemId-DbsNOx6w.js";import"./ErrorBarContext-Bh7QEhRH.js";import"./GraphicalItemClipPath-Cx1IovYW.js";import"./SetGraphicalItem-CkM_d3EZ.js";import"./getRadiusAndStrokeWidthFromDot-Ddm_ys4J.js";import"./ActiveShapeUtils-CIArBYiS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-yxpJqiFA.js";import"./Rectangle-B1yBKol3.js";import"./util-Dxo8gN5i.js";import"./Sector-DIkyuY27.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
