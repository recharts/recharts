import{r as n,R as t}from"./iframe-CLOWWJpx.js";import{L as p}from"./LineChart-CyuYRlEG.js";import{R as s}from"./zIndexSlice-Chs4RMZ4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BvYfACiJ.js";import{X as d}from"./XAxis-5aclO3SU.js";import{Y as y}from"./YAxis-QbO3_x34.js";import{L as u}from"./Legend-iijpXeNh.js";import{L as h}from"./Line-8To0Hkmm.js";import{T as g}from"./Tooltip-CgTotejh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PtmXkiLl.js";import"./index-CoemtFTs.js";import"./index-gsgSuvG_.js";import"./index-D8vkw_WC.js";import"./index-CvPaOhKY.js";import"./throttle-NR7rmq0H.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B6C-iAl6.js";import"./resolveDefaultProps-DCKMEUHg.js";import"./isWellBehavedNumber-Bkt9PZby.js";import"./d3-scale-BWgGZ0ZC.js";import"./renderedTicksSlice-Dqa_BZU0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BghZLmrY.js";import"./chartDataContext-CMbA824e.js";import"./CategoricalChart--VJeMiVR.js";import"./CartesianAxis-Cg5r0ZYC.js";import"./Layer-GlnJsptq.js";import"./Text-CoBlae8g.js";import"./DOMUtils-cc_L-yud.js";import"./Label-DG_GQs1i.js";import"./ZIndexLayer-NdFk7Llr.js";import"./types-B-e_P8o7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CG7dbDKG.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-HF_kJStw.js";import"./symbol-TVKKDHlk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BxZhDmns.js";import"./uniqBy-Cl6wEbNY.js";import"./iteratee-CSycNkZJ.js";import"./Curve-DZ0oaj1l.js";import"./step-CeEc6BtY.js";import"./AnimatedItems-DKcQidly.js";import"./useAnimationId-CXs0-Peu.js";import"./ActivePoints-DzcusPWJ.js";import"./Dot-DoW1vskp.js";import"./RegisterGraphicalItemId-D8sZKmnj.js";import"./ErrorBarContext-zURr2Pa5.js";import"./GraphicalItemClipPath-CzZgXvBv.js";import"./SetGraphicalItem-DBtV5dO_.js";import"./graphicalItemIdentity-DPGCfWOI.js";import"./ActiveShapeUtils-6rRdWU2Q.js";import"./Cross-BhCc6GwU.js";import"./Rectangle-CzlrgWAJ.js";import"./util-Dxo8gN5i.js";import"./Sector-q8Y4yAcM.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
