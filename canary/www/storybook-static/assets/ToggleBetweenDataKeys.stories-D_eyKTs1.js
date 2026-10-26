import{r as p,R as t}from"./iframe-BfpZEj1J.js";import{L as n}from"./LineChart-CYorUPKN.js";import{R as s}from"./zIndexSlice-DN9OEqSU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bgzyrck0.js";import{X as d}from"./XAxis-CaBw27aw.js";import{Y as y}from"./YAxis-BjTIc8Tf.js";import{L as u}from"./Legend-BUEXHc_c.js";import{L as h}from"./Line-XMFg_Gfd.js";import{T as g}from"./Tooltip-8pU18wvs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DgjurVnr.js";import"./resolveDefaultProps-RgMSUlUO.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DdEmqG6y.js";import"./throttle-of37Yc3d.js";import"./index-lWFIbTSl.js";import"./index-BjD6SDXa.js";import"./polarAxisSelectors-D5cajvkJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DAHzu_9m.js";import"./index-BZ99J-Wl.js";import"./index-Wmom0di-.js";import"./renderedTicksSlice-DAkeOnVU.js";import"./index-CWp6QAhS.js";import"./CartesianChart-BMikS9ic.js";import"./chartDataContext-CDRBSiAQ.js";import"./CategoricalChart-AcKzUHIb.js";import"./CartesianAxis-ChtcS9gQ.js";import"./Layer-CLoP9xkX.js";import"./Text-C5CT5OBg.js";import"./pageBackground-DtTiB4cX.js";import"./useId-CWVkYNpQ.js";import"./ZIndexLayer-BnqS0DyP.js";import"./Label-Cr-kSyez.js";import"./dataEntryStyles-B31S2PZ0.js";import"./types-Dmnhw6yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DlN3yTjK.js";import"./symbol-WMObR4nv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ESpol_qM.js";import"./uniqBy-C05yYfI4.js";import"./iteratee-UOUNNVON.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DcgjXnaH.js";import"./step-BIMKm40t.js";import"./activeStyles--hoQ05pe.js";import"./useAnimationId-CO5y2Yl_.js";import"./ActivePoints-C1WdAM52.js";import"./Dot-BgvZVx9M.js";import"./RegisterGraphicalItemId-B270wFxD.js";import"./ErrorBarContext-CGuCRP-n.js";import"./SetGraphicalItem-BEEPPsSN.js";import"./getRadiusAndStrokeWidthFromDot-Cr9Vi9Z2.js";import"./ActiveShapeUtils-CX9J7Siy.js";import"./useEffectiveDataKey-CijXZAWm.js";import"./Cross-DVk9nb-O.js";import"./Rectangle-DBeYy_hq.js";import"./util-Dxo8gN5i.js";import"./Sector-CSZSdBbv.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
