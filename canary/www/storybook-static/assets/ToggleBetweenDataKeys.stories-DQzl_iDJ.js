import{r as p,R as t}from"./iframe-qT01O9Sv.js";import{L as n}from"./LineChart-DFj5K5M9.js";import{R as s}from"./zIndexSlice-CQsHAgGp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DadbDxyY.js";import{X as d}from"./XAxis-DvY9B2Zg.js";import{Y as y}from"./YAxis-BCysskQY.js";import{L as u}from"./Legend-BRy-qGlS.js";import{L as h}from"./Line-C5MJ3vW-.js";import{T as g}from"./Tooltip-AiEYy-5l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5WR8ig5Z.js";import"./resolveDefaultProps-CLCbJ4OP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Ciilyz6p.js";import"./throttle-D76jGjFc.js";import"./index-CMK8nXr3.js";import"./index-CZve0KBd.js";import"./isWellBehavedNumber-D5wQM5xZ.js";import"./d3-scale-DNrxalK8.js";import"./index-Be2AoQLY.js";import"./index-DrjB0Jj4.js";import"./renderedTicksSlice-CJBkl3kj.js";import"./index-ej6C5682.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-WF9by-pK.js";import"./chartDataContext-Bb09oFLY.js";import"./CategoricalChart-DQ-LhVLQ.js";import"./CartesianAxis-CbAqj6_Z.js";import"./Layer-CgXLDOPB.js";import"./Text-DKzR6dpy.js";import"./DOMUtils-fvdo4GSp.js";import"./useId-CyAqziAf.js";import"./useBackwardsCompatibleTheme-BN2NPKue.js";import"./Label-dJvVWn2Q.js";import"./ZIndexLayer-D8adGQSs.js";import"./types-B4toHZjd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-YlT03ITh.js";import"./symbol-CYGUKMjC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Di4iwNJj.js";import"./uniqBy-MLt6bSD7.js";import"./iteratee-B9dZ7gAN.js";import"./Curve-C2aosV7t.js";import"./step-C8r8uJ0U.js";import"./AnimatedItems-ByVfA06q.js";import"./useAnimationId-CmZNawFJ.js";import"./ActivePoints-6Ngyl1w3.js";import"./Dot-5BUC2hEg.js";import"./RegisterGraphicalItemId-CjZ2fJX7.js";import"./ErrorBarContext-E3DYF7br.js";import"./GraphicalItemClipPath-FAcvdPD9.js";import"./SetGraphicalItem-BfkU9VdL.js";import"./getRadiusAndStrokeWidthFromDot-avuw4vHy.js";import"./ActiveShapeUtils-BBHh2Hrz.js";import"./useGraphicalItemIdentity-CvGdzJl8.js";import"./Cross-DHwJpB0V.js";import"./Rectangle-B3I4xX44.js";import"./util-Dxo8gN5i.js";import"./Sector-CKf4KwL_.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
