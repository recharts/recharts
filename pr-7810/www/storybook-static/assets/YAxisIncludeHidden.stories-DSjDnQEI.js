import{r as f,R as e}from"./iframe-bFSgLdPD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-bnO7DvP4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D5upya8o.js";import{C as k}from"./ComposedChart-rnVwwIMy.js";import{X as K}from"./XAxis-Bw0rvwCt.js";import{L as v}from"./Legend-oLYZNeeg.js";import{B as a}from"./Bar-DtdoudMG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CpotZ0Ob.js";import"./Text-BFarDq7U.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./DOMUtils-DvIkXWfS.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./useId-CXlgEyVd.js";import"./useBackwardsCompatibleTheme-DabWIItU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B1KbNkPu.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./RechartsWrapper-BY-4gTQl.js";import"./axisSelectors-jpWGPgQR.js";import"./throttle-u-v2gKhP.js";import"./d3-scale-DJKaPyhK.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./index-DzQCF7Uo.js";import"./CartesianAxis-CrKpg4w8.js";import"./Layer-B9YPmvvS.js";import"./types-D_jE8zAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";import"./Symbols-BtHF7FpM.js";import"./symbol-q9QkaXHr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DgdUocH5.js";import"./uniqBy-C-W8pKck.js";import"./iteratee-BdAcVhmI.js";import"./AnimatedItems-C1Ji84_q.js";import"./useAnimationId-C-HuNRtZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtC0waIA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Tc7vH23C.js";import"./tooltipContext-CAqsdHhB.js";import"./RegisterGraphicalItemId-Ch2aaSbQ.js";import"./ErrorBarContext-BTgf3Fn1.js";import"./GraphicalItemClipPath-D0Gpm_sI.js";import"./SetGraphicalItem-BK4LEDF0.js";import"./getZIndexFromUnknown-CCd94QFN.js";import"./useGraphicalItemIdentity-BF3Qfnje.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
