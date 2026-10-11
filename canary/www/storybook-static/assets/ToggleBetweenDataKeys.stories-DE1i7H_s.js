import{r as p,R as t}from"./iframe-3bLAQ3jn.js";import{L as n}from"./LineChart-BeRRxzTK.js";import{R as s}from"./zIndexSlice-MjxnTwUQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B0Gzkh02.js";import{X as d}from"./XAxis-CHp4l0kA.js";import{Y as y}from"./YAxis-CLk6Jkaa.js";import{L as u}from"./Legend-C7BG0kVL.js";import{L as h}from"./Line-BCzFaGb7.js";import{T as g}from"./Tooltip-hbzu9PhB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-7ESk0vAy.js";import"./resolveDefaultProps-aDW5W-_U.js";import"./get-C2VjdU0L.js";import"./axisSelectors-qjgTgHdP.js";import"./throttle-BuQ3fxbC.js";import"./index-awsJe2Eb.js";import"./index-xiU2DbNU.js";import"./isWellBehavedNumber-BX_nblg7.js";import"./d3-scale-CEKTBlSM.js";import"./index-DCRVqNzU.js";import"./index-3A7c9_Pr.js";import"./renderedTicksSlice-C8ZppDJj.js";import"./index-6Ojv9TCM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C-eExA3r.js";import"./chartDataContext-DAaLengz.js";import"./CategoricalChart-DMmsyMWW.js";import"./CartesianAxis-aAySesk6.js";import"./Layer-BIgar30Y.js";import"./Text-DqxBCtXi.js";import"./pageBackground-2DSYbj3P.js";import"./useId-BfAkDmBs.js";import"./useBackwardsCompatibleTheme-CCnkHGsk.js";import"./Label-Dn58gwL2.js";import"./ZIndexLayer-DiKAWbLw.js";import"./types-DN7oIxRd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DAUBFSn8.js";import"./symbol-DyMfbL19.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkucEV4P.js";import"./uniqBy-Dyl9KF0J.js";import"./iteratee-CzxOMWv0.js";import"./Curve-CuK08rWF.js";import"./step-ATMA922b.js";import"./activeStyles-CAdLKBhw.js";import"./useAnimationId-Bz90LZyV.js";import"./dataEntryStyles-BmtIjxjW.js";import"./ActivePoints-Cx1YGcZP.js";import"./Dot-6DZHOl7o.js";import"./ErrorBarContext-CU2IPWFH.js";import"./GraphicalItemClipPath-DfyNoqlW.js";import"./SetGraphicalItem-DodAswVv.js";import"./getRadiusAndStrokeWidthFromDot-D9mbRMV7.js";import"./ActiveShapeUtils-D6QRbruv.js";import"./useGraphicalItemIdentity-mnMFiUCN.js";import"./Cross-BDUDEZrZ.js";import"./Rectangle-G6aPnbc1.js";import"./util-Dxo8gN5i.js";import"./Sector-C9F_9tZM.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
