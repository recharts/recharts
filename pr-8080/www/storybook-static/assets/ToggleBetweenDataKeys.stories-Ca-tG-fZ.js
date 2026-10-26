import{r as p,R as t}from"./iframe-tfhlM7RE.js";import{L as n}from"./LineChart-BGyq1OFs.js";import{R as s}from"./zIndexSlice-B471v4Lb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-nZ_SYEH5.js";import{X as d}from"./XAxis-B7I9Q0Cl.js";import{Y as y}from"./YAxis-h2SUOBLw.js";import{L as u}from"./Legend-R90rLnQ8.js";import{L as h}from"./Line-bh6qw2At.js";import{T as g}from"./Tooltip-BCCeYETg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDpiUUXi.js";import"./resolveDefaultProps-DL75x_1S.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DJx7DAnJ.js";import"./throttle-CXjKONS2.js";import"./index-BTN7W_Yl.js";import"./index-lTJQPG4X.js";import"./polarAxisSelectors-BpOt7LI8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D6t4zM3P.js";import"./index-Dv3JWEH0.js";import"./index-HYmTeb2Q.js";import"./renderedTicksSlice-DbMZHvdq.js";import"./index-MeXGvWIN.js";import"./CartesianChart-DU4kdG2u.js";import"./chartDataContext-DaAlq-l7.js";import"./CategoricalChart-CUmY4tZ5.js";import"./CartesianAxis-DyvVeGzf.js";import"./Layer-BL0J2r_i.js";import"./Text-5W0Vtyw-.js";import"./pageBackground-0qhqc0cB.js";import"./useId-Bzzww67M.js";import"./ZIndexLayer-C-CGrvp9.js";import"./Label-Dc9_QYO6.js";import"./dataEntryStyles-D3tcZitS.js";import"./types-D9bKTCt9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B52ZExKH.js";import"./symbol-BSe1lArF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-COxlkJtV.js";import"./uniqBy-tG89lOwe.js";import"./iteratee-cVMjOz7p.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BOSLFwGN.js";import"./step-B0V8T17V.js";import"./activeStyles-BEaPJgw0.js";import"./useAnimationId-BfuVUtmA.js";import"./ActivePoints-C0JmsTOw.js";import"./Dot-DqxCp5yP.js";import"./RegisterGraphicalItemId-KBiFRx-Y.js";import"./ErrorBarContext-WVyXc6eb.js";import"./SetGraphicalItem-nKtDGPi3.js";import"./getRadiusAndStrokeWidthFromDot-DpOR5CEC.js";import"./ActiveShapeUtils-DJsr9xRk.js";import"./useEffectiveDataKey-Vj1bvM5G.js";import"./Cross-CY3Zzw98.js";import"./Rectangle-BYTDxp40.js";import"./util-Dxo8gN5i.js";import"./Sector-BSPpeyjV.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
