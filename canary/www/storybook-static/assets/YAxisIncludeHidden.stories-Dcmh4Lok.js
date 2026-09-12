import{r as f,R as e}from"./iframe-BR9um8hy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BaWzKsyn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DInTlpQm.js";import{C as k}from"./ComposedChart-BVZ7f1kE.js";import{X as K}from"./XAxis-Df2VZum-.js";import{L as v}from"./Legend-DggfOM0T.js";import{B as a}from"./Bar-CIpcH6zZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DksyNS0g.js";import"./Text-CRGxz7fL.js";import"./resolveDefaultProps-DqQmI4tj.js";import"./DOMUtils-Duc3pHlK.js";import"./isWellBehavedNumber-DRhRXNpZ.js";import"./useId-BgrQ9U0l.js";import"./useBackwardsCompatibleTheme-DOuVjsc2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGQSpetD.js";import"./index-C-g-WGda.js";import"./index-DxJwgSab.js";import"./RechartsWrapper-Dp-C2Hzh.js";import"./axisSelectors-AyLSKa9B.js";import"./throttle-BcqT3vfz.js";import"./d3-scale-CDw_eAgY.js";import"./index-BkxIjOFS.js";import"./index-BFcGxk9F.js";import"./renderedTicksSlice-CoNN11f9.js";import"./index-DXgo6F3y.js";import"./CartesianAxis-Ctt1NdjE.js";import"./Layer-BBDuFZTy.js";import"./types-C8x07v5_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DZcLq4iA.js";import"./chartDataContext-Bt8Fe_rW.js";import"./CategoricalChart-DmGnRbfN.js";import"./Symbols-BQkqE9tF.js";import"./symbol-BZX7kSso.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Buf92wBZ.js";import"./uniqBy-CLhcCcda.js";import"./iteratee-RhNK36r-.js";import"./AnimatedItems-DpNUe9OS.js";import"./useAnimationId-CK-e-_3G.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D94O9QXF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8gsJAZs.js";import"./tooltipContext-Cshj8m1b.js";import"./RegisterGraphicalItemId-BT1l9jKw.js";import"./ErrorBarContext-B2oMN3ea.js";import"./GraphicalItemClipPath-D0pxdHNA.js";import"./SetGraphicalItem-CjDcCpNq.js";import"./getZIndexFromUnknown-BC2sAx_4.js";import"./useGraphicalItemIdentity-BYoj9he0.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
