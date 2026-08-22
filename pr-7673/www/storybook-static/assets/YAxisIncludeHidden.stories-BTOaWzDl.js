import{r as f,R as e}from"./iframe-C93Nv-sG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-jlrI5912.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ByU1_vW7.js";import{C as k}from"./ComposedChart-CbNoaIAl.js";import{X as K}from"./XAxis-B8fGRCoq.js";import{L as v}from"./Legend-CVAGn_Wv.js";import{B as s}from"./Bar-Du6aKlV1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C3kKco4I.js";import"./Text-BwKXAAQh.js";import"./resolveDefaultProps-C5w327Ax.js";import"./DOMUtils-BXMnIR4n.js";import"./isWellBehavedNumber-Cfr3MT4y.js";import"./useId-Dcf96ehM.js";import"./useBackwardsCompatibleTheme-LhXwVyLe.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-txp7Phg0.js";import"./index-CX4bLeAT.js";import"./index-WdxouXHE.js";import"./RechartsWrapper-Bd-lflJB.js";import"./index-2-1yVY-g.js";import"./index-BGWLrOy5.js";import"./throttle-DKDTz13_.js";import"./axisSelectors-B_nw5bC_.js";import"./d3-scale-DPCHxtwr.js";import"./renderedTicksSlice-BfcPBBmI.js";import"./CartesianAxis-BKA7b1EI.js";import"./Layer-C-yThQSL.js";import"./types-DSu39Mtk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DjN4sIo1.js";import"./chartDataContext-DgDj7d7B.js";import"./CategoricalChart-Ckb0xTkj.js";import"./Symbols-BfpK6qZN.js";import"./symbol-DmXohmX3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BajoHWy5.js";import"./uniqBy-CgKYnAzP.js";import"./iteratee-DE2e34V0.js";import"./AnimatedItems-B9gSLTjZ.js";import"./useAnimationId-ChO4WR-0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CIdUd0kK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpLwkFCz.js";import"./tooltipContext-BULk5XlK.js";import"./RegisterGraphicalItemId-DBNNmaKj.js";import"./ErrorBarContext-Bdw1FAXk.js";import"./GraphicalItemClipPath-DHw7w2MP.js";import"./SetGraphicalItem-BVLzKmF8.js";import"./getZIndexFromUnknown-DOTz0zBM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DVEtBU0R.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
