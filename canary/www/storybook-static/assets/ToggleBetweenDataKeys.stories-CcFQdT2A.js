import{r as p,R as t}from"./iframe-BKSHRT_S.js";import{L as n}from"./LineChart-HN7scHuz.js";import{R as s}from"./zIndexSlice-BLeuW80U.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Ce-Sqix0.js";import{X as d}from"./XAxis-BuoXjJQH.js";import{Y as y}from"./YAxis-DQujYqlQ.js";import{L as u}from"./Legend-CGFvr50A.js";import{L as h}from"./Line-_a0Ki2Oq.js";import{T as g}from"./Tooltip-DgJfsh0T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BDEQp4gV.js";import"./resolveDefaultProps-DcYWqzkb.js";import"./get-cF5BDHN6.js";import"./axisSelectors-8rGbG1Qd.js";import"./throttle-BkygAiqr.js";import"./index-D7MQE7Za.js";import"./index-D-jrioKU.js";import"./polarAxisSelectors-CQ3ogHuY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-A-Zbe_Tu.js";import"./index-rcRigKCu.js";import"./index-D9GCJXOs.js";import"./renderedTicksSlice-uVEXaARu.js";import"./index-Cjyk5lan.js";import"./CartesianChart-Bg8a12nJ.js";import"./chartDataContext-vZViOemf.js";import"./CategoricalChart-rdB1CfJb.js";import"./CartesianAxis-D2IkBv7G.js";import"./Layer-BzU6Nn69.js";import"./Text-B6tKJAid.js";import"./pageBackground-DKWjelca.js";import"./useId-PjG3o87t.js";import"./ZIndexLayer-Dc3T9ZED.js";import"./Label-DbF58v67.js";import"./dataEntryStyles-DoThh5sG.js";import"./types-DNwq_ZGY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DA0cR1nt.js";import"./symbol-D6nHcF92.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Db2Vff8q.js";import"./uniqBy-BAvd38-h.js";import"./iteratee-Cs7UoLYE.js";import"./isArguments-yB-y1yaH.js";import"./Curve-LNcUa8Cn.js";import"./step-OqTpatbN.js";import"./activeStyles-BKkkdbj0.js";import"./useAnimationId-Nyn64y9A.js";import"./ActivePoints-2BgjqPQF.js";import"./Dot-BLeFqc4M.js";import"./RegisterGraphicalItemId-D_NDQyK2.js";import"./ErrorBarContext-DwEbbuob.js";import"./SetGraphicalItem-DaNVol4K.js";import"./getRadiusAndStrokeWidthFromDot-DfUPMR_R.js";import"./ActiveShapeUtils-DPuoYgwg.js";import"./useEffectiveDataKey-B8W36a2Q.js";import"./Cross-Cbe5Dlbm.js";import"./Rectangle-MxzM-nYG.js";import"./util-Dxo8gN5i.js";import"./Sector-Byh3bfvn.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
