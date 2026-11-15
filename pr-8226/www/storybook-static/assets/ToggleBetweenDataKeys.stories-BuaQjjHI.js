import{r as p,R as t}from"./iframe-Bah9cDPf.js";import{L as n}from"./LineChart-DunDWoJr.js";import{R as s}from"./zIndexSlice-D6NwopLq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CWm5myU0.js";import{X as d}from"./XAxis-CUlouZeJ.js";import{Y as y}from"./YAxis-I4iqsmgp.js";import{L as u}from"./Legend-BjuW9Ec3.js";import{L as h}from"./Line-CdLhYhot.js";import{T as g}from"./Tooltip-DYnVHdZI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CuqmEJPa.js";import"./resolveDefaultProps-zC5o00WN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BJF83DO6.js";import"./throttle-BjlLZ4wO.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./polarAxisSelectors-CEDelL9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLITEdPK.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./CartesianAxis-Bt_lCqiI.js";import"./Layer-CD06LZri.js";import"./Text-Ct-0y4jN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./Label-BLtLxFh_.js";import"./types-C6A66RfZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CAXKij6d.js";import"./symbol-BgjIZi1V.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bd4rfpxM.js";import"./uniqBy-xNCP_Qij.js";import"./iteratee-C8Fc8Asa.js";import"./isArguments-yB-y1yaH.js";import"./Curve-KDiJn0MP.js";import"./step-CoC1wfrs.js";import"./dataEntryStyles-BkXi-SmE.js";import"./ActivePoints-CMlYxCeA.js";import"./Dot-OGnZYrwe.js";import"./activeStyles-C-zEEDQQ.js";import"./useAnimationId-DEYdhNFn.js";import"./ErrorBarContext-BtmuWUeb.js";import"./SetGraphicalItem-DSHrOFY_.js";import"./getRadiusAndStrokeWidthFromDot-DWUFIa-L.js";import"./ActiveShapeUtils-CHFZOTDo.js";import"./useEffectiveDataKey-cBqedM3V.js";import"./Cross-iaCl0PL2.js";import"./Rectangle-C-T60wMT.js";import"./util-Dxo8gN5i.js";import"./Sector-CkDX9Lcx.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
