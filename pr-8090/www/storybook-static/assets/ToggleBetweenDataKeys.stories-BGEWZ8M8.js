import{r as p,R as t}from"./iframe-Dop2FCJV.js";import{L as n}from"./LineChart-cIazx2TF.js";import{R as s}from"./zIndexSlice-nsfMN2si.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-mIBlq79R.js";import{X as d}from"./XAxis-BotDK1s5.js";import{Y as y}from"./YAxis-B3k634-q.js";import{L as u}from"./Legend-BueZ2WTQ.js";import{L as h}from"./Line-D5imx7T5.js";import{T as g}from"./Tooltip-DMaf7PGT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ziCTvKBS.js";import"./resolveDefaultProps-DqELWZLJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CeHIB0K5.js";import"./throttle-D7xfBLch.js";import"./index-DDOIydJq.js";import"./index-CUtMqYq0.js";import"./polarAxisSelectors-C3wFvSyu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cxj7JE2J.js";import"./index-V2eSo_Pn.js";import"./index-CjK1kGrZ.js";import"./renderedTicksSlice-CNT_Edzm.js";import"./index-DD0oc2h8.js";import"./CartesianChart-DS3MFgQ4.js";import"./ZIndexPortal-D3fjmMCx.js";import"./CategoricalChart-W3056MsQ.js";import"./CartesianAxis-DU3QwiMj.js";import"./Layer-B-MIuFUl.js";import"./Text-umIfGz-9.js";import"./pageBackground-BKmWYBJ8.js";import"./ZIndexLayer-mYkteocL.js";import"./Label-BDgfZPfI.js";import"./dataEntryStyles-DYOt2-v1.js";import"./types-BszWz-w9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-nX61tU3C.js";import"./symbol-DyAd0qFf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D9LA4JWt.js";import"./uniqBy-BuyM_tyo.js";import"./iteratee-By-O6bqn.js";import"./isArguments-yB-y1yaH.js";import"./Curve-0Qnio8ZJ.js";import"./step-CV2mnDR5.js";import"./LabelList-DYliLjPH.js";import"./ActivePoints-BOSFqPiQ.js";import"./Dot-CHpl-5cF.js";import"./activeStyles-DnOLUEXC.js";import"./useAnimationId-CQv1eLqe.js";import"./RegisterGraphicalItemId-CAURusbQ.js";import"./ErrorBarContext-DG2LKBNq.js";import"./SetGraphicalItem--5ECUYsd.js";import"./getRadiusAndStrokeWidthFromDot-CybZPC8K.js";import"./ActiveShapeUtils-BAcgfjQM.js";import"./useEffectiveDataKey-gZcrHKmB.js";import"./Cross-DmMkSZCd.js";import"./Rectangle-CLrutJrV.js";import"./util-Dxo8gN5i.js";import"./Sector-Bv00or61.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
