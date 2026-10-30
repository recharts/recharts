import{r as p,R as t}from"./iframe-BmKqhsPF.js";import{L as n}from"./LineChart-WmFbwZbh.js";import{R as s}from"./zIndexSlice-CBQM2Gyg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BfijQkmI.js";import{X as d}from"./XAxis-B1Y97cNG.js";import{Y as y}from"./YAxis-Bib3dbnh.js";import{L as u}from"./Legend-Boujz8jE.js";import{L as h}from"./Line-DFSz05PX.js";import{T as g}from"./Tooltip-DwZsicEu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CdEiQwLq.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./get-cF5BDHN6.js";import"./axisSelectors-De-QIQw0.js";import"./throttle-DFLwZbH7.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-66RSqjvR.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";import"./CartesianAxis-Ch4CXp2q.js";import"./Layer-DFK8Q48P.js";import"./Text-CrMJTYNw.js";import"./DOMUtils-DtycWmz8.js";import"./ZIndexLayer-E2zC26PS.js";import"./Label-DJuyIpr6.js";import"./types-8TEdLcfT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C1ZJFDve.js";import"./symbol-Cwivg1At.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dg2vO0r-.js";import"./uniqBy-DIJRTBn5.js";import"./iteratee-CzzbuyX8.js";import"./isArguments-yB-y1yaH.js";import"./Curve--g8UutGF.js";import"./step-DxyJMaY2.js";import"./LabelList-Cw7YYHKY.js";import"./ActivePoints-CVBU67Gc.js";import"./Dot-BY7ekD9g.js";import"./activeStyles-B9WkYOlU.js";import"./useAnimationId-Cw8-NrKa.js";import"./dataEntryStyles-BYeCTEXf.js";import"./ErrorBarContext-DjFDtKDe.js";import"./SetGraphicalItem-DaR9Vkxk.js";import"./getRadiusAndStrokeWidthFromDot-DwT_-E51.js";import"./ActiveShapeUtils-CmFmkU6o.js";import"./useEffectiveDataKey-etJHmmHX.js";import"./Cross-NXQm5MWe.js";import"./Rectangle-Dph07-O4.js";import"./util-Dxo8gN5i.js";import"./Sector-CXVHJrRe.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
