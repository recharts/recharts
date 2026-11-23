import{r as p,R as t}from"./iframe-B3TE-nU3.js";import{L as n}from"./LineChart-G7XB-YlL.js";import{R as s}from"./zIndexSlice-CTTS6cFj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-tLBHG-0r.js";import{X as d}from"./XAxis-h5fh4YlR.js";import{Y as y}from"./YAxis-DsQMJ5Zr.js";import{L as u}from"./Legend-Caqq_aup.js";import{L as h}from"./Line-C9ocvs2A.js";import{T as g}from"./Tooltip-DvDkrF7O.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cj-eh_A9.js";import"./resolveDefaultProps-CZyWFquG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZCqrQSM.js";import"./throttle-CbHIruzi.js";import"./index-CwYGoluT.js";import"./index-BdYXEAEl.js";import"./polarAxisSelectors-Du86AxQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXmLRtz9.js";import"./index-DGF3N8N0.js";import"./index-QNAAg88T.js";import"./renderedTicksSlice-CnKrAq7k.js";import"./index-j8tkVAM0.js";import"./fillDefinitions-ExsKJJdV.js";import"./CartesianChart-BlnVLBxP.js";import"./chartDataContext-CdnFs56-.js";import"./CategoricalChart-ZasnE1da.js";import"./CartesianAxis-98BHMJXj.js";import"./Layer-ChziGKVJ.js";import"./Text-Dg5b12Q4.js";import"./ZIndexLayer-CcszVre3.js";import"./Label-CBnDrrJb.js";import"./types-DiSBkFzd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BSwXR0zr.js";import"./symbol-DheZZ-vM.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C_UZj4GX.js";import"./uniqBy-RWn0hC0g.js";import"./iteratee-BJFUBVEZ.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-sWaZWzqd.js";import"./Curve-DakK0sdO.js";import"./step-DFLs3YCD.js";import"./dataEntryStyles-DR0RxE_5.js";import"./ActivePoints-Ds08HXXd.js";import"./Dot-AAIkJYcq.js";import"./activeStyles-P5uz91Wl.js";import"./useAnimationId-CxiMpo3b.js";import"./ErrorBarContext-CAoDHE0Y.js";import"./SetGraphicalItem-H8Hr2AbP.js";import"./ActiveShapeUtils-Bxv-7xaq.js";import"./useEffectiveDataKey-DPfqIOjF.js";import"./Cross-LIPHrR4i.js";import"./Rectangle-JiOIyKLl.js";import"./util-Dxo8gN5i.js";import"./Sector-BQncNsel.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
