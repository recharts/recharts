import{r as p,R as t}from"./iframe-DWt4J3JN.js";import{L as n}from"./LineChart-DWMGYK11.js";import{R as s}from"./zIndexSlice-NSNONz_v.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CZCTJzkK.js";import{X as d}from"./XAxis-Ct82dr0g.js";import{Y as y}from"./YAxis-CsFlwLse.js";import{L as u}from"./Legend-BmihlOrm.js";import{L as h}from"./Line-0mvPQ6iO.js";import{T as g}from"./Tooltip-BZHJZUNK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-COqAJslP.js";import"./resolveDefaultProps-D4EpIsqz.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BS7avNJg.js";import"./throttle-Dk5xsQjg.js";import"./index-BdNcxnLc.js";import"./index-C3nO4u5d.js";import"./polarAxisSelectors-BNqZLY2c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BC5jrybd.js";import"./index-FrWa7Exr.js";import"./index-vXblBJSu.js";import"./renderedTicksSlice-C-fcLX-F.js";import"./index-Dvam2yfO.js";import"./fillDefinitions-CXWevUoQ.js";import"./CartesianChart-cgT47Vj6.js";import"./chartDataContext-CFu7cHCJ.js";import"./CategoricalChart-CSFFRE3G.js";import"./ZIndexPortal-CNwyGADw.js";import"./CartesianAxis-Ch6tESXa.js";import"./Layer-D1fzjsCN.js";import"./Text-BH_q_eI2.js";import"./DOMUtils-gLxo7mD7.js";import"./ZIndexLayer-gpvd6E93.js";import"./Label-Bkb0GMep.js";import"./types-BbXG2_az.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DwZTYmJ_.js";import"./symbol-DVO5NwTU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BsiXtm6U.js";import"./uniqBy-DSjR0NWH.js";import"./iteratee-BZC7KUwZ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DrWralR8.js";import"./step-Bit_NyY0.js";import"./LabelList-DCtJIAIf.js";import"./ActivePoints-BL9AGUXf.js";import"./Dot-BgFpa2WJ.js";import"./activeStyles-DEL6Q9xK.js";import"./useAnimationId-DaySoH3H.js";import"./dataEntryStyles-CMWxjrvv.js";import"./ErrorBarContext-D_UxjrQr.js";import"./SetGraphicalItem-cSBJzNh5.js";import"./getRadiusAndStrokeWidthFromDot-KA7euB10.js";import"./ActiveShapeUtils-BICHaO6W.js";import"./useEffectiveDataKey---V5hCOC.js";import"./Cross-CP_9_DpQ.js";import"./Rectangle-Cd9oJYQg.js";import"./util-Dxo8gN5i.js";import"./Sector-ei3xmHoK.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
