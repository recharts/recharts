import{r as p,R as t}from"./iframe-BU3iqhog.js";import{L as n}from"./LineChart-QmmOaevo.js";import{R as s}from"./zIndexSlice-Cpd3Oi8q.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C270DU6Z.js";import{X as d}from"./XAxis-DVT5C2oc.js";import{Y as y}from"./YAxis-C4ehmAHw.js";import{L as u}from"./Legend-D1_75WAs.js";import{L as h}from"./Line-D5gRKdrp.js";import{T as g}from"./Tooltip-1w1e9gly.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-zJDpEykE.js";import"./resolveDefaultProps-4q4hBHNx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C9pjjfER.js";import"./throttle-Dtv6RWTH.js";import"./index-JOJ-brJb.js";import"./index-CKIb-o38.js";import"./isWellBehavedNumber-DTANvM1I.js";import"./d3-scale-BBqyl05y.js";import"./index--oAu63xI.js";import"./index-BAJoWACv.js";import"./renderedTicksSlice-DJZNDnvY.js";import"./index-Crwgfq_Z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C9c1nVF1.js";import"./chartDataContext-DjOyYX_x.js";import"./CategoricalChart-B34ld9nC.js";import"./CartesianAxis-DRURazzH.js";import"./Layer-BUBmv9mO.js";import"./Text-BrjMZ7T0.js";import"./DOMUtils-CiCEa87M.js";import"./useId-C4wpt1HA.js";import"./useBackwardsCompatibleTheme-BMMiVQGL.js";import"./Label-BEIJZAIQ.js";import"./ZIndexLayer-D4v3Xv2l.js";import"./types-Cp0AAwbW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CaZgBRan.js";import"./symbol-DHqgtrrn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BuaCyz1B.js";import"./uniqBy-B0FmK-vV.js";import"./iteratee-Dq0J-PP4.js";import"./Curve-BSmazxDN.js";import"./step-uA4Kffey.js";import"./AnimatedItems-CSVnwEYt.js";import"./useAnimationId-BUaPZS0B.js";import"./ActivePoints-Bkhj7n47.js";import"./Dot-C8c1IDgg.js";import"./RegisterGraphicalItemId-DfUeUgid.js";import"./ErrorBarContext-qidGP01Z.js";import"./GraphicalItemClipPath-DoWFsAsl.js";import"./SetGraphicalItem-Da1y71gX.js";import"./getRadiusAndStrokeWidthFromDot-Dhw2197g.js";import"./ActiveShapeUtils-DFQKKGa8.js";import"./useGraphicalItemIdentity-CTbnTQeV.js";import"./Cross-DPcIieT-.js";import"./Rectangle-OOh_5Fv6.js";import"./util-Dxo8gN5i.js";import"./Sector-Bk3HtvjQ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
