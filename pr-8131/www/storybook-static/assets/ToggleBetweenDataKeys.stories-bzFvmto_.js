import{r as p,R as t}from"./iframe-SkF1Z4RX.js";import{L as n}from"./LineChart-BC6pQ-ch.js";import{R as s}from"./zIndexSlice-Di849QVt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CRP8zG1W.js";import{X as d}from"./XAxis-D03_TvJt.js";import{Y as y}from"./YAxis-BRrjXnEX.js";import{L as u}from"./Legend-Dp-pWpoA.js";import{L as h}from"./Line-BzhO0L4x.js";import{T as g}from"./Tooltip-DjzFbfmR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7eCqZJw.js";import"./resolveDefaultProps-Doom015c.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BsfIJIuR.js";import"./throttle-DtLWJI8N.js";import"./index-B2PIGALe.js";import"./index-DtvbWEv2.js";import"./polarAxisSelectors-BotG4f4O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkXd-iRe.js";import"./index-BfWLl3V2.js";import"./index-DXUCR1Dc.js";import"./renderedTicksSlice-dhqIaxco.js";import"./index-CqjGOWVd.js";import"./fillDefinitions-DFub8wZ3.js";import"./CartesianChart-DrHmlDEh.js";import"./ZIndexPortal-Ccz9Ppdz.js";import"./CategoricalChart-CFpoaktB.js";import"./CartesianAxis-C8zLGICr.js";import"./Layer-CVy-0b4t.js";import"./Text-BJaHuQQc.js";import"./DOMUtils-CJyIN8K_.js";import"./ZIndexLayer-BVWEeopG.js";import"./Label-Cq-EymG9.js";import"./types-j8xWAYxX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BYB3KgvY.js";import"./symbol-CUYo63-h.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BCa24z6l.js";import"./uniqBy-CFMexfao.js";import"./iteratee-CvWL5GPd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-6N2VVfLG.js";import"./step-CspGBwNT.js";import"./LabelList-iUgi9C9_.js";import"./ActivePoints-NIeWtT_V.js";import"./Dot-CRvYYT1z.js";import"./activeStyles-f736jV_-.js";import"./useAnimationId-_Q1GlxqN.js";import"./dataEntryStyles-BsghJbw2.js";import"./ErrorBarContext-DFT45or-.js";import"./SetGraphicalItem-BQZxwmYP.js";import"./getRadiusAndStrokeWidthFromDot-C10IayrY.js";import"./ActiveShapeUtils-pmXZ3dMD.js";import"./useEffectiveDataKey-DnqAh09W.js";import"./Cross-CtnF-O9-.js";import"./Rectangle-DeUeWV1w.js";import"./util-Dxo8gN5i.js";import"./Sector-CMJKZPzq.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
