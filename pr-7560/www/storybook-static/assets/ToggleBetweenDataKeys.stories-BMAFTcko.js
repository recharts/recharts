import{r as n,R as t}from"./iframe-ClcrwGuW.js";import{L as p}from"./LineChart-BymBWjuL.js";import{R as s}from"./zIndexSlice-BIGnlmU8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-dXDFDE-n.js";import{X as d}from"./XAxis-DBark8Vy.js";import{Y as y}from"./YAxis-XJItrttK.js";import{L as u}from"./Legend-BS7RA_N3.js";import{L as h}from"./Line-A183MaDD.js";import{T as g}from"./Tooltip-CHjDpm_C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./throttle-CCS8xgZt.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./axisSelectors-BOLsAE8g.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./d3-scale-CMtXPpnj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./CartesianAxis-ByEdCDio.js";import"./Layer-3ZpdhJcS.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./Label-Dq1bNHIu.js";import"./ZIndexLayer-ktmCEwYK.js";import"./types-BTRTN-qV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D815RcxC.js";import"./symbol-9zs_gWxT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0hht_3Y4.js";import"./uniqBy-BWkjWHs1.js";import"./iteratee-D67nRlPy.js";import"./Curve-CrblFnpJ.js";import"./step-Kzlz86Dk.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./useAnimationId-Dr2V8ESg.js";import"./ActivePoints-DpbrBFbr.js";import"./Dot-BJH-Cd7h.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getRadiusAndStrokeWidthFromDot-DBwea6ik.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./Cross-2z9sFD4c.js";import"./Rectangle-BnksOpBX.js";import"./util-Dxo8gN5i.js";import"./Sector-DEtGgNIy.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
