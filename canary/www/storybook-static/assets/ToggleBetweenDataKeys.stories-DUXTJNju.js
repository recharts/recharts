import{r as p,R as t}from"./iframe-B33Y4kOs.js";import{L as n}from"./LineChart-DSk776yn.js";import{R as s}from"./zIndexSlice-BV8vqz-A.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Da9JiP4m.js";import{X as d}from"./XAxis-D7BTfG5w.js";import{Y as y}from"./YAxis-DoRVJcGp.js";import{L as u}from"./Legend-COewFJhC.js";import{L as h}from"./Line-BF6bp28v.js";import{T as g}from"./Tooltip-BC0jNTdj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D4BmCMdI.js";import"./resolveDefaultProps-Bx3AGNLv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CPTmOT_R.js";import"./throttle-Dx9BFaqt.js";import"./index-D1w13u3d.js";import"./index-CqFL6s1V.js";import"./isWellBehavedNumber-B7wXqJ9C.js";import"./d3-scale-BRwhKw_2.js";import"./index-BM_y8xA7.js";import"./index-BLcaxlXW.js";import"./renderedTicksSlice-C0XiR0Pe.js";import"./index--PM34IXj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BgWqiAzR.js";import"./chartDataContext-CCe5PXsU.js";import"./CategoricalChart-Dg0sKqob.js";import"./CartesianAxis-CldRPjzS.js";import"./Layer-DI-mGCka.js";import"./Text-CnUdOxIr.js";import"./pageBackground-CmnWJfG9.js";import"./useId-CRYD77s2.js";import"./useBackwardsCompatibleTheme-df6TzhQ0.js";import"./Label-DQnbTFco.js";import"./ZIndexLayer-Dm3QzWrT.js";import"./types-cCXzDmUf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D4YJU_zX.js";import"./symbol-CgLv1_Zy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-_gZZN4km.js";import"./uniqBy-DtqOuezx.js";import"./iteratee-Cn3UJQOJ.js";import"./Curve-CcWZ_EFW.js";import"./step-CvwqDq2P.js";import"./activeStyles-VptiM0EE.js";import"./useAnimationId-B0LKL5_Y.js";import"./dataEntryStyles-C0yw4w94.js";import"./ActivePoints-DMCMMH9m.js";import"./Dot-BLVwwgSv.js";import"./ErrorBarContext-CHVe4J2J.js";import"./GraphicalItemClipPath-C_VqIcXn.js";import"./SetGraphicalItem-B6sh6hag.js";import"./getRadiusAndStrokeWidthFromDot-BCAZrIZb.js";import"./ActiveShapeUtils-CZNSeBf4.js";import"./useEffectiveDataKey-BxhkF0gV.js";import"./Cross-Bom6Oekg.js";import"./Rectangle-B9nqQ6MB.js";import"./util-Dxo8gN5i.js";import"./Sector-MtPCiOU-.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
