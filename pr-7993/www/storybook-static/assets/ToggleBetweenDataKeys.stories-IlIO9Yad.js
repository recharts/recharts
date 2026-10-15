import{r as p,R as t}from"./iframe-Bcbj5Yvj.js";import{L as n}from"./LineChart-BqaHlQW7.js";import{R as s}from"./zIndexSlice-BbtTmnct.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CNnGhmkB.js";import{X as d}from"./XAxis-BGoibDnX.js";import{Y as y}from"./YAxis-D0HGn8m-.js";import{L as u}from"./Legend-CZS9R5nb.js";import{L as h}from"./Line-Ba2WmDpW.js";import{T as g}from"./Tooltip-DImzhYnu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-JEGbB27w.js";import"./resolveDefaultProps-C9cavZl8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bf3Ac7bJ.js";import"./throttle-1wXsTVJX.js";import"./index-DsYIiLvH.js";import"./index-G8y4OPnu.js";import"./isWellBehavedNumber-Blk-fUEv.js";import"./d3-scale-CzxKj8Wi.js";import"./index-8ad9jMOO.js";import"./index-Dr8QNULI.js";import"./renderedTicksSlice-BgIJtUaM.js";import"./index-D1z8RJDy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-63QBJCK9.js";import"./chartDataContext-C1nJ8SNU.js";import"./CategoricalChart-8MHh-in3.js";import"./CartesianAxis-D8X_N5Aa.js";import"./Layer-DpGUUMWf.js";import"./Text-DXJV-9ud.js";import"./pageBackground-BH8UHhL6.js";import"./useId-B-rxwJkk.js";import"./useBackwardsCompatibleTheme-5iZeYqfO.js";import"./Label-K9FSTyve.js";import"./ZIndexLayer-CyylKyYl.js";import"./types-CJ1XacmQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dv0jAL1Q.js";import"./symbol-Cs2ouPLI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-bqrOzjTl.js";import"./uniqBy-DWa61rJJ.js";import"./iteratee-BELjj_Tc.js";import"./Curve-DQG70g8F.js";import"./step-BVuNFWjf.js";import"./activeStyles-MDW24FXq.js";import"./useAnimationId-Bk7rAd-H.js";import"./dataEntryStyles-BUYkc4Iu.js";import"./ActivePoints-Byjchu2B.js";import"./Dot-4JIe_qSe.js";import"./ErrorBarContext-DDwPy9nt.js";import"./GraphicalItemClipPath-Ch9DqqLY.js";import"./SetGraphicalItem-a6aphxRl.js";import"./getRadiusAndStrokeWidthFromDot-r0umV2Vo.js";import"./ActiveShapeUtils-C7GChdzB.js";import"./useEffectiveDataKey-D3HkyWZy.js";import"./Cross-Bcp7i6Mp.js";import"./Rectangle-C1N2Ym6v.js";import"./util-Dxo8gN5i.js";import"./Sector-D8HfX_lG.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
