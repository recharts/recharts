import{r as n,R as t}from"./iframe-BxezfZww.js";import{L as p}from"./LineChart-aWjC-aDe.js";import{R as s}from"./zIndexSlice-HcjonX2F.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dprc3lls.js";import{X as d}from"./XAxis-CiqbzTox.js";import{Y as y}from"./YAxis-CLrmrnP-.js";import{L as u}from"./Legend-BdxBUo-d.js";import{L as h}from"./Line-C7LVm8Rz.js";import{T as g}from"./Tooltip-BzeniyA5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CAWBTKvy.js";import"./index-apQUDkx_.js";import"./index-jirKooN3.js";import"./index-7ARW1nXD.js";import"./index-BXbofj5h.js";import"./throttle-kDZpq7hG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cqbxg7Vx.js";import"./resolveDefaultProps-BIZk73OJ.js";import"./isWellBehavedNumber-CIfm0Fso.js";import"./d3-scale-D269iDuq.js";import"./renderedTicksSlice-DT6H86Gd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DdIyro--.js";import"./chartDataContext-BSYSRccK.js";import"./CategoricalChart-BhuBu3pE.js";import"./CartesianAxis-DN3oreA6.js";import"./Layer-B7Lou8N3.js";import"./Text-BDhYhtIl.js";import"./DOMUtils-DML8OagK.js";import"./useBackwardsCompatibleTheme-B3ckLjAp.js";import"./Label-Cwi7qDe-.js";import"./ZIndexLayer-DCAxC-a3.js";import"./types-CqtRzysP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-pAbRtZ_g.js";import"./symbol-Env5CKNw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BSnhPvQn.js";import"./uniqBy-CZlT9ctG.js";import"./iteratee-B_pdIMYS.js";import"./Curve-D-Z_q46N.js";import"./step-Dc9pogTJ.js";import"./AnimatedItems-szXuAxdz.js";import"./useAnimationId-DlB6WviS.js";import"./ActivePoints-B8-Z2u2e.js";import"./Dot-_cBoNrM4.js";import"./RegisterGraphicalItemId-CDMBYjL1.js";import"./ErrorBarContext-1IA4vt79.js";import"./GraphicalItemClipPath-dU8N3SPe.js";import"./SetGraphicalItem-CwJs58Td.js";import"./getRadiusAndStrokeWidthFromDot-BQG6lvrP.js";import"./ActiveShapeUtils-CSRwAi3u.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D7EbwD05.js";import"./Rectangle-EFbhg0-p.js";import"./util-Dxo8gN5i.js";import"./Sector-Dwyiw2NT.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
