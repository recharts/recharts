import{r as p,R as t}from"./iframe-CChz1bjN.js";import{L as n}from"./LineChart-Bgn1sNPZ.js";import{R as s}from"./zIndexSlice-J8dqmnLP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CS5NuRyi.js";import{X as d}from"./XAxis-Dz7Mu1Ti.js";import{Y as y}from"./YAxis-D3lxiiSv.js";import{L as u}from"./Legend-icxTpVXe.js";import{L as h}from"./Line-Bf8JTt31.js";import{T as g}from"./Tooltip-BMykeu_V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChebgGg6.js";import"./resolveDefaultProps-DJguzPnh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bb5mJC8T.js";import"./throttle-DthdhVSw.js";import"./index-CoE7QQC7.js";import"./index-CtYYpEHs.js";import"./isWellBehavedNumber-PtazZpkz.js";import"./d3-scale-DDBYxdkW.js";import"./index-CFolhqr8.js";import"./index-By2IEA6Z.js";import"./renderedTicksSlice-CR60wYV2.js";import"./index-DDJfRyTp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkExCOrE.js";import"./chartDataContext-QAaM8qFu.js";import"./CategoricalChart-9EjbSGzt.js";import"./CartesianAxis-DfCGaEVk.js";import"./Layer-CvQSqWng.js";import"./Text-BrAnNoDm.js";import"./DOMUtils--GcIornt.js";import"./useId-K9oYYmyx.js";import"./useBackwardsCompatibleTheme-BGpxY7da.js";import"./Label-BPWxH0ZN.js";import"./ZIndexLayer-CPJzWnIR.js";import"./types-7thkXqxr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BdWwIbai.js";import"./symbol-CytgmwlT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DnV8f39A.js";import"./uniqBy-CPev9fIs.js";import"./iteratee-Bo1K-GJU.js";import"./Curve-QJYhnBl8.js";import"./step-BINpEDE3.js";import"./AnimatedItems-BIr5SWwF.js";import"./useAnimationId-q2i8nWUT.js";import"./ActivePoints-CNZPQxVC.js";import"./Dot-BKha21me.js";import"./RegisterGraphicalItemId-Bv9eLHhO.js";import"./ErrorBarContext-DOiMkOOX.js";import"./GraphicalItemClipPath-Dod_0DGM.js";import"./SetGraphicalItem-N_7Gn5e1.js";import"./getRadiusAndStrokeWidthFromDot-BWutJIdQ.js";import"./ActiveShapeUtils-DRMRiarj.js";import"./useGraphicalItemIdentity-DNZCCG3V.js";import"./Cross-DBaaGir1.js";import"./Rectangle-DohuQVgo.js";import"./util-Dxo8gN5i.js";import"./Sector-B3gLyYgB.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
