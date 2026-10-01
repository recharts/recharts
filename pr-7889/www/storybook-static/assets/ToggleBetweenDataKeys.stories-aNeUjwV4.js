import{r as p,R as t}from"./iframe-B07BHG7b.js";import{L as n}from"./LineChart-IoygN8Cu.js";import{R as s}from"./zIndexSlice-DMtdtU0H.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DZQPKEY_.js";import{X as d}from"./XAxis-CkRNVIdA.js";import{Y as y}from"./YAxis-9CqKZvPs.js";import{L as u}from"./Legend-Cg8WtWtD.js";import{L as h}from"./Line-Coltmmom.js";import{T as g}from"./Tooltip-CAXW-LF_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CbwTx7DF.js";import"./resolveDefaultProps-BRBRD9Wj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Nr5xjaNb.js";import"./throttle-DTIoaHkO.js";import"./index-C_4gdDDP.js";import"./index-OowKJhbY.js";import"./isWellBehavedNumber-BwS8-SkC.js";import"./d3-scale-C1HygQvU.js";import"./index-CnnKafP5.js";import"./index-Ch334nIE.js";import"./renderedTicksSlice-D6Y0A1v8.js";import"./index-Cay4G1Oz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjafEMNG.js";import"./chartDataContext-L5OvEFVH.js";import"./CategoricalChart-Dsa2Qc1B.js";import"./CartesianAxis-Bwpf-6f1.js";import"./Layer-DGsDthuj.js";import"./Text-CNYJT0YU.js";import"./DOMUtils-BYXyET0J.js";import"./useId-DpSDwQO_.js";import"./useBackwardsCompatibleTheme-BSstlxbW.js";import"./Label-DT0SDRud.js";import"./ZIndexLayer-BWiNey_Z.js";import"./types-BfpKaUoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-dpsYkwK3.js";import"./symbol-BrftILDM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DyYSc7X1.js";import"./uniqBy-DWkLQ8w4.js";import"./iteratee-BtatVMfB.js";import"./Curve-Co_OugcN.js";import"./step-EbjsK9_B.js";import"./AnimatedItems-BPQiX0OY.js";import"./useAnimationId-D8wc_hUQ.js";import"./ActivePoints-qVEGkbRi.js";import"./Dot-D5b4Rj0p.js";import"./RegisterGraphicalItemId-r8grTaJr.js";import"./ErrorBarContext-CkRF2jvy.js";import"./GraphicalItemClipPath-CDDJymit.js";import"./SetGraphicalItem-CN2Fj3zB.js";import"./getRadiusAndStrokeWidthFromDot-CWtkFiVw.js";import"./ActiveShapeUtils-DunyI-30.js";import"./useGraphicalItemIdentity-BewjVzSI.js";import"./Cross-kSYU8t6D.js";import"./Rectangle-Cjft6Teu.js";import"./util-Dxo8gN5i.js";import"./Sector-CRPMF3S_.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
