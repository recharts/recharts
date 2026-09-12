import{r as f,R as e}from"./iframe-D1t-DMDX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DA6hAinn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D3y7WbGu.js";import{C as k}from"./ComposedChart-BzsVf6dd.js";import{X as K}from"./XAxis-D2W5e4ho.js";import{L as v}from"./Legend-Cied3KuF.js";import{B as a}from"./Bar-wTsRfFHS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-l8kFpP-D.js";import"./Text-DAi50bHG.js";import"./resolveDefaultProps-CslUsmpl.js";import"./DOMUtils-B6_ZXa7e.js";import"./isWellBehavedNumber-CUXK_wKy.js";import"./useId-DDzIZyqo.js";import"./useBackwardsCompatibleTheme-BSefrMjh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAI4vBfR.js";import"./index-DN4Hf2vp.js";import"./index-DXAWsi2y.js";import"./RechartsWrapper-BZjYCuuq.js";import"./axisSelectors-j0uMY4D2.js";import"./throttle-6Gvu17mH.js";import"./d3-scale-BUFFZJWe.js";import"./index-BVgOAcLw.js";import"./index-DBKl6Uwy.js";import"./renderedTicksSlice-BDhtYcVT.js";import"./index-DVZyTUvl.js";import"./CartesianAxis-zM23PuK9.js";import"./Layer-C3v8UF0F.js";import"./types-CakNgFJg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CkbIBTi3.js";import"./chartDataContext-Cv-ECou4.js";import"./CategoricalChart-CSw7HOxG.js";import"./Symbols-B523Ziwf.js";import"./symbol-DHiI_cX5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BtiRWiP_.js";import"./uniqBy-DQAv3Mv_.js";import"./iteratee-B8C5seUw.js";import"./AnimatedItems-C6KHS5pS.js";import"./useAnimationId-CHualwmZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTv3GIXO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPvI5kC4.js";import"./tooltipContext-DgDH-WhQ.js";import"./RegisterGraphicalItemId-6E8BE8Ka.js";import"./ErrorBarContext-aZAJKe3w.js";import"./GraphicalItemClipPath-CTjco7rb.js";import"./SetGraphicalItem-B3rvHIl-.js";import"./getZIndexFromUnknown-CYnH7mhR.js";import"./useGraphicalItemIdentity-Y17Z1Bub.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
