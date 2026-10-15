import{r as p,R as t}from"./iframe-CcyN1ZV1.js";import{L as n}from"./LineChart-BmJiHWcR.js";import{R as s}from"./zIndexSlice-DWTF0hX9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-GAu3hH5z.js";import{X as d}from"./XAxis-6LjH0TsS.js";import{Y as y}from"./YAxis-DQC0nPlg.js";import{L as u}from"./Legend--RziHhKA.js";import{L as h}from"./Line-BuaXrB5L.js";import{T as g}from"./Tooltip-F5VK9A1d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-9S0sCc.js";import"./resolveDefaultProps-CTY6OgJi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B4ReTl4S.js";import"./throttle-B9Dwf27c.js";import"./index-Dyila60U.js";import"./index-AJQJO5x9.js";import"./isWellBehavedNumber-CnBZkqHG.js";import"./d3-scale-BxouAPuB.js";import"./index-B2XcMOi-.js";import"./index-BVkJtaEu.js";import"./renderedTicksSlice-Bjh8Fjbe.js";import"./index-_YIGzYhu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3SfFTfT.js";import"./chartDataContext-BSpB3ZZP.js";import"./CategoricalChart-CXFsQjCx.js";import"./CartesianAxis-DnpMFCoE.js";import"./Layer-cvLVo1Gu.js";import"./Text-GXnWYGAc.js";import"./pageBackground-D_UkCcJZ.js";import"./useId-C9u3rAWe.js";import"./useBackwardsCompatibleTheme-BdBaTXYz.js";import"./Label-DeeiGPOy.js";import"./ZIndexLayer-CpLPcSfq.js";import"./types-U4cAvHsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CekAX86v.js";import"./symbol-DsGNj27r.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B2YA_4mp.js";import"./uniqBy-Ddp6Bm8x.js";import"./iteratee-KZVFWJDs.js";import"./Curve-Cj1AfJKq.js";import"./step-CVWEfu7h.js";import"./activeStyles-CeU8zAVc.js";import"./useAnimationId-J9w0IkU1.js";import"./dataEntryStyles-VGeW2eAl.js";import"./ActivePoints-BB9nBPw6.js";import"./Dot-CXSypbME.js";import"./ErrorBarContext-1RRlDzY7.js";import"./GraphicalItemClipPath-BRUG8_Yr.js";import"./SetGraphicalItem-CtBWbyZo.js";import"./getRadiusAndStrokeWidthFromDot-DQBrP5M-.js";import"./ActiveShapeUtils-D6VvEytF.js";import"./useEffectiveDataKey-D_8eHxuE.js";import"./Cross-WD_mAZPw.js";import"./Rectangle-DdGfQr7e.js";import"./util-Dxo8gN5i.js";import"./Sector-DAa6ob58.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
