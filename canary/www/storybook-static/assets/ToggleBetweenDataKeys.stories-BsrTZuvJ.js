import{r as p,R as t}from"./iframe-BS2EKBCb.js";import{L as n}from"./LineChart-C7UUkWTT.js";import{R as s}from"./zIndexSlice-DgCHBsPF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B1O4jZ2O.js";import{X as d}from"./XAxis-BjDgsza5.js";import{Y as y}from"./YAxis-BOuW76NE.js";import{L as u}from"./Legend-CrwIU00e.js";import{L as h}from"./Line-Cy9qkYsp.js";import{T as g}from"./Tooltip-DLem5YaG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMyz7hVE.js";import"./resolveDefaultProps-TcviW97c.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CyWNF9Af.js";import"./throttle-N5ne0m8p.js";import"./index-DqlRD72w.js";import"./index-CV_3LUuL.js";import"./isWellBehavedNumber-DC3UycXE.js";import"./d3-scale-Weld_qs_.js";import"./index-Bzi9FVcX.js";import"./index-CzKnnb1A.js";import"./renderedTicksSlice-F9VbCDyF.js";import"./index-D5fLjVxw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qCzL_6hu.js";import"./chartDataContext-CO5JDURO.js";import"./CategoricalChart-C5K9SC6Q.js";import"./CartesianAxis-CKj7lC_q.js";import"./Layer-GWt7eqqf.js";import"./Text-mzbpVVI1.js";import"./DOMUtils-WOBZE1NB.js";import"./useId-caAF7v61.js";import"./useBackwardsCompatibleTheme-qcvR2xn0.js";import"./Label-DXa6-y8E.js";import"./ZIndexLayer-B7lLwLGi.js";import"./types-BQYuG1d5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-VAmn91XB.js";import"./symbol-CEiHj79c.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4jPhR6y6.js";import"./uniqBy-Cq54zJ4p.js";import"./iteratee-BrmxT3n3.js";import"./Curve-B-5JJSds.js";import"./step-C_EYK6G6.js";import"./AnimatedItems-CyRMeM58.js";import"./useAnimationId-DT-PTug0.js";import"./ActivePoints-Cjbzc0M8.js";import"./Dot-DU7ZcKmK.js";import"./RegisterGraphicalItemId-B1R9LLxS.js";import"./ErrorBarContext-Cw8TKYFj.js";import"./GraphicalItemClipPath-1wc1zrjW.js";import"./SetGraphicalItem-0zivWSPx.js";import"./getRadiusAndStrokeWidthFromDot-B5PCEdLb.js";import"./ActiveShapeUtils-ZcrlVc5g.js";import"./useGraphicalItemIdentity-D12-TlkG.js";import"./Cross-Bo_a7FVO.js";import"./Rectangle-DEzYnzUI.js";import"./util-Dxo8gN5i.js";import"./Sector-D8P6kuRr.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
