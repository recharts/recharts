import{r as p,R as t}from"./iframe-BXyks5nv.js";import{L as n}from"./LineChart-BbNYR650.js";import{R as s}from"./zIndexSlice-DGicPDgx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dhm3PB36.js";import{X as d}from"./XAxis-CgBDJfd7.js";import{Y as y}from"./YAxis-8vdoPbT3.js";import{L as u}from"./Legend-H_XBE5mI.js";import{L as h}from"./Line-CrCqIcra.js";import{T as g}from"./Tooltip-Jqt-JmAE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ybz91CxZ.js";import"./resolveDefaultProps-t9RGNc5u.js";import"./get-cF5BDHN6.js";import"./axisSelectors-58u8_YZx.js";import"./throttle-BMtt0Eqt.js";import"./index-Brvwee9M.js";import"./index-W4KahICV.js";import"./polarAxisSelectors-DMqgJFL7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgObkVdI.js";import"./index-DYE61kxi.js";import"./index-CNe8-YXd.js";import"./renderedTicksSlice-kjkWbf2b.js";import"./index-Ci615jxM.js";import"./CartesianChart-BvGgkH75.js";import"./ZIndexPortal-97xDukRB.js";import"./CategoricalChart-BARINQPN.js";import"./CartesianAxis-BC_l_0hm.js";import"./Layer-x02rJScX.js";import"./Text-DpKdLlQu.js";import"./pageBackground-ButgTNwE.js";import"./ZIndexLayer-aWdCgojo.js";import"./Label-DVoMofK2.js";import"./types-DxlZCjsw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B41tlq-V.js";import"./symbol-CQEHnXxm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-UnC9RugP.js";import"./uniqBy-CPmH6AFC.js";import"./iteratee-E2moU9SK.js";import"./isArguments-yB-y1yaH.js";import"./Curve-vaJ426Dg.js";import"./step-C3BUyQnl.js";import"./LabelList-BWqHNOr4.js";import"./ActivePoints-CiLNzEVX.js";import"./Dot-B9UDymE8.js";import"./activeStyles-CF_8K1QH.js";import"./useAnimationId-DXaogzGC.js";import"./dataEntryStyles-stu4dp7O.js";import"./ErrorBarContext-B3eXKAAe.js";import"./SetGraphicalItem-CyPK3B5U.js";import"./getRadiusAndStrokeWidthFromDot-Di4p4gXQ.js";import"./ActiveShapeUtils-D6rYuavq.js";import"./useEffectiveDataKey-BzrOPzFS.js";import"./Cross-D6iHirvt.js";import"./Rectangle-ozvy3-Co.js";import"./util-Dxo8gN5i.js";import"./Sector-DIbroa-0.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
