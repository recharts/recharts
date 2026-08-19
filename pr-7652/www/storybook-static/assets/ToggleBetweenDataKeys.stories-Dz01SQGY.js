import{r as n,R as t}from"./iframe-CgwPoQay.js";import{L as p}from"./LineChart-D2mHRn83.js";import{R as s}from"./zIndexSlice-Cwvky78x.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CL2Ap030.js";import{X as d}from"./XAxis-DOtySNzv.js";import{Y as y}from"./YAxis-D2N4RV8b.js";import{L as u}from"./Legend-DQPvvXca.js";import{L as h}from"./Line-CMHOXWP-.js";import{T as g}from"./Tooltip-E-dUB5_J.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DoOmmi72.js";import"./index-BgE4sbhX.js";import"./index-CvpagMBh.js";import"./index-CNkBm-lM.js";import"./index-CM8NzWzV.js";import"./throttle-sMY3RlhH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D5ccOzPk.js";import"./resolveDefaultProps-CD_cqqva.js";import"./isWellBehavedNumber-CfD7xUgW.js";import"./d3-scale-DtIIfQy7.js";import"./renderedTicksSlice-BmzsuTjh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CcUm8bov.js";import"./chartDataContext-3T-WNdut.js";import"./CategoricalChart-O1QH-Owv.js";import"./CartesianAxis-DLTPH4hp.js";import"./Layer-DjRO5iA4.js";import"./Text-DLEzBygV.js";import"./DOMUtils-DewFbXuK.js";import"./useBackwardsCompatibleTheme-CY8sdwmg.js";import"./Label-CwBi1oPN.js";import"./ZIndexLayer-BiLuwpYl.js";import"./types-D2pCS11Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cde2M23J.js";import"./symbol-CquBrsNv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BVRfxINV.js";import"./uniqBy-Du-asTiq.js";import"./iteratee-BR7CkU_G.js";import"./Curve-a8euvDpU.js";import"./step-DTTmkP9p.js";import"./AnimatedItems-9ERF5uBB.js";import"./useAnimationId-C35lEnnz.js";import"./ActivePoints-CCBXRjBa.js";import"./Dot-DB8vVey7.js";import"./RegisterGraphicalItemId-AM6jbCCW.js";import"./ErrorBarContext-6qbGOpK0.js";import"./GraphicalItemClipPath-M1v6x7Pp.js";import"./SetGraphicalItem-Cz63GpQf.js";import"./getRadiusAndStrokeWidthFromDot-2t6d-1jI.js";import"./ActiveShapeUtils-CYWv9Vsk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DkBXGZuy.js";import"./Rectangle-DIlOeeWH.js";import"./util-Dxo8gN5i.js";import"./Sector-CWQKTn9v.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
