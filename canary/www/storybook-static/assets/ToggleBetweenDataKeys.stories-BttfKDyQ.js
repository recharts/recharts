import{r as p,R as t}from"./iframe-aStk4u5G.js";import{L as n}from"./LineChart-CcdQEiRY.js";import{R as s}from"./zIndexSlice-fM76ZZLK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DshMrsYX.js";import{X as d}from"./XAxis-ENAn7eOB.js";import{Y as y}from"./YAxis-IZNj2QSL.js";import{L as u}from"./Legend-BkZB1ZjK.js";import{L as h}from"./Line-CaBl6OwL.js";import{T as g}from"./Tooltip-C4y2fub7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ds4ZmDze.js";import"./resolveDefaultProps-DDGoEIzP.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DBp9gfhA.js";import"./throttle-DVcVwqMz.js";import"./index-D3-ZjHvX.js";import"./index-CudRwpbI.js";import"./polarAxisSelectors-DXerv3y1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6YLYpaJ.js";import"./index-D44dfxkc.js";import"./index-C0ZJcZh_.js";import"./renderedTicksSlice-Bb9pf7FB.js";import"./index-CA0MPyj7.js";import"./fillDefinitions-Daf3k0lp.js";import"./CartesianChart-D7_rHSjg.js";import"./chartDataContext-Dl30_h0X.js";import"./CategoricalChart-C74L4aLC.js";import"./CartesianAxis-B4XXfFP6.js";import"./Layer-BjWQQh7I.js";import"./Text-ByyFOVFg.js";import"./ZIndexLayer-CcTOehup.js";import"./Label-CSHZSiX2.js";import"./types-DjvBJzo1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CNyA1mlx.js";import"./symbol-C-8FiWil.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cls2pasg.js";import"./uniqBy-CRJApYUW.js";import"./iteratee-DClhMIbQ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DVkDevWh.js";import"./step-CGueoSlz.js";import"./dataEntryStyles-BcmbbFXW.js";import"./ActivePoints-B2wgHnUT.js";import"./Dot-CNnV5EQe.js";import"./activeStyles-CZ0hnhrg.js";import"./useAnimationId-BKAZWpn4.js";import"./ErrorBarContext-ABxS7lmh.js";import"./SetGraphicalItem-Yj9tvd7_.js";import"./getRadiusAndStrokeWidthFromDot-D8PfYcSQ.js";import"./ActiveShapeUtils-BP2ijoKU.js";import"./useEffectiveDataKey-mYWLQ9Vk.js";import"./Cross-Cvt4uX90.js";import"./Rectangle-D6Wk_c6i.js";import"./util-Dxo8gN5i.js";import"./Sector-wgzDtkN-.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
