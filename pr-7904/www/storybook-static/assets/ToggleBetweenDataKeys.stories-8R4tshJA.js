import{r as p,R as t}from"./iframe-F-DUQmzx.js";import{L as n}from"./LineChart-CBVu6pzJ.js";import{R as s}from"./zIndexSlice-B0XgO37h.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CzhRd1sg.js";import{X as d}from"./XAxis-CueAAdhT.js";import{Y as y}from"./YAxis-DMt8A7ih.js";import{L as u}from"./Legend-YXZFBq_w.js";import{L as h}from"./Line-D8FTO08W.js";import{T as g}from"./Tooltip-DGfV7n8l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWiWdscD.js";import"./resolveDefaultProps-54NLwGe7.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DjOC7WMp.js";import"./throttle-DpMrsvGt.js";import"./index-CK09KYl6.js";import"./index-1Q76C7eb.js";import"./isWellBehavedNumber-DyMPBI8-.js";import"./d3-scale-DSOPMY6A.js";import"./index-CT1gIdoP.js";import"./index-EzdhIVAG.js";import"./renderedTicksSlice-COhWqkvU.js";import"./index-DM4X_zuN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DpAEY0eR.js";import"./chartDataContext-CwixCkf7.js";import"./CategoricalChart-DjizJXcn.js";import"./CartesianAxis-DNFe7OYN.js";import"./Layer-BrEHje-t.js";import"./Text-CORYS8dP.js";import"./DOMUtils-DPU74_Ri.js";import"./useId-CqYFbuGw.js";import"./useBackwardsCompatibleTheme-BfIpGN6N.js";import"./Label-B3Zz6TZ9.js";import"./ZIndexLayer-G7VYzfve.js";import"./types-DvcDlHh9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-K1su9SmC.js";import"./symbol-CPJFdzCM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0MzWZVh.js";import"./uniqBy-BJq_zyLF.js";import"./iteratee-DqoyaVpm.js";import"./Curve-Bx9XDM_v.js";import"./step-B5u9AGFi.js";import"./AnimatedItems-TRoMQ37Y.js";import"./useAnimationId-BjShbhcH.js";import"./ActivePoints-W2_hwO6R.js";import"./Dot-DGu6gs3Q.js";import"./RegisterGraphicalItemId-osvmWAHd.js";import"./ErrorBarContext-WZQ5BE4f.js";import"./GraphicalItemClipPath-Ts1JrvmG.js";import"./SetGraphicalItem-Dh88RhAB.js";import"./getRadiusAndStrokeWidthFromDot-C7HQlZ5t.js";import"./ActiveShapeUtils-BBGLeya9.js";import"./useGraphicalItemIdentity-Co6jLI_S.js";import"./Cross-Ci5etOoA.js";import"./Rectangle-Dr6hKtyQ.js";import"./util-Dxo8gN5i.js";import"./Sector-CHPPgs7k.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
