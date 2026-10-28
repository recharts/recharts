import{r as p,R as t}from"./iframe-D0yOAL3n.js";import{L as n}from"./LineChart-C6NNLH-m.js";import{R as s}from"./zIndexSlice-Dn2Ys6gV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DQSXKhES.js";import{X as d}from"./XAxis-ntZPF60e.js";import{Y as y}from"./YAxis-ClNwS6nX.js";import{L as u}from"./Legend-DPhxLnRv.js";import{L as h}from"./Line-CO6xWWXS.js";import{T as g}from"./Tooltip-DEMLV3mW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwTnzypz.js";import"./resolveDefaultProps-Cif0RW7j.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DATXyQCy.js";import"./throttle-BrS_cZCp.js";import"./index-D1v08_vM.js";import"./index-ELyMDiEN.js";import"./polarAxisSelectors-aGfpHLq1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-n2sBsRY0.js";import"./index-CwmpmH_i.js";import"./index-CqRNnRSm.js";import"./renderedTicksSlice-Cx7A9Rjk.js";import"./index-BQd9CGB1.js";import"./CartesianChart-DLG1qiqu.js";import"./ZIndexPortal-DWwaC6CZ.js";import"./CategoricalChart-BqkqH0t5.js";import"./CartesianAxis-dbcozJzz.js";import"./Layer-CY7a4PGZ.js";import"./Text-z-sERxAx.js";import"./pageBackground-Cu52DhUW.js";import"./ZIndexLayer-DLelF1L8.js";import"./Label-BzBQuB2T.js";import"./dataEntryStyles-BNyFarFk.js";import"./types-IRHz2iGt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BGu4wd_L.js";import"./symbol-C_vPW6X7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CIhlqtry.js";import"./uniqBy-UFr_nm2i.js";import"./iteratee-DStnvH7g.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DzBXGra2.js";import"./step-C1lWuIkW.js";import"./LabelList-CZmttjyK.js";import"./ActivePoints-BljR9_g2.js";import"./Dot-lux40cEN.js";import"./activeStyles-BHH3u2ze.js";import"./useAnimationId-CKYg8A0e.js";import"./RegisterGraphicalItemId-DVCLPf9f.js";import"./ErrorBarContext-Dnk3UGdS.js";import"./SetGraphicalItem-Co3HUPOs.js";import"./getRadiusAndStrokeWidthFromDot-DLGQUjjw.js";import"./ActiveShapeUtils-CLWTEHLV.js";import"./useEffectiveDataKey-DqoTIDte.js";import"./Cross-DOgmqpkJ.js";import"./Rectangle-hiMsXewW.js";import"./util-Dxo8gN5i.js";import"./Sector-CYfHmUnD.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
