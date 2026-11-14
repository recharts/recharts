import{r as f,R as e}from"./iframe-CMzJyxaT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-fzMCOkqh.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dud0JIgm.js";import{C as k}from"./ComposedChart-D637W0rC.js";import{X as K}from"./XAxis-IIW9Jscf.js";import{L as v}from"./Legend-CiOxER4p.js";import{B as a}from"./Bar-DZbtTm0K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BnlLNWzo.js";import"./Text-RRbVz4t0.js";import"./resolveDefaultProps-D90TgEnc.js";import"./ZIndexLayer-D9_6vJMt.js";import"./index-CHmRWuG6.js";import"./index-CsXUOZ6h.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DrN1Djr4.js";import"./throttle-BTIGJM4c.js";import"./axisSelectors-Bq81Ao7M.js";import"./d3-scale-DRT9BUPN.js";import"./CartesianAxis-CqeHr0V2.js";import"./Layer-AKX63atr.js";import"./types-Dl8VwStK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DM-R4GMo.js";import"./index-BuF3Ul7s.js";import"./index-Ihh44ZOg.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CfktXOMD.js";import"./index-CNV21azp.js";import"./fillDefinitions-BTSqEgwz.js";import"./CartesianChart-BO8uDP04.js";import"./chartDataContext-CDPuAaqS.js";import"./CategoricalChart-DPQZGg1m.js";import"./Symbols-d_VeINkv.js";import"./symbol-DKhDQ6iW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BbjAediX.js";import"./uniqBy-BYP-xu74.js";import"./iteratee-DHrbjV55.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-bJA9yLxO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CL2UaBeU.js";import"./useAnimationId-CAh3JWUx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-q9dSSXz9.js";import"./tooltipContext-C2OQudlt.js";import"./ErrorBarContext-DaqV69Oh.js";import"./activeStyles-D3ZF14ZM.js";import"./SetGraphicalItem-DihoZDul.js";import"./getZIndexFromUnknown-Bu9TAlE3.js";import"./useEffectiveDataKey-DeMvidhj.js";import"./omit-2jZwnNDB.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
