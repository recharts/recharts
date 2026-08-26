import{r as n,R as t}from"./iframe-DJ6rtu5y.js";import{L as p}from"./LineChart-N1qXNVlJ.js";import{R as s}from"./zIndexSlice-GKDeUFOJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-VYjXh7Tt.js";import{X as d}from"./XAxis-BUVKQY8c.js";import{Y as y}from"./YAxis-pMQszEvE.js";import{L as u}from"./Legend-DQs8UIfN.js";import{L as h}from"./Line-BvFD854y.js";import{T as g}from"./Tooltip-DeCkZOsW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGKs6O5B.js";import"./resolveDefaultProps-TPSV-hYk.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C35c3TE0.js";import"./throttle-sudvDT5X.js";import"./index-Byzogkak.js";import"./index-BJPQreJu.js";import"./isWellBehavedNumber-B2OjYN3n.js";import"./d3-scale-D71QV_XP.js";import"./index-0mnAToBP.js";import"./index-CUo6OWxa.js";import"./renderedTicksSlice-omd44aKK.js";import"./index-Bxq5EtVn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-L5wJYDJT.js";import"./chartDataContext-Bk4HvwoY.js";import"./CategoricalChart-DK2VSKip.js";import"./CartesianAxis-BUpdfbmz.js";import"./Layer-cCkIU0Vd.js";import"./Text-BucchPCr.js";import"./DOMUtils-D7Zrpi7b.js";import"./useId-Byv4usHp.js";import"./useBackwardsCompatibleTheme-DdWo0Fs4.js";import"./Label-6LwczIk6.js";import"./ZIndexLayer-IvPQYMIA.js";import"./types-CF6XO-qy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C9Kobipa.js";import"./symbol-apXrx4pZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cds_5qGL.js";import"./uniqBy-Dj6LJcG4.js";import"./iteratee-cRYzUJKO.js";import"./Curve-D-GktZhk.js";import"./step-HdY_lyE3.js";import"./AnimatedItems-H08MVe4l.js";import"./useAnimationId-BjJyuwQe.js";import"./ActivePoints-CyJpEWEh.js";import"./Dot-ClYl_u4u.js";import"./RegisterGraphicalItemId-BsIALwJ-.js";import"./ErrorBarContext-DT0TIJoX.js";import"./GraphicalItemClipPath-B5qfpalh.js";import"./SetGraphicalItem-DbBJcchq.js";import"./getRadiusAndStrokeWidthFromDot-_43mG9af.js";import"./ActiveShapeUtils-CPDo8aA6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-B9YfSfyQ.js";import"./Rectangle-CTp7N4-J.js";import"./util-Dxo8gN5i.js";import"./Sector-CWWOBvax.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
