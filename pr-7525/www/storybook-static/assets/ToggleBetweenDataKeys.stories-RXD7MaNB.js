import{r as n,R as t}from"./iframe-mx_m0Bbx.js";import{L as p}from"./LineChart-CyxEZM12.js";import{R as s}from"./zIndexSlice-DzRj0O2j.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DzoraW6O.js";import{X as d}from"./XAxis-e2aIYDeC.js";import{Y as y}from"./YAxis-D0miqhdY.js";import{L as u}from"./Legend-LU7nsQg3.js";import{L as h}from"./Line-BegSPRqU.js";import{T as g}from"./Tooltip-BgyVG5YZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BGo6HJcU.js";import"./index-DRxhjL8G.js";import"./index-DfXqfQfJ.js";import"./index-VyciUKje.js";import"./index-D6L8-6uP.js";import"./throttle-C4NetDSi.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Dbw1NMhi.js";import"./axisSelectors-BCNbmsqC.js";import"./resolveDefaultProps-DbkTAdx2.js";import"./isWellBehavedNumber-DNgXwIS7.js";import"./d3-scale-Dkhn0JVn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CI1Yx8pO.js";import"./chartDataContext-DbyvTQIy.js";import"./CategoricalChart-CaTs9Dwm.js";import"./CartesianAxis-uqQC2EBI.js";import"./Layer-CIGRgmJf.js";import"./Text-BRqwcuo5.js";import"./DOMUtils-CxMZUWXo.js";import"./Label-CTtz2nFH.js";import"./ZIndexLayer-DoWBLOas.js";import"./types-CGXKV1tr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CHdplG38.js";import"./symbol-2gV0br5j.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B1ENHzAZ.js";import"./uniqBy-CP0rnImt.js";import"./iteratee-Cu1e9zHo.js";import"./Curve-8KyVkyQb.js";import"./step-DzD8K2Hy.js";import"./AnimatedItems-CxqbLrvD.js";import"./useAnimationId-B1RQqc1z.js";import"./ActivePoints-p8w8Ckwa.js";import"./Dot-CG3pFr9Q.js";import"./RegisterGraphicalItemId-A-L91Q74.js";import"./ErrorBarContext-DRhFO-yz.js";import"./GraphicalItemClipPath-DdGvz8Ok.js";import"./SetGraphicalItem-_D-u02tv.js";import"./getRadiusAndStrokeWidthFromDot-e5MUZgSd.js";import"./ActiveShapeUtils-BNcmVmA7.js";import"./Cross-TN21c1kX.js";import"./Rectangle-KZcqepmk.js";import"./util-Dxo8gN5i.js";import"./Sector-D6oqAW5N.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
