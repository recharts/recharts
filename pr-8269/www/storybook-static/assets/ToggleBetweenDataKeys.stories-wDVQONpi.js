import{r as p,R as t}from"./iframe-D3OoUODQ.js";import{L as n}from"./LineChart-Blx2C6Rw.js";import{R as s}from"./zIndexSlice-COWEW-Xi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cy38ftq5.js";import{X as d}from"./XAxis-DxYJ1EU_.js";import{Y as y}from"./YAxis-CK0GC31X.js";import{L as u}from"./Legend-BUCTIL7e.js";import{L as h}from"./Line-DTJc0zlp.js";import{T as g}from"./Tooltip-DbEsMo9d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DuOKGUDD.js";import"./resolveDefaultProps-D7e-YcsR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DItDxN6k.js";import"./throttle-xK3Qigov.js";import"./index-BvJXc9H1.js";import"./index-DNUqbDgJ.js";import"./polarAxisSelectors-BlC5408P.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bhy6LUlh.js";import"./index-CwGsCBa_.js";import"./index-E-9zXcGM.js";import"./renderedTicksSlice-Bv3FRj9F.js";import"./index-C8PiA1g3.js";import"./fillDefinitions-C2yGMN51.js";import"./CartesianChart-C7rzbaUy.js";import"./chartDataContext-BbEB-BoJ.js";import"./CategoricalChart-CKoarJJf.js";import"./CartesianAxis-CVUrBvYb.js";import"./Layer-CUNP0nq5.js";import"./Text-B7Tip8P2.js";import"./ZIndexLayer-pJsGLsvY.js";import"./Label-DLZY1r_b.js";import"./types-CZJIyhtF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BcqMzhTU.js";import"./symbol-CCC5v9lz.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C-GaNZer.js";import"./uniqBy-UVF7xo-s.js";import"./iteratee-VlIYTG9d.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-C3VB5n7j.js";import"./Curve-eYin-GPV.js";import"./step-FwrJA5dq.js";import"./dataEntryStyles-k3Cv11yP.js";import"./ActivePoints-BDuWcJUa.js";import"./Dot-DopO49Vm.js";import"./activeStyles-DXsSD8Lh.js";import"./useAnimationId-z8xHYNfC.js";import"./ErrorBarContext-Cw_znsk2.js";import"./SetGraphicalItem-BlH5pIAO.js";import"./ActiveShapeUtils--1e6XE9v.js";import"./useEffectiveDataKey-BHKjwOuj.js";import"./Cross-C2kdLByN.js";import"./Rectangle-Sm9oSXXR.js";import"./util-Dxo8gN5i.js";import"./Sector-CRAkgMpQ.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
