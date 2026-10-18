import{r as p,R as t}from"./iframe-wnwgjoCj.js";import{L as n}from"./LineChart-Ddf_gKW2.js";import{R as s}from"./zIndexSlice-BfQZJe7w.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CFsinw1N.js";import{X as d}from"./XAxis-OfYaBnId.js";import{Y as y}from"./YAxis-DhrqAxya.js";import{L as u}from"./Legend-B0dXj_IF.js";import{L as h}from"./Line-C_qaKzYo.js";import{T as g}from"./Tooltip-Dk8i1M-5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DrgosUQO.js";import"./resolveDefaultProps-CdGDq9Vj.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dv0Cy_aQ.js";import"./throttle-Bu0PLbpB.js";import"./index--oPyKjHy.js";import"./index-B1dVEDKi.js";import"./isWellBehavedNumber-DvYM1ftp.js";import"./d3-scale-n5yhpKoa.js";import"./index-C6zbwdmq.js";import"./index-2cwaP_WN.js";import"./renderedTicksSlice-Cn46HOnO.js";import"./index-Cq1ZqvVj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9oQUjO4z.js";import"./chartDataContext-CoZTTCWp.js";import"./CategoricalChart-CFXgb39d.js";import"./CartesianAxis-CUGdPJVD.js";import"./Layer-BgNSosTV.js";import"./Text-ObnDDpE8.js";import"./pageBackground-BTX1FgdM.js";import"./useId-Bld63G6d.js";import"./useBackwardsCompatibleTheme-CSSDROrC.js";import"./Label-BPPVHUQ9.js";import"./ZIndexLayer-BcVUzqGJ.js";import"./types-D9qqzEWR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CtP0pqPx.js";import"./symbol-DPKZCZYD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yolstnoz.js";import"./uniqBy-CW7TvLNO.js";import"./iteratee-CpII3xDe.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Cxo9gi5h.js";import"./step-DmpFhtYe.js";import"./activeStyles-eWYsa4HP.js";import"./useAnimationId-B2QPH2im.js";import"./dataEntryStyles-_WoJg0hd.js";import"./ActivePoints-uC3uusPe.js";import"./Dot-BkQ3hL0p.js";import"./ErrorBarContext-cvkea_Ls.js";import"./GraphicalItemClipPath-B95PfJCu.js";import"./SetGraphicalItem-CAbcIlZe.js";import"./getRadiusAndStrokeWidthFromDot-Bze8938_.js";import"./ActiveShapeUtils-YpG0tVZY.js";import"./useEffectiveDataKey-D9X2vego.js";import"./Cross-Cim55ibn.js";import"./Rectangle-P3uT3dWy.js";import"./util-Dxo8gN5i.js";import"./Sector-N_gwCLB7.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
