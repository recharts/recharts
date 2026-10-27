import{r as p,R as t}from"./iframe-CEQushtN.js";import{L as n}from"./LineChart-DTY7ZNGS.js";import{R as s}from"./zIndexSlice-DjNM_HLz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DdX2dsam.js";import{X as d}from"./XAxis-Dox0Mf_6.js";import{Y as y}from"./YAxis-CO7P54oT.js";import{L as u}from"./Legend-BnmhZmMZ.js";import{L as h}from"./Line-RGSptLoh.js";import{T as g}from"./Tooltip-DODsXuho.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXBxSHCJ.js";import"./resolveDefaultProps-CyZKvMPR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DQduFkeJ.js";import"./throttle-D-s41lqW.js";import"./index-BtHOWWHr.js";import"./index-Dij9Lyzg.js";import"./polarAxisSelectors-S5DqA3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BWM46Ydz.js";import"./index-BdO45VT9.js";import"./index-CoxdILWo.js";import"./renderedTicksSlice-BiOzFX7m.js";import"./index-BB4PCvH7.js";import"./CartesianChart-BcxOd9Ut.js";import"./ZIndexPortal-pBjad6tL.js";import"./CategoricalChart-gEK0X1ot.js";import"./CartesianAxis-Df5o-IJd.js";import"./Layer-C3v_EKIk.js";import"./Text-CmoBCOlM.js";import"./pageBackground-QlEa7JV2.js";import"./ZIndexLayer-DtsqWk3z.js";import"./Label-CFJJzt7V.js";import"./dataEntryStyles-BlFVEHbT.js";import"./types-CPVpRlsk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C3N2Nfx0.js";import"./symbol-DSj-rHxT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWKbuRf4.js";import"./uniqBy-DDpW34LG.js";import"./iteratee-DFqopvcF.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C2Lci0Z6.js";import"./step-BbPJEBHq.js";import"./LabelList-DwlBaftj.js";import"./ActivePoints-DJ2RJcRF.js";import"./Dot-CuIjyWbv.js";import"./activeStyles-6x5lKRrB.js";import"./useAnimationId-CzbeFnj4.js";import"./RegisterGraphicalItemId-CVBDPhvw.js";import"./ErrorBarContext-CpznhA_J.js";import"./SetGraphicalItem-D60Grc7B.js";import"./getRadiusAndStrokeWidthFromDot-CzdVPXFS.js";import"./ActiveShapeUtils-D8RrSuBC.js";import"./useEffectiveDataKey-BKKYPJCk.js";import"./Cross-DRP4fofn.js";import"./Rectangle-CdiELTU5.js";import"./util-Dxo8gN5i.js";import"./Sector-BXpIIm1p.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
