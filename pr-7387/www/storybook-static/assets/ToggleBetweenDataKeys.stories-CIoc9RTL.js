import{P as n,c as t}from"./iframe-C5MHh42j.js";import{L as p}from"./LineChart-BKWPKtjV.js";import{g as s}from"./zIndexSlice-BAxAD9Hd.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-BK0lHkTK.js";import{X as d}from"./XAxis-Dv4taIi_.js";import{Y as y}from"./YAxis-BesflX3C.js";import{L as u}from"./Legend-CWMVurX6.js";import{L as g}from"./Line-Das4hafc.js";import{T as h}from"./Tooltip-O--widbV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./immer-BEKu5nAB.js";import"./get-w_pNkTrF.js";import"./renderedTicksSlice-DJahilIk.js";import"./axisSelectors-l2EEhLAN.js";import"./d3-scale-DROX3YQd.js";import"./resolveDefaultProps-50eaHBP1.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DdDBbaWH.js";import"./chartDataContext-B3IBL15G.js";import"./CategoricalChart-iSFUJ3mM.js";import"./CartesianAxis-hicrxO07.js";import"./Layer-BTdnKXgq.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./Label-DPuGsfIc.js";import"./ZIndexLayer-BqFMND8v.js";import"./types-DIsFNNUR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BZjZW0di.js";import"./symbol-EmTrNRMN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CwximdNT.js";import"./uniqBy-Ba9KhnrU.js";import"./iteratee-CTywduMo.js";import"./Curve-thevB7o-.js";import"./step-CW5jkV_V.js";import"./ReactUtils-BVj-7vfo.js";import"./ActivePoints-hHK0AETy.js";import"./Dot-C9bGlN1x.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./ErrorBarContext-BqD49I1j.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./useAnimationId-D3rbPHOS.js";import"./getRadiusAndStrokeWidthFromDot-Om5tnWtK.js";import"./ActiveShapeUtils-B0TwIl-q.js";import"./Cross-DeACoSyY.js";import"./Rectangle-Hfg__8px.js";import"./Sector-B-A7jX2D.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
