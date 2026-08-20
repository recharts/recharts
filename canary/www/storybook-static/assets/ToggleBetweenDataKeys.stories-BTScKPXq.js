import{r as n,R as t}from"./iframe-CSFRbakT.js";import{L as p}from"./LineChart-C7YUAEdD.js";import{R as s}from"./zIndexSlice-DpZcKFY3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bbe5SuAZ.js";import{X as d}from"./XAxis-qtAkwMmZ.js";import{Y as y}from"./YAxis-DYaDbF01.js";import{L as u}from"./Legend-JfPnabH0.js";import{L as h}from"./Line-D5ifXaPa.js";import{T as g}from"./Tooltip-DQdZxL4G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTT8y5Ry.js";import"./index-Kfu3TRgb.js";import"./index-DiZSJisN.js";import"./index-LyfzYazm.js";import"./index-_5SE_e0D.js";import"./throttle-DU_ACcBv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-KHPqbB-J.js";import"./resolveDefaultProps-C2JgeEZu.js";import"./isWellBehavedNumber-93OW3PM3.js";import"./d3-scale-DhuPkMBe.js";import"./renderedTicksSlice-BfSTwOrr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BCRGB0c7.js";import"./chartDataContext-BSDgfmf3.js";import"./CategoricalChart-DTfC0HTb.js";import"./CartesianAxis-BE0DelqG.js";import"./Layer-Cas4KfrT.js";import"./Text-D8YyLcux.js";import"./DOMUtils-DF5CrQ-h.js";import"./useId-BBLcWa_d.js";import"./useBackwardsCompatibleTheme-BSlqd8DY.js";import"./Label-wJcYTwit.js";import"./ZIndexLayer-CRsGh2jd.js";import"./types-63Ql-Qpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BBe6ZWzU.js";import"./symbol-DtBce2gr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJQtsn9U.js";import"./uniqBy-Ccjwpzh7.js";import"./iteratee-NArAVAmk.js";import"./Curve-CfossU1f.js";import"./step-CyAEPMCA.js";import"./AnimatedItems-fBpE1aA1.js";import"./useAnimationId-CTzy6jqJ.js";import"./ActivePoints-D10Gw0-N.js";import"./Dot-pcaRJ9oP.js";import"./RegisterGraphicalItemId-BifFS_04.js";import"./ErrorBarContext-B0XwT2-o.js";import"./GraphicalItemClipPath-BvYnrcJ_.js";import"./SetGraphicalItem-w8PwKgIn.js";import"./getRadiusAndStrokeWidthFromDot-Dzv_bsMb.js";import"./ActiveShapeUtils-r1PbrWOo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CceAOFwE.js";import"./Rectangle-DOmjHg1E.js";import"./util-Dxo8gN5i.js";import"./Sector-CiYrENtI.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
