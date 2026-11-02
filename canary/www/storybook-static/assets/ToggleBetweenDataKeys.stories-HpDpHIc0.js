import{r as p,R as t}from"./iframe-Bq5XC69E.js";import{L as n}from"./LineChart-C5ysMJ7q.js";import{R as s}from"./zIndexSlice-CH_ot-kn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CylaqNlF.js";import{X as d}from"./XAxis-CJ__L0zP.js";import{Y as y}from"./YAxis-C-Z0y3eM.js";import{L as u}from"./Legend-x8X7Fp0S.js";import{L as h}from"./Line-CrvG0Qpi.js";import{T as g}from"./Tooltip-C4OGC2Mk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-bjxa_6pD.js";import"./resolveDefaultProps-DoKMFVBl.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BOZBH3Nn.js";import"./throttle-Ct-rPSxx.js";import"./index-DLG40tqd.js";import"./index-C2BKaTPh.js";import"./polarAxisSelectors-CEQjO6UJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-MB7Peh3q.js";import"./index-C-17JylX.js";import"./index-3Uw_iAKp.js";import"./renderedTicksSlice-BwIYCUgi.js";import"./index-DzbJHNcA.js";import"./fillDefinitions-Dhgql6la.js";import"./CartesianChart-moaB2ENx.js";import"./ZIndexPortal-D4Ob-hnX.js";import"./CategoricalChart-mibAt8bj.js";import"./CartesianAxis-D7JxrcAJ.js";import"./Layer-Cnu5LwAi.js";import"./Text-BD2GyaNh.js";import"./DOMUtils-DK-6QFhi.js";import"./ZIndexLayer-DBkhZGBE.js";import"./Label-CGkLvakU.js";import"./types-L3YuI5Vg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Cive21Dh.js";import"./symbol-BHxgCtzG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6RktWzhj.js";import"./uniqBy-DcVUePGP.js";import"./iteratee-D8dB9Iuu.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BJhBX3YD.js";import"./step-CitgC7Ni.js";import"./LabelList-0FCseyju.js";import"./ActivePoints-BI0eNhe7.js";import"./Dot-DSeqyqR_.js";import"./activeStyles-BIBdu-Bw.js";import"./useAnimationId-DwGbNOL_.js";import"./dataEntryStyles-DVS0RaWt.js";import"./ErrorBarContext-JgTKdwbz.js";import"./SetGraphicalItem-D8FNyAZb.js";import"./getRadiusAndStrokeWidthFromDot-BSwjIQeh.js";import"./ActiveShapeUtils-Gk8oTWam.js";import"./useEffectiveDataKey-DNNImqCq.js";import"./Cross-D0OQFgX7.js";import"./Rectangle-CdaMHBMZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DAsJNitE.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
