import{r as p,R as t}from"./iframe-DmOC-Kec.js";import{L as n}from"./LineChart-DXDk6Ct8.js";import{R as s}from"./zIndexSlice-Dnmn7sAe.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Wch0FJ_N.js";import{X as d}from"./XAxis-ByYBkyBH.js";import{Y as y}from"./YAxis-CcRfM4MH.js";import{L as u}from"./Legend-BuMlXU6a.js";import{L as h}from"./Line-DKDIyTAQ.js";import{T as g}from"./Tooltip-Duroeiyf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BAE5OfjG.js";import"./resolveDefaultProps-4b8FSqHP.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BhU9IBL9.js";import"./throttle-26j8lv8v.js";import"./index-B8dvCc79.js";import"./index-B0Er-kke.js";import"./isWellBehavedNumber-CieT4pBa.js";import"./d3-scale-BzcnxCkj.js";import"./index-DauADrzh.js";import"./index-FaI1Rch4.js";import"./renderedTicksSlice-BbRk6kVT.js";import"./index-D-7FIJbH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-AsMQKsVq.js";import"./chartDataContext-CyP3b76p.js";import"./CategoricalChart-D6inGbGf.js";import"./CartesianAxis-D2u0I9ER.js";import"./Layer-DqeA_nA2.js";import"./Text-CTMopfR1.js";import"./pageBackground--_ixwiIK.js";import"./useId-BuaxFojz.js";import"./useBackwardsCompatibleTheme-BIerM7O_.js";import"./Label-Dya5Ed-c.js";import"./ZIndexLayer-CPUam-Va.js";import"./dataEntryStyles-CeCSWdpc.js";import"./types-Bi5NSMkf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DkIZTGNL.js";import"./symbol-G7578D_G.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZDsHkVD5.js";import"./uniqBy-BV3xScZI.js";import"./iteratee-M-5VHa93.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dsy708jZ.js";import"./step-BqN3jYrj.js";import"./activeStyles-CHqa9trn.js";import"./useAnimationId-BrR1kfhy.js";import"./ActivePoints-BeW2RHR2.js";import"./Dot-Ck4Vihzk.js";import"./RegisterGraphicalItemId-CjMER2_v.js";import"./ErrorBarContext-CznJE672.js";import"./GraphicalItemClipPath-a-_vkjmo.js";import"./SetGraphicalItem-DTnHHD7N.js";import"./getRadiusAndStrokeWidthFromDot-CG4C4UUI.js";import"./ActiveShapeUtils-tFB41mpm.js";import"./useEffectiveDataKey-DpBICXZ6.js";import"./Cross-DDoE-SGL.js";import"./Rectangle-B2agr858.js";import"./util-Dxo8gN5i.js";import"./Sector-CgcdPgVW.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,Rt as default};
