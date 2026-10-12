import{r as p,R as t}from"./iframe-BqTe2UMP.js";import{L as n}from"./LineChart-Dg87s3yR.js";import{R as s}from"./zIndexSlice-GTynhOsS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CCujIa1V.js";import{X as d}from"./XAxis-BFKvA3gZ.js";import{Y as y}from"./YAxis-D_xFHHwS.js";import{L as u}from"./Legend-D3wLugUj.js";import{L as h}from"./Line-wMnln6I9.js";import{T as g}from"./Tooltip-CbwZ0Doe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWqjI8ow.js";import"./resolveDefaultProps-1c7_8SpD.js";import"./get-C2VjdU0L.js";import"./axisSelectors-lM2vG64O.js";import"./throttle-PmeTbXwQ.js";import"./index-CM2oe_lg.js";import"./index-CG7aEEME.js";import"./isWellBehavedNumber-BqrJeuDz.js";import"./d3-scale-DWaVLjKI.js";import"./index-DCgfcJWI.js";import"./index-CwY_lGiF.js";import"./renderedTicksSlice-CNIelq8e.js";import"./index-2KC7EUkH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BNeCXpfh.js";import"./chartDataContext-Bf8mKNm_.js";import"./CategoricalChart-D6_cM4w9.js";import"./CartesianAxis-DbBZeFb1.js";import"./Layer-BZqCsxZY.js";import"./Text-DWSqExsy.js";import"./pageBackground-CkUHzRfu.js";import"./useId-C8HkpFIm.js";import"./useBackwardsCompatibleTheme-B_ORpNqj.js";import"./Label-C4tYPzVx.js";import"./ZIndexLayer-CvPcnuan.js";import"./types-YR4m-55g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C4ho6aIk.js";import"./symbol-C3UkLHRc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DTVIROjS.js";import"./uniqBy-BdijKGgA.js";import"./iteratee-quGzdlB-.js";import"./Curve-DW1_vQIY.js";import"./step-BBQ8ZX6a.js";import"./activeStyles-A8WZQcUr.js";import"./useAnimationId-D1_C1lZo.js";import"./dataEntryStyles-jb_0UPIc.js";import"./ActivePoints-B0febV6B.js";import"./Dot-jbPDGXVe.js";import"./ErrorBarContext-D6ZWbiIN.js";import"./GraphicalItemClipPath-B2ZrWFWd.js";import"./SetGraphicalItem-BGuonubA.js";import"./getRadiusAndStrokeWidthFromDot-Ddhrr2Nr.js";import"./ActiveShapeUtils-gWmw8qk4.js";import"./useEffectiveDataKey-x1RSS2yk.js";import"./Cross-DRYIYwuF.js";import"./Rectangle-D8NPhxuN.js";import"./util-Dxo8gN5i.js";import"./Sector-Dd_Xo6kW.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
