import{r as f,R as e}from"./iframe-D0WJBe8B.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Hb99A8N1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BC6IeYNi.js";import{C as k}from"./ComposedChart-BlH1ARqS.js";import{X as K}from"./XAxis-BEoxl3pM.js";import{L as v}from"./Legend-DF1CoFP1.js";import{B as a}from"./Bar-B9eOoC47.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B4KodQcW.js";import"./Text-CgQ4MHqj.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./throttle-TSOlYDju.js";import"./axisSelectors-D5taf4lI.js";import"./d3-scale-50ivSU0v.js";import"./CartesianAxis-C6mWkihq.js";import"./Layer-aO3gvgqI.js";import"./types-CgDj6Pcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-DWGmacRx.js";import"./index-B5HS6UVy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Y1sNfJdv.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./Symbols-CFkQIAvh.js";import"./symbol-Dfoy6GJs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-evYz5hyu.js";import"./uniqBy-CnYb87CD.js";import"./iteratee-ph4JQmwi.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-fY2HN2fJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7LooK13L.js";import"./useAnimationId-C0s3vBtu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bceipj14.js";import"./tooltipContext-B-_BmjfO.js";import"./dataEntryStyles-BPWJkcwq.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./activeStyles-DLjK0T5T.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./getZIndexFromUnknown-C9hLLlRx.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./omit-DuIyEhDA.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
