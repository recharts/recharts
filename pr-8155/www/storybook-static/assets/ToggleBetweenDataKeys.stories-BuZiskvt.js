import{r as p,R as t}from"./iframe-DfQVKpWf.js";import{L as n}from"./LineChart-DMys1rqY.js";import{R as s}from"./zIndexSlice-BRoA5zbQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bl5PtFny.js";import{X as d}from"./XAxis--NVg5Wna.js";import{Y as y}from"./YAxis-DMHv-5gA.js";import{L as u}from"./Legend-BMaSAhX7.js";import{L as h}from"./Line-DBhsIsTX.js";import{T as g}from"./Tooltip-B1Qmb97M.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CbT_vqZg.js";import"./resolveDefaultProps-BRVZcbQl.js";import"./get-cF5BDHN6.js";import"./axisSelectors-nkYWEth-.js";import"./throttle-D0VENALV.js";import"./index-DLkRf9Xs.js";import"./index-Da3zhQui.js";import"./polarAxisSelectors-DE4p4RgX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC9kPgul.js";import"./index-CLjBtDbF.js";import"./index-C3Wo1ixX.js";import"./renderedTicksSlice-COJW81My.js";import"./index-oM5BRh82.js";import"./fillDefinitions-DMhv-djT.js";import"./CartesianChart-BO_j1rd7.js";import"./ZIndexPortal-BgZ3mdtq.js";import"./CategoricalChart-CIbxz_h2.js";import"./CartesianAxis-bSSjBH_Z.js";import"./Layer-Dxd39IZi.js";import"./Text-BguVyW-T.js";import"./DOMUtils-D9csGiWV.js";import"./ZIndexLayer-iHHFBTZW.js";import"./Label-Dx4XJGMM.js";import"./types-B0IgcrJR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C8CspVgJ.js";import"./symbol-D5X2owC8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_4NA5oF.js";import"./uniqBy-Bvv0pG38.js";import"./iteratee-Dj2GE6VN.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BjBiMZvK.js";import"./step-BYgu61ra.js";import"./LabelList-BjeX7Zh8.js";import"./ActivePoints-BKczNKsQ.js";import"./Dot-BJaFOnh2.js";import"./activeStyles-BlB0_IoV.js";import"./useAnimationId-Co3_Oxtg.js";import"./dataEntryStyles-pydJZJI0.js";import"./ErrorBarContext-DMnuYRqA.js";import"./SetGraphicalItem-24_y6SOu.js";import"./getRadiusAndStrokeWidthFromDot-BVeK6Pqm.js";import"./ActiveShapeUtils-Dij93_Oc.js";import"./useEffectiveDataKey-BuvFv_YU.js";import"./Cross-Bmjz-AQU.js";import"./Rectangle-Dho5taUB.js";import"./util-Dxo8gN5i.js";import"./Sector-DCqZBsHb.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
