import{r as p,R as t}from"./iframe-C0OVyiWZ.js";import{L as n}from"./LineChart-B0CVS3md.js";import{R as s}from"./zIndexSlice-8GqqcFEr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bte0Km9O.js";import{X as d}from"./XAxis-CTdfh09z.js";import{Y as y}from"./YAxis-BzGOPf-n.js";import{L as u}from"./Legend-CrVVwmbt.js";import{L as h}from"./Line-dhCJc3l8.js";import{T as g}from"./Tooltip-XY3lqBp8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTQttuVZ.js";import"./resolveDefaultProps-CzOTGDv8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D80ZAqVH.js";import"./throttle-D68qy_th.js";import"./index-Docwyysm.js";import"./index-ZerhtVY0.js";import"./polarAxisSelectors-DTm6eoEL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-P-FUFzKf.js";import"./index-B1LAm-dY.js";import"./index-BpCkqUEo.js";import"./renderedTicksSlice-CUInauOX.js";import"./index-C5porGIG.js";import"./fillDefinitions-Bbw8sRrt.js";import"./CartesianChart-DeRNlyJ8.js";import"./ZIndexPortal-wZgZSnoL.js";import"./CategoricalChart-BEVcLfMu.js";import"./CartesianAxis-B5NtJHos.js";import"./Layer-OalOUm3Y.js";import"./Text-CW0hOv-I.js";import"./DOMUtils-C9FX__jF.js";import"./ZIndexLayer-lUVq37sV.js";import"./Label-YEc5vJ1L.js";import"./types-C-qeruIO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BDZG6tZB.js";import"./symbol-BmFAGqI-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BE4RQkQy.js";import"./uniqBy-Cmw3QRKv.js";import"./iteratee-CPh3NlRT.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C3dcNtoz.js";import"./step-CZORxbW4.js";import"./LabelList-D0ai-hpm.js";import"./ActivePoints-BUz8lbCF.js";import"./Dot-b3sd19D9.js";import"./activeStyles-D_QsSvZV.js";import"./useAnimationId-CezZ2glr.js";import"./dataEntryStyles-Cd6CZepp.js";import"./ErrorBarContext-Crxfy6Lq.js";import"./SetGraphicalItem-CFBhhEbP.js";import"./getRadiusAndStrokeWidthFromDot-DztWYVRU.js";import"./ActiveShapeUtils-DL-meZDZ.js";import"./useEffectiveDataKey-AC38WMBQ.js";import"./Cross-BW8A5PNh.js";import"./Rectangle-Bj8y9oTS.js";import"./util-Dxo8gN5i.js";import"./Sector-Dm6iledg.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
