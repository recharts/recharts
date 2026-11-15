import{r as p,R as t}from"./iframe-Bs2Fwquo.js";import{L as n}from"./LineChart-CCp5ZOnz.js";import{R as s}from"./zIndexSlice-zNxU83Rq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DKsw99UQ.js";import{X as d}from"./XAxis-Da7a1LVz.js";import{Y as y}from"./YAxis-BIq5zgoj.js";import{L as u}from"./Legend-BdAsxtxW.js";import{L as h}from"./Line-BDg9dyPy.js";import{T as g}from"./Tooltip-CQk23inZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-H7J0pkbh.js";import"./resolveDefaultProps-D3UZ2IUt.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DqQ1JIAI.js";import"./throttle-CeO6b2ZD.js";import"./index-BKCm3YGD.js";import"./index-uk5XFsYy.js";import"./polarAxisSelectors-C5Qopf47.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjk-fTH.js";import"./index-KgWNcN6T.js";import"./index-Czszie77.js";import"./renderedTicksSlice-BVtbpogk.js";import"./index-C74zadtv.js";import"./fillDefinitions-DLkwdqwS.js";import"./CartesianChart-C_O9Wt7i.js";import"./chartDataContext-0HCXDBF8.js";import"./CategoricalChart-DBu6n-Yr.js";import"./CartesianAxis-DRyjDMvy.js";import"./Layer-DSICE4z4.js";import"./Text-ggKHnocX.js";import"./ZIndexLayer-C_DcULPk.js";import"./Label-DziYhFsK.js";import"./types-BK-Q7FAz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CbMvplMD.js";import"./symbol-DShCcapM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MuvUcavz.js";import"./uniqBy-CT6ciLFK.js";import"./iteratee-CuAFSfED.js";import"./isArguments-yB-y1yaH.js";import"./Curve-FXEPgScl.js";import"./step-B-SD4ABD.js";import"./dataEntryStyles-BK9Z9etj.js";import"./ActivePoints-wYZ7tQyZ.js";import"./Dot-x4ugbwnH.js";import"./activeStyles-B-3paNFW.js";import"./useAnimationId-6uZicVw9.js";import"./ErrorBarContext-DQsjNYcx.js";import"./SetGraphicalItem-BoCWO9i9.js";import"./getRadiusAndStrokeWidthFromDot-CATBlCH7.js";import"./ActiveShapeUtils-B_relbt6.js";import"./useEffectiveDataKey-t4gS0ZeN.js";import"./Cross-ckzgyXQ_.js";import"./Rectangle-bDkm_FXF.js";import"./util-Dxo8gN5i.js";import"./Sector-Cim8UNhj.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
