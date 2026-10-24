import{r as p,R as t}from"./iframe-Cb2PTRZu.js";import{L as n}from"./LineChart-BrtkzuAl.js";import{R as s}from"./zIndexSlice-BOcdwE9B.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-S2dzJhHi.js";import{X as d}from"./XAxis-CYL2fqsj.js";import{Y as y}from"./YAxis-CFTllxPe.js";import{L as u}from"./Legend-NMCpa0Ey.js";import{L as h}from"./Line-CrkeS2su.js";import{T as g}from"./Tooltip-B3QRBTsg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJJRHEYU.js";import"./resolveDefaultProps-38f2qAXo.js";import"./get-cF5BDHN6.js";import"./axisSelectors-YCR54JUg.js";import"./throttle-3iOH7y6s.js";import"./index-CgcevczK.js";import"./index-D3ECOqH8.js";import"./isWellBehavedNumber-DqADXXOT.js";import"./d3-scale-BEDYL0lJ.js";import"./index-sJmnv_Ao.js";import"./index-BHmwOcB9.js";import"./renderedTicksSlice-CGIalbK2.js";import"./index-DnXVLer0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-bwFjxITE.js";import"./chartDataContext-DEoJ-_XA.js";import"./CategoricalChart-yk48FjSr.js";import"./CartesianAxis-Bd5LwOLq.js";import"./Layer-CYH1X6I5.js";import"./Text-D_NeQFRY.js";import"./pageBackground-Bn3yH5Mf.js";import"./useId-7AGdzjEK.js";import"./useBackwardsCompatibleTheme-DVeueyf3.js";import"./Label-60x-b7-u.js";import"./ZIndexLayer-CMs0nKoK.js";import"./dataEntryStyles-BA7za2_q.js";import"./types-A7qt-X3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C4-XM6Pb.js";import"./symbol-Dv8htkrG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CgOYsezl.js";import"./uniqBy-BBNw9Xn-.js";import"./iteratee-DzkDe0Ct.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CXzUSEYX.js";import"./step-D0d2-Qo8.js";import"./activeStyles-utpSO3wr.js";import"./useAnimationId-BSibkTQy.js";import"./ActivePoints-BINdFJVn.js";import"./Dot-CdjxtqZf.js";import"./RegisterGraphicalItemId-B9ytj1I9.js";import"./ErrorBarContext-TOpvzWJt.js";import"./SetGraphicalItem-DtRHo2_o.js";import"./getRadiusAndStrokeWidthFromDot-iL1mBvr8.js";import"./ActiveShapeUtils-BmjVX6xw.js";import"./useEffectiveDataKey-Me0QsLaT.js";import"./Cross-C7mmq037.js";import"./Rectangle-BCmcE3yJ.js";import"./util-Dxo8gN5i.js";import"./Sector-jK--Yj0M.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
