import{r as p,R as t}from"./iframe-CD455wJd.js";import{L as n}from"./LineChart-BeW1B_vB.js";import{R as s}from"./zIndexSlice-DzVk2zsV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-o7woajtF.js";import{X as d}from"./XAxis-Dp--brpT.js";import{Y as y}from"./YAxis-B4p_cdR_.js";import{L as u}from"./Legend-BZ3pgpi9.js";import{L as h}from"./Line-Dm6XtgoP.js";import{T as g}from"./Tooltip-CsiceVfe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXQmXvit.js";import"./resolveDefaultProps-iSNXXa8L.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bqat7Cub.js";import"./throttle-PUY-A8nf.js";import"./index-aYpzNMmu.js";import"./index-BdOuXsTR.js";import"./isWellBehavedNumber-CknUNxNl.js";import"./d3-scale-0hylKXBC.js";import"./index-DR22UKYk.js";import"./index-jPsfR26I.js";import"./renderedTicksSlice-BcRTcSpN.js";import"./index-BlJL6ULE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bhj_o7vp.js";import"./chartDataContext-Bp5bHcMs.js";import"./CategoricalChart-CKQwA7lM.js";import"./CartesianAxis-DGThgmWi.js";import"./Layer-CsmsD0pa.js";import"./Text-oF7SpzZr.js";import"./DOMUtils-Dy-pvXG4.js";import"./useId--uhm0kQP.js";import"./useBackwardsCompatibleTheme-DwRps50g.js";import"./Label-Da_iI52E.js";import"./ZIndexLayer-B_PuTe7d.js";import"./types-BNqzQZQk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Z30PLWL5.js";import"./symbol-DFRRM7QR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DVhEB4wk.js";import"./uniqBy-BPAi1F97.js";import"./iteratee-Di9C9eZD.js";import"./Curve-CXSrw9GZ.js";import"./step-C1fS-Ced.js";import"./AnimatedItems-CUITqmXn.js";import"./useAnimationId-ChM5IozY.js";import"./ActivePoints-CZUg_rAM.js";import"./Dot-DTxxR4lp.js";import"./RegisterGraphicalItemId-C74Ike1Q.js";import"./ErrorBarContext-DGdrGFny.js";import"./GraphicalItemClipPath-C5TTIcs9.js";import"./SetGraphicalItem-BsTJ2qIT.js";import"./getRadiusAndStrokeWidthFromDot-ClGGafK9.js";import"./ActiveShapeUtils-CUAj6KO9.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BBAOzX3V.js";import"./Rectangle-B0yuNLwa.js";import"./util-Dxo8gN5i.js";import"./Sector-C_SVtocl.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
