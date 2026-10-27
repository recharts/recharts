import{r as p,R as t}from"./iframe-CKYCIS4O.js";import{L as n}from"./LineChart-CcqFjuDQ.js";import{R as s}from"./zIndexSlice-BVoHtIGl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CSAQRvR1.js";import{X as d}from"./XAxis-BwOdDkr3.js";import{Y as y}from"./YAxis-3_O2t6O0.js";import{L as u}from"./Legend-BcgxheD9.js";import{L as h}from"./Line-CLzVB0nb.js";import{T as g}from"./Tooltip-CCekjfs3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dem0F1Iz.js";import"./resolveDefaultProps-DJardr3Q.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BFrdOsRC.js";import"./throttle-DZYj3iOj.js";import"./index-nd3hpzmK.js";import"./index-JI8M9eCs.js";import"./polarAxisSelectors-pOJJRSzh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Chzts2tO.js";import"./index-SMQozWXj.js";import"./index-DaDG0cBs.js";import"./renderedTicksSlice-BxS1V27b.js";import"./index-Da8MkAXq.js";import"./CartesianChart-CI5sjVIs.js";import"./ZIndexPortal-DdwrmGrM.js";import"./CategoricalChart-CFFWqlhP.js";import"./CartesianAxis-8nzccMKS.js";import"./Layer-BD9gaLyO.js";import"./Text-BLfI62nN.js";import"./pageBackground-CEf563-A.js";import"./ZIndexLayer-DQE-ht00.js";import"./Label-V3vvxFs1.js";import"./dataEntryStyles-DAzCaz5j.js";import"./types-CmrXNY74.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CDAoERqX.js";import"./symbol-Dw776g78.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B3lS8dsi.js";import"./uniqBy-DiBJQ8ne.js";import"./iteratee-npSfVfao.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DLtusU6K.js";import"./step-DsdN-LIO.js";import"./LabelList-DIy8rGs9.js";import"./ActivePoints-CHG1KhF9.js";import"./Dot-ndGMMR9M.js";import"./activeStyles-CNm0YTHp.js";import"./useAnimationId-CSk2ZRUZ.js";import"./RegisterGraphicalItemId-DJiw9mNN.js";import"./ErrorBarContext-Btx89lB4.js";import"./SetGraphicalItem-B3OCK4rf.js";import"./getRadiusAndStrokeWidthFromDot-B53SAheV.js";import"./ActiveShapeUtils-Ci-vluy8.js";import"./useEffectiveDataKey-Bc5Nhcfg.js";import"./Cross-6coidCzg.js";import"./Rectangle-C9OOv2OS.js";import"./util-Dxo8gN5i.js";import"./Sector-B0ghbJbx.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
