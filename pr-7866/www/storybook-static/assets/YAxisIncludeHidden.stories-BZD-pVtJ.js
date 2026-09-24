import{r as f,R as e}from"./iframe-DNbvw14a.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BGn7xsJM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BHD22v5p.js";import{C as k}from"./ComposedChart-x_AAjUrD.js";import{X as K}from"./XAxis-DKCor6Yv.js";import{L as v}from"./Legend-DuIJmZwb.js";import{B as a}from"./Bar-D6HrfqK6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B7KQBAEU.js";import"./Text-BgAYGcmu.js";import"./resolveDefaultProps-Dv9OS7x0.js";import"./DOMUtils-gpe3mW7P.js";import"./isWellBehavedNumber-B4X7Ovgo.js";import"./useId-BIiTcBjO.js";import"./useBackwardsCompatibleTheme-CUWrJJ-Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-aQMxqOVX.js";import"./index-ChGtG0Z1.js";import"./index-mPJfSQ4a.js";import"./RechartsWrapper-vWLTzty1.js";import"./axisSelectors-B6LUaqOe.js";import"./throttle-TrQ-NrIz.js";import"./d3-scale-DdoY8Kw0.js";import"./index-CiQ39v7Z.js";import"./index-CqQ_TYAw.js";import"./renderedTicksSlice-DnMPpzr7.js";import"./index-BcAi-B8x.js";import"./CartesianAxis-CQJhlqIf.js";import"./Layer-Ca0bY5rb.js";import"./types-BqFGOrry.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D_zqHIPC.js";import"./chartDataContext-mj0-05pU.js";import"./CategoricalChart-DTINRHZI.js";import"./Symbols-CsETl9L_.js";import"./symbol-AShXVAA2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dtm3zjK0.js";import"./uniqBy-D5Wbig9S.js";import"./iteratee-DgFx9-tJ.js";import"./AnimatedItems-wgqiGiqn.js";import"./useAnimationId-DYgsmh0H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BtsBI90d.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bvp6wNuu.js";import"./tooltipContext-DwX5IhzS.js";import"./RegisterGraphicalItemId-C8sRnX7V.js";import"./ErrorBarContext-BdE1Cthk.js";import"./GraphicalItemClipPath-CB7JJ2kx.js";import"./SetGraphicalItem-nJGBA7YQ.js";import"./getZIndexFromUnknown-2k3EFYWF.js";import"./useGraphicalItemIdentity-CCeSwNH2.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
