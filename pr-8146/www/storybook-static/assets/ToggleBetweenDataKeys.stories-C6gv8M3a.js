import{r as p,R as t}from"./iframe-BSZdIOb1.js";import{L as n}from"./LineChart-BH_PuaXs.js";import{R as s}from"./zIndexSlice-x95uaAeG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CjVxY4bS.js";import{X as d}from"./XAxis-G0FofNWa.js";import{Y as y}from"./YAxis-BidQV3Bs.js";import{L as u}from"./Legend-DTU0g8fL.js";import{L as h}from"./Line-CwNvjckU.js";import{T as g}from"./Tooltip-CqW2RsM8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BkCZoC17.js";import"./resolveDefaultProps-D3SG1Voa.js";import"./get-cF5BDHN6.js";import"./axisSelectors-YkanTYDO.js";import"./throttle-CSUb4-AW.js";import"./index-MExGibHi.js";import"./index-zsHkXx4R.js";import"./polarAxisSelectors-3PQGkC2Y.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-4UnkzbhN.js";import"./index-bJBh3omb.js";import"./index-TMoyXsD5.js";import"./renderedTicksSlice-BJuGaZyZ.js";import"./index-KnfBFAge.js";import"./fillDefinitions-DxVVI7tr.js";import"./CartesianChart-Bw5m5b1-.js";import"./ZIndexPortal-4kIQjZh0.js";import"./CategoricalChart-DA0Cyxxs.js";import"./CartesianAxis-DAsXTQiH.js";import"./Layer-uHX297jU.js";import"./Text-Bz3RDDRF.js";import"./DOMUtils-bqeGnrQd.js";import"./ZIndexLayer-yq1Eddx2.js";import"./Label-Cim8hMW4.js";import"./types-Dvrgl9IY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CWFcXiNy.js";import"./symbol-DRMp_7qO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-d8UGFEqu.js";import"./uniqBy-BVEW4IKF.js";import"./iteratee-dTH4fWHS.js";import"./isArguments-yB-y1yaH.js";import"./Curve-ClwfprbW.js";import"./step-DTMXh9wp.js";import"./LabelList-lC_U3aX6.js";import"./ActivePoints-x8Ig6mBR.js";import"./Dot-BTQ1Y3aj.js";import"./activeStyles-DKcFBEEB.js";import"./useAnimationId-CA_zjy4c.js";import"./dataEntryStyles-CFBEHlKQ.js";import"./ErrorBarContext-Co8GUKFe.js";import"./SetGraphicalItem-C-eJsLZg.js";import"./getRadiusAndStrokeWidthFromDot-CVUy3O5W.js";import"./ActiveShapeUtils-D_M0EMWZ.js";import"./useEffectiveDataKey-e2XyZYHS.js";import"./Cross-BJ4HZEIQ.js";import"./Rectangle-CmV7ANCN.js";import"./util-Dxo8gN5i.js";import"./Sector-BvCyOl-r.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
