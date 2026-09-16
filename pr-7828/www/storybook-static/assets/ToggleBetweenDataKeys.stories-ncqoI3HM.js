import{r as p,R as t}from"./iframe-yjkt2IH9.js";import{L as n}from"./LineChart-5Glz3pWz.js";import{R as s}from"./zIndexSlice-DBLHpMzC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CHFlKc_A.js";import{X as d}from"./XAxis-BmTXySuf.js";import{Y as y}from"./YAxis-DCAA5tHI.js";import{L as u}from"./Legend-Qn53YknQ.js";import{L as h}from"./Line-C6R7zilS.js";import{T as g}from"./Tooltip-CJ03Z8zE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXGMrlZO.js";import"./resolveDefaultProps-C1hVLYYK.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Jt8yF-QI.js";import"./throttle-DNcBTn_q.js";import"./index-BRngxrU7.js";import"./index-CV8Eusxy.js";import"./isWellBehavedNumber-DxZkGz0e.js";import"./d3-scale-nv5WZ-MU.js";import"./index-PsDnrYhU.js";import"./index-BvMKJHsM.js";import"./renderedTicksSlice-CrS6eWPX.js";import"./index-BQpCoukA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1g09AHb.js";import"./chartDataContext-B80RtjhA.js";import"./CategoricalChart-CKH0Hy4l.js";import"./CartesianAxis-B6MEtpsI.js";import"./Layer-DkCnbteg.js";import"./Text-DGqsL-zN.js";import"./DOMUtils-Cld05Rut.js";import"./useId-DlJSbOEb.js";import"./useBackwardsCompatibleTheme-D9TCWuL1.js";import"./Label-DNJm325E.js";import"./ZIndexLayer-akraxgUp.js";import"./types-cDH95ogz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-LfU6ziL5.js";import"./symbol-C-_WC7vv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BuUcmoJ7.js";import"./uniqBy-DzHnGdpm.js";import"./iteratee-Bytpq0NN.js";import"./Curve-CkZxc2JO.js";import"./step-DDqhC4ci.js";import"./AnimatedItems-DOXtHAOp.js";import"./useAnimationId-CMvFcnUz.js";import"./ActivePoints-D4dpp1py.js";import"./Dot-DjkzHWoo.js";import"./RegisterGraphicalItemId-Dy2Y8QPA.js";import"./ErrorBarContext-CCR7Bc51.js";import"./GraphicalItemClipPath-CrsQrVv0.js";import"./SetGraphicalItem-C0bV6rYE.js";import"./getRadiusAndStrokeWidthFromDot-CGTWwDkJ.js";import"./ActiveShapeUtils-CUarEX30.js";import"./useGraphicalItemIdentity-C3_xntvz.js";import"./Cross-BQjK_Sjj.js";import"./Rectangle-w3oMEOnu.js";import"./util-Dxo8gN5i.js";import"./Sector-fswU8txp.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
