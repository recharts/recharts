import{r as p,R as t}from"./iframe-B0yo2V4n.js";import{L as n}from"./LineChart-J7a4H01S.js";import{R as s}from"./zIndexSlice-B7uClMUs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-AP7zhjfS.js";import{X as d}from"./XAxis-DsnV8ZqK.js";import{Y as y}from"./YAxis-DL4kDslF.js";import{L as u}from"./Legend-D9RahiYS.js";import{L as h}from"./Line-DfLePWXM.js";import{T as g}from"./Tooltip-SGyxNqGE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQikX2jp.js";import"./resolveDefaultProps-C_-4-Tqn.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CMjYVwhk.js";import"./throttle-CrsZu1Ef.js";import"./index-CksSbcNy.js";import"./index-CCtvozBT.js";import"./isWellBehavedNumber-CZXpTiYT.js";import"./d3-scale-B4crR7Dq.js";import"./index-T1a_0V0g.js";import"./index-DKVx0AFW.js";import"./renderedTicksSlice-Boaz1NGF.js";import"./index-2BBeHhTL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjmfdwhX.js";import"./chartDataContext-B2JeciGL.js";import"./CategoricalChart-BCaNllRk.js";import"./CartesianAxis-DRTEDz7X.js";import"./Layer-BkWM3RIH.js";import"./Text-CHF9ypYR.js";import"./pageBackground-0wikHvI2.js";import"./useId-BnV_tbx_.js";import"./useBackwardsCompatibleTheme-DI9J0y19.js";import"./Label-CnUHNStt.js";import"./ZIndexLayer-DLG58JCm.js";import"./types-L-bd4Nc-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dr0Ov5Ha.js";import"./symbol-CHXAHdDN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-LYUTAlL5.js";import"./uniqBy-B2CtqIKi.js";import"./iteratee-DxT84tDG.js";import"./Curve-DRU8kykY.js";import"./step-BoSTRipl.js";import"./activeStyles-_C6RQVwk.js";import"./useAnimationId-DO-aK-tu.js";import"./dataEntryStyles-CjubJGLE.js";import"./ActivePoints-ohc9ZXCs.js";import"./Dot-OL_y42KN.js";import"./ErrorBarContext-DwnKv10Z.js";import"./GraphicalItemClipPath-CMzZysYx.js";import"./SetGraphicalItem-Z-H48Tbu.js";import"./getRadiusAndStrokeWidthFromDot-BzPG4IYK.js";import"./ActiveShapeUtils-C0F7emTJ.js";import"./useEffectiveDataKey-Bupc-s0s.js";import"./Cross-CNuYU_Rf.js";import"./Rectangle-xNB1EmnK.js";import"./util-Dxo8gN5i.js";import"./Sector-4SkZuanz.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
