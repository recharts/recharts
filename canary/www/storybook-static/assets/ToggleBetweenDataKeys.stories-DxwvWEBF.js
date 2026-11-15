import{r as p,R as t}from"./iframe-wopH9NdI.js";import{L as n}from"./LineChart-Zkv2jfdv.js";import{R as s}from"./zIndexSlice-xHMHa_PR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-3cDumxFt.js";import{X as d}from"./XAxis-YQFRVy93.js";import{Y as y}from"./YAxis-DOwO43VE.js";import{L as u}from"./Legend-byGWz5he.js";import{L as h}from"./Line-DN2Hlr79.js";import{T as g}from"./Tooltip-CmXnO450.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GnJJ2XUP.js";import"./resolveDefaultProps-CuS_1aTJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-H_-dwi8o.js";import"./throttle--YLxHTYU.js";import"./index-DX2sAXBh.js";import"./index-ntp-0gr7.js";import"./polarAxisSelectors-DDYJm4ns.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRxJIguS.js";import"./index-CHX_ECB7.js";import"./index-xHMOPb5i.js";import"./renderedTicksSlice-BRp5IgAn.js";import"./index-BMZVXAmF.js";import"./fillDefinitions-DrqDcIvz.js";import"./CartesianChart-CN7jOg4q.js";import"./chartDataContext-bye5A1ly.js";import"./CategoricalChart-C9YwakJO.js";import"./CartesianAxis-Bp916XbH.js";import"./Layer-Dt0UmkGr.js";import"./Text-CQcCEm7a.js";import"./ZIndexLayer-BgWxLO1_.js";import"./Label-uu_QuzmT.js";import"./types-CUlNVHV2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Bbx6wwO8.js";import"./symbol-BLs3oZkc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-hq6pQE.js";import"./uniqBy-BzWKwNSK.js";import"./iteratee-BU4RoL4-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Cm3MAuem.js";import"./step-BDdQgN00.js";import"./dataEntryStyles-B3xBZvqn.js";import"./ActivePoints-D278KIFv.js";import"./Dot-BdzSE_Lm.js";import"./activeStyles-DEvOqenA.js";import"./useAnimationId-Dc36A72L.js";import"./ErrorBarContext-DV4gDnhM.js";import"./SetGraphicalItem-X1KxmELY.js";import"./getRadiusAndStrokeWidthFromDot-CJXPoZCW.js";import"./ActiveShapeUtils-DA6QXZNg.js";import"./useEffectiveDataKey-SyLvQhGM.js";import"./Cross-BroUofIZ.js";import"./Rectangle-CG1wwImr.js";import"./util-Dxo8gN5i.js";import"./Sector-BWFGzxn-.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
