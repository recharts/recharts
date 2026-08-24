import{r as f,R as e}from"./iframe-B5plfFOD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-GTebhYCm.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DbNmOY3-.js";import{C as k}from"./ComposedChart-DIa361yX.js";import{X as K}from"./XAxis-BSTDbcVl.js";import{L as v}from"./Legend-DuVru4ga.js";import{B as s}from"./Bar-C3ZGL78-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D1J3ucoA.js";import"./Text-CpDGg_G2.js";import"./resolveDefaultProps-BlDjsfrB.js";import"./DOMUtils-D6jyt4Vs.js";import"./isWellBehavedNumber-Da64mp0K.js";import"./useId-Bp2MS-0a.js";import"./useBackwardsCompatibleTheme-DbWiZjcQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-IfT3mYts.js";import"./index-PX_n5hQs.js";import"./index-CNQoj7bz.js";import"./RechartsWrapper-CGezTKFK.js";import"./index-CL4khl8X.js";import"./index-Wbnw9Fvi.js";import"./throttle-B-azr0kq.js";import"./axisSelectors-BLYlno2y.js";import"./d3-scale-DCKop38A.js";import"./renderedTicksSlice-BhrWC83q.js";import"./CartesianAxis-DCr9g_ht.js";import"./Layer-ByEseNp7.js";import"./types-BGPhMwrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DwKWqDkX.js";import"./chartDataContext-kMO755bg.js";import"./CategoricalChart-C1LQoQak.js";import"./Symbols-t-UFktWC.js";import"./symbol-DbuhexXP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_k_9iR3.js";import"./uniqBy-C0NyoxrU.js";import"./iteratee-COozC7kh.js";import"./AnimatedItems-B1lzxzMI.js";import"./useAnimationId-B-SkX0Hu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpWbdB20.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUhOL-u8.js";import"./tooltipContext-DnP-rmZG.js";import"./RegisterGraphicalItemId-CWna7QKU.js";import"./ErrorBarContext-CLev7xWU.js";import"./GraphicalItemClipPath-Qthp7O67.js";import"./SetGraphicalItem-CTmoE1ld.js";import"./getZIndexFromUnknown-aCBQPkRG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-8MsBpaW-.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
