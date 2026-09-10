import{r as f,R as e}from"./iframe-DozjnQY4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DKlfhRHH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BgkLcB6R.js";import{C as k}from"./ComposedChart-8ht4NcA2.js";import{X as K}from"./XAxis-CMLACdRu.js";import{L as v}from"./Legend-D7-pVV-n.js";import{B as a}from"./Bar-DPmmAEKN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-zwFJYypc.js";import"./Text-CYg0PxB3.js";import"./resolveDefaultProps-CVm2MzcI.js";import"./DOMUtils-12JScs07.js";import"./isWellBehavedNumber-pk6AjLe8.js";import"./useId-CoUbJimw.js";import"./useBackwardsCompatibleTheme-ZiWSCSRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BfyW3t5T.js";import"./index-C_fPCGUJ.js";import"./index-DvODWZUZ.js";import"./RechartsWrapper-CsvSe4fO.js";import"./axisSelectors-DgS41G-2.js";import"./throttle-ja6YfGso.js";import"./d3-scale-DiLIb41e.js";import"./index-B-gAWTo9.js";import"./index-55Hv9cWy.js";import"./renderedTicksSlice-eosOC0PP.js";import"./index-CQZmeOSf.js";import"./CartesianAxis-VBiFHU3A.js";import"./Layer-DqTc2vWN.js";import"./types-BbIJv7s_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C23oYJhj.js";import"./chartDataContext-BMMD7dGr.js";import"./CategoricalChart-cz-sFoBH.js";import"./Symbols-B5tB_r3v.js";import"./symbol-DkoFJi3o.js";import"./path-DyVhHtw_.js";import"./useElementOffset-q9rliSht.js";import"./uniqBy-DDhkZRqQ.js";import"./iteratee-BypAlLeG.js";import"./AnimatedItems-DN24URVz.js";import"./useAnimationId-Dn8df37H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lcraYYmO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQCdFpwN.js";import"./tooltipContext-_rqHbuWr.js";import"./RegisterGraphicalItemId-DbLQfc-G.js";import"./ErrorBarContext-Ure7iGoK.js";import"./GraphicalItemClipPath-CB6u2457.js";import"./SetGraphicalItem-Ba3q6rOQ.js";import"./getZIndexFromUnknown-DK4Jtld4.js";import"./useGraphicalItemIdentity-BMnjEDTs.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
