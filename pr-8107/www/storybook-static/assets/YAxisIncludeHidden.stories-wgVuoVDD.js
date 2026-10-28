import{r as f,R as e}from"./iframe-CFREJgKh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BpqGKlEV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BlChPiJc.js";import{C as k}from"./ComposedChart-BHYrkphp.js";import{X as K}from"./XAxis-C8rslJeD.js";import{L as v}from"./Legend-RpMQdupJ.js";import{B as a}from"./Bar-BODMRhRi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CqB5IeGz.js";import"./Text-CdYm4waL.js";import"./resolveDefaultProps-D2NJN12P.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./throttle-D0fuDWYv.js";import"./axisSelectors-BWBf8JbO.js";import"./d3-scale-CSfabLms.js";import"./CartesianAxis-DYae0Cq3.js";import"./Layer-C0qOZ959.js";import"./types-DVbjgkU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-DNbnfthz.js";import"./index-CXWxUzol.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-i5dbrXIz.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./Symbols-C448CvWL.js";import"./symbol-nJMR8kbN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D9x3IcJV.js";import"./uniqBy-DeAafqXU.js";import"./iteratee-iRN6k7X2.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D_a5qFT1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcQT3jTk.js";import"./useAnimationId-D_reCqg_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./tooltipContext-BjGhA_2X.js";import"./dataEntryStyles-D-tUw7To.js";import"./ErrorBarContext-Ckc5teto.js";import"./activeStyles-DZOohqxv.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./getZIndexFromUnknown-C1i7VIOW.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./omit-BbKQzHDx.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
