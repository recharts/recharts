import{r as f,R as e}from"./iframe-qeJRbQC_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BZzCIX-v.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-7202Aouk.js";import{C as k}from"./ComposedChart-CxuV2NoV.js";import{X as K}from"./XAxis-u_1Q5fGR.js";import{L as v}from"./Legend-JsBYbuxr.js";import{B as a}from"./Bar-D06e7dPh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-IJrwe4z6.js";import"./Text-CGxsVVX7.js";import"./resolveDefaultProps-DeRAgm8x.js";import"./DOMUtils-DzJTCa9O.js";import"./isWellBehavedNumber-CEbP45d6.js";import"./useId-BP7tb9fo.js";import"./useBackwardsCompatibleTheme-DmTHavmp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D8LlaNHN.js";import"./index-BD72gC8i.js";import"./index-DyUeFg7T.js";import"./RechartsWrapper-CI86w_cv.js";import"./axisSelectors-D3Tk6yw2.js";import"./throttle-Bm7TlndJ.js";import"./d3-scale-DPqZAioL.js";import"./index-DfrLYgMZ.js";import"./index-COOVNst_.js";import"./renderedTicksSlice-BMyK9gC5.js";import"./index-BOsshKUN.js";import"./CartesianAxis-BByvFPIV.js";import"./Layer-DnfYbRaC.js";import"./types-CQ8TW7B4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D9mK1Hr2.js";import"./chartDataContext-BPJsRsvJ.js";import"./CategoricalChart-DXUZLIpB.js";import"./Symbols-DQliDHRT.js";import"./symbol-BZaHRSIC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BPB7gh4S.js";import"./uniqBy-BXrH7P8U.js";import"./iteratee-Dnr_1A58.js";import"./AnimatedItems-Ba5qFTnf.js";import"./useAnimationId-Dc0yoLfA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVQykKnP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DKEMCySD.js";import"./tooltipContext-CrKRLTOT.js";import"./RegisterGraphicalItemId-C6fN5b4g.js";import"./ErrorBarContext-Brj2ZIP_.js";import"./GraphicalItemClipPath-wv7NC4zW.js";import"./SetGraphicalItem-BpzaqcDs.js";import"./getZIndexFromUnknown-DGY3cukw.js";import"./useGraphicalItemIdentity-DtcgFGn-.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
